import csv from 'csv-parser'
import fs from 'fs'
const results = [];

const csvStream = () => { 
  console.log('function csvStream called!')
  
  fs.createReadStream('test.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  // .on('data', (data) => results.push(data))
  // .on('end', (data) => console.log(results))

  console.log(results)
  return results

  

}

// async () => {
//   a = await csvStream()
//   console.log(a)
// }

export default csvStream
const fs =  require('fs')
const http =  require('http')
const path = require('path')
const os =  require('os')
const url = require('url')
const crypto =  require('crypto')
const {sayBye , sayHello} =  require('./greetings')
const math =  require('./math')

const lodash =  require('lodash')
const colors = require('colors')

// fs.readFile('example.txt', 'utf-8' ,(err,data)=>{
//      if(err){
//         console.log(err)
//         return
//      }
//      console.log(data)

// })

// const content =  "hello from nodejs"

// fs.writeFile('output.txt', content, (err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("File Written..")
// })

// HTTP 

// const server =  http.createServer((req,res)=>{
//         res.statusCode = 200
//         res.setHeader('Content-Type', 'text/plain')
//         res.end('hello , World!')
// })

// server.listen(3000, ()=>{
//     console.log('Server running at http://localhost:3000')
// })

// PATH

// const directory =  '/user/local'
// const filename =  'example.txt'

// const fullPath =  path.join(directory,filename)

// console.log(fullPath)

// OS : operating system

// console.log('Platform' , os.platform())
// console.log('CPU Arch' , os.arch())
// console.log('Total Mem' , os.totalmem())
// console.log('Free Mem' , os.freemem())
// console.log('Uptime' , os.uptime())

// const myUrl =  new URL('https://localhost:8080/path/name?query=hello#hash')



// console.log('Host', myUrl.host)
// console.log('Pathname', myUrl.pathname)
// console.log('Search params', myUrl.searchParams.get('query'))


// Crypto

// const hash =  crypto.createHash('sha256')
// hash.update('Hello')


// console.log(hash.digest('hex'))


// const message  =  sayHello("Developer")
// const message1 =  sayBye()

// console.log(message)
// console.log(message1)

// console.log(math.add(5,5))
// console.log(math.subtract(5,5))

// const numbers =  [1,2,3,4,5,6]

// const reversed = lodash.reverse(numbers)

// console.log(reversed)

// console.log("Hello".bgCyan)

 
// console.log('hello'.green); // outputs green text
// console.log('i like cake and pies'.underline.red) // outputs red underlined text
// console.log('inverse the color'.inverse); // inverses the color
// console.log('OMG Rainbows!'.rainbow); // rainbow
// console.log('Run the trap'.trap); // Drops the bass
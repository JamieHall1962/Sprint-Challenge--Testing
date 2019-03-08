const server = require('./server.js')

port = process.env.PORT || 4400;

server.listen({port}, ()=>{
    console.log(`server running on port ${port}`)
})
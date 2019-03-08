// https://github.com/JamieHall1962/Sprint-Challenge--Testing/pull/1

const server = require('./server.js')

port = process.env.PORT || 4400;

server.listen({port}, ()=>{
    console.log(`server running on port ${port}`)
})
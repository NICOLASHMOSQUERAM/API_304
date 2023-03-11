import express, { Request, Response } from 'express'
const server = express()

server.get('/api', (req: Request, res: Response) => {
    res.send({message:'hello word!!!'})
})

server.listen(80, () => { 
    console.log("expressfront")
})
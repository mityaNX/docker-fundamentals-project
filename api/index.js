import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.post(`/post`, async (req, res) => {
  const { title, content } = req.body
  const result = await prisma.post.create({
    data: {
      title,
      content,
    },
  })
  res.json(result)
})

app.get(`/post/:id`, async (req, res) => {
  const { id } = req.params

  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
  })
  res.json(post)
})

app.get(`/post`, async (req, res) => {
  const posts = await prisma.post.findMany({})
  res.json(posts)
})

const server = app.listen(4000, () =>
  console.log(`🚀 Server ready at: http://localhost:4000`),
)
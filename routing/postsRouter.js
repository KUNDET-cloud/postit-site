import Router from "express";

const postsRouter = new Router()

postsRouter.get('/')
postsRouter.get('/posts')
postsRouter.get('/posts/:id')
postsRouter.get('/create-post')
postsRouter.post('/create-post')
postsRouter.put('/posts/:id')
postsRouter.delete('/posts/:id')

export default postsRouter
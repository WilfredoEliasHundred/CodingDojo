import Router from 'koa-router'

import Controller from './controller'

const controller = new Controller()
const router = new Router({ prefix: '/posts' })

router.get('posts/get', '/', controller.getAllPosts())

export default router
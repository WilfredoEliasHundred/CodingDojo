import Service from '../service'

const service = new Service()

export default class {
  async getAllPosts(ctx) {
    const response = await service.getAllPosts()
    ctx.body = response
  }
}

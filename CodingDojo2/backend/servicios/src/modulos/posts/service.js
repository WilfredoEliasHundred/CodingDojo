import axios from 'axios'

export default class {
  async getAllPosts(){
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/`)
    let posts = []
    posts = data
    return posts
  }
}

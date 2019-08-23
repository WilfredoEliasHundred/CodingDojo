import axios from 'axios'
import Post from './repository'

export default class {
  async getAllPosts(){
    //const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/`)
    const { data } = await Post.find();
    if(data == null)
      console.log('not found!!');
    let posts = []
    posts = data
    return posts
  }
}

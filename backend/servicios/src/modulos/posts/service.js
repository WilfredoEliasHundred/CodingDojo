import axios from 'axios'

export default class {
    async getAllPosts(){
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/`)

        const { userId, id, title, body } = data
        const post = {}

        post.userId = userId
        post.id = id
        post.title = title
        post.body = body

        return post
    }
}
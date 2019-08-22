import Koa from 'koa'
import routes from './routes'

const server = new Koa();

routes.map(r => {
  server.use(r.routes())
  server.use(r.allowedMethods())
})

server.listen(3000, ()=>{
  console.log('Server running...!!!');
});

export default server

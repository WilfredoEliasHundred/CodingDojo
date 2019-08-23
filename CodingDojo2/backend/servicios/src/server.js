import Koa from 'koa'
import routes from './routes'
//import database from './basedatos/database'

const server = new Koa();
require('./database');

routes.map(r => {
  server.use(r.routes())
  server.use(r.allowedMethods())
})

server.listen(3000, ()=>{
  console.log('Server running...!!!');
});

export default server

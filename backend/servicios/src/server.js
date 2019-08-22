const Koa = require('koa');
const server = new Koa();

server.use(async ctx => {
    ctx.body = 'Welcome to service!!';
});

server.listen(3000, ()=>{
    console.log('Server running...!!!');
});

const koa = require('koa');

const Router = require('koa-router');
const fs = require('fs-extra');

const app = new koa();

const http = require('http').createServer(app.callback());
const io = require('socket.io')(http);

const port = process.env.PORT || 4000;


let router = new Router();

app.use(router.routes()).use(router.allowedMethods());

router.get('/', async (ctx) => {
    ctx.type = 'html';
    ctx.body = await fs.readFile(`./index.html`);
})

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});

http.listen(port);
console.log(`http://localhost:${port}`);
const koa = require('koa');

const Router = require('koa-router');
const fs = require('fs-extra');

const app = new koa();

const http = require('http').createServer(app.callback());
const io = require('socket.io')(http);

const port = process.env.PORT || 80;


let router = new Router();

app.use(router.routes()).use(router.allowedMethods());

router.get('/', async (ctx) => {
    ctx.type = 'html';
    ctx.body = await fs.readFile(`./index.html`);
})

io.on('connection', function (socket) {
    console.log('a user connected:',socket.id);
    // 上线
    socket.on('someone online', (msg, id) => {
        io.emit('someone online', msg, id);
    });
    // 离线
    socket.on('disconnect', function(){
        console.log('user disconnected:', socket.id);
        io.emit('someone offline', socket.id);
    });

    // 正在输入
    socket.on('user focus', msg => {
        // io.emit('user focus', msg);
        socket.broadcast.emit('user focus', msg); // 广播给所有除了自己的客户端
    });
    // 输入离开
    socket.on('user blur', () => {
        // io.emit('user blur');
        socket.broadcast.emit('user blur');
    });

    // 聊天信息
    socket.on('chat message', function (msg, room) {
        console.log('msg:', msg, room)
        io.emit('chat message', msg, room);
    });


    // 指向特殊
    // sockets.to(socketId).emit()
    
});

http.listen(port);
console.log(`http://localhost:${port}`);
/*                                            DEPENDENCIES                                                            */

const server = new (require('koa')) ();
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const router = require('./routes/router');

/*                                               SERVER                                                               */

server
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())
    .use(logger('tiny'))
    .use(function (req, res) {
        res.status(404).send("Not Found")
    })
    .listen(3001, () => {
        console.log("The server is running on port 3001")
    });

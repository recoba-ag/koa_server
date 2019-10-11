const Router = require('koa-router');
const router = new Router();

const Books = require('../controllers/books');

router.post('/add_book', async (ctx) => {
    try {
        ctx.body = await Books.addBook({...ctx.request.body});
    }
    catch (error) {
        console.error('Error', error);
        ctx.status = 500;
        ctx.body = error.sqlMessage
    }
});

router.post('/books', async (ctx) => {
    try {
        ctx.body = await Books.findBooks({...ctx.request.body});
    }
    catch (error) {
        console.error('Error', error);
        ctx.status = 500;
        ctx.body = error.sqlMessage
    }
});

router.post('/update_book', async (ctx) => {
    try {
        ctx.body = await Books.updateBook({...ctx.request.body})
    }
    catch (error) {
        console.error('Error', error);
        ctx.status = 500;
        ctx.body = error.sqlMessage
    }
});

router.get('/', async (ctx) => {
    ctx.body = 'Hello Koa'
});

module.exports = router;
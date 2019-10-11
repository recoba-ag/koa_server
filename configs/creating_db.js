const connection = require('./db_config');
const Database = require('../controllers/database');

connection.connect(async () => {
    try {
        await Database.createDatabase();
    } catch (err) {
        throw err
    }
});
const connection = require('../configs/db_config');

exports.createDatabase = () => new Promise(async (resolve, reject) => {
    try {
        await connection.query(`CREATE DATABASE IF NOT EXISTS mydb`, (err) => {
            if (err) {
                reject(err)
            } else {
                connection.query(`USE mydb`, (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        console.log(`Database mydb created successfully`);
                        let sqlReqCreateTable = `CREATE TABLE IF NOT EXISTS books
                                        (
                                        id int primary key auto_increment,
                                        title VARCHAR(50) NOT NULL,
                                        date YEAR NOT NULL,
                                        autor VARCHAR(50) NOT NULL,
                                        description VARCHAR(255),
                                        image VARCHAR(255)
                                        )`;
                        connection.query(sqlReqCreateTable, (err) => {
                            if (err) {
                                reject(err)
                            } else {
                                console.log(`Table books created successfully`);
                                let sqlReqAddBook = "INSERT INTO books (title, date, autor, description, image) VALUES ?";
                                let values = [
                                    ['Node Hero', '2017', 'Andrey Melikhov', '-', '-'],
                                    ['JavaScript. The Definitive Guide', '2008', 'David Flanagan', '-', '-'],
                                    ['JavaScript: The Good Parts', '2008', 'Douglas Crockford', '-', '-'],
                                    ['Perfect Code', '2004', 'Steve McConnell', '-', '-'],
                                    ['Clean Code', '2008', 'Robert Martin', '-', '-']
                                ];
                                connection.query(sqlReqAddBook, [values], (err) => {
                                    if (err) {
                                        reject(err)
                                    } else {
                                        console.log('new books added to table books')
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    } catch (error) {
        reject(error)
    }
});
const connection = require('../configs/db_config');

exports.addBook = ({title, date, autor, description, image}) => new Promise(async (resolve, reject) => {
    try {
        let sqlReqAddBook = `INSERT INTO books (title, date, autor, description, image) VALUES ?`;
        let values = [
            [
                title,
                date,
                autor,
                description,
                image
            ]
        ];
        await connection.query(sqlReqAddBook, [values], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve({
                    added: true
                });
            }
        });
    }
    catch (error) {
        reject(error)
    }
});

exports.findBooks = ({filterByField, filterValue, sortByFild, sortValue, limit, offset}) => new Promise (async (resolve, reject) =>{
    try {
        let sql = `SELECT * FROM books`;
        if (filterByField != '' && filterByField != undefined &&
            filterValue != '' && filterValue != undefined) sql += ` WHERE ${filterByField} = \'${filterValue}'`;
        if (sortByFild != '' && sortByFild != undefined) sql += ` ORDER BY ${sortByFild}`;
        if (sortValue != '' && sortValue != undefined) sql += ` DESC`;
        if (limit != '' && limit != undefined) sql += ` LIMIT ${limit}`;
        if (offset != '' && offset != undefined) sql += ` OFFSET ${offset}`;
        await connection.query(sql, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve({
                    books: result
                });
            }
        });
    }
    catch (error) {
        reject(error);
    }
});

exports.updateBook = ({field, value, newValue}) => new Promise(async (resolve, reject) => {
   try {
       let updateRequest = `UPDATE books SET ${field} = \'${newValue}' WHERE ${field} = \'${value}'`;
       await connection.query(updateRequest, (err, result) => {
           if (err) {
               reject(err)
           } else {
               resolve({
                   updated: true
               })
           }
       })
   }
   catch (error) {
       reject(error)
   }
});
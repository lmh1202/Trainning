import mysql from 'mysql'

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todo_app',
    multipleStatements: true,
})

export const connection = db.connect((err) => {
    if (err) {
        console.log('failed');
    } else {
        console.log('success')
    }
})

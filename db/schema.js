const mysql = require('mysql2');
require('dotenv').config();

// MySQL connection configuration
const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

// Connect to MySQL
connection.connect((err) =>
    err
        ? console.error('Error connecting to MySQL:', err)
        : console.log('Connected to MySQL')
);

// Create a new database
connection.query(
    `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`,
    (dbError) =>
        dbError
            ? console.error('Error creating database:', dbError)
            : console.log(`Database ${process.env.DB_NAME} created successfully`)
);

// Close the connection when done
connection.end((endErr) =>
    endErr
        ? console.error('Error closing MySQL connection:', endErr)
        : console.log('Connection closed')
);
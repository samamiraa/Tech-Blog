DROP DATABASE IF EXISTS techBlog_db;
CREATE DATABASE techBlog_db;

USE techBlog_db;

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
)

CREATE TABLE post (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description LONGTEXT NOT NULL,
    date_created DATE NOT NULL,
    userId id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES user(id)
)
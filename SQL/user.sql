create DATABASE blog;

use blog;

CREATE TABLE `user` (
	Id int AUTO_INCREMENT PRIMARY KEY,
    Login varchar(50),
    Email varchar(50),
    `Password` varchar(50),
    `urlAvatar` varchar(255),
    `Role` varchar(50) DEFAULT 'follower'
);

CREATE TABLE record (
	Id int AUTO_INCREMENT PRIMARY KEY,
    Id_autor int,
    `Date` varchar(25),
    Status varchar(25),
    Text longtext,
    `Like` int,
	`DisLike` int
)

CREATE TABLE `user` (
    Id int AUTO_INCREMENT PRIMARY KEY,
    Login varchar(50),
    Email varchar(50),
    `Password` varchar(50),
    `urlAvatar` varchar(255) DEFAULT 'noFoto',
    `Role` varchar(50),
    Status boolean DEFAULT false
);
use blog;
CREATE TABLE `comment` (
	Id int AUTO_INCREMENT PRIMARY KEY,
    Idautor int,
    IdRecord int,
    `Date` varchar(25),
    Status boolean,
    Text longtext,
    `Like` int DEFAULT 0,
	`DisLike` int DEFAULT 0
)
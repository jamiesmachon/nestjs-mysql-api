-- create databases
CREATE DATABASE IF NOT EXISTS `nestjs_db`;
-- select the database to apply the next script to
USE `nestjs_db`;
-- create root user and grant rights
CREATE USER IF NOT EXISTS 'nestjs_user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL ON `nestjs_db` TO 'nestjs_user'@'localhost';
CREATE USER IF NOT EXISTS 'nestjs_user'@'%' IDENTIFIED BY 'password';
GRANT ALL ON `nestjs_db` TO 'nestjs_user'@'%';

FLUSH PRIVILEGES;
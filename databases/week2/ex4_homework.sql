CREATE DATABASE school_db
    DEFAULT CHARACTER SET = 'utf8mb4';

    USE school_db;

    CREATE TABLE `class` (
        `id` int unsigned not null AUTO_INCREMENT,
        `name` varchar(255) unique not null,
        `begins` DATETIME not null,
        `ends` DATETIME not null,
        primary key (`id`)
    );

    CREATE TABLE `student` (
        `id` int unsigned not null AUTO_INCREMENT,
        `name` varchar(255) not null,
        `email` varchar(255) unique not null,
        `phone` varchar(255) unique null,
        `class_id` int unsigned not null,
        primary key (`id`),
        constraint `fk_class_id` foreign key (`class_id`) references `class`(`id`) on delete cascade
    );

    CREATE INDEX st_name_index ON `student` (`name`);

    ALTER TABLE `class`
    ADD COLUMN `status` enum('not started', 'ongoing', 'finished') default 'not started' not null;
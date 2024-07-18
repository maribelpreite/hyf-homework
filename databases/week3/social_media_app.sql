CREATE DATABASE social_media_app
    DEFAULT CHARACTER SET = 'utf8mb4';

    USE social_media_app;

    CREATE TABLE `user` (
        `user_id` int unsigned not null auto_increment primary key,
        `user_name` varchar(255) not null,
        `user_email` varchar(255) not null unique key,
        `user_password` varchar(255) not null, 
        `user_registration` datetime not null
    );

    CREATE TABLE `post` (
        `post_id` int unsigned not null auto_increment primary key,
        `post_title` varchar(255) null, 
        `post_content` text not null, 
        `post_created` datetime not null,
        `post_updated` datetime null,
        `user_id` int unsigned not null, 
        constraint `post_user_id` foreign key (`user_id`) references `user` (`user_id`) on delete cascade
    );

    CREATE TABLE `comment` (
        `comment_id` int unsigned not null auto_increment primary key,
        `comment_content` text not null, 
        `comment_created` datetime not null,
        `comment_updated` datetime null,
        `user_id` int unsigned not null,
        `post_id` int unsigned not null,
        `parent_comment_id` int unsigned null,
        constraint `comment_user_id` foreign key (`user_id`) references `user` (`user_id`) on delete cascade,
        constraint `comment_post_id` foreign key (`post_id`) references `post` (`post_id`) on delete cascade,
        constraint `parent_comment_id` foreign key (`parent_comment_id`) references `comment` (`comment_id`) on delete cascade
    );

    CREATE TABLE `reaction` (
        `reaction_id` int unsigned not null auto_increment primary key,
        `reaction_name` varchar(255) not null unique
    );

    INSERT INTO `reaction` (reaction_name) 
    VALUES
        ('like'),
        ('highfive'),
        ('cry'),
        ('laugh');

    CREATE TABLE `friendship` (
        `user_id1` int unsigned not null,
        `user_id2` int unsigned not null,
        primary key (`user_id1`, `user_id2`),
        constraint `fk_user_id1` foreign key (`user_id1`) references `user`(`user_id`) on delete cascade,
        constraint `fk_user_id2` foreign key (`user_id2`) references `user`(`user_id`) on delete cascade,
        constraint check_user_id CHECK (user_id1 < user_id2)
    );

    CREATE TABLE `user_post_reaction` (
        `user_id` int unsigned not null,
        `post_id`int unsigned not null, 
        `reaction_id` int unsigned not null, 
        primary key (`user_id`, `post_id`, `reaction_id`),
        constraint `pr_user_id` foreign key (`user_id`) references `user`(`user_id`) on delete cascade,
        constraint `pr_post_id` foreign key (`post_id`) references `post`(`post_id`) on delete cascade,
        constraint `pr_reaction_id` foreign key (`reaction_id`) references `reaction`(`reaction_id`) on delete cascade
    );

    CREATE TABLE user_comment_reaction (
        `user_id` int unsigned not null,
        `comment_id`int unsigned not null, 
        `reaction_id` int unsigned not null, 
        primary key (`user_id`, `comment_id`, `reaction_id`),
        constraint `cr_user_id` foreign key (`user_id`) references `user`(`user_id`) on delete cascade,
        constraint `cr_comment_id` foreign key (`comment_id`) references `comment`(`comment_id`) on delete cascade,
        constraint `cr_reaction_id` foreign key (`reaction_id`) references `reaction`(`reaction_id`) on delete cascade
    );
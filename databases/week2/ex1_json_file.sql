USE newspaper_data;

CREATE TABLE `articles` (
    `id` int unsigned not null AUTO_INCREMENT,
    `title` varchar(255) not null,
    `content` text not null,
    primary key (`id`),
    unique key `unique_content` (`content`(255))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `authors` (
    `id` int unsigned not null AUTO_INCREMENT,
    `name` varchar(255) not null,
    primary key (`id`),
    unique key `unique_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `tags` (
    `id` int unsigned not null AUTO_INCREMENT,
    `name` varchar(255) not null,
    primary key (`id`),
    unique key `unique_tag_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `article_author` (
    `article_id` int unsigned not null,
    `author_id` int unsigned not null,
    primary key (`article_id`, `author_id`),
    constraint `fk_article_id_authors` foreign key (`article_id`) references `articles`(`id`) on delete cascade,
    constraint `fk_author_id` foreign key (`author_id`) references `authors`(`id`) on delete cascade
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `article_tag` (
    `article_id` int unsigned not null,
    `tag_id` int unsigned not null,
    primary key (`article_id`, `tag_id`),
    constraint `fk_article_id_tags` foreign key (`article_id`) references `articles`(`id`) on delete cascade,
    constraint `fk_tag_id` foreign key (`tag_id`) references `tags`(`id`) on delete cascade
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO authors(name) VALUES ("James Smith");
INSERT INTO authors(name) VALUES ("Jane Jones");
INSERT INTO authors(name) VALUES ("Aliya Awad");
INSERT INTO authors(name) VALUES ("Igor Vladimir");
INSERT INTO authors(name) VALUES ("Kim Jensen");

INSERT INTO tags(name) VALUES ("science");
INSERT INTO tags(name) VALUES ("breaking");
INSERT INTO tags(name) VALUES ("weather");
INSERT INTO tags(name) VALUES ("winter");
INSERT INTO tags(name) VALUES ("clickbait");


INSERT INTO articles (title, content) VALUES ("BREAKING NEWS: Water is wet!", "Scientists have discovered that water is wet, it's amazing what.... ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.");
INSERT INTO article_author (article_id, author_id) VALUES (1, 1);
INSERT INTO article_author (article_id, author_id) VALUES (1, 2);
INSERT INTO article_tag (article_id, tag_id) VALUES (1, 1);
INSERT INTO article_tag (article_id, tag_id) VALUES (1, 2);

INSERT INTO articles (title, content) VALUES ("Heavy Snowfall Expected this Weekend", "Lots of snow is expected... Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
INSERT INTO article_author (article_id, author_id) VALUES (2, 3);
INSERT INTO article_author (article_id, author_id) VALUES (2, 4);
INSERT INTO article_tag (article_id, tag_id) VALUES (2, 3);
INSERT INTO article_tag (article_id, tag_id) VALUES (2, 4);

INSERT INTO articles (title, content) VALUES ("BREAKING NEWS: These 10 Clickbait Titles Are Bad for Your Health, Number 7 Will SHOCK You!", "Haha, you clicked! Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ");
INSERT INTO article_author (article_id, author_id) VALUES (3, 2);
INSERT INTO article_author (article_id, author_id) VALUES (3, 5);
INSERT INTO article_tag (article_id, tag_id) VALUES (3, 5);
INSERT INTO article_tag (article_id, tag_id) VALUES (3, 2);

select * 
from articles;
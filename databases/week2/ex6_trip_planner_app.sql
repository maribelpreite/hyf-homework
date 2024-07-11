CREATE DATABASE trip_planner
    DEFAULT CHARACTER SET = 'utf8mb4';

    USE trip_planner;

    CREATE TABLE `users` (
        `id` int unsigned not null AUTO_INCREMENT,
        `name` varchar(255) not null, 
        `email` varchar(255) unique not null,
        primary key (`id`)
    );

    CREATE TABLE `airlines` (
        `id` int unsigned not null AUTO_INCREMENT,
        `name` varchar(255) not null,
        primary key (`id`)
    );

    CREATE TABLE `cities` (
        `unicode` varchar(255) not null,
        `name` varchar(255) not null,
        primary key (`unicode`)
    );

    CREATE TABLE flights (
        `id` int unsigned not null AUTO_INCREMENT,
        `flight_number` varchar(255) unique not null, 
        `airline_id` int unsigned not null,
        `departure_city` varchar(255) not null,
        `arrival_city` varchar(255) unique not null,
        `departure_time` datetime not null,
        `arrival_time` datetime not null, 
        primary key (`id`),
        constraint `airline_id` foreign key (`airline_id`) references `airlines`(`id`) on delete cascade,
        constraint `dpt_city` foreign key (`departure_city`) references `cities`(`unicode`) on delete cascade,
        constraint `arr_city` foreign key (`arrival_city`) references `cities`(`unicode`) on delete cascade
    );

    CREATE TABLE `hotels` (
        `id` int unsigned not null AUTO_INCREMENT,
        `name` varchar(255) not null,
        `city_location` varchar(255) not null,
        primary key (`id`),
        constraint `hotel_city` foreign key (`city_location`) references `cities`(`unicode`) on delete cascade
    );

    CREATE TABLE `user_flight` (
        `user_id` int unsigned not null,
        `flight_id` int unsigned not null,
        primary key (`user_id`, `flight_id`),
        constraint `fk_user_id` foreign key (`user_id`) references `users` (`id`) on delete cascade,
        constraint `fk_flight_id` foreign key (`flight_id`) references `flights` (`id`) on delete cascade
    );

    CREATE TABLE `user_hotel_bookings` (
        `booking_id` int unsigned not null auto_increment,
        `user_id` int unsigned not null,
        `hotel_id` int unsigned not null,
        `check_in_date` date not null,
        `check_out_date` date not null,
        primary key (`booking_id`),
        unique key (`user_id`, `hotel_id`, `check_in_date`),
        constraint `fk_hotel_user_id` foreign key (`user_id`) references `users` (`id`) on delete cascade,
        constraint `fk_hotel_id` foreign key (`hotel_id`) references `hotels` (`id`) on delete cascade
    );

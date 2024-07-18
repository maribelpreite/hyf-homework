CREATE DATABASE `meal_sharing_app`
    DEFAULT CHARACTER SET = 'utf8mb4';

    USE `meal_sharing_app`

    CREATE TABLE `meals` (
        `id` int unsigned not null AUTO_INCREMENT PRIMARY KEY,
        `title` varchar(255) not null, 
        `description` text null, 
        `location` varchar(255) not null,
        `when` datetime not null,
        `max_reservations` int unsigned not null, 
        `price` decimal(10,2) not null,
        `created_date` date not null
    );

CREATE TABLE `reservations` (
        `id` int unsigned not null AUTO_INCREMENT PRIMARY KEY,
        `number_of_guests` int unsigned not null,
        `meal_id` int unsigned not null,
        `created_date` date not null,
        `contact_phonenumber` varchar(255) not null,
        `contact_name` varchar(255) not null,
        `contact_email` varchar(255) not null,
        constraint `reserv_meal_id` foreign key (`meal_id`) references `meals`(`id`) on delete cascade
);

CREATE TABLE `reviews` (
    `id` int unsigned not null AUTO_INCREMENT PRIMARY KEY,
    `title` varchar(255) not null, 
    `description` text null, 
    `meal_id` int unsigned not null,
    `stars` int unsigned not null,
    `created_date` date not null,
    constraint `review_meal_id` foreign key (`meal_id`) references `meals`(`id`) on delete cascade,
    constraint `check_stars` check (`stars` between 0 and 5)
);

--meal queries
    --get all meals
    select *
    from `meals`;

    --add a new meal
    insert into `meals`(title, description, location, `when`, max_reservations, price, created_date) values ('Asado', 'Argentinian barbecue which involves both a cooking technique and a social event. Asado consists of a variety of grilled meats, such as beef, as well as sausages and offal.', 'Buenos Aires, Argentina', '2024-09-18 19:00:00', 10, 685.00, '2024-07-18');

    --get a meal with any id, fx 1
    select * from `meals`
    where id = 1;

    --update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
    update `meals`
    set `when` ='2024-09-20 19:00:00'
    where id = 1;

    --delete a meal with any id, fx 1
    delete from `meals`
    where id = 1;

--reservation
    --get all reservations
    select *
    from `reservations`;

    --add a new reservation
    insert into `reservations` (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
    values (4, 1, '2024-07-31', '+54 9 1139484600', 'Maribel', 'maribelp@gmail.com');

    --get a reservation with any id, fx 1
    select * from `reservations`
    where id = 1;

    --update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
    update `reservations`
    set `number_of_guests` = 6
    where id = 1;

    --delete a reservation with any id, fx 1
    delete from `reservations`
    where id = 1;

--reviews
    --get all reviews
    select *
    from `reviews`;

    --add a new review
    insert into `reviews` (title, description, meal_id, stars, created_date)
    values ('Best experience ever', "The grilled meats were flavorful and perfectly cooked. It's a must-try for anyone visiting Argentina who wants to enjoy authentic barbecue in a lively atmosphere.", 1, 5, '2024-09-22');

    --get a review with any id, fx 1
    select * from `reviews`
    where id = 1;

    --update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
    update `reviews`
    set `stars` = 4
    where id = 1;

    --delete a review with any id, fx 1
    delete from `reviews`
    where id = 1;


--more queries
    --add a couple of different meals, reservations and reviews with different attributes
    INSERT INTO `meals` (title, description, location, `when`, max_reservations, price, created_date)
VALUES 
    ('Italian Pasta Night', 'A variety of traditional Italian pasta dishes.', 'Rome, Italy', '2024-09-20 18:30:00', 8, 450.00, '2024-07-18'),
    ('Sushi Tasting', 'Fresh and delicious sushi straight from Tokyo.', 'Tokyo, Japan', '2024-09-22 20:00:00', 12, 800.00, '2024-07-18');

    INSERT INTO reservations (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES
    (4, 1, '2024-08-10', '+54 9 1151609898', 'Juan', 'juanp@gmail.com'), 
    (3, 2, '2024-08-02', '+39 06 1234567', 'Giuseppe', 'giuseppe@gmail.com'),
    (2, 3, '2024-08-05', '+81 3 98765432', 'Yuki', 'yuki@gmail.com');

    INSERT INTO reviews (title, description, meal_id, stars, created_date)
VALUES 
    ('Authentic Italian Pasta', 'The pasta dishes were authentic and delicious.', 2, 4, '2024-08-03'),
    ('Fresh and Tasty Sushi', 'The sushi was incredibly fresh and delicious.', 3, 5, '2024-08-06');


    --get meals that has a price smaller than a specific price fx 90
    select *
    from `meals`
    where price <= 700;

    --get meals that still has available reservations
    select m.title, m.description, m.location, m.`when`, m.max_reservations, r.total_guests, m.price
    from `meals` m
    join(
        select meal_id, sum(number_of_guests) as total_guests
        from reservations
        GROUP BY meal_id
    ) r on m.id = r.meal_id
    where m.max_reservations - r.total_guests > 0;

    --get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
    select *
    from `meals`
    where title like "%italian%" or description like "%pasta%"

    --get meals that has been created between two dates
    select *
    from `meals`
    where created_date BETWEEN "2024-07-01" AND "2024-07-31";

    --get only specific number of meals fx return only 5 meals
    select * 
    from `meals`
    limit 2;

    --get the meals that have good reviews
    select m.title, m.description, m.location, m.`when`, m.max_reservations, m.price, r.stars, r.title, r.description
    from `meals` m
    join `reviews` r on r.meal_id = m.id
    where r.stars >= 4
    order by r.stars desc;

    --get reservations for a specific meal sorted by created_date
    select r.*
    from `reservations` r 
    join `meals` m
    on m.id = r.meal_id
    where m.title like "%asado%"
    order by r.created_date desc;

    --sort all meals by average number of stars in the reviews
    select m.title, m.description, m.location, m.`when`, m.max_reservations, m.price, r.avg_stars
    from `meals` m
    join 
    (select meal_id, avg(stars) as avg_stars
    from `reviews` 
    group by meal_id) r
    on r.meal_id = m.id
    order by r.avg_stars desc;
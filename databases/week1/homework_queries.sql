SELECT COUNT(*)
AS total_tasks
FROM task;

SELECT COUNT(*)
AS tasks_without_due_date
FROM task
WHERE due_date IS NULL;

SELECT *
FROM task JOIN status
ON status.name ='Done';

SELECT *
FROM task JOIN status
ON status.name != 'Done';

SELECT *
FROM task
ORDER BY created DESC;

SELECT *
FROM task
ORDER BY created DESC
LIMIT 1;

SELECT title, due_date
FROM task
WHERE title LIKE '%database%' OR description LIKE '%database%';

SELECT t.title, s.name AS status
FROM task t
INNER JOIN status s ON t.status_id = s.id;

SELECT s.name AS status_name, COUNT(*) AS task_count
FROM task t
JOIN status s ON t.status_id = s.id
GROUP BY s.name;

SELECT s.name AS status_name, COUNT(*) AS task_count
FROM task t
JOIN status s ON t.status_id = s.id
GROUP BY s.name
ORDER BY task_count DESC;
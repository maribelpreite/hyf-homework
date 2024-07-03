SELECT COUNT(*)
AS total_tasks
FROM task;

SELECT COUNT(*)
AS tasks_without_due_date
FROM task
WHERE due_date IS NULL;

SELECT *
FROM task
WHERE status_id = (SELECT id FROM status WHERE name = 'Done');

SELECT *
FROM task
WHERE status_id != (SELECT id FROM status WHERE name = 'Done');

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


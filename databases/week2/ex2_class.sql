USE test;

SELECT u.name as user, t.title, t.description
from task t
JOIN task_assignment ta ON t.id = ta.task_id
JOIN user u ON ta.user_id = u.id
WHERE u.name like "%Pavel%";

SELECT u.name as user, COUNT(*) as user_tasks
FROM task_assignment ta
JOIN user u ON ta.user_id = u.id
GROUP BY u.name;

SELECT u.name as user, COUNT(*) as user_done_tasks
FROM task t
JOIN task_assignment ta ON t.id = ta.task_id
JOIN user u ON ta.user_id = u.id
JOIN status s ON t.status_id = s.id
WHERE s.name = "Done"
GROUP BY u.name;
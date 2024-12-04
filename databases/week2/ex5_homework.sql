USE test;

-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT u.name as user, t.title, t.description
from task t 
join task_assignment ta on t.id = ta.task_id
join user u on ta.user_id = u.id
where u.email like "%@spotify.com%";

-- Get all the tasks for 'Donald Duck' with status 'Not started'
select u.name as user, t.title, t.description, s.name as status
from task t
join status s on t.status_id = s.id
join task_assignment ta on t.id = ta.task_id
join user u on ta.user_id = u.id
where u.name = "Donald Duck" AND s.name = "Not started";

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
select u.name as user, t.title, t.description, t.created
from task t
join task_assignment ta on t.id = ta.task_id
join user u on ta.user_id = u.id
where u.name = "Maryrose Meadows" AND month(t.created)= 9;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
select month(t.created) as month_number,
count(*) as tasks_amount
from task t
group by month(t.created)
order by month(t.created);

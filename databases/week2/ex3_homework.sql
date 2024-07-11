USE test;

-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
insert into task (title, description, created, updated, due_date, status_id) values ('Pay the bills', 'Rent, electricity and internet.', '2024-07-11 06:54:16', '2024-07-15 13:05:09', '2024-07-28 13:05:09', 1);

insert into task_assignment (task_id, user_id) values (36, 12);

-- Change the title of a task
update `task`
set title = 'Remember the monthly expenditures'
where id = 36;

-- Change a task due date
update `task`
set due_date = '2024-07-31 00:00:00'
where id = 36;

-- Change a task status
update `task`
set status_id = 2
where id = 36;

-- Mark a task as complete
update `task`
set status_id = 3
where id = 3;

-- Delete a task
delete from `task`
where id = 36;
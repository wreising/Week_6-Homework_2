USE employees_db;
-- Departments
INSERT INTO departments (name)
VALUES 	('Executive'),
				('Legal'),
				('Finance'),
				('IT');

USE employees_db;
-- Roles
INSERT INTO roles (title, salary, department_id)
VALUES  ('CEO', 250000, 1),
				('Attorney', 125000, 2),
				('CFO', 200000, 3),
				('IT Manager', 140000, 4),
				('IT Tech', 75000, 4);

USE employees_db;
-- Employees
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 	('William', 'Reising', 1, NULL),
				('Eric', 'Reising', 2, 1),
				('Sally', 'Edwards', 3, 1),
				('Dave', 'Zepp', 4, 1),
				('Sam', 'Jones', 5, 4),
				('Phil', 'Brown', 5, 4),
				('Warner', 'Oxborow', 5, 4);
USE employees_db;

-- Employees
INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (01, 'William', 'Reising', 01,);
VALUES (02, 'Eric', 'Reising', 03, 01);
VALUES (03, 'Sally', 'Edwards', 04, 01);
VALUES (04, 'Dave', 'Zepp', 06, 01);
VALUES (05, 'Sam', 'Jones', 06, 04);
-- VALUES (06, 'Karen', 'Ross', 04, 03);
VALUES (07, 'Phil', 'Brown', 06, 04);
VALUES (08, 'Warner', 'Oxborow', 06, 04);
-- VALUES (09, 'Tammy', 'Hall', 02, 02);
-- VALUES (10, 'Robert', 'Hill', 07, 01);
-- VALUES (11, 'Ken', 'Salgado', 07, 10);
-- VALUES (12, 'Dave', 'Okada', 07, 10);
-- VALUES (13, 'Sandra', 'Lee', 08, 01);
-- VALUES (14, 'Mike', 'wagner', 10, 13);
-- VALUES (15, 'Ryan', 'Stenberg', 09, 13);

-- Departments
INSERT INTO deprtments (id, name)
VALUES (01, 'Executive');
VALUES (02, 'Admin');
VALUES (03, 'Legal');
VALUES (04, 'Finance');
-- VALUES (05, 'Engineering');
-- VALUES (06, 'IT');
-- VALUES (07, 'R&D');
-- VALUES (08, 'Manufacturing');
-- VALUES (09, 'QA');
-- VALUES (10, 'Shipping');

-- Roles
INSERT INTO roles (id, title, salary, department_id)
VALUES (01, 'CEO', 250000, 01);
VALUES (02, 'Assistant', 60000, 02);
VALUES (03, 'Attorney', 125000, 03);
VALUES (04, 'CFO', 200000, 04);
-- VALUES ('VP Ops', 180000, 08);
VALUES ('IT Manager', 140000, 06);
-- VALUES ('R&D Manager', 90000, 07);
-- VALUES ('R&D Tech', 50000, 07);
VALUES ('IT Tech' 75000, 06);
-- VALUES ('Controller', 85000, 04);
-- VALUES ('QA Tech', 65000, 09);
-- VALUES ('Shipping Tech', 45000, 10);

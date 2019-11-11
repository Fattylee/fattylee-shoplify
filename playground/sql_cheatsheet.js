const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/db_name');

//class Person extends Sequelize.Model {}
Person.init({
  // define fields here
},
{
  sequelize,
  modelName: 'person',
});


const Person = db.define('person', {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  favFood: {
    type: Sequelize.STRING, 
    defaultValue: 'meat',
  },
  age: Sequelize.INTEGER,
  full_name: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.getDataValue('first_name') + ' ' + this.getDataValue('last_name');
    }
  }
},{ // model options
  hooks: {
    beforeValidate(instance, option) {
      instance.age = 1;
      
    },
  },
  timestamps: true, // default false
  getterMethods: {
    full_name: () => { // comes back as part of the return field
      return this.first_name + ' ' + this.last_name;
    }
  },
  instanceMethods: {
    greet() {
      return this.first_name  + ' saus goodmorning!'; 
    },
  },
});

db.sync({force: true /* default false */})
.then(msg =)
.catch(err);


model.create({...}) => {...}
model.findAll() => [{}...{}]
model.findOne({where: {}}) => {...}


createdb database_name;
psql [database_name]


\d table_name; // desc table
\du ;  // show tables;
\l 
\c db_name; 

If the primary key column is not used in the group by clause then any other column must appear in the group by clause or in an aggregate function.


COALESCE(value, default), ifnull, isnull, nvl, if

create user "user_name" with password '123.456';

alter user "user_name" with login createdb;


create table orders(
  id serial primary key,
  order_date date,
  amount decimal(10,2),
  customer_id int not null,
  foreign key(customer_id) references customers(id)
);

create table if not exists orders(
  id serial primary key,
  order_date date,
  amount decimal(10,2),
  customer_id int not null,
  foreign key(customer_id) references customers(id) on delete cascade
);

create table customers(
  id serial primary key,
  first_name varchar(50) not null,
  last_name varchar(50) not null,
  email varchar(50) not null unique, 
);

create table persons(
  id serial primary key,
  first_name varchar(50) not null,
  last_name varchar(50) not null,
  email varchar(50) not null unique
);

insert into persons (first_name,last_name, email) values
('abu', 'adnaan', 'abu_adnaan@gmail.com'),
('smith', 'jones', 'smuth_jones@gmail.com'),
('ummu', 'abdillah', 'ummu_abdillah@yahoo.com'),
('abu', 'lubaaba', 'abu_lubaaba@gmail.com');

select * from persons;

select  first_name, last_name from persons group by first_name, last_name;

delete from customers where name = 'abu';


truncate table customers;

select * from orders;

/* date time values func
  current_timestamps, now()    // date and time
  current_time    // time
  current_date    // date

*/

insert into orders (order_date, amount, customer_id) values (current_date, 1234567890.45, 5);

insert into orders (order_date, amount, customer_id) values (current_time, 23.457, 5);


select count(*) from orders;

select * from customers where id = 1;

select id from customers where id = 1;

select * from orders where customer_id = 
(
  select id from customers where id = 1
);

select * from customers, orders where customers.id = customer_id;

// implicit join tables
select name, order_date, amount from customers, orders where customers.id = customer_id;

// explicit join table

select * from customers join orders on customers.id = customer_id;

select customers.id, name, amount, order_date from customers join orders on customers.id = customer_id group by (customers.id);

select customers.id, name, order_date from customers join orders on customers.id = customer_id group by (customers.id);

select customers.id, name, sum(amount) from customers join orders on customers.id = customer_id group by (customers.id);

select customers.id, name, sum(amount) as total_spent from customers join orders on customers.id = customer_id group by customers.id, name order by total_spent;

select customers.id, name, sum(amount) as total_spent from customers join orders on customers.id = customer_id group by (customers.id) order by total_spent desc;

select customers.id, name, amount, order_date from customers left join orders on customers.id = customer_id ;

select customers.id, name, amount, order_date from customers left join orders on customers.id = customer_id order by name desc limit 1;

select customers.id, name, COALESCE(sum(amount), 0) as total_spent from customers 
left join orders 
on customers.id = customer_id group by (customers.id) order by total_spent desc;


select now() from orders;

create table students(
  id serial primary key,
  first_name varchar(50) not null
);

create table if not exists papers(
  id serial primary key,
  title varchar(50) not null,
  grade int not null,
  student_id int not null,
  foreign key (student_id) references students(id) on delete cascade
);

INSERT INTO students (first_name) VALUES 
('Caleb'), 
('Samantha'), 
('Raj'), 
('Carlos'), 
('Lisa');

INSERT INTO papers (student_id, title, grade ) VALUES
(1, 'My First Book Report', 60),
(1, 'My Second Book Report', 75),
(2, 'Russian Lit Through The Ages', 94),
(2, 'De Montaigne and The Art of The Essay', 98),
(4, 'Borges and Magical Realism', 89);

select * from students;
select * from papers;

select first_name, title, grade from students
inner join papers
on students.id = student_id;

select first_name, 
COALESCE(title, 'MISSING') as title, 
COALESCE(grade, 0) as grade
 from students
left join papers
on students.id = student_id
order by grade desc limit 1;

select 
papers.id as unique_id,
students.id as id, 
first_name, 
COALESCE(title, 'MISSING') as title, 
COALESCE(grade, 0) as grade
 from students
left join papers
on students.id = student_id
group by students.id ;


select sum(id), sum(grade), student_id from papers group by student_id;

select first_name, title, grade from students
left join papers
on students.id = student_id;

select first_name, COALESCE(title, 'MISSING') as title,
COALESCE(grade, 0) as grade from students
left join papers
on students.id = student_id;

select first_name, 
Round(Avg(COALESCE(grade, 0)), 2) as average from students
left join papers
on students.id = student_id
group by first_name;

select first_name, 
Round(Avg(COALESCE(grade, 0)), 2) as average,
case 
  when avg(grade) is null then 'FAILING'
  when avg(COALESCE(grade, 0)) > 55 then 'PASSING'
  else 'FAILING'
end as passing_status
from students
left join papers
on students.id = student_id
group by first_name;

alter table papers
add foreign key(student_id) references students(id)
on delete cascade;

alter table papers
drop foreign key "papers_student_id_fkey";

alter table papers
drop constraint papers_student_id_fkey;

alter table papers
add constraint my_const 
foreign key(student_id) references students(id);

INSERT INTO papers (student_id, title, grade ) VALUES
(11, 'My First Book Report', 60);

create table reviewers (
  id serial primary key,
  first_name varchar(100), 
  last_name varchar(100)
);

create table series (
  id serial primary key,
  title varchar(100) not null,
  released_year date not null,
  genre varchar(100) not null
);

create table reviews (
  id serial primary key,
  rating decimal(2,1) not null,
  reviewer_id int not null,
  series_id int not null,
  foreign key (reviewer_id) references reviewers(id),
  foreign key (series_id) references series(id)
);

INSERT INTO reviews(rating, reviewer_id, series_id) values (23, 1, 1);


insert into reviewers(first_name, last_name) VALUES
('abu', 'lulu'),
('fatty', 'lee'),
('abdulllah', 'abdulrasak');

alter table reviewers
Add age int not null default 0;

alter table reviewers
alter column age varchar(20);

select * from reviewers
left join reviews
on reviewers.id = reviews.reviewer_id;

alter table series
alter column released_year year;

alter table series
add column age int not null default 5;

alter table series
add check(age >0);


alter table series
drop constraint series_age_check;

update series
set age = 16
where id = 5;
INSERT INTO series (title, released_year, genre , age) VVALUES  ('move try email', '1987-6-23', 'movement', 0);

select date_trunc('year')

alter table people
add column sex varchar(10);

update people
set gender = 'femmale';

alter table if exists people
alter column sex varchar(10) not null;

alter table people
rename column sex to gender;

alter table if exists humans
rename to people;

alter table if exists people
alter column gender set not null;

alter table if exists people
alter column gender set default 'male';

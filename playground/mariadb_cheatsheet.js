https://teachwithf.blogspot.com/2019/04/install-mariadb-database-server-in.html?m=1

// knowledge based
https://www.techonthenet.com/mariadb/tables/alter_table.php


// start mysql/mariadb daemon
mysqld
OR
mysqld_safe -u root &

// stop mysql/mariadb daemon 'ps a' is used to check bg processes
ps aux | grep mysql
kill 9 id  

OR

pkill mysql

// connect mariadb engine
mysql -u 0u_a100
OR
mysql

mysql -u root -p


show databases;
use db_name;
show tables;
show create table table_name; // shows the current state of a table
show columns from table_name;
show index;
select database();  // show selected db
desc tb_name;
CREATE USER 'fattylee' IDENTIFIED BY '123456';
SHOW GRANTS FOR 'fattylee'@localhost; 
GRANT USAGE ON *.* TO 'fattylee'@localhost IDENTIFIED BY '123456';
GRANT USAGE ON *.* TO 'fattylee'@'%' IDENTIFIED BY '123456';
GRANT ALL privileges ON `test`.* TO 'fattylee'@localhost;

GRANT ALL privileges ON *.* TO 'fattylee'@localhost;
FLUSH PRIVILEGES;

select user, password, host from mysql.user;
show grants for 'myuser'@'%';
SHOW GRANTS FOR '%'@'%';

//decimal(2,2) // means 1 for whole num/ Mantissa part and 1 for decimal part


drop table if exists reviewers;
drop table if exists series;

create table if not exists reviewers (
  id int auto_increment primary key,
  first_name varchar(100),
  last_name varchar(100) not null
);

create table if not exists series (
  id int auto_increment,
  title varchar(100),
  released_year year(4),
  genre varchar(100),
  primary key(id)
);

drop table if exists reviews;
create table if not exists reviews (
  id int auto_increment ,
  rating decimal(2,1), 
  reviewer_id int ,
  series_id int,
  primary key(id),
  foreign key(reviewer_id) references reviewers(id) on delete cascade,
  foreign key(series_id) references series(id)
);

INSERT INTO series (title, released_year, genre) VALUES ('Archer', 2009, 'Animation'), ('Arrested Development', 2003, 'Comedy'), ("Bob's Burgers", 2011, 'Animation'), ('Bojack Horseman', 2014, 'Animation'), ("Breaking Bad", 2008, 'Drama'), ('Curb Your Enthusiasm', 2000, 'Comedy'), ("Fargo", 2014, 'Drama'), ('Freaks and Geeks', 1999, 'Comedy'), ('General Hospital', 1963, 'Drama'), ('Halt and Catch Fire', 2014, 'Drama'), ('Malcolm In The Middle', 2000, 'Comedy'), ('Pushing Daisies', 2007, 'Comedy'), ('Seinfeld', 1989, 'Comedy'), ('Stranger Things', 2016, 'Drama'); 

INSERT INTO reviewers (first_name, last_name) VALUES ('Thomas', 'Stoneman'), ('Wyatt', 'Skaggs'), ('Kimbra', 'Masters'), ('Domingo', 'Cortes'), ('Colt', 'Steele'), ('Pinkie', 'Petit'), ('Marlon', 'Crafford'); 

INSERT INTO reviews(series_id, reviewer_id, rating) VALUES (1,1,8.0),(1,2,7.5),(1,3,8.5),(1,4,7.7),(1,5,8.9), (2,1,8.1),(2,4,6.0),(2,3,8.0),(2,6,8.4),(2,5,9.9), (3,1,7.0),(3,6,7.5),(3,4,8.0),(3,3,7.1),(3,5,8.0), (4,1,7.5),(4,3,7.8),(4,4,8.3),(4,2,7.6),(4,5,8.5), (5,1,9.5),(5,3,9.0),(5,4,9.1),(5,2,9.3),(5,5,9.9), (6,2,6.5),(6,3,7.8),(6,4,8.8),(6,2,8.4),(6,5,9.1), (7,2,9.1),(7,5,9.7), (8,4,8.5),(8,2,7.8),(8,6,8.8),(8,5,9.3), (9,2,5.5),(9,3,6.8),(9,4,5.8),(9,6,4.3),(9,5,4.5), (10,5,9.9), (13,3,8.0),(13,4,7.2), (14,2,8.5),(14,3,8.9),(14,4,8.9);



select title, rating from series
join reviews
on series.id = reviews.series_id;

select title, avg(rating) as avg_rating from series
join reviews
on series.id = reviews.series_id
group by test.series.id order by avg_rating;

select first_name, last_name, rating from reviewers
join reviews
on reviewers.id = reviews.series_id;

select title as unreviewed_series from series
left join reviews
on series.id = reviews.series_id
where rating is null;

select genre, avg(rating) as avg_rating from series
join reviews
on series.id = reviews.series_id
group by genre order by genre;


select 
concat(first_name, ' ', last_name) as full_name,
count(*),
ifnull(min(rating), 0) as min,
ifnull(max(rating), 0) as max,
ifnull(avg(rating), 0) as avg
-- if(rating is null, 'INACTIVE', 'ACTIVE') as status
, case 
when rating is null then 'INACTIVE'
when count(*) >8 then 'POWER USER'
else 'ACTIVE'
end as status
from reviewers
left join reviews
on  reviewers.id = reviews.reviewer_id
group by reviewers.id
order by min(rating) desc;

select title,
rating,
concat(first_name, ' ', last_name) as reviewer
from  series, reviews, reviewers
where reviews.series_id = series.id 
and reviews.reviewer_id = reviewers.id;

select title,
rating,
concat(first_name, ' ', last_name) as reviewer
from  series
join reviews
on reviews.series_id = series.id 
join reviewers
on reviews.reviewer_id = reviewers.id
order by title;


select title, concat(first_name, ' ', last_name) as full_name, rating from series, reviews, reviewers
where
 series.id = reviews.series_id
 and
reviewers.id = reviews.reviewer_id
order by title;


alter table reviews
drop column released_year;





insert into reviews values (default, 0.746785, 57);

select * from reviews;

drop table reviews;
alter table reviews
alter column rating int;

SELECT DISTINCT Salary FROM SALARIES ORDER BY Salary DESC LIMIT 1 OFFSET 2

create table fat (
gender enum('male', 'female')
);

insert into fat values('male'), ('nezt');

select * FROM fat;








Let me define a class Animal;

class definition 

class Animal {
  name = 'jam' ;
  sex = 'male' ;
  age = 0;
  
  increaseAge() {
    this.age += 1;
  }
  
  printInfo() {
    console.log(`My name is ${this.name} and i'm ${this.age} year(s) old.`);
  }
}

Class usage (instantiation) ;

const obj1 = new Animal();
const obj2 = new Animal();

obj1.printInfo(); // My name is jam and i'm 0 year(s) old.
obj2.printInfo(); // My name is jam and i'm 0 year(s) old.

obj2.increaseAge();

obj1.printInfo(); // My name is jam and i'm 0 year(s) old.
obj2.printInfo(); // My name is jam and i'm 0 1 year(s) old.






drop table salaries;

create table salaries (
  prof_name text,
  depart text,
  salary int
);

insert into salaries values('Zaniolo', 'Computer Science', 130000);
insert into salaries values('Eggert', 'Computer Science', 170000);
insert into salaries values('Cho', 'Computer Science', 150000);
insert into salaries values('Fowler', 'Anthropology', 80000);
insert into salaries values('Wertheim', 'Anthropology', 95000);
insert into salaries values('Yang', 'Anthropology', 120000);
insert into salaries values('Kreger', 'Political Science', 190000);
insert into salaries values('Saverin', 'Political Science', 90000);
insert into salaries values('Chen', 'Electrical Engineering', 125000);
insert into salaries values('White', 'Management', 150000);
insert into salaries values('Calderon', 'Journalism', 200000);
insert into salaries values('Lee', 'Computer Science', 250000);
insert into salaries values('Jacob', 'Biology', 175000);
insert into salaries values('Ng', 'Sociology', 50000);
insert into salaries values('Hsieh', 'Chemical Engineering', 400000);
insert into salaries values('Muniain', 'Spanish', 160000);
insert into salaries values('Guerin', 'Management', 500000);
insert into salaries values('John', 'Economics', 250000);

SELECT * from salaries;

alter table salaries
Modify "depart" 'department';

ALTER TABLE salaries 
CHANGE COLUMN depart department text;


SELECT * from salaries;




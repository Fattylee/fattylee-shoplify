
create table if not exists test.abu (
  id integer primary key auto_increment
);
/*
select trim( 'Abu playground A   ') as trim;
select length('users');
select ucase('users');
select lower('MuMUO');
desc users;
*/
-- select count(*) from users where username regexp '^a';
-- select * from users order by created_at desc limit 5;
-- select version();

 -- insert into test.abu values();
-- select * from test.abu;
/*
select * from follows;
show create table follows;
desc follows;
*/

-- select extract(day from created_at) from users;
-- SELECT DAYNAME(created_at) as dn, count(*)  from  users group by dn order by count(*) desc;
-- SELECT DAYNAME(CURDATE());
-- SELECT weekDAY(CURDATE());

/*select username from photos 
right join users
on photos.user_id = users.id
where photos.created_at is null;
*/

/*
SELECT photo_id, username, photos.user_id as owner, count(likes.user_id) from likes 
join photos
on photos.id = likes.photo_id
join users
on users.id = photos.user_id
group by photo_id order by count(likes.user_id) desc limit 1;
*/
/*
SELECT count(*) from users ;
SELECT (SELECT count(*) from photos ) / (SELECT count(*) from users) as avg;

*/

/*
SELECT tag_name, count(tag_id) as t from photo_tags 
join tags
on tags.id = photo_tags.tag_id
group by tag_id order by t desc limit 5 ;
*/

-- SELECT distinct * from likes limit 1;

drop table if exists test.hi;
create table test.hi (
  id int auto_increment primary key,
  name  varchar(200),
  poke int,
  foreign key(poke) references users(id)
);
show create table shops;
insert into Shops(name, createdat, updatedAt) values('Luman Enterprise', now(), current_timestamp);
SELECT * from animals;
sequelize model:create --name animal --attributes name:string,age:integer;
sequelize db:migrate;

alter table animals
rename  to Animals;

drop table if exists a;
create table a(iD serial primary key);
SELECT * from a;
drop table if exists b;
create table b(id serial primary key, name int references a(id));
\d a;
\d b;

drop table  if exists a;
create table a(id uuidserial primary key);
drop table if exists b;
create table b(id serial primary key, name int references a(id));
\d a;
\d b;

SELECT * from Aa;
insert into Aa values(default), (default), (default);
SELECT * from As;
-- show create table comments;
/*

My models
books <=> authors
create table if not exists authors (
  id int auto_increment primary key,
  first_name varchar(100) not null,
  last_name varchar(100) not null
 -- ...
);


+--------------------+
| comments           |
| follows            |
| likes              |
| photo_tags         |
| photos             |
| tags               |
| users              |
+--------------------+

*/

-- source ./ig-clone-data.sql;

-- source ./playground/test.sql;

-- \ir ./playground/test.sql;

-- source ./playground/ig-clone-data.sql;
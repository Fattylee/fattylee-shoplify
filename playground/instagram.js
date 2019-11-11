database_name: instagram
Entities/tables: users, photos, followers, followees, hashtags, likes, comments


create database instagram;
use instagram;
show tables;
desc table_name;

create table if not exists users (
  id int auto_increment primary key,
  first_name varchar(100) not null,
  last_name varchar(100) not null
);

create table if not exists photos (
  id int auto_increment primary key,
  photo_url varchar(100) not null,
  user_id int,
  foreign key(user_id) references users(id)
);
// this produces error
create table if not exists follows (
  id int auto_increment primary key, 
  user_id int,
  followers text,
  followees text,
  foreign key(user_id) references users(id),
  foreign key(followers) references users(id),
  foreign key(followees) references users(id)
);

INSERT INTO users (first_name, last_name) VALUES ('Thomas', 'Stoneman'), ('Wyatt', 'Skaggs'), ('Kimbra', 'Masters'), ('Domingo', 'Cortes'), ('Colt', 'Steele'), ('Pinkie', 'Petit'), ('Marlon', 'Crafford'); 

select * from users;

create table if not exists follows (
  id int auto_increment primary key, 
  user_id int,
  followers int,
  foreign key(user_id) references users(id),
  foreign key(followers) references users(id)
);

INSERT INTO follows VALUES (default, 1, default);

select * from follows;

alter table follows 
modify followers not null;

alter table follows 
change fabfollower fabfollower  int  null first;

desc follows;

alter table follows 
change fabfollower fabfollower  int not null default 1 after user_id;

desc follows;

alter table follows 
change column fabfollower fabfollower int  after followers;

desc follows;


alter table follows 
add fab  int not null default 1;

alter table follows 
drop fab ;

desc follows;

alter table follows 
change  fab fab int  not null  after followers ;
desc follows;

alter table follows 
modify fab int not null default 5  check(fab > 5);
desc follows;

alter table follows
drop  fab;

alter table follows 
add fab int default 100 ;
desc follows;


create table if not exists follows (
  id int auto_increment primary key, 
  fab int not null default 2 check ( fab >5)
);

INSERT into follows (id, fab) VALUES(default, 2);
select * from follows;


alter table follows
drop constraint fab;

alter table follows
add constraint fab_greater_than_five check (fab > 5);

alter table follows
add constraint fab_greater_than_five unique (fab );

show create table follows;


select COLUMN_NAME, CONSTRAINT_NAME, REFERENCED_COLUMN_NAME, REFERENCED_TABLE_NAME from information_schema.KEY_COLUMN_USAGE where TABLE_NAME = 'follows';

drop table a;
create table a (
  n int,
  constraint gap unique(n),
  constraint abu check ( n > 5),
  constraint edr primary key(n),
  constraint fka check(n)
);

show create table a;


select * from information_schema.check_constraints;

alter table a
add constraint abuduq unique (n);
show create table a;


alter table a
modify n int not null check ( n mod 2 = 0 );
show create table a;

INSERT INTO a VALUES(52);
select * from a;


alter table a
-- drop constraint abuduq, 
drop  primary key;
show create table a;


alter table a
modify n int not null,
add constraint haaj unique(n),
drop constraint primary key;
show create table a;

alter table a
add constraint abu unique(n),
add constraint fka check( n % 2 != 0),
drop constraint if exists abu, 
add if not exists age int not null check(age > 0),
drop constraint if exists fka,
-- add constraint if not exists pk_age foreign key if not exists (age) references users(id),
drop constraint if exists fka,
drop key if exists pk_age
-- drop foreign key if exists pk_age
;


alter table a
drop constraint if exists fka;
show create table a;

alter table a
drop constraint if exists abu;
show create table a;

constraint (unique, check) drop constraint cname
constraint (primary, foreign) drop foreign|primary key

alter table a
modify age int not null ;
show create table a;

alter table a
 drop age;
show create table a;

truncate table a;
show create table a;


alter table a
add primary key (n);
show create table a;

alter table a
add foreign key (n) references users(id);
show create table a;

alter table a
add check(n > 1);
show create table a;

alter table a
add unique(n);
show create table a;

alter table a
drop constraint n;
show create table a;

alter table a
drop constraint constraint_1;
show create table a;

alter table a
drop constraint `a_ibfk_1`;
show create table a;

alter table a
drop primary key;
show create table a;


alter table a
add constraint fka foreign key (n) references users(id);
show create table a;


// this will remove foreign key without removing key
alter table a
drop foreign key fka;
show create table a;

INSERT INTO a VALUES (1);
select * from a;

delete from a
-- where n = 1;
;
select * from a;

alter table a
drop key fka;
show create table a;

alter table a
drop constraint fka;
show create table a;

alter table a
drop constraint `a_ibfk_1`, drop key n;
show create table a;

alter table a
add foreign key (n) references users(id);
show create table a;


drop table if exists follows;
create table if not exists follows (
  id int primary key auto_increment,
  user int,
  foreign key(user) references users(id)
);
show create table follows;

alter table follows
add follower int,
add followee int,
add foreign key(follower) references users(id),
add constraint follows_ck foreign key(followee) references users(id);
show create table follows;

INSERT into follows VALUES(default, 1, 3, 2);
INSERT into follows VALUES(default, 1, 4, 4);
INSERT into follows VALUES(default, 1, 2, 2);
select * from follows;

Find the no. Of followers of a user;

select count(followee) from follows
where user = 1;

alter table follows
modify user int check(user != follower);
show create table follows;

delete from follows
where user = 1 and followee = 1;
select * from follows;

alter table follows
add constraint prevent_same_follower_as_user
check (user <> follower);
show create table follows;

alter table follows
drop constraint if exists prevent_same_follower_as_user,
add constraint if not exists prevent_same_followee_as_user
check (user <> followee);
show create table follows;

select count(follower), count(followee) from follows
group by user;

select user, count(*), count(followee) from follows
group by user;

drop table if exists per;
create table per (
follower_id timestamp default now()
);

alter table per
modify follower_id timestamp default current_timestamp();
show create table per;

INSERT INTO per VALUES ();
select * from per;


















/*
select * from salaries;
*/

select age(now(), '1994-08-27');
select age(timestamp '1994-08-27');
declare str varchar;
str := 'abdullah';
SELECT current_date + 1;
select current_time(2);
select current_timestamp;
SELECT date_part('minute', time '08:44:21');
SELECT date_part('year', date '1994-08-27');
SELECT date_part('year', current_timestamp);
select interval '5 days 2 hours';
select date_part('doy', current_date);
select date_part('dow', current_timestamp);
SELECT date_part('quarter', current_date);
select extract(hour from current_timestamp);
SELECT initcap('babUJN');
select btrim('   the net    ');
-- SELECT initcap(name) from customers;
select lpad('Abu', 5, '*');
SELECT position('um' in 'abu umama');
-- SELECT upper(str);
SELECT 1 from customers;

-- \ir playground/psq_test.sql;
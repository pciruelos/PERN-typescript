create database pern;

\c pern;

create table videos(
    id serial primary key,
    title varchar(40),
    url varchar(60)
);

insert into videos (title, url)
values ('best song ever', 'https://www.youtube.com/watch?v=mrZRURcb1cM'),
       ('lisandro song', 'https://www.youtube.com/watch?v=9PvIIn6cc1M');
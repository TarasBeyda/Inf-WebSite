create database if not exists InfWebSite;

use InfWebSite;

create table if not exists Posts(
	id_post int primary key auto_increment,
    title_post varchar(100) not null,
    content_post text(2500) not null,
    short_description varchar(255) not null,
    category varchar(50) not null
);

insert into Posts(title_post, content_post, short_description, category) values 
('Заголовок до певної новини 1', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 2', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 3'),
('Заголовок до певної новини 3', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 4', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 2'),
('Заголовок до певної новини 5', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 6', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 3'),
('Заголовок до певної новини 7', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 2'),
('Заголовок до певної новини 8', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 2'),
('Заголовок до певної новини 9', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 10', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 11', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 12', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 13', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 14', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 15', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 16', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 17', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 18', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 19', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 20', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 21', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 22', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 23', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 24', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 25', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 26', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 27', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 28', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 29', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 30', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 31', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 32', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 33', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 34', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 35', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 36', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 37', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 38', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 39', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 40', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 41', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 42', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 43', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1'),
('Заголовок до певної новини 44', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.', 'Категорія 1');

alter table Posts AUTO_INCREMENT = 1;

select * from Posts;

select * from Posts order by Posts.id_post desc limit 3;

select * from Posts where Posts.id_post between 5 and 9;

create table if not exists Admin(
	id_adm int primary key auto_increment,
    login_adm varchar(30) not null,
    pass_adm varchar(30) not null
);

insert into Admin(login_adm, pass_adm) values 
('Taras', '1111');

select * from Admin;

select * from Posts order by id_post desc limit 9, 9;



-- sudo nautilus /etc/mysql/mysql.conf.d/mysqld.cnf

-- [mysqld]
-- character-set-server=utf8
-- collation-server=utf8_general_ci

sudo /etc/init.d/mysql restart


-- SHOW VARIABLES LIKE 'char%';
-- SET names utf8;

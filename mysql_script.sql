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

alter table Posts AUTO_INCREMENT = 1;

select * from Posts;

select * from Posts order by Posts.id_post desc limit 3;



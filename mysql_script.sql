create database if not exists InfWebSite;

use InfWebSite;

create table if not exists Posts(
	id_post int primary key auto_increment,
    title_post varchar(100) not null,
    content_post text(2500) not null,
    short_description varchar(255) not null
);

insert into Posts(title_post, content_post, short_description) values 
('Заголовок до певної новини 1', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.'),
('Заголовок до певної новини 2', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.'),
('Заголовок до певної новини 3', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.'),
('Заголовок до певної новини 4', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.'),
('Заголовок до певної новини 5', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.'),
('Заголовок до певної новини 6', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum...', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio suscipit, alias laborum at officiis repellat. Nobis velit reprehenderit assumenda earum.');

select * from Posts;

alter table Posts AUTO_INCREMENT = 1;



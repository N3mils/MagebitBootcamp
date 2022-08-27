create database laravelProject;
show databases;
use laravelProject;
drop table categories;
use
create table laravelProject.categories(id int NOT NULL AUTO_INCREMENT, name varchar(255), primary key(id));
create table laravelProject.products(
    id int NOT NULL AUTO_INCREMENT, 
    name varchar(255),
    sku varchar(255),
    image varchar(255),
    category_ID int,
    primary key(id),
    foreign key(category_ID) references categories(id)
)

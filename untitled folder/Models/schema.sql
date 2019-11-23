create database if not exists Project3_db;
use Project3_db;

create table Customers(
custID int not null auto_increment,
firstName varchar(30) not null,
lastName varchar(30) not null,
email varchar(30) not null,
userName varchar(30) not null,
primary key (custID)
);

create table Restaurant_Tables(
tableID int not null,
numOfChairs int not null,
seatedCustID int default NULL,
primary key (tableID),
foreign key (seatedCustID) references Customers(custID)
);

create table Reservations(
reservationID int not null auto_increment,
dateOfReservation char(10) not null,
timeSlot char(5) not null,
custID int not null,
tableID int not null,
foreign key (custID) references	Customers(custID),
foreign key (tableID) references Restaurant_Tables(tableID),
primary key (reservationID)
);


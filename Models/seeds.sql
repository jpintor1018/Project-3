use Project3_db;


insert into Customers(firstName, lastname, email, userName, password)
values ('Jesse', 'Sosnicki', 'jesse.sosnicki@gmail.com', 'jsosnicki','password');

insert into Customers(firstName, lastname, email, userName, password)
values ('John', 'Pintor', 'jpintor@gmail.com', 'jpintor','password');

insert into Customers(firstName, lastname, email, userName, password)
values ('Orhys', 'Brown', 'obrown@gmail.com', 'obrown','password');

insert into Customers(firstName, lastname, email, userName, password)
values ('Andres', 'Urueta', 'aurueta@gmail.com', 'aurueta','password');

insert into Restaurant_Tables(tableID, numOfChairs)
values(1, 2);

insert into Restaurant_Tables(tableID, numOfChairs)
values(2, 2);

insert into Restaurant_Tables(tableID, numOfChairs)
values(3, 2);

insert into Restaurant_Tables(tableID, numOfChairs)
values(4, 4);

insert into Restaurant_Tables(tableID, numOfChairs)
values(5, 4);

insert into Restaurant_Tables(tableID, numOfChairs)
values(6, 4);

insert into Restaurant_Tables(tableID, numOfChairs)
values(7, 4);

insert into Restaurant_Tables(tableID, numOfChairs)
values(8, 4);

insert into Restaurant_Tables(tableID, numOfChairs)
values(9, 4);

insert into Reservations(dateOfReservation, timeSlot, custID, tableID)
values('2019-12-25', '18:00', 1, 4);

insert into Reservations(dateOfReservation, timeSlot, custID, tableID)
values('2019-12-25', '18:30', 2, 3);

insert into Reservations(dateOfReservation, timeSlot, custID, tableID)
values('2019-12-25', '19:00', 3, 2);

insert into Reservations(dateOfReservation, timeSlot, custID, tableID)
values('2019-12-25', '19:30', 4, 1);
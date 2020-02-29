# TaskTracker

корень http://localhost:3000/
Работа с пользователями:

Создание пользователя
POST http://localhost:3000/users/add
{
	"first_name": "Ivan",
	"last_name": "Macomba"
}

Редактирование пользователя
PUT http://localhost:3000/users/edit
{
	"user_id": 1,
	"first_name": "Petro",
	"last_name": "Macomba"
}

Удаление пользователя
DELETE http://localhost:3000/users/delete/:id
http://localhost:3000/users/delete/12

Получение всех пользователей (с назначенными задачами)
GET http://localhost:3000/users/getAll


Работа с задачами:
Создание задачи
POST http://localhost:3000/tasks/add
{
	"title": "Title task",
	"description": "Description task",
	"userId": 13
}

Редактирование задачи
PUT http://localhost:3000/tasks/edit
{
	"id": 16,
	"title": "New title task",
	"description": "New description task"
}
    

Изменить статус задачи
PUT http://localhost:3000/tasks/setStatus
{
	"id": 16,
	"newStatus": "View"
}

Удаление задачи
DELETE http://localhost:3000/tasks/delete/16

Изменить пользователя на которого назначена задача
PUT http://localhost:3000/tasks/assignUser
{
	"id": 17,
	"newUserId": 2
}

Получение списка задач (с назначенными пользователями)
GET http://localhost:3000/tasks/getAll

Отфильтровав по status
GET http://localhost:3000/tasks/filterByStatus
{
	"status": "In Progress"
}

Отсортировав по id (по убыванию)
GET http://localhost:3000/tasks/getOrderByID


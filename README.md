<p><span style="font-weight: 400;">корень <a href="http://localhost:3000/">http://localhost:3000/</a></span></p>
<p><span style="font-weight: 400;">В основном параметры запроса передаются в json-формате в body запроса (за исключением некоторых).</span></p>
<p><span style="font-weight: 400;">Существует проверка на корректность заполнения необходимых параметров запроса Например, id должен быть числом или проверяется его наличие если необходимо.</span></p>
<p><span style="font-weight: 400;">Ответ возвращается в виде json с описанием ошибки: отсутствия необходимого параметра или некорректного его типа.</span></p>
<p><span style="font-weight: 400;">В случае успешного выполнения запроса будет возвращен json, в котором будет указано что выполняемое действие завершено успешно и сам объект, над которым происходило действие.</span></p>
<p><span style="font-weight: 400;">Ниже приведены запросы и примеры параметров.</span></p>
<p>&nbsp;</p>

master

<h2><strong>Работа с пользователями:</strong></h2>
<h3><span style="text-decoration: underline;"><span style="font-weight: 400;">Создание пользователя</span></span></h3>
<p style="padding-left: 30px;"><span style="font-weight: 400;">POST http://localhost:3000/users/add</span></p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">{</span></p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">"first_name": "Ivan",</span></p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">"last_name": "Macomba"</span></p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">}</span></p>
<p style="padding-left: 60px;">&nbsp;</p>
<h3><span style="text-decoration: underline;"><span style="font-weight: 400;">Редактирование пользователя</span></span></h3>
<p style="padding-left: 30px;"><span style="font-weight: 400;">PUT http://localhost:3000/users/edit</span></p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">{</span></p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">"user_id": 1,</span></p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">"first_name": "Petro",</span></p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">"last_name": "Macomba"</span></p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">}</span></p>
<p>&nbsp;</p>
<h3><span style="text-decoration: underline;"><span style="font-weight: 400;">Удаление пользователя</span></span></h3>
<p><span style="font-weight: 400;">Id удаляемого пользователя передается параметром в строке запроса</span></p>
<p style="padding-left: 30px;"><span style="font-weight: 400;">DELETE http://localhost:3000/users/delete/:id</span></p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">http://</span><span style="font-weight: 400;">localhost</span><span style="font-weight: 400;">:3000/users/delete/12</span></p>
<p>&nbsp;</p>
<h3><span style="text-decoration: underline;"><span style="font-weight: 400;">Получение всех пользователей (с назначенными задачами)</span></span></h3>
<p style="padding-left: 30px;"><span style="font-weight: 400;">GET http://localhost:3000/users/getAll</span></p>
<p><br /><br /></p>
<h2><strong>Работа с задачами:</strong></h2>
<h3><span style="text-decoration: underline;"><span style="font-weight: 400;">Создание задачи</span></span></h3>

<p style="padding-left: 30px;"><span style="font-weight: 400;">POST http://localhost:3000/tasks/add</span></h3>
<p style="padding-left: 60px;"><span style="font-weight: 400;">{</span></p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">"title": "Title task",</span></p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">"description": "Description task",</span></p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">"userId": 13</span></p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">}</span></p>
<p style="padding-left: 60px;">&nbsp;</p>
<h3><span style="text-decoration: underline;"><span style="font-weight: 400;">Редактирование задачи</span></span></h3>
<p style="padding-left: 30px;"><span style="font-weight: 400;">PUT http://localhost:3000/tasks/edit</span></h3>
<p style="padding-left: 60px;"><span style="font-weight: 400;">{</span></p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">"id": 16,</span></p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">"title": "New title task",</span></p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">"description": "New description task"</span></p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">}</span></p>
<p>&nbsp;</p>
<p><span style="text-decoration: underline;"><span style="font-weight: 400;">Изменить статус задачи</span></span></p>
<p style="padding-left: 30px;"><span style="font-weight: 400;">PUT http://localhost:3000/tasks/setStatus</span></h3>
<p style="padding-left: 60px;"><span style="font-weight: 400;">{</span></p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">"id": 16,</span></p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">"newStatus": "View"</span></p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">}</span></p>
<p>&nbsp;</p>
<h3><span style="text-decoration: underline;"><span style="font-weight: 400;">Удаление задачи</span></span></h3>
<p><span style="font-weight: 400;">Id удаляемого пользователя передается параметром в строке запроса</span></p>
<p style="padding-left: 30px;"><span style="font-weight: 400;">DELETE http://localhost:3000/tasks/delete/:id</span></h3>
<p style="padding-left: 60px;"><span style="font-weight: 400;">http://localhost:3000/tasks/delete/16</span></h3>
<h3>&nbsp;</h3>
<h3><span style="text-decoration: underline;"><span style="font-weight: 400;">Изменить пользователя на которого назначена задача</span></span></h3>
<p style="padding-left: 30px;"><span style="font-weight: 400;">PUT http://localhost:3000/tasks/assignUser</span></h3>
<p style="padding-left: 60px;"><span style="font-weight: 400;">{</span></p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">"id": 17,</span></p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">"newUserId": 2</span></p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">}</span></p>
<p>&nbsp;</p>
<h3><span style="text-decoration: underline;"><span style="font-weight: 400;">Получение списка задач (с назначенными пользователями)</span></span></h3>
<p><span style="font-weight: 400;">В результате запроса будет json со списком всех задач и пользователями под каждую задачу</span></p>
<p style="padding-left: 30px;"><span style="font-weight: 400;">GET http://localhost:3000/tasks/getAll</span></h3>
<p>&nbsp;</p>
<h3><span style="text-decoration: underline;"><span style="font-weight: 400;">Отфильтровав по status</span></span></h3>
<p><span style="font-weight: 400;">В результате запроса будет json со списком всех задач и пользователями под каждую задачу с отбором по статусу задачи из параметра запроса</span></p>
<p style="padding-left: 30px;"><span style="font-weight: 400;">GET http://localhost:3000/tasks/filterByStatus</span></h3>
<p style="padding-left: 60px;"><span style="font-weight: 400;">{</span></p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">"status": "In Progress"</span></p>
<p style="padding-left: 60px;"><span style="font-weight: 400;">}</span></p>
<p>&nbsp;</p>
<h3><span style="text-decoration: underline;"><span style="font-weight: 400;">Отсортировав по id (по убыванию)</span></span></h3>
<p><span style="font-weight: 400;">В результате запроса будет json со списком всех задач и пользователями под каждую задачу с сортировкой по ID по убыванию</span></p>
<p style="padding-left: 30px;"><span style="font-weight: 400;">GET http://localhost:3000/tasks/getOrderByID</span></h3>
<p>&nbsp;</p>

const TodoList = require('../models/todosModel');
const User = require('../models/usersModel');

module.exports = (app) => {

    app.get('/api/setupTodos', (req, res) => {

        const starterTodos = [
            {
                listName: 'For this afternoon',
                isComplete: 'false',
                todos: [
                    {
                        todo: 'Buy food, I\'m hungry!!!',
                        isDone: false
                    },
                    {
                        todo: 'Whash the car!',
                        isDone: true
                    }
                ]
            },
            {
                listName: 'Urgent!',
                isComplete: 'false',
                todos: [
                    {
                        todo: 'Call the doctor!',
                        isDone: false
                    },
                    {
                        todo: 'Clean bedroom',
                        isDone: true
                    },
                    {
                        todo: 'Walk the dog',
                        isDone: false
                    }

                ]
            },
        ];

        TodoList.create(starterTodos, (err, result) => {
            if (!err) {
                console.log('Success!');
                res.send(result);
            } else {
                console.log(`ERROR ${err}`);
            }
        });

        // Create initial users
        let bartolito = new User({
            email: 'bartolito@test.com',
            first: 'Bartolito',
            last: 'Gallo',
            username: 'bartolito',
            password: 'secret'
        });

        let bataraza = new User({
            email: 'bataraza@test.com',
            first: 'Bataraza',
            last: 'Gallina',
            username: 'bataraza',
            password: 'secret'
        });

        bartolito.save(function (err, user) {
            if (err) {
                console.log(`ERROR ${err}`);
            }
            else {
                console.log('User is saved and password is encrypted!!');
            }
        });

        bataraza.save(function (err, user) {
            if (err) {
                console.log(`ERROR ${err}`);
            }
            else {
                console.log('User is saved and password is encrypted!!');
            }
        });

    });
}
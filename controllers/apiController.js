const TodoList = require('../models/todosModel');

const bodyParser = require('body-parser');

const apiController = (app) => {
    // Config bodyparser middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Get all
    app.get('/api/todoList', (req, res) => {
        TodoList.find({}, (err, todos) => {
            if (err) console.log(JSON.stringify(err));
            res.send(todos);
        });
    });

    // Get list by id
    app.get('/api/todoList/:id', (req, res) => {
        TodoList.find({ _id: req.params.id }, (err, todo) => {
            if (err) console.log(JSON.stringify(err));
            res.send(todo);
        });
    });

    // Save list
    app.post('/api/todoList', (req, res) => {
        let todoList = new TodoList(
            {
                listName: req.body.listName,
                isComplete: false,
                isImportant: req.body.isImportant
            }
        );
        todoList.save(todoList, (err) => {
            if (err) res.send('ERRROR' + err);
            res.send({});
        });
    });

    app.put('/api/todoList/:id', (req, res) => {
        TodoList.findById(req.params.id, (err, doc) => {
            doc.listName = req.body.listName;
            doc.isComplete = req.body.isComplete;
            doc.todos = req.body.todos;
            doc.isImportant = req.body.isImportant;
            doc.save((err, doc) => {
                if (err) console.log(JSON.stringify(err));
                res.send({});
            });
        });
    });

    app.delete('/api/todoList/:id', (req, res) => {
        TodoList.findByIdAndRemove(req.params.id, (err, todo) => {
            if (err) console.log(JSON.stringify(err));
            res.send({});
        })
    });

    app.post('/api/login', (req, res) => {
        User.findOne({ 'username': req.body.username }, (err, user) => {
            if (err) {
                throw err;
            }
            else {
                res.send(user.authenticate(req.body.password)); // returns true 
            }
        });
    });
};

module.exports = apiController;
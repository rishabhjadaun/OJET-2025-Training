const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000;

app.use(cors());
app.use(express.json());

const todos = [
  { id: 1, task: 'Learn JavaScript', completed: false },
  { id: 2, task: 'Learn Node.js', completed: false },
  { id: 3, task: 'Build a REST API', completed: false }
];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).send('Todo not found');
  }
});

app.post('/todos', (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    task: req.body.task,
    completed: false
  };
  todos.push(newTodo);  
  res.status(201).json(newTodo); 
});

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
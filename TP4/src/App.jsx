import { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, AppBar, Toolbar, Card, CardContent, Grid } from '@mui/material';
import { Add } from '@mui/icons-material';
import './App.css';
import PendingTasks from './components/PendingTasks';
import CompletedTasks from './components/CompletedTasks';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editTodo, setEditTodo] = useState(null);
  const [editText, setEditText] = useState('');
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        const initialTodos = data.slice(0, 10).map(todo => ({
          ...todo,
          completed: false
        }));
        setTodos(initialTodos);
      });
  }, []);

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    const newTask = {
      id: todos.length + completedTodos.length + 1,
      title: newTodo,
      completed: false,
    };
    setTodos([...todos, newTask]);
    setNewTodo('');
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    setCompletedTodos(completedTodos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = (todo) => {
    setEditTodo(todo);
    setEditText(todo.title);
  };

  const handleUpdateTodo = () => {
    setTodos(todos.map(todo => 
      todo.id === editTodo.id ? { ...todo, title: editText } : todo
    ));
    setCompletedTodos(completedTodos.map(todo => 
      todo.id === editTodo.id ? { ...todo, title: editText } : todo
    ));
    setEditTodo(null);
    setEditText('');
  };

  const handleToggleComplete = (todo) => {
    if (todo.completed) {
      setCompletedTodos(completedTodos.filter(t => t.id !== todo.id));
      setTodos([...todos, { ...todo, completed: false }]);
    } else {
      setTodos(todos.filter(t => t.id !== todo.id));
      setCompletedTodos([...completedTodos, { ...todo, completed: true }]);
    }
  };

  return (
    <>
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
          <Typography variant="h6">
            Todo App
          </Typography>
          <Typography variant="h4" sx={{ flex: 1, textAlign: 'center'}}>
            Trabajo práctico Nº4 - Bouso Gonzalo
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom>
              Aplicacion de tareas
            </Typography>
            <TextField 
              label="Escribe tus tareas aqui" 
              variant="outlined" 
              fullWidth 
              value={newTodo} 
              onChange={(e) => setNewTodo(e.target.value)} 
              margin="normal"
            />
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleAddTodo}
              startIcon={<Add />}
              fullWidth
            >
              Añadir
            </Button>
          </CardContent>
        </Card>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CompletedTasks 
              completedTodos={completedTodos} 
              handleToggleComplete={handleToggleComplete}
              handleEditTodo={handleEditTodo}
              handleDeleteTodo={handleDeleteTodo}
              editTodo={editTodo}
              editText={editText}
              setEditText={setEditText}
              handleUpdateTodo={handleUpdateTodo}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PendingTasks 
              todos={todos} 
              handleToggleComplete={handleToggleComplete}
              handleEditTodo={handleEditTodo}
              handleDeleteTodo={handleDeleteTodo}
              editTodo={editTodo}
              editText={editText}
              setEditText={setEditText}
              handleUpdateTodo={handleUpdateTodo}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;

import React from 'react';
import { Card, CardContent, CardActions, ListItemText, IconButton, TextField, Button, Grid, Checkbox, Typography  } from '@mui/material';
import { Edit, Delete, CheckCircleOutline } from '@mui/icons-material';

const PendingTasks = ({ todos, handleToggleComplete, handleEditTodo, handleDeleteTodo, editTodo, editText, setEditText, handleUpdateTodo }) => {
  return (
    <>
      <Typography variant="h5" component="h2">
        Tareas pendientes
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {todos.map((todo) => (
          <Grid item xs={12} key={todo.id}>
            <Card>
              <CardContent>
                {editTodo?.id === todo.id ? (
                  <>
                    <TextField 
                      variant="outlined" 
                      fullWidth 
                      value={editText} 
                      onChange={(e) => setEditText(e.target.value)} 
                    />
                    <Button 
                      variant="contained" 
                      color="secondary" 
                      onClick={handleUpdateTodo}
                      sx={{ mt: 1 }}
                    >
                      Update
                    </Button>
                  </>
                ) : (
                  <>
                    <ListItemText primary={todo.title} />
                    <CardActions>
                      <Checkbox
                        checked={todo.completed}
                        onChange={() => handleToggleComplete(todo)}
                        icon={<CheckCircleOutline />}
                        checkedIcon={<CheckCircleOutline />}
                      />
                      <IconButton edge="end" aria-label="edit" onClick={() => handleEditTodo(todo)}>
                        <Edit />
                      </IconButton>
                      <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTodo(todo.id)}>
                        <Delete />
                      </IconButton>
                    </CardActions>
                  </>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PendingTasks;

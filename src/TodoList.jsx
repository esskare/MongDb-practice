import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    if (editingIndex !== null) {
      const newTasks = [...tasks];
      newTasks[editingIndex] = newTask;
      setTasks(newTasks);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, newTask]);
    }
    setNewTask('');
  };

  const handleEdit = (index) => {
    setNewTask(tasks[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Add a task" 
          value={newTask} 
          onChange={handleInputChange} 
        />
        <button type="submit">{editingIndex !== null ? 'Edit Task' : 'Add Task'}</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

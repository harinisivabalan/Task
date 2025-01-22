import React, { useState } from 'react';

const Todolist =() => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
          style={{ padding: '8px', marginRight: '8px', width: '200px' }}
        />
        <button onClick={handleAddTask} style={{ padding: '8px 12px' }}>
          Add Task
        </button>
      </div>
      <ul style={{ marginTop: '20px', paddingLeft: '0' }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              listStyle: 'none',
              marginBottom: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '5px',
              backgroundColor: '#f9f9f9',
            }}
          >
            {task}
            <button
              onClick={() => handleDeleteTask(index)}
              style={{
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '3px',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;

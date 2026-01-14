'use client';
import { useState } from 'react';
import './TaskForm.css';
import { v4 as uuidv4 } from 'uuid';
import { Priority, Task } from '@/app/types';

export default function TaskForm({
  onClose,
  onSave,
}: {
  onClose: () => void;
  onSave: (task: Task) => void;
}) {
  const [priority, setPriority] = useState<Priority>('medium');
  const [description, setDescription] = useState('');
  const addTaskDescription = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(e.target.value);

  const addTask = () => {
    if (!description.trim()) return;

    const newTask = {
      id: uuidv4(),
      text: description,
      priority: priority,
      completed: false,
    };

    onSave(newTask);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div>
          <h1 className="modal-title">For my future self</h1>
          <div className="modal-task-details">
            <input
              placeholder="Describe your task"
              onChange={addTaskDescription}
            />
            <div className="priority-group">
              <label className="prio-check">
                <input
                  type="radio"
                  name="priority"
                  checked={priority === 'high'}
                  onChange={() => setPriority('high')}
                />
                <span className="custom-check high"></span>
                High
              </label>
              <label className="prio-check">
                <input
                  type="radio"
                  name="priority"
                  checked={priority === 'medium'}
                  onChange={() => setPriority('medium')}
                />
                <span className="custom-check medium"></span>
                Medium
              </label>
              <label className="prio-check">
                <input
                  type="radio"
                  name="priority"
                  checked={priority === 'low'}
                  onChange={() => setPriority('low')}
                />
                <span className="custom-check low"></span>
                Low
              </label>
            </div>
          </div>
        </div>
        <div className="buttons-container">
          <button
            className="modal-cancel__button"
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="modal-add__button" type="button" onClick={addTask}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

'use client';
import './DayColumn.css';

import { DayColumnProps, Task } from '@/app/types';
import TaskForm from './TaskForm';
import { useState } from 'react';
import TaskItem from './TaskItem';

export default function DayColumn({
  name,
  number,
  tasks,
  onAddTask,
  onDeleteTask,
  onCompletedTask,
}: DayColumnProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModalForm() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <section className="column-container">
      <div className="column-header">
        <div className="day-name">
          {name} {number}
        </div>
        <button
          className="add-task-btn"
          onClick={(e) => {
            e.stopPropagation();
            openModalForm();
          }}
        >
          +
        </button>
      </div>
      <div>
        {tasks.map((task: Task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            text={task.text}
            priority={task.priority}
            completed={task.completed}
            onDelete={() => onDeleteTask(task.id)}
            onCompleted={() => onCompletedTask(task.id)}
          />
        ))}
      </div>

      {isModalOpen && (
        <TaskForm
          onClose={closeModal}
          onSave={(task: Task) => {
            onAddTask(task);
            closeModal();
          }}
        />
      )}
    </section>
  );
}

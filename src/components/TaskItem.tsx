'use client';

import { useState } from 'react';
import './TaskItem.css';

interface TaskItemProps {
  id: string;
  text: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
  onDelete: () => void; // 👈 Añade esto aquí
}

export default function TaskItem({
  text,
  priority,
  completed,
  onDelete,
}: TaskItemProps) {
  const [isDone, setIsDone] = useState(completed);

  const handleDeleteClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    if (onDelete) {
      onDelete();
    }
  };
  return (
    <div
      className={`task-item ${priority} ${isDone ? 'is-done' : ''}`}
      onClick={() => setIsDone(!isDone)}
    >
      <div className="task-checkbox">
        {isDone && <span className="check-mark">✓</span>}
      </div>
      <p className="task-text">{text}</p>

      <button className="delete-task-btn" onClick={handleDeleteClick}>
        x
      </button>
    </div>
  );
}

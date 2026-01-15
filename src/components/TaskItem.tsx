'use client';

import { useState } from 'react';
import './TaskItem.css';
import { TaskItemProps } from '@/app/types';

export default function TaskItem({
  text,
  priority,
  completed,
  onDelete,
  onCompleted,
}: TaskItemProps) {
  const handleDeleteClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    if (onDelete) {
      onDelete();
    }
  };

  const handleCompletedTask = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    if (onCompleted) {
      onCompleted();
    }
  };

  return (
    <div
      className={`task-item ${priority} ${completed ? 'is-done' : ''}`}
      onClick={handleCompletedTask}
    >
      <div className="task-checkbox">
        {completed && <span className="check-mark">✓</span>}
      </div>
      <p className="task-text">{text}</p>

      <button className="delete-task-btn" onClick={handleDeleteClick}>
        x
      </button>
    </div>
  );
}

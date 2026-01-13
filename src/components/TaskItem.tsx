import { useState } from 'react';
import './TaskItem.css';
import { Task } from '@/app/types';

export default function TaskItem({ text, priority, completed }: Task) {
  const [isDone, setIsDone] = useState(completed);

  return (
    <div
      className={`task-item ${priority} ${isDone ? 'is-done' : ''}`}
      onClick={() => setIsDone(!isDone)}
    >
      <div className="task-checkbox">
        {isDone && <span className="check-mark">✓</span>}
      </div>
      <p className="task-text">{text}</p>
    </div>
  );
}

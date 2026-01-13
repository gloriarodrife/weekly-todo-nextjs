'use client';
import './DayColumn.css';

import { Day } from '@/app/types';
import TaskForm from './TaskForm';
import { useState } from 'react';
import TaskItem from './TaskItem';

export default function DayColumn({ name, number }: Day) {
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
        <TaskItem text={'Description'} priority={'high'} completed={false} />
        <TaskItem text={'Description'} priority={'medium'} completed={false} />
        <TaskItem text={'Description'} priority={'low'} completed={true} />
      </div>

      {isModalOpen && <TaskForm onClose={closeModal} />}
    </section>
  );
}

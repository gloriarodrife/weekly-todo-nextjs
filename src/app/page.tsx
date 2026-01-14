'use client';

import { useState } from 'react';
import './page.css';
import { DayData, DayName, Task, WeeklyTasks } from './types';
import DayColumn from '@/components/DayColumn';

function generateCurrentWeek(): DayData[] {
  const result: DayData[] = [];
  const today = new Date();
  const dayNum = today.getDay();

  const difference = dayNum === 0 ? 6 : dayNum - 1;
  today.setDate(today.getDate() - difference);

  for (let i = 0; i < 7; ++i) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const dayObject: DayData = {
      name: date.toLocaleDateString('en-US', { weekday: 'long' }) as DayName,
      number: date.getDate(),
    };

    result.push(dayObject);
  }

  return result;
}

const initialTasks: WeeklyTasks = {
  Monday: [
    { id: '1', text: 'Diseñar el Header', priority: 'high', completed: true },
    {
      id: '2',
      text: 'Configurar fuentes',
      priority: 'medium',
      completed: false,
    },
  ],
  Tuesday: [
    { id: '3', text: 'Reunión de equipo', priority: 'high', completed: false },
    {
      id: '4',
      text: 'Arreglar bugs del modal',
      priority: 'low',
      completed: true,
    },
  ],
  Wednesday: [
    { id: '5', text: 'Ir al gimnasio', priority: 'low', completed: false },
    {
      id: '6',
      text: 'Aprender TypeScript',
      priority: 'medium',
      completed: false,
    },
  ],
  Thursday: [
    { id: '7', text: 'Comprar café', priority: 'high', completed: false },
  ],
  Friday: [
    { id: '8', text: 'Cena con amigos', priority: 'low', completed: false },
    {
      id: '9',
      text: 'Terminar checklist',
      priority: 'medium',
      completed: true,
    },
  ],
  Saturday: [],
  Sunday: [
    {
      id: '10',
      text: 'Planificar semana',
      priority: 'medium',
      completed: false,
    },
  ],
};

export default function Home() {
  const currentWeek = generateCurrentWeek();
  const user = 'Gloria';

  const [tasksList, setTasksList] = useState<WeeklyTasks>(initialTasks);
  const addTaskToDay = (dayName: DayName, newTask: Task) => {
    setTasksList((prev) => ({
      ...prev,
      [dayName]: [...prev[dayName], newTask],
    }));
  };

  const deleteTaskFromDay = (dayName: DayName, taskId: string) => {
    setTasksList((prev) => ({
      ...prev,
      [dayName]: prev[dayName].filter((task) => task.id !== taskId),
    }));
  };

  return (
    <main style={{ padding: '20px' }}>
      <h1 className="title"> WEEKLY CHECKLIST - {user}</h1>

      <div className="board-layout">
        {currentWeek.map((day) => (
          <DayColumn
            key={day.name}
            name={day.name}
            number={day.number}
            tasks={tasksList[day.name]}
            onAddTask={(task: Task) => addTaskToDay(day.name, task)}
            onDeleteTask={(taskId: string) =>
              deleteTaskFromDay(day.name, taskId)
            }
          />
        ))}
      </div>
    </main>
  );
}

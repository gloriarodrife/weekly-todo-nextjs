'use client';

import { useEffect, useState } from 'react';
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

export default function Home() {
  const currentWeek = generateCurrentWeek();
  const STORAGE_NAME = 'user-name';
  const STORAGE_KEY = 'weekly-tasks';
  const [tasksList, setTasksList] = useState<WeeklyTasks>({} as WeeklyTasks);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedTasks = localStorage.getItem(STORAGE_KEY);
    const storedName = localStorage.getItem(STORAGE_NAME);

    if (storedTasks) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setTasksList(JSON.parse(storedTasks));
    }

    if (storedName) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setUserName(JSON.parse(storedName));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasksList));
    localStorage.setItem(STORAGE_NAME, JSON.stringify(userName));
  }, [tasksList, userName]);

  const addTaskToDay = (dayName: DayName, newTask: Task) => {
    setTasksList((prev) => ({
      ...prev,
      [dayName]: [...(prev[dayName] || []), newTask],
    }));
  };

  const deleteTaskFromDay = (dayName: DayName, taskId: string) => {
    setTasksList((prev) => ({
      ...prev,
      [dayName]: (prev[dayName] || []).filter((task) => task.id !== taskId),
    }));
  };

  const changeStateTask = (dayName: DayName, taskId: string) => {
    setTasksList((prev) => ({
      ...prev,
      [dayName]: (prev[dayName] || []).map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    }));
  };

  const addName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  return (
    <main style={{ padding: '20px' }}>
      <div className="title-container">
        <div className="title">WEEKLY CHECKLIST -</div>
        <input placeholder="Name" onChange={addName} value={userName} />
      </div>

      <div className="board-layout">
        {currentWeek.map((day) => (
          <DayColumn
            key={day.name}
            name={day.name}
            number={day.number}
            tasks={tasksList[day.name] || []}
            onAddTask={(task: Task) => addTaskToDay(day.name, task)}
            onDeleteTask={(taskId: string) =>
              deleteTaskFromDay(day.name, taskId)
            }
            onCompletedTask={(taskId: string) =>
              changeStateTask(day.name, taskId)
            }
          />
        ))}
      </div>
    </main>
  );
}

'use client';

import { useState } from 'react';
import './page.css';
import { Day, DayName } from './types';
import DayColumn from '@/components/DayColumn';

function generateCurrentWeek(): Day[] {
  const result: Day[] = [];
  const today = new Date();
  const dayNum = today.getDay();

  const difference = dayNum === 0 ? 6 : dayNum - 1;
  today.setDate(today.getDate() - difference);

  for (let i = 0; i < 7; ++i) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const dayObject: Day = {
      name: date.toLocaleDateString('en-US', { weekday: 'long' }) as DayName,
      number: date.getDate(),
    };

    result.push(dayObject);
  }

  return result;
}

export default function Home() {
  const currentWeek = generateCurrentWeek();
  const user = 'Gloria';

  return (
    <main style={{ padding: '20px' }}>
      <h1 className="title"> WEEKLY CHECKLIST - {user}</h1>

      <div className="board-layout">
        {currentWeek.map((day) => (
          <DayColumn key={day.name} name={day.name} number={day.number} />
        ))}
      </div>
    </main>
  );
}

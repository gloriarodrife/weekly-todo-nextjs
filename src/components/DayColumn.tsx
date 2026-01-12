'use client';
import './DayColumn.css';

import { Day } from '@/app/types';

export default function DayColumn({ name, number }: Day) {
  return (
    <section>
      <h1>{name}</h1>
      <h2>{number}</h2>
      <div>Tareas...</div>
    </section>
  );
}

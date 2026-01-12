'use client';
import './DayColumn.css';

import { Day } from '@/app/types';

export default function DayColumn({ name, number }: Day) {
  return (
    <section className="column-container">
      <div className="column-header">
        <div className="day-name">
          {name} {number}
        </div>
        <button className="add-task-btn">+</button>
      </div>
      <div>
        <div> task</div>
        <div> task</div>
        <div> task</div>
        <div> task</div>
        <div> task</div>
        <div> task</div>
        <div> task</div>
      </div>
    </section>
  );
}

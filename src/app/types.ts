export type Priority = 'Low' | 'Medium' | 'High';
export type DayName =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: Priority;
  day: DayName;
}

export interface Day {
  name: DayName;
  number: number;
}

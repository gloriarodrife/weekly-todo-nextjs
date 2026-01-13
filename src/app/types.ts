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
  text: string;
  completed: boolean;
  priority: Priority;
}

export interface Day {
  name: DayName;
  number: number;
}

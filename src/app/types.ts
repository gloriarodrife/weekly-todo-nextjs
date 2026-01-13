export type Priority = 'low' | 'medium' | 'high';
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
  text: string;
  completed: boolean;
  priority: Priority;
  onDelete?(): void;
}

export interface Day {
  name: DayName;
  number: number;
}

export interface WeeklyTasks {
  [day: string]: Task[];
}

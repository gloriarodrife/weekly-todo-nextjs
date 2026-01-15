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
}

export interface DayData {
  name: DayName;
  number: number;
}

export interface DayColumnProps extends DayData {
  tasks: Task[];
  onAddTask: (task: Task) => void;
  onDeleteTask: (taskId: string) => void;
  onCompletedTask: (taskId: string) => void;
}

export type WeeklyTasks = {
  [key in DayName]: Task[];
};

export interface TaskItemProps {
  id: string;
  text: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
  onDelete: () => void;
  onCompleted: () => void;
}

export interface Todo {
  id: number;
  title: string;
  description: string | null;
  finished: boolean;
  createTime: Date;
  updateTime: Date | null;
  doneTime: Date | null;
}
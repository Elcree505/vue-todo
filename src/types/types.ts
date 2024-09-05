export interface Todo {
  id: number;
  title: string;
  finished: boolean;
  createTime: Date;
  updateTime: Date | null;
  doneTime: Date | null;
}

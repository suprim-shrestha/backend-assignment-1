export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export interface QueryTodo {
  search?: string;
  completed?: string;
}

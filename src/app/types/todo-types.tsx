export interface Todo {
  id: number;
  title: string;
  description: string;
  items: Item[];
}

export interface Item {
  todoId: number;
  itemId: number;
  title: string;
  completed: boolean;
  created: Date;
  Updated: Date;
}

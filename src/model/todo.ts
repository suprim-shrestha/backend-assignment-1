import { ITodo } from "../interface/todo";

const todos: ITodo[] = [
  {
    id: 1,
    title: "Task 1",
    completed: false,
  },
  {
    id: 2,
    title: "Task 2",
    completed: false,
  },
  {
    id: 3,
    title: "Task 3",
    completed: false,
  },
];

export function getTodos() {
  return todos;
}

export function getTodoById(id: number) {
  return todos.find((todo) => todo.id === id) || null;
}

export function createTodo(title: string) {
  const newTodo = {
    id: todos[todos.length - 1].id + 1,
    title,
    completed: false,
  };

  todos.push(newTodo);

  return newTodo;
}

export function updateTodoById(id: number) {
  const todo = getTodoById(id);
  if (!todo) return null;

  todo.completed = !todo.completed;

  return todo;
}

export function deleteTodoById(id: number) {
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) return null;

  const deletedTodo = todos.splice(todoIndex, 1);

  return deletedTodo;
}

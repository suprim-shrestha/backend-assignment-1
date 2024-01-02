import { ITodo, QueryTodo } from "../interface/todo";

const todos: ITodo[] = [
  {
    id: 1,
    title: "Task 1 of User 1",
    completed: false,
    userId: 1,
  },
  {
    id: 2,
    title: "Task 2 of User 1",
    completed: false,
    userId: 1,
  },
  {
    id: 3,
    title: "Task 1 of User 2",
    completed: false,
    userId: 2,
  },
  {
    id: 4,
    title: "Task 1 of User 3",
    completed: false,
    userId: 3,
  },
];

export function getTodos(userId: number, query: QueryTodo) {
  const { search, completed } = query;
  const completedBool = completed === "true" ? true : false;
  return todos.filter(
    (todo) =>
      todo.userId === userId &&
      (search
        ? todo.title.toLowerCase().includes(search.toLowerCase())
        : true) &&
      (completed ? todo.completed === completedBool : true)
  );
}

export function getTodoById(id: number, userId: number) {
  const filteredTodo = todos.filter((todo) => todo.userId === userId);
  return filteredTodo.find((todo) => todo.id === id);
}

export function createTodo(title: string, userId: number) {
  const newTodo = {
    id: todos[todos.length - 1].id + 1 || 1,
    title,
    completed: false,
    userId,
  };

  todos.push(newTodo);

  return newTodo;
}

export function updateTodoById(id: number, userId: number) {
  const todo = getTodoById(id, userId);
  if (!todo) return null;

  todo.completed = !todo.completed;

  return todo;
}

export function deleteTodoById(id: number, userId: number) {
  const todoToDelete = getTodoById(id, userId);
  const todoIndex = todos.findIndex((todo) => todoToDelete === todo);

  if (todoIndex === -1) return null;

  const deletedTodo = todos.splice(todoIndex, 1);

  return deletedTodo;
}

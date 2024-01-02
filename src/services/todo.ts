import NotFoundError from "../error/notFoundError";
import { QueryTodo } from "../interface/todo";
import * as todoModel from "../model/todo";

export async function createTodo(title: string, userId: number) {
  return todoModel.createTodo(title, userId);
}

export async function getTodos(userId: number, query: QueryTodo) {
  return todoModel.getTodos(userId, query);
}

export async function getTodoById(id: number, userId: number) {
  const todo = todoModel.getTodoById(id, userId);

  if (!todo) {
    throw new NotFoundError(`Todo with id ${id} Not Found`);
  }

  return todo;
}

export async function updateTodoById(id: number, userId: number) {
  const todo = todoModel.updateTodoById(id, userId);

  if (!todo) {
    throw new NotFoundError(`Todo with id ${id} Not Found`);
  }

  return todo;
}

export async function deleteTodoById(id: number, userId: number) {
  const todo = todoModel.deleteTodoById(id, userId);

  if (!todo) {
    throw new NotFoundError(`Todo with id ${id} Not Found`);
  }

  return todo;
}

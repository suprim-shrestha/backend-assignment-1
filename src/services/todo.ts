import * as todoModel from "../model/todo";

export async function createTodo(title: string, userId: number) {
  return todoModel.createTodo(title, userId);
}

export async function getTodos(userId: number) {
  return todoModel.getTodos(userId);
}

export async function getTodoById(id: number, userId: number) {
  return todoModel.getTodoById(id, userId);
}

export async function updateTodoById(id: number, userId: number) {
  return todoModel.updateTodoById(id, userId);
}

export async function deleteTodoById(id: number, userId: number) {
  return todoModel.deleteTodoById(id, userId);
}

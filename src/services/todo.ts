import * as todoModel from "../model/todo";

export async function createTodo(title: string) {
  return todoModel.createTodo(title);
}

export async function getTodos() {
  return todoModel.getTodos();
}

export async function getTodoById(id: number) {
  return todoModel.getTodoById(id);
}

export async function updateTodoById(id: number) {
  return todoModel.updateTodoById(id);
}

export async function deleteTodoById(id: number) {
  return todoModel.deleteTodoById(id);
}

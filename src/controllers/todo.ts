import { Request, Response } from "express";

import * as todoService from "../services/todo";

export async function createTodo(req: any, res: Response) {
  const { title } = req.body;
  const user = req.user;

  const todo = await todoService.createTodo(title, user.id);

  res.status(201).json(todo);
}

export async function getTodos(req: any, res: Response) {
  const user = req.user;
  const todos = await todoService.getTodos(user.id);

  res.json(todos);
}

export async function getTodoById(req: any, res: Response) {
  const user = req.user;
  const { id } = req.params;

  const todo = await todoService.getTodoById(parseInt(id), user.id);

  if (!todo) {
    return res.status(404).json({ message: `Todo with id: ${id} not found` });
  }

  res.json(todo);
}

export async function updateTodoById(req: any, res: Response) {
  const user = req.user;
  const { id } = req.params;

  const todo = await todoService.updateTodoById(parseInt(id), user.id);

  if (!todo) {
    return res.status(404).json({ message: `Todo with id: ${id} not found` });
  }

  res.json(todo);
}

export async function deleteTodoById(req: any, res: Response) {
  const user = req.user;
  const { id } = req.params;

  const todo = await todoService.deleteTodoById(parseInt(id), user.id);

  if (!todo) {
    return res.status(404).json({ message: `Todo with id: ${id} not found` });
  }

  res.json({ deletedTodo: todo });
}

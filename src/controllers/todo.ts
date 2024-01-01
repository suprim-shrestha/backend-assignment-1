import { Request, Response } from "express";

import * as todoService from "../services/todo";

export async function createTodo(req: Request, res: Response) {
  const { title } = req.body;

  const todo = await todoService.createTodo(title);

  res.status(201).json(todo);
}

export async function getTodos(req: Request, res: Response) {
  const todos = await todoService.getTodos();

  res.json(todos);
}

export async function getTodoById(req: Request, res: Response) {
  const { id } = req.params;

  const todo = await todoService.getTodoById(parseInt(id));

  if (!todo) {
    return res.status(404).json({ message: `Todo with id: ${id} not found` });
  }

  res.json(todo);
}

export async function updateTodoById(req: Request, res: Response) {
  const { id } = req.params;

  const todo = await todoService.updateTodoById(parseInt(id));

  if (!todo) {
    return res.status(404).json({ message: `Todo with id: ${id} not found` });
  }

  res.json(todo);
}

export async function deleteTodoById(req: Request, res: Response) {
  const { id } = req.params;

  const todo = await todoService.deleteTodoById(parseInt(id));

  if (!todo) {
    return res.status(404).json({ message: `Todo with id: ${id} not found` });
  }

  res.json({ deletedTodo: todo });
}

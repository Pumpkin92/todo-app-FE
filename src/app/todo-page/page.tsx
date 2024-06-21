"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Item, Todo } from "../types/todo-types";
import { deleteTodo, deleteTodoItem, getTodos } from "../apiUtils";

export default function todoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await getTodos();
        const { data } = response;
        setTodos(data);
        setIsLoading(false);
      } catch (error) {
        <p>Oops something went wrong, please try again later</p>;
      }
    };
    fetchTodos();
  }, [fetched]);

  function handleTodoDelete(id: number) {
    const deleteTodoList = async () => {
      try {
        await deleteTodo(id);
      } catch (error) {
        <p>Oops something went wrong, please try again later</p>;
      }
    };
    deleteTodoList();
    setFetched(!fetched);
  }

  function handleItemDelete(id: number) {
    const deleteTodoListItem = async () => {
      try {
        console.log(fetched);
        await deleteTodoItem(id);
      } catch (error) {
        <p>Oops something went wrong, please try again later</p>;
      }
    };
    deleteTodoListItem();
    setFetched(!fetched);
  }

  return isLoading ? (
    <h1>loading...</h1>
  ) : (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Here are your todos</h1>
      {todos.map((todo: Todo) => (
        <div>
          <section key={todo.id}>
            <p>List Title: {todo.title}</p>
            <p>Description: {todo.description}</p>
            <button onClick={() => handleTodoDelete(todo.id)}>delete</button>
          </section>
          <ul>
            {todo.items.map((item: Item) => (
              <section key={item.todoId}>
                <li>Item: {item.title}</li>
                <button onClick={() => handleItemDelete(item.todoId)}>
                  delete
                </button>
              </section>
            ))}
          </ul>
        </div>
      ))}
      <Link href={"/"}>Home</Link>
    </main>
  );
}

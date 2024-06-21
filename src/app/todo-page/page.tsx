"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Item, Todo } from "../types/todo-types";
import { deleteTodo, deleteTodoItem, getTodos } from "../apiUtils";

export default function todoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
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
    <main className="flex min-h-screen flex-col items-center md:justify-between p-10">
      <h1 className="text-3xl font-bold ">Here are your todos!</h1>
      <div className="h-56 md:grid grid-cols-3 gap-4 content-start pb-10">
        {todos.map((todo: Todo) => (
          <div className="p-6 max-w-lg mx-auto rounded-xl shadow-lg  space-x-4">
            <section className="pb-10" key={todo.id}>
              <div>
                <p className="text-lg font-bold flex justify-center ">
                  List Title: {todo.title}
                </p>
                <p className="text-md font-bold flex justify-center ">
                  Description: {todo.description}
                </p>
                <button
                  className="text-xs p-2 max-w-sm mx-auto rounded-xl shadow-lg space-x-4 flex justify-center "
                  onClick={() => handleTodoDelete(todo.id)}
                >
                  Delete
                </button>
              </div>
            </section>
            <div>
              <ul>
                {todo.items.map((item: Item) => (
                  <section
                    className="justify-self-start pb-4"
                    key={item.todoId}
                  >
                    <li className="pb-2">Item: {item.title}</li>
                    <button
                      className="text-xs p-2 max-w-sm mx-auto rounded-xl shadow-lg  space-x-4"
                      onClick={() => handleItemDelete(item.todoId)}
                    >
                      Delete
                    </button>
                  </section>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <Link href={"/"}>Home</Link>
    </main>
  );
}

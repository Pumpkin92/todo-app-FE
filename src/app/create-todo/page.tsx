"use client";

import { useState } from "react";
import { createTodoItem, createTodoList } from "../apiUtils";
import Link from "next/link";

export default function createTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todoListId, setTodoListId] = useState();
  const [created, setCreated] = useState(false);
  const [todo, setTodo] = useState("");

  function handleNewTodo(title: string, description: string) {
    const createNewTodoList = async () => {
      try {
        const response = await createTodoList(title, description);
        const { data } = response;
        setTodoListId(data.id);
        setCreated(true);
      } catch (error) {
        <p>Oops something went wrong, please try again later</p>;
      }
    };
    createNewTodoList();
  }

  function handleTitleChange(event: any) {
    const value = event.target.value;
    setTitle(value);
  }

  function handleDescriptionChange(event: any) {
    const value = event.target.value;
    setDescription(value);
  }

  function handleItemChange(event: any) {
    const value = event.target.value;
    setTodo(value);
  }

  function handleNewItem(title: string, todoListId: any) {
    const createNewItem = async () => {
      try {
        const response = await createTodoItem(title, todoListId);
        setTodo("");
      } catch (error) {
        <p>Oops something went wrong, please try again later</p>;
      }
    };
    createNewItem();
  }

  return created ? (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Lets add some items</h1>
      <form>
        <label htmlFor="title">Todo Item</label>
        <input
          type="text"
          id="title"
          value={todo}
          onChange={handleItemChange}
        />
      </form>
      <button onClick={() => handleNewItem(title, todoListId)}>Add</button>
      <Link href={"/"}>Finished?</Link>
    </main>
  ) : (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Create a todo list!</h1>
      <form>
        <label htmlFor="title">title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
        <label htmlFor="description">description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </form>
      <button onClick={() => handleNewTodo(title, description)}>Submit</button>
    </main>
  );
}

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
    <main className="flex min-h-screen flex-col items-center space-y-10 p-24">
      <h1 className="text-3xl font-bold ">Lets add some items...</h1>
      <form>
        <div className="flex justify-center">
          <label htmlFor="title">Todo Item:</label>
        </div>
        <input
          className="text-black"
          type="text"
          id="title"
          value={todo}
          onChange={handleItemChange}
        />
      </form>
      <button
        onClick={() => handleNewItem(todo, todoListId)}
        className="font-medium p-6 max-w-sm mx-auto rounded-xl shadow-lg flex items-center space-x-4"
      >
        Add
      </button>
      <Link
        href={"/"}
        className="font-medium p-6 max-w-sm mx-auto rounded-xl shadow-lg flex items-center space-x-4"
      >
        Finished?
      </Link>
    </main>
  ) : (
    <main className="flex min-h-screen flex-col items-center space-y-10 p-24">
      <h1 className="text-3xl font-bold">Create a todo list!</h1>
      <form>
        <div className="p-6 max-w-sm mx-auto rounded-xl shadow-lg space-y-2 mb-8">
          <div className="flex justify-center">
            <label htmlFor="title">Title of your List:</label>
          </div>
          <div className="justify-center">
            <input
              className="text-black"
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
        </div>
        <div className="p-6 max-w-sm mx-auto rounded-xl shadow-lg space-y-2">
          <div className="flex justify-center">
            <label htmlFor="description">Description:</label>
          </div>
          <div className="flex justify-center">
            <input
              className="text-black"
              type="text"
              id="description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
        </div>
      </form>
      <button
        className="font-medium p-6 max-w-sm mx-auto rounded-xl shadow-lg flex items-center space-x-4"
        onClick={() => handleNewTodo(title, description)}
      >
        Submit
      </button>
    </main>
  );
}

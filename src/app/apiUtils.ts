import axios from "axios";
import { log } from "console";

const client = axios.create({
  baseURL: "https://todo-app-be-1.onrender.com",
});

interface Response {
  data: any | object;
}

export const getTodos = () => {
  return client.get("/todos").then((response: Response) => {
    return response["data"];
  });
};

export const deleteTodo = (id: number) => {
  return client.delete(`/todos/${id}`).then((response) => {
    if (response.status !== 204) {
      return Promise.reject({
        status: response.status,
        msg: response.statusText,
      });
    }
    return response;
  });
};

export const deleteTodoItem = (id: number) => {
  return client.delete(`/item/${id}`).then((response) => {
    return response;
  });
};

export const createTodoList = (title: string, description: string) => {
  return client
    .post("todos/create", { title, description })
    .then((response) => {
      return response["data"];
    });
};

export const createTodoItem = (title: string, todoListId: number) => {
  return client.post(`item/${todoListId}`, { title }).then((response) => {
    // return response["data"];
    console.log(response);
  });
};

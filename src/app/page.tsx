import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>To-Do List App</h1>
      </div>
      <div>
        <h2>
          <Link href={`/create-todo`}>Create a new To-Do List</Link>
        </h2>
      </div>
      <div>
        <Link href={`/todo-page`}>See your todo lists</Link>
      </div>
    </main>
  );
}

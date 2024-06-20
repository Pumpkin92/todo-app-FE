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
        <h3>Your To-Do Lists</h3>
        <p>To-Do 1</p>
        <p>To-Do 2</p>
        <p>To-Do 3</p>
      </div>
    </main>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-8 p-24">
      <div>
        <h1 className="text-3xl font-bold ">Your To-Do Lists</h1>
      </div>
      <div className="p-6 max-w-sm mx-auto  rounded-xl shadow-lg flex items-center space-x-4">
        <h2 className="text-xl font-medium ">
          <Link href={`/create-todo`}>Create a new To-Do List</Link>
        </h2>
      </div>
      <div className="p-6 max-w-sm mx-auto  rounded-xl shadow-lg flex items-center space-x-4">
        <h2 className="text-xl font-medium ">
          <Link href={`/todo-page`}>See your To-Do lists</Link>
        </h2>
      </div>
    </main>
  );
}

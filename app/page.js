import Image from "next/image";
import NewUserForm from "./components/NewUserForm";
import UserList from "./components/UserList";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-col flex-1 py-30 px-30 max-w-full items-center">
       <div>

        <h1 className=" text-cyan-500 font-extrabold">User Registration</h1>
      
        <NewUserForm />

        <UserList />

      </div>

      </main>
    </div>
  );
}

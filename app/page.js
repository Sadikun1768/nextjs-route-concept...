import Image from "next/image";
import NewUserForm from "./components/NewUserForm";
import UserList from "./components/UserList";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="">


      <Navbar />



      <h1 className=" text-cyan-500 font-extrabold">User Registration</h1>

      <NewUserForm />

      <UserList />




    </div>
  );
}

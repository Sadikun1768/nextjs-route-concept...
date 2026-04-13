import { connect } from "mongoose";

export default function NewUserForm() {

    const addUser = async(formData) => {

        "use server";

        // console.log(formData.get('name'));
        // console.log(formData.get('email'));

        const name = formData.get("name");
        const email = formData.get("email");

        const UserData = {
            name,
            email,
        }

        //ata database e save korar jonnno akta function connectMongo()..
        await connectMongo();

        //insert into database..
     
    }

    return (
        <form action={addUser}>
            <h4 className="text-amber-400">NewUserForm Component</h4>
            <div>
                <input
                    type="text"
                    className="max-w-full p-2 mb-2 border border-gray-400 rounded"
                    name="name"
                    placeholder="Enter Your Name Here"
                />
            </div>
            <div>
                <input
                    email="text"
                    className="max-w-full p-2 mb-2 border border-gray-400 rounded"
                    name="email"
                    placeholder="Enter Your Email Here"
                />
            </div>
            <div>
                <button type="submit" className="text-cyan-500 bg-amber-50 p-2 rounded w-full">Submit</button>
            </div>
        </form>
    );
}
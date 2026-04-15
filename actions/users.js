
"use server";

import connectMongo from "@/dbConnect/connectMongo";
import User from "@/models/user";
import { revalidatePath } from "next/cache";

export const addUser = async (formData) => {

    // console.log(formData.get('name'));
    // console.log(formData.get('email'));

    const name = formData.get("name");
    const email = formData.get("email");

    const userData = {
        name,
        email,
    }

    //ata database e save korar jonnno akta function connectMongo()..
    try {
        await connectMongo();
        //insert into database..
        await new User(userData).save();
        //revalidate users
        revalidatePath("/");


    } catch (err) {
        console.log(err);
    }


    // ata data astese kina check korar jonno

    //   const res =  await new User(UserData).save();
    // console.log("SaveData:",res);

    // await new User(UserData).save();
}


export const getUsers = async () => {

    try {
        await connectMongo();

        //get users

        const users = await User.find();

        return users;

    } catch (err) {

        console.log(err);
    }


}
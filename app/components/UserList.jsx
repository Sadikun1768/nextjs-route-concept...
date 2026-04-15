
import { getUsers } from "@/actions/users";

export default async function UserList() {
    const users = await getUsers();
    return (
        <div>
            <h4 className="text-lime-500">UserList</h4>
            {users?.length > 0 ? (
                <div className="text-cyan-600">
                    {users.map((user, index) => (

                        <p key={user._id}
                        className="flex justify-between border-b">

                        {index + 1}: {user.name} - {user.email}

                        </p>
                    ))}
                </div>
            ) : (
                <div className="text-orange-700">No User Found!!</div>

            )}

        </div>
    );
}
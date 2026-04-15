//ata 
import mongoose from "mongoose"
// schema create korte hbe 
const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "anonymous",
        min: 2,
        max: 100,
    },

    //mongoes email validation regex akhane teke email er match ta niyese 

    email: {
        type: String,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        min: 2,
        max: 100,
    }
})

//akhane altimately akta model banate hbe model banano jonno

// ai line ta first user model teke kidu pabe na tkn mongoose.model("User",UsersSchema) line teke nibe jdi pai tahole [mongoose.models.User] ai line teke nibe
const User = mongoose.models.User || mongoose.model("User",UsersSchema);

export default User;






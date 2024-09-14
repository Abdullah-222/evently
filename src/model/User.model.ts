import mongoose,{Document,Schema} from "mongoose";

export interface User extends Document{    
    name: string;
    email: string;
    password: string;
}
const UserSchema :Schema<User> = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"Name is required"],
        trim: true,
        unique: true
    },
    email:{
        type: String,
        required: [true,"Email is required"],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']    
    },
    password:{
        type: String,
        required: [true,"Password is required"]
    }
    
},{
    timestamps: true
})

const UserModel=mongoose.model<User>("User",UserSchema);
export default UserModel;
import { handleSignOut, handleGoogleSignIn } from "../firebase/firebase-auth"
import Header from "./Header"
import { FaGoogle } from "react-icons/fa";

export default function Login(){
    return(
        <div className="p-10">
            <Header/>
            
            <div className="mt-10 w-[70%] mx-auto ">
                <form className="grid gap-5">
                    <div className="grid gap-3">
                        <label className="font-medium">
                            Username
                        </label>
                        <input 
                            placeholder="Enter Username"
                            name="username"
                            className="outline-none border-[1px] border-black px-2 py-1 h-10"
                        />
                    </div>
                    <div className="grid gap-3">
                        <label className="font-medium">Password</label>
                        <input 
                            placeholder="Password"
                            name="password"
                            className="outline-none border-[1px] border-black px-2 py-1 h-10"
                        />
                    </div>
                    <button className="bg-black text-center p-5 text-white mt-5 font-medium">Submit</button>
                </form>   
                <div className="flex mt-5 items-center gap-5">
                    <hr className="w-[45%] border-black border-0 border-t-[1px] "></hr>
                    <p className="font-medium">or</p>
                    <hr className="w-[45%] border-black border-0 border-t-[1px] "></hr>
                </div> 
                <div className="mt-5">
                    <button className="w-full flex gap-5 bg-black text-white justify-center p-5 items-center font-medium">
                        <FaGoogle className="text-2xl" />
                        <p>Sign-in with Google</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
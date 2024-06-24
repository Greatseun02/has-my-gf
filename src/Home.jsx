import { useEffect } from "react";
import { useNavigate } from "react-router-dom"


export default function Home(){
    let navigate = useNavigate();
    useEffect(()=>{
        navigate("/login")
    }, [])
    
    return (
        <div>
            <p>Hello World</p>
        </div>
    )
}
import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidateData } from "../utils/validate";
const Login = () =>{
    const [isSignUp, setIsSignUp] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const handleToggle = ()=>{
        setIsSignUp(!isSignUp);
        setErrorMessage(null);
    }
    const handleButtonClick = () =>{
        setErrorMessage(checkValidateData(name.current, email.current.value, password.current.value));
    }
    return(
        <div >
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg"
                alt="backgroundImage"/>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-75">
                <h1>{isSignUp ? "Sign Up" : "Sign In"}</h1>
                {isSignUp && 
                    <input ref={name} type="text" placeholder="Name" className="p-4 my-4 w-full bg-gray-700"/>
                }
                <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
                <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
                {errorMessage && <p className="p-4 my-1 w-full text-red-500">{errorMessage}</p>}
                <button className="p-4 my-6 bg-red-600 w-full rounded-lg" onClick={handleButtonClick}>
                    {isSignUp ? "Sign Up" : "Sign In"}
                </button>
                <p className="py-4 cursor-pointer" onClick={handleToggle}>{!isSignUp ? "New to Netflix? Sign up now" : "Already registered? Login now"}</p>
            </form>
        </div>
    );
}

export default Login;
import React, { useState } from 'react';
import { signupUser, loginUser } from '../services/user.apiService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



function LoginSignup() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        // console.log("Clicked");
        e.preventDefault();
        try {
            if (isLogin) {
                const response = await loginUser({ email, password });
                // console.log(response)
                toast.success("Login successful: " + response.token);
                navigate('/dashboard')
            } else {
                const response = await signupUser({ email, password });
                toast.success("Signup successful: " + response.message);
                setIsLogin(true);
                setEmail('');
                setPassword('');
            }
        } catch (error) {
            toast.error(error.message || "An error occurred");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-80">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    {isLogin ? "Login" : "Sign Up"}
                </h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    onClick={handleSubmit}
                >
                    {isLogin ? "Login" : "Sign Up"}
                </button>
                <p className="text-center mt-4">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <span
                        className="text-blue-500 cursor-pointer ml-2"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? "Sign Up" : "Login"}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default LoginSignup;

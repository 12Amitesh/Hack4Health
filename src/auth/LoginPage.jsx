import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../store/storeSlice';
import { useDispatch } from 'react-redux';

function Login() {
const [form, setForm] = useState({ email: '', password: '' });
const navigate = useNavigate();
const dispatch = useDispatch();

const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:2000/login', form);
        const userData = response.data.user; // Adjust based on your API
        const token = response.data.token;
        alert('Login success');
        localStorage.setItem('token', token);
        console.log("login ",userData);
        dispatch(setUser({user:userData,token :token})); // <-- This line dispatches the setUser action
        navigate('/home');
    } catch (err) {
        alert(err.response?.data?.message || 'Login failed');
    }
};

return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-xl px-10 py-8 w-full max-w-md animate-fade-in"
        >
            <h2 className="text-3xl font-bold text-center mb-8 text-purple-700 animate-slide-down">
                Login
            </h2>
            <div className="mb-6">
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
                />
            </div>
            <div className="mb-8">
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
                />
            </div>
            <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200 animate-bounce"
            >
                Login
            </button>
        </form>
        <style>
            {`
                @keyframes fade-in {
                    from { opacity: 0; transform: scale(0.95);}
                    to { opacity: 1; transform: scale(1);}
                }
                .animate-fade-in {
                    animation: fade-in 0.7s ease;
                }
                @keyframes slide-down {
                    from { opacity: 0; transform: translateY(-30px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                .animate-slide-down {
                    animation: slide-down 0.7s cubic-bezier(.4,0,.2,1);
                }
            `}
        </style>
    </div>
);
}

export default Login;

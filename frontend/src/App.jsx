import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const LoginSignupLayout = ({ children, showLogin, handleLoginClick, handleSignupClick }) => {
    return (
        <div className="flex min-h-screen-custom">
            <div className="lg:flex w-1/2 bg-custom-purple items-center justify-center p-12 relative flex-col text-white">
                <img src="/assets/bunker.png"
                     alt="Bunker illustration"
                     className="max-w-md w-full mb-10"
                     onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/cccccc/ffffff?text=Image+Not+Found"; }}
                />
                <div className="absolute top-24 right-0 flex flex-col items-start space-y-4">
                    <button
                        id="login-tab-button"
                        className={`text-xl text-left transition-colors duration-200 w-40 px-8 ${showLogin ? 'bg-light-purple text-black font-semibold py-3 rounded-l-full' : 'text-white font-semibold cursor-pointer hover:underline'}`}
                        onClick={handleLoginClick}
                    >
                        LOGIN
                    </button>
                    <button
                        id="signup-tab-button"
                        className={`text-xl text-left transition-colors duration-200 w-40 px-8 ${!showLogin ? 'bg-light-purple text-black font-semibold py-3 rounded-l-full' : 'text-white font-semibold cursor-pointer hover:underline'}`}
                        onClick={handleSignupClick}
                    >
                        SIGN UP
                    </button>
                </div>
            </div>

            <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 lg:p-0 relative lg:border-tl-[50px] lg:border-bl-[50px]">
                {children}
            </div>
        </div>
    );
};

const LoginForm = () => {
    return (
        <div id="login-form" className="w-full max-w-md p-8">
            <div className="flex justify-center mb-16">
                <img src="/assets/logo.png" alt="AI Bomb Shelter Logo" className="w-48 h-auto" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/192x48/cccccc/ffffff?text=Logo+Not+Found"; }}/>
            </div>
            <form>
                <div className="mb-10">
                    <div className="flex items-center text-gray-500 mb-1">
                        <svg className="w-5 h-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        <label htmlFor="login-email" className="text-sm font-medium">Email</label>
                    </div>
                    <input type="email" id="login-email" name="email" className="form-input-line text-gray-700" placeholder=""/>
                </div>
                <div className="mb-8">
                    <div className="flex items-center text-gray-500 mb-1">
                        <svg className="w-5 h-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        <label htmlFor="login-password" className="text-sm font-medium">Password</label>
                    </div>
                    <input type="password" id="login-password" name="password" className="form-input-line text-gray-700" placeholder=""/>
                </div>
                <div className="flex items-center justify-between mb-10">
                    <a href="#" className="text-sm text-custom-purple hover:underline">Forget Password?</a>
                    <button type="submit" className="bg-custom-purple text-white font-semibold py-2 px-12 rounded-full shadow-md hover:opacity-90 transition duration-300">
                        LOGIN
                    </button>
                </div>
            </form>
                <hr className="my-6 border-gray-200" />
            <div className="flex items-center justify-center space-x-4 w-full max-w-md">
                <span className="text-gray-500 text-sm mr-4">Or Login With</span>
                <button className="flex items-center justify-center border border-gray-300 rounded-full py-2 px-4 hover:bg-gray-100 transition duration-300">
                    <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4285F4"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.63 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
                    <span className="text-sm text-gray-700 font-medium">Google</span>
                </button>
                <button className="flex items-center justify-center border border-gray-300 rounded-full py-2 px-4 hover:bg-gray-100 transition duration-300">
                    <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1877F2"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-1.5c-.83 0-1 .37-1 1v2h2.5l-.5 3H13v6.95c5.05-.95 8.75-5.19 8.75-10.05z"/></svg>
                    <span className="text-sm text-gray-700 font-medium">Facebook</span>
                </button>
            </div>
        </div>
    );
};

const SignupForm = () => {
    return (
        <div id="signup-form" className="w-full max-w-md p-8">
            <div className="flex justify-center mb-12">
                <img src="/assets/logo.png" alt="AI Bomb Shelter Logo" className="w-48 h-auto" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/192x48/cccccc/ffffff?text=Logo+Not+Found"; }}/>
            </div>
            <form>
                <div className="mb-6">
                    <div className="flex items-center text-gray-500 mb-1">
                        <svg className="w-5 h-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        <label htmlFor="signup-username" className="text-sm font-medium">Username</label>
                    </div>
                    <input type="text" id="signup-username" name="username" className="form-input-line text-gray-700" placeholder="Enter username"/>
                </div>
                <div className="mb-6">
                    <div className="flex items-center text-gray-500 mb-1">
                        <svg className="w-5 h-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        <label htmlFor="signup-email" className="text-sm font-medium">Email</label>
                    </div>
                    <input type="email" id="signup-email" name="email" className="form-input-line text-gray-700" placeholder=""/>
                </div>
                <div className="mb-6">
                    <div className="flex items-center text-gray-500 mb-1">
                        <svg className="w-5 h-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        <label htmlFor="signup-password" className="text-sm font-medium">Password</label>
                    </div>
                    <input type="password" id="signup-password" name="password" className="form-input-line text-gray-700" placeholder=""/>
                </div>
                <div className="mb-8">
                    <div className="flex items-center text-gray-500 mb-1">
                        <svg className="w-5 h-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        <label htmlFor="signup-confirm-password" className="text-sm font-medium">Confirm Password</label>
                    </div>
                    <input type="password" id="signup-confirm-password" name="confirm_password" className="form-input-line text-gray-700" placeholder=""/>
                </div>
                <div className="flex items-center justify-end mb-10">
                    <button type="submit" className="bg-custom-purple text-white font-semibold py-2 px-12 rounded-full shadow-md hover:opacity-90 transition duration-300">
                        SIGN UP
                    </button>
                </div>
            </form>
        </div>
    );
};

function App() {
    const [showLogin, setShowLogin] = useState(true);

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const handleSignupClick = () => {
        setShowLogin(false);
    };

    // Inline styles from the original HTML
    const appStyles = `
        body {
            font-family: 'Inter', sans-serif;
            overflow: hidden;
        }
        .bg-custom-purple {
            background-color: #6d5cfc;
        }
        .bg-light-purple {
            background-color: #a89dfc;
        }
        .text-custom-purple {
            color: #6d5cfc;
        }
        .border-custom-purple {
            border-color: #6d5cfc;
        }
        .form-input-line {
            border: none;
            border-bottom: 1px solid #d1d5db;
            outline: none;
            width: 100%;
            padding-top: 0.25rem;
            padding-bottom: 0.5rem;
            transition: border-color 0.3s;
        }
        .form-input-line:focus {
            border-bottom-color: #6d5cfc;
        }
        html, body {
            height: 100%;
            margin: 0;
        }
        .min-h-screen-custom {
            min-height: 100vh;
        }
        .social-icon {
            width: 1.25rem;
            height: 1.25rem;
        }
        .hidden {
            display: none;
        }
    `;

    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = appStyles;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <LoginSignupLayout showLogin={showLogin} handleLoginClick={handleLoginClick} handleSignupClick={handleSignupClick}>
                        {showLogin ? <LoginForm /> : <SignupForm />}
                    </LoginSignupLayout>
                } />
                <Route path="/auth" element={
                    <LoginSignupLayout showLogin={showLogin} handleLoginClick={handleLoginClick} handleSignupClick={handleSignupClick}>
                        {showLogin ? <LoginForm /> : <SignupForm />}
                    </LoginSignupLayout>
                } />
            </Routes>
        </Router>
    );
}

export default App;
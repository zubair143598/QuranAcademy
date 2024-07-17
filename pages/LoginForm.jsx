import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../context/UserContext';


const LoginForm = () => {
  const [isRegister, setIsRegister] = useState(false);
  const router = useRouter();
  const { setUser } = useContext(UserContext);

  const handleRegister = () => {
    setIsRegister(true);
  };

  const handleLogin = () => {
    setIsRegister(false);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });
      const result = await response.json();
      if (response.status === 201) {
        toast.success(result.message);
        localStorage.setItem('user', JSON.stringify(result.user));
        setUser(result.user);
        router.push('/');
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
      if (response.status === 200) {
        toast.success(result.message);
        localStorage.setItem('user', JSON.stringify(result.user));
        setUser(result.user);
        router.push('/');
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-w-screen py-10 pt-10 lg:pt-28 loginForm">
      <div className="md:w-96 w-[90%] h-[28rem] rounded-3xl space-y-4 relative mx-auto  bg-white p-5 overflow-hidden">
        <div className="w-56 mx-auto relative shadow-md rounded-full">
          <div
            id="btn"
            className={`absolute w-28 h-full bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full transition-all duration-500 ${
              isRegister ? "left-0" : "left-28"
            }`}
          ></div>
          <button
            type="button"
            className="w-1/2 py-2 bg-transparent border-0 outline-none relative"
            onClick={handleRegister}
          >
            Register
          </button>
          <button
            type="button"
            className="w-1/2 py-2 bg-transparent border-0 outline-none relative"
            onClick={handleLogin}
          >
            Log In
          </button>
        </div>
        <div className="text-center text-3xl my-4">
          <i className="bx bxl-facebook-circle mx-2 cursor-pointer"></i>
          <i className="bx bxl-instagram-alt mx-2 cursor-pointer"></i>
          <i className="bx bxl-twitter mx-2 cursor-pointer"></i>
        </div>
        {isRegister ? (
          <form
            className="w-72 top-44 transition-all duration-500 left-12"
            id="register"
            onSubmit={handleRegisterSubmit}
          >
            <input
              type="text"
              className="w-full py-2 my-2 border-b border-gray-400 outline-none bg-transparent"
              placeholder="Username"
              name="username"
              required
            />
            <input
              type="email"
              className="w-full py-2 my-2 border-b border-gray-400 outline-none bg-transparent"
              placeholder="Email"
              name="email"
              required
            />
            <input
              type="password"
              className="w-full py-2 my-2 border-b border-gray-400 outline-none bg-transparent"
              placeholder="Enter Password"
              name="password"
              required
            />
            <div className="flex space-x-2 my-3">
              <input type="checkbox" className="" />
              <span className="text-gray-500 text-sm">
                I agree to the terms and conditions
              </span>
            </div>
            <button
              type="submit"
              className="w-4/5 py-2 my-2 mx-auto block bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full text-white text-lg"
            >
              Register
            </button>
          </form>
        ) : (
          <form
            className="w-72 space-y-5 transition-all duration-500"
            id="login"
            onSubmit={handleLoginSubmit}
          >
            <input
              type="email"
              className="w-full py-2 my-2 border-b border-gray-400 outline-none bg-transparent"
              placeholder="Email"
              name="email"
              required
            />
            <input
              type="password"
              className="w-full py-2 my-2 border-b border-gray-400 outline-none bg-transparent"
              placeholder="USER PASSWORD"
              name="password"
              required
            />
            <div className="flex gap-x-3 my-3">
              <input type="checkbox" className="" />
              <span className="text-gray-500">Remember Password</span>
            </div>
            <button
              type="submit"
              className="w-4/5 py-2 my-2 mx-auto block bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full text-white text-lg"
            >
              Log In
            </button>
          </form>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginForm;

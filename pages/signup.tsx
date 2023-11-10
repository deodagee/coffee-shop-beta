import { useRouter } from 'next/router';
import { useRef, useState, useEffect } from "react";
import Header from '../components/Header';
import styles from "../styles/login.module.css";
import Link from 'next/link';
import axios from 'axios';




function Signup() {
  useEffect(() => {
    document.body.style.overflowX = 'hidden';

    return () => {
        document.body.style.overflowX = '';
    };
}, []);
  const coffeeRef = useRef<HTMLParagraphElement>();

  const router = useRouter();


  const [errorMessage, setErrorMessage] = useState('');

  const scrollHandler = (e) => {
    e.preventDefault();
    coffeeRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newUser = {
      name: formData.get('name'),
      email: formData.get('email'),
      username: formData.get('username'),
      password: formData.get('password'),
    };

    try {
      const response = await axios.post('/api/createuser', newUser);
      router.push('/thankyou');
    } catch (error) {
      console.error(error);
    }
  };

  

  return (
    <>
      <div className='blur'>
        <Header scrollHandler={scrollHandler} />
      </div>
      <div className={styles.formparent}>
    <form className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 bg-white p-6 rounded-md shadow-xl" onSubmit={handleSignup}>
          <h2 className="text-2xl font-bold mb-4">Create Alias</h2>

          <div className="mb-4">
            <label htmlFor="name" className="text-gray-600">First Name:</label>
            <input type="text" id="name" name="name" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="text-gray-600">Email:</label>
            <input type="text" id="email" name="email" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
          </div>
 
          <div className="mb-4 mt-9">
            <label htmlFor="username" className="text-gray-600">Username:</label>
            <input type="text" id="username" name="username" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="text-gray-600">Password:</label>
            <input type="password" id="password" name="password" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
          </div>

          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          
          <button type="submit" className="transition-3 bg-lime-600 text-white mt-[5vh] px-4 text-xs py-2 rounded-md hover:bg-lime-800 ">Create Account</button>

          <span className={styles.signuplink}>
            <Link href="/login">Already Have An Account?</Link>
          </span>

          <span className={styles.home_link}>
            <Link href="/">Back</Link>
          </span>
          
        </form>
      </div>
    </>
  );
}

export default Signup;

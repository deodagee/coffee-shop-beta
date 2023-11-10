import { useRef, useState, useEffect} from 'react';
import Header from '../components/Header';
import styles from "../styles/login.module.css";
import Link from 'next/link';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import NextAuth from 'next-auth/next';

function Login() {
      useEffect(() => {
        document.body.style.overflowX = 'hidden';

        return () => {
            document.body.style.overflowX = '';
        };
    }, []);
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); 
  const { data: session, status } = useSession();
  
  const coffeeRef = useRef<HTMLParagraphElement>();

  const router = useRouter();

  const scrollHandler = (e) => {
    e.preventDefault();
    coffeeRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

const callbackUrl = "http://127.0.0.1:3000";

  const handleLogin = async (event) => {

    console.log(NextAuth)

    event.preventDefault();
    
    const result = await signIn('credentials', {
      redirect: false,
      username: event.target.username.value,
      password: event.target.password.value,
    });

    if (!session) {
      setError(result.error); 
      console.error(result.error);
    } else
     {

      router.push(callbackUrl);
    }
  };

  
  return (
    
    <>
          <div className={styles.formparent}>
      <div className='blur'>
        <Header scrollHandler={scrollHandler} />
      </div>
        <form className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 bg-white p-6 rounded-md shadow-xl" onSubmit={handleLogin}>
          <h2 className="text-2xl font-bold mb-4">Login</h2>

          <div className="mb-4">
            <label htmlFor="name" className="text-gray-600">Name:</label>
            <span className={styles.input_name}>
            <input aria-label='name' type="text" id="name" name="name" className=" bg-none border border-gray-300 rounded-md px-3 py-2 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)} />
            </span>
          </div>

          <div className="mb-4">
            <label htmlFor="username" className="text-gray-600">Username:</label>
            <span className={styles.input_username}>
            <input aria-label='username' type="text" id="username" name="username" className=" input1 bg-none border border-gray-300 rounded-md px-3 py-2 w-full" 
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
            </span>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="text-gray-600">Email:</label>
            <span className={styles.input_email}>
            <input aria-label='email' type="text" id="email" name="email" className=" input2 border border-gray-300 rounded-md px-3 py-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
            </span>
          </div>
 
          <div className="mb-4">
            <label htmlFor="password" className="text-gray-600">Password:</label>
            <span className={styles.input_password}>
            <input aria-label='password' type="password" id="password" name="password" className="bg-none border border-gray-300 rounded-md px-3 py-2 w-full" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
            </span>
          </div>

          {status === 'authenticated' && error?.message && (
            <p className="text-red-500 mb-4">{error.message}</p>
          )}        
          <button type="submit" className="bg-lime-600 text-white mt-[5vh] px-4 text-xs py-2 rounded-md">Login</button>


          <span className={styles.signuplink}>
            <Link href="/signup">Signup</Link>
          </span>
          <span className={styles.home_link}>
            <Link href="/">Back</Link>
          </span>
          
        </form>
      </div>
    </>
  );
}


export default Login;


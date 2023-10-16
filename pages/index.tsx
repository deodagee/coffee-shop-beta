import { useRef } from 'react';
import Header from '../components/Header';
import { useSession } from 'next-auth/react';


export default function Home() {

  const scrollHandler = (e) => {
    e.preventDefault();
    coffeeRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const { data: session } = useSession()

  let coffeeRef = useRef<HTMLParagraphElement>();




  if (!session) {

    console.log("User not logged in", session);

  return (
    <>
      <Header scrollHandler={scrollHandler} />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p
              className="mt-1 text-3xl font-bold uppercase text-gray-900 sm:text-4xl sm:tracking-tight lg:text-4xl"
              ref={coffeeRef}
            >
              Package Delivery
            </p>
            <p
              className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl"
              ref={coffeeRef}
            >
              24/7
            </p>
            <p
              className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-3xl sm:tracking-tight lg:text-3xl"
              ref={coffeeRef}
            >
              Day/Night
            </p>
          </div>
        </div>

      </div>
    </>
  );
}


if (session) {
  console.log("User is logged in");


  return (
    <>
      <Header scrollHandler={scrollHandler} />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p
              className="mt-1 text-3xl font-bold uppercase text-gray-900 sm:text-4xl sm:tracking-tight lg:text-4xl"
              ref={coffeeRef}
            >
              Package Delivery
            </p>
            <p
              className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl"
              ref={coffeeRef}
            >
              24/7
            </p>
            <p
              className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-3xl sm:tracking-tight lg:text-3xl"
              ref={coffeeRef}
            >
              Day/Night
            </p>
          </div>
        </div>

      </div>
    </>
  );
}
}



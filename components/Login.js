import Head from "next/head";
import { BiMessageSquareDots } from "react-icons/bi";

import { auth, provider } from "../firebase";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <div className="font-figtree">
      <Head>
        <title>Login</title>
      </Head>

      <div className="grid place-items-center h-screen bg-gradient-to-br from-vampire-black via-cetacean-blue-1 to-cetacean-blue-2 background-animate text-silver-chalice">
        <header className="top-0 absolute w-full flex items-center justify-between h-20 px-28">
          <div className="flex items-center">
            <BiMessageSquareDots className="text-3xl text-purple-600" />
            <h1 className="text-white text-xl ml-4">Messaging</h1>
          </div>

          <div className="flex justify-between items-center">
            <a
              href="https://github.com/Im-Soumya/next-chat-app"
              target="_blank"
              rel="noreferrer"
              className="p-2 mr-10 hover:border-b-1 hover:border-b-white hover:text-white duration-100"
            >
              Github
            </a>

            <a
              href="https://twitter.com/iamsoumyass"
              target="_blank"
              rel="noreferrer"
              className="p-2 mr-7 hover:border-b-1 hover:border-b-white hover:text-white duration-100"
            >
              Twitter
            </a>

            <a
              href="mailto:contact@soumyamukherjee.work@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="py-2 mx-3 hover:border-b-1 hover:border-b-white hover:text-white duration-100"
            >
              Contact Me
            </a>
          </div>
        </header>

        <div className="flex flex-col items-center justify-center text-gray-200 mt-8">
          {/* <h1 className="text-8xl font-bold mb-6 bg-gradient-to-r from-rose-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
            Chat App
          </h1>

          <h1 className="flex text-8xl font-bold pb-5 bg-gradient-to-r from-indigo-500 via-emerald-500 to-cyan-300 bg-clip-text text-transparent">
            Reimagined.
          </h1> */}

          <h1 className="text-8xl font-bold mb-4 tracking-tight">Chat App</h1>
          <h1 className="text-8xl font-bold pb-5 tracking-tight bg-gradient-to-r from-rose-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
            Reimagined.
          </h1>

          <button
            onClick={signIn}
            className="flex items-center py-5 px-9 mt-7 rounded-md text-xl font-semibold tracking-wider border-2 border-sky-400 hover:scale-110 transition-all delay-150 duration-150"
          >
            Login with <span className="ml-2 text-google-blue">G</span>
            <span className="text-google-red">o</span>
            <span className="text-google-yellow">o</span>
            <span className="text-google-blue">g</span>
            <span className="text-google-green">l</span>
            <span className="text-google-red">e</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

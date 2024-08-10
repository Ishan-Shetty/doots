import { Typewriter } from 'react-simple-typewriter';

function Firstpage() {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-black to-sky-950">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-white text-6xl font-bold font-righteous -translate-y-10">
          WELCOME TO{' '}
          <span className="text-cyan-600">
            <Typewriter
              words={['DOOTS']}
              loop={1000}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={100}
              delaySpeed={3000}
            />
          </span>
        </h1>
        <div className="m-10">
          <button className="text-white text-2xl font-semibold p-5 hover:bg-cyan-600 rounded-md">
            Sign In
          </button>
          <button className="text-white text-2xl font-semibold p-5 hover:bg-cyan-600 rounded-md">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Firstpage;

  


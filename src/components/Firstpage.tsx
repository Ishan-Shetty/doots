import { Typewriter } from 'react-simple-typewriter';
import doots from '../assets/doots.svg'
import Navbar from './Navbar';
function Firstpage() {
  return (
    
    <div className="h-screen w-screen bg-gradient-to-b from-black to-sky-950">
      <Navbar />
      <div className="flex items-center justify-center h-screen w-screen absolute ">
        <div className="text-white text-8xl font-bold font-righteous -translate-y-10 ml-10">
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
          <div className=' relative m-7 space-x-10'>
        <button className="  text-white text-2xl font-semibold p-5 bg-cyan-600 rounded-3xl hover:scale-125 cursor-pointer ">
          Sign In
       </button>
          <button className=" text-white text-2xl font-semibold p-5 bg-cyan-600 rounded-3xl hover:scale-125 cursor pointer">
            Log In
          </button>
          </div>
        </div>
        <div className='  mt -50 static'><img src={doots} alt="" className='scale-100' /></div>
      </div>
      
    </div>
  );
}

export default Firstpage;




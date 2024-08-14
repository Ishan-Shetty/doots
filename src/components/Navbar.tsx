import Togglebar from "./Togglebar";
import doots from '../assets/doots.svg'

function Navbar() {
  return (
    <nav className=" sticky top-0 m-0 p-2 bg-white border-b-2 border-b-white dark:bg-black">
      <div className="flex flex-row items-center justify-between">
        <img src={doots} alt="DOOTS" className="text-cyan-600 h-auto w-12 object-contain" />
         <div className="flex justify-end">
         <Togglebar />
         </div>
      </div>
    </nav>
  );
}
export default Navbar;


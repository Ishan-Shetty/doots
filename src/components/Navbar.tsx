import Togglebar from "./Togglebar";

function Navbar() {
  return (
    <nav className=" sticky top-0 m-0 p-5 bg-white border-b-2 border-b-white dark:bg-black">
      <div className="flex flex-row items-center justify-between">
        <img src="" alt="DOOTS" className="text-cyan-600" />
         <div className="flex justify-end">
         <Togglebar />
         </div>
      </div>
    </nav>
  );
}
export default Navbar;


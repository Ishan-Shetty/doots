import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
        <div className="p-20 flex flex-row justify-center items-center text-center bg-black">
            <div className="p-25">
               <a href="https://github.com/Ishan-Shetty" className="text-white p-4 rounded hover:bg-gray-700">
               <FontAwesomeIcon icon={faGithub} className="h-5 w-5 mr-2" />Ishan</a>
               <a href="https://github.com/GauravDhanraja" className="text-white p-4 rounded hover:bg-gray-700">
               <FontAwesomeIcon icon={faGithub} className="h-5 w-5 mr-2" />Gaurav</a>
               <p className='pt-10 text-white font-medium'>Made with 🤍 by Ishan and Gaurav</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
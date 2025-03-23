import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";



const Header = ({darkMode, toggleHandler}) => {
        return ( 
        <div className='dark:bg-[#202C36] w-full min-h-screen transition-colors duration-600'>
            <header className='flex border-solid border-inherit border-2 font-Nunito text-[#111517] bg-[#FFFFFF] dark:bg-[#2B3844] dark:text-[#FFFFFF] justify-between py-3 px-5 shadow-lg transition-colors duration-600'>
                <div>
                    <h1 className=' text-base font-extrabold md:text-[24px]'>Where in the world?</h1>
                </div>
                <div className='flex text-center items-center gap-1'>
                {darkMode ? <FaMoon className=' sm:h-5 sm-w-5 cursor-pointer h-6 w-6' onClick={toggleHandler}/>  :
                    <IoSunnyOutline onClick={toggleHandler} className=' cursor-pointer h-6 w-6'/>}
                    <span className=' font-semibold text-base  md:text-2xl '>{darkMode ? 'Light' : 'Dark'}</span>
                </div>
            </header> 
        </div>)
                
                   
                
}
export default Header
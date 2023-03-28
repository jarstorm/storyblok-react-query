import Link from 'next/link';
import { useRouter } from "next/router";

const Menu = ({logoutUser}) => {        

  const router = useRouter();


  const logout = async () => {
    //await logoutUser();
    router.push("/")
}

    return (
          <ul className='w-16 border-r-2 border-r-green-700'>
            <li className='cursor-pointer h-20 flex justify-center items-center mb-12'><Link href="/"><img src="/left-logo.svg" className='w-100 h-auto'/></Link></li>
            <li className='cursor-pointer h-20 flex justify-center items-center'><Link href="/projects"><img src="/icon-projects.svg" className='w-6 h-auto'/></Link></li>
            <li className='cursor-pointer h-20 flex justify-center items-center'><Link href="/news"><img src="/icon-news.svg" className='w-6 h-auto'/></Link></li>
            <li><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={logout}><img src="/logout.png" /></button></li>
          </ul>
            );
  };

  export default Menu;
  
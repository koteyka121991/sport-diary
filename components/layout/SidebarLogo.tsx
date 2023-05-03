import { useRouter } from "next/router"
import {  FcSportsMode } from "react-icons/fc"
import Image from 'next/image'




const SidebarLogo = () => {
    const router = useRouter()
  return (
    <div className="
    rounded-full 
    h-20
    w-20
    p-4 
    flex 
    items-center 
    justify-center 
    hover:bg-blue-300 
    hover:bg-opacity-10 
    cursor-pointer">
    <Image

      src="/logotip.png"
      alt="Picture of the author"
      width={500}
      height={500}
     
    />
      
    </div>
  )
}

export default SidebarLogo

import { SlNote } from 'react-icons/sl';
import { MdSportsHandball } from 'react-icons/md';
import { BiLogOut } from "react-icons/bi";
import SidebarLogo from './SidebarLogo';
import SidebarItem from './SidebarItem';
const Sidebar = () => {
    const items =[
       { label:'Мой дневник',
        href: '/',
        icon: SlNote},
        {
        label:'Упражнения',
        href: '/exercises',
        icon: MdSportsHandball
        }
     
    ]


  return (
    <div className='col-span-1 h-full pr-4 md:pr-6'>
      <div className='flex flex-col items-end'>
        <div className='space-y-2 lg:w-[230px]'>
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
           <SidebarItem onClick={()=>{} } icon={BiLogOut} label="Logout"/>
          </div>
          </div>
          </div>
  )
}

export default Sidebar
import { useState } from "react"; {/*make it dynamic by using state */}
import {BsArrowLeftShort, BsSearch, BsChevronDown, BsFillImageFill, BsReverseLayoutTextSidebarReverse, BsPerson} from "react-icons/bs";
import {AiFillEnvironment, AiOutlineBarChart, AiOutlineFileText, AiOutlineLogout, AiOutlineMail, AiOutlineSetting} from "react-icons/ai";
import {RiDashboardFill} from "react-icons/ri"

const App = () => {
  const [open, SetOpen] = useState(true);
  const [subMenuopen, SetSubMenuOpen] = useState(false);

  const menus = [{
    title:"dashboard"
  },
  {
    title:"pages", icon:<AiOutlineFileText />
  },
  {
    title:"media", spacing:true, icon: <BsFillImageFill />
  },
  {
    title:"projects", submenu:true, icon: <BsReverseLayoutTextSidebarReverse />,
    submenuItems:[
      {title:"submenu 1"},
      {title:"submenu 2"},
      {title:"submenu 3"}
    ],
  },
  {title:"analytics", icon:<AiOutlineBarChart />},
  {title:"inbox", icon:<AiOutlineMail />},
  {title:"profile", spacing:true, icon: <BsPerson />},
  {title:"setting", icon:<AiOutlineSetting />},
  {title:"logout", icon:<AiOutlineLogout />},
]

  return (
    <div className="flex"> {/*template literal */}
       <div className={`capitalize bg-dark-purple h-screen p-5 pt-8 ${open ? "w-52": "w-20"} duration-300 relative`}> 

      <BsArrowLeftShort className={`bg-white text-dark-purple text-3xl 
      rounded-full absolute -right-1 top-9 border border-dark-purple 
      cursor-pointer ${!open && "rotate-180"} `} onClick={()=> SetOpen(!open)}/>
        
        <div className="inline-flex">
          <AiFillEnvironment className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`} />
          <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>Haywill </h1>
        </div>


        <div className={`flex items-center rounded-md bg-light-white mt-6 
        ${open ?"px-2.5":"px-4" }py-2`}>
            <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open ? "mr-2":"text-sm"}`} />
            <input type={"search"} placeholder="search" className={`text-base 
            bg-transparent w-full text-white  focus:outline-none 
            ${!open && "hidden"}` }/>

        </div>

        <ul className="pt-2">
          {
            menus.map((menu, index)=>(
              <>
              <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.spacing ? "mt-9":"mt-2"}`}>
                <span className="text-2xl block float-left">
                 {menu.icon ? menu.icon: <RiDashboardFill  /> }
                </span>
                <span className={`text-base font-medium flex-1 duration-300 
                ${!open && "hidden"}`}>{menu.title}</span>
                {menu.submenu && open && (
                  <BsChevronDown className={`${subMenuopen && "rotate-180"}`} onClick={()=>SetSubMenuOpen(!subMenuopen)} />
                )}
              </li>
              {menu.submenu && subMenuopen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItem, index)=>(
                    <li key={index} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md ">
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
              </>
            ))
          }
        </ul>

        </div>
      
      <div className="capitalize p-7">
        <h1 className="text-2xl flex justify-center relative w-full h-3 font-semibold items-center text-orange-300">home page</h1></div>
      
      
      </div>
  )
}

export default App
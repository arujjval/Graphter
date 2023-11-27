import { useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useSignOutAccount } from "@/lib/react_query/queriesAndMutations";
import { useUserContext } from "@/context/AuthContext";
import { sidebarLinks } from "@/constants"; 
import { INavLink } from "@/types";
import { Button } from "../ui/button";

export const Leftsidebar = () => {
  const { mutate: signOut, isSuccess} = useSignOutAccount();
  const navigate= useNavigate();
  const { user } = useUserContext();
  const { pathname }= useLocation();

  useEffect(() => {
    if(isSuccess){
      navigate(0);
    }
  }, [isSuccess])

  return (
    <nav className="leftsidebar">

      <div className="flex flex-col gap-11">
        <Link to='/' className='flex gap-3 items-center'>
          <img src="/assets/images/Graphter-logo.png" alt="logo" width={170} height={36}/>
        </Link>

        <Link to={'/profile/${user.id}'} className="flex gap-3 items-center">
          <img src={user.imageUrl || '/assets/icons/profile-placeholder.png'} alt="profile" className="h-14 w-14 rounded-full"/>
          <div className="flex flex-col">
            <p className="body-bold">
              {user.name}
            </p>
            <p className="small-regular text-light-3">
                @{user.username}
            </p>
          </div>       
        </Link>

        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: INavLink) => {
            const isActive= pathname === link.route;
            return (
              <li key={link.label} className={(isActive?"current_leftsidebar-link": "leftsidebar-link group") + ""}>
                 <NavLink to={link.route} className='flex gap-4 items-center p-4'>
                  <img src={link.imgURL} alt={link.label}  className={(isActive? "curr_bar-img" : "group-hover:invert-white") + ""}/>
                  {link.label}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div> 

      <Button variant='ghost' className="shad-button_ghost" onClick={() => signOut}>
        <img src="/assets/icons/logout.svg" alt="logout"/>
        <p className="small-medium lg:base-medium">Logout</p>
      </Button>

    </nav>
  )
}


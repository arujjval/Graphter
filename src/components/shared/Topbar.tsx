import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { useSignOutAccount } from "@/lib/react_query/queriesAndMutations";
import { useUserContext } from "@/context/AuthContext";

export const Topbar = () => {
  const { mutate: signOut, isSuccess} = useSignOutAccount();
  const navigate= useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    if(isSuccess){
      navigate(0);
    }
  }, [isSuccess])

  return (
    <section className="topbar flex flex-row items-center	place-content-between">

      <div className="flex-between py-4 px-5 flex-center">
        <Link to='/' className='flex gap-3 items-center flex-center'>
          <img src="/assets/images/Graphter-logo.png" alt="logo" width={130} height={325} />
        </Link>
      </div>

      <div className="flex gap-4 pr-3">
        <Button variant='ghost' className="shad-button_ghost" onClick={() => signOut}>
          <img src="/assets/icons/logout.svg" alt="logout"/>
        </Button>
        <Link to={'/profile/${user.id}'} className="flex-center gap-3">
          <img src={user.imageUrl || '/assets/icons/profile-placeholder.png'} alt="profile" className="h-8 w-8 rounded-full"/>
        </Link>
      </div>
      
    </section>
  )
}


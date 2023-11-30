import Loader from "@/components/shared/Loader";
import { useGetTopCreators } from "@/lib/react_query/queriesAndMutations";
import CreatorCard from "@/components/shared/CreatorCard";
import { useUserContext } from "@/context/AuthContext";
import { Models } from "appwrite";

const AllUsers = () => {
  const { data: topCreators, isLoading: loadingCreators } = useGetTopCreators();
  const currUser= useUserContext();

  return (
     <div className="all-users p-10 w-full">
      <div className="flex flex-row gap-4 items-center mb-10">
        <img src="/assets/icons/people.svg" alt="people" className="invert-white h-8"/>
        <h2 className="h3-bold md:h2-bold text-left w-full">All Users</h2>
      </div>
      {loadingCreators? (<Loader />) : (
        <div className="flex justify-around flex-wrap gap-5">
          {topCreators?.documents.map((Creator: Models.Document) => (
            currUser.user.id != Creator.$id && <CreatorCard key={Creator.$id} creator={Creator}/>
          ))}
        </div>
      )}
     </div>
  )
}

export default AllUsers
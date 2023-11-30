import { Models } from 'appwrite'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

type CreatorCardProps = {
  creator: Models.Document;
}

const CreatorCard = ({ creator: Creator }: CreatorCardProps) => {
  
  return (
    <div className='border-2 border-opacity-50 border-slate-700 w-72 h-72 rounded-3xl flex-center'>
      <Link to={"profile/" + Creator.creator.$id} className='flex flex-col gap-4 items-center'>
        <img src={Creator.creator.imageUrl} alt="creator" className='rounded-full' width={70}/>
        <p className='base-medium'>{Creator.creator.name}</p>
        <p className='text-md text-light-3'>@{Creator.creator.username}</p>
        <Button className='bg-purple-600 w-36'>follow</Button>
      </Link>
    </div>
  )
}

export default CreatorCard
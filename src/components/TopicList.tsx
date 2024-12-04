import { Link } from "react-router-dom"

type Props = {
  id: number,
  title: String,
  categories: String[],
  answersTotal: number,
  author: String,
  updatedAt: number
}


const TopicList = ({ id, title, categories, answersTotal, author, updatedAt }: Props) => {
  return (
    <li className='bg-extra-light-night-blue rounded-md'>
      <div className='flex flex-row justify-between py-6 px-10'>
        <div className='flex flex-col gap-2'>
          <Link to={`/topic/${id}`} className='text-xl text-light-beige hover:text-night-beige'>{title}</Link>
          <div className='flex flex-row space-x-1'>
            {categories.map((category) => (
              <button className='border-l-2 border-light-brown text-xs text-light-beige py-1 px-2 bg-night-blue rounded-md'>{category}</button>
            ))}
          </div>
        </div>
        <div className='flex justify-between items-center space-x-4'>
          <div className='flex flex-col text-light-beige justify-center items-center'>
            <span className='text-xl font-bold'>{answersTotal}</span>
            <span className='text-xs text-night-beige'>respuestas</span>
          </div>
          <div className='flex flex-col text-light-beige'>
            <a href="" className='text-night-beige text-sm font-medium hover:text-light-beige'>{author}</a>
            <span className='text-xs'>actualizado hace {updatedAt} hora</span>
          </div>
        </div>
      </div>
    </li>

  )
}

export default TopicList
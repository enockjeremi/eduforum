import { Link, useLocation } from 'react-router-dom'

const TopicHeader = () => {
  const location = useLocation();
  if (location.pathname == "/new") {
    return (
      <div className='flex flex-row justify-between items-center pb-4 pt-14 px-4'>
        <span className='text-2xl font-medium tracking-[-.5px] text-light-beige'>
          Crear nuevo tópico
        </span>
        <Link to={"/"} className='py-1 px-3 rounded-md text-light-beige hover:bg-blue-500 bg-night-blue'>
          Regresar
        </Link>
      </div>
    )
  } else {
    return (
      <div className='flex flex-row justify-between items-center pb-4 pt-14 px-4'>
        <span className='text-2xl font-medium tracking-[-.5px] text-light-beige'>
          Tópicos más recientes
        </span>
        <Link to={"/new"} className='py-1 px-3 rounded-md text-light-beige hover:bg-blue-500 bg-night-blue'>
          Crear nuevo tópico
        </Link>
      </div>
    )
  }
}

export default TopicHeader
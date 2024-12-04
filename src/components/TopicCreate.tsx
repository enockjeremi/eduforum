import TopicHeader from './TopicHeader'
import { useLocation } from 'react-router-dom'
import TopicBarNew from './TopicBarNew';

type Course = {
  id: number,
  name: string,
  category: string
}

const courseListExample: Course[] = [
  {
    id: 1,
    name: "Java y Spring boot 3",
    category: "backend",
  },
  {
    id: 2,
    name: "React de 0 a 100",
    category: "frontend",
  },
  {
    id: 3,
    name: "Desarrollo personal, mente agil",
    category: "spring boot",
  },
  {
    id: 4,
    name: "Ingles avanzado A3",
    category: "react",
  },
  {
    id: 5,
    name: "FullStack MERN, aplicando multiples tegnologias",
    category: "angular",
  },
  {
    id: 6,
    name: "Offtopic",
    category: "offtopic",
  }
]

const TopicCreate = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='w-full flex flex-col gap-4'>
        <TopicHeader />
        <TopicBarNew />
      </div>

      <div className='w-full pb-5'>
        <form action="" className='flex flex-col space-y-4 items-center justify-center'>
          <div className='flex flex-row w-full'>
            <div className=' bg-extra-light-night-blue flex flex-col space-y-2  rounded-md p-4 w-full'>
              <label className='text-light-beige'>Nombre del topico:</label>
              <input className='w-full bg-night-blue text-light-beige p-2 rounded-md' type="text" name="" id="" />
            </div>
            <div className=' bg-extra-light-night-blue flex flex-col space-y-2  rounded-md p-4 w-full'>
              <label className='text-light-beige'>Curso:</label>
              <select className='p-2 border rounded-md border-black bg-white' name="categories" id="">
                {courseListExample.map((course) => (
                  <option value={course.id}>{course.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className='w-full flex flex-col space-y-2 rounded-md p-4 bg-extra-light-night-blue'>
            <label className='text-light-beige'>Contenido del topico:</label>
            <textarea className='w-full h-56 rounded-md p-2 bg-night-blue' name="" id="" />
          </div>
          <button className='py-1 px-3 rounded-md text-light-beige hover:bg-blue-500 bg-night-blue w-full' type="submit" >Enviar</button>
        </form>
      </div>

    </div>
  )
}

export default TopicCreate
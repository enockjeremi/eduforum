import IconSearch from "./IconSearch"

type Categories = {
  value: string,
  category: string,
}

const categoriesExample: Categories[] = [
  { category: "Todas las categorias", value: "" },
  { category: "Backend", value: "backend" },
  { category: "Frontend", value: "frontend" },
  { category: "Java", value: "java" },
  { category: "Spring Boot", value: "spring boot" },
  { category: "React", value: "react" },
  { category: "Javascript", value: "javascript" },
]

export const TopicBarSearch = () => {
  return (
    <div className='flex flex-row bg-extra-light-night-blue rounded-md p-6 justify-between'>
      <div className='flex flex-row space-x-8 items-center'>
        <select className='p-2 border rounded-md border-black bg-white' name="categories" id="">
          {categoriesExample.map((category) => (
            <option value={category.value}>{category.category}</option>
          ))}
        </select>
        <div className='flex justify-between gap-1'>
          <button className='bg-night-blue px-2 py-1 text-sm rounded-md text-light-beige hover:bg-blue-500'>Todos</button>
          <button className='bg-night-blue px-2 py-1 text-sm rounded-md text-light-beige hover:bg-blue-500'>Sin respuesta</button>
          <button className='bg-night-blue px-2 py-1 text-sm rounded-md text-light-beige hover:bg-blue-500'>Resueltos</button>
        </div>
      </div>
      <div className='flex space-x-1 justify-between'>
        <input className='p-2 border rounded-md text-sm' type="text" placeholder='buscar por titulo' />
        <button className='py-1 px-2 rounded-md text-white bg-night-blue'>
          <IconSearch className="w-5" />
        </button>
      </div>
    </div>

  )
}

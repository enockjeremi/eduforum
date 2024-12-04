import React from 'react'
import TopicList from '../../components/TopicList'
import { TopicBarSearch } from '../../components/TopicBarSearch'
import TopicHeader from '../../components/TopicHeader'

type TopicList = {
  id: number,
  title: String,
  categories: String[],
  answersTotal: number,
  author: String,
  updatedAt: number
}

var topicListExample: TopicList[] = [
  {
    id: 1,
    title: "Tengo problemas al instalar NodeJS en linux",
    categories: ["Backend", "NodeJs", "Javascript"],
    answersTotal: 4,
    author: "Jose Rondon",
    updatedAt: 9

  },
  {
    id: 2,
    title: "Al hacer deploy en heroku la api no funciona",
    categories: ["Backend", "Java", "Spring Boot"],
    answersTotal: 10,
    author: "Alexander Lear",
    updatedAt: 3

  },
  {
    id: 3,
    title: "Media queries",
    categories: ["Frontend", "React", "Tailwind"],
    answersTotal: 5,
    author: "Maria Rincon",
    updatedAt: 12

  },
  {
    id: 4,
    title: "React Router, alternativas",
    categories: ["React", "Frontend"],
    answersTotal: 3,
    author: "Alex Ubago",
    updatedAt: 1

  },
  {
    id: 5,
    title: "Redux o React Context",
    categories: ["Typescript", "Fronted", "React"],
    answersTotal: 18,
    author: "Daniel Carvajal",
    updatedAt: 4

  },
  {
    id: 6,
    title: "Microservicios con Spring Boot",
    categories: ["Backend", "Spring Boot", "Java"],
    answersTotal: 4,
    author: "Gabriel Rodriguez",
    updatedAt: 9

  },
  {
    id: 7,
    title: "Tengo problemas al instalar NodeJS en linux",
    categories: ["Backend", "NodeJs", "Javascript"],
    answersTotal: 4,
    author: "Jose Rondon",
    updatedAt: 12

  },
  {
    id: 8,
    title: "Como hacer prompt correctamente",
    categories: ["ChatGPT", "Python", "IA"],
    answersTotal: 4,
    author: "Cristian Chavez",
    updatedAt: 3

  }
]

const Home: React.FC = () => {
  return (

    <div className='flex flex-col gap-8'>
      <div className='w-full flex flex-col gap-4'>
        <TopicHeader />
        <TopicBarSearch />
      </div>
      <div className='w-full flex'>
        <ul className='w-full space-y-3'>
          {topicListExample.map((topic) => (
            <TopicList
              id={topic.id}
              title={topic.title}
              categories={topic.categories}
              answersTotal={topic.answersTotal}
              author={topic.author}
              updatedAt={topic.updatedAt}
            />
          ))}
        </ul>

      </div>
    </div>

  )
}

export default Home
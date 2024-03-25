import SearchSection from '@/components/SearchSection'
import React from 'react'
import ProjectList from './features/ProjectList'

const data = [
  {
    img: 'https://github.com/shadcn.png',
    name: 'Gmail',
    description: 'lermgvi tqiteyfg efiwtg',
    likes: 20,
    dislikes: 40,
  },
  {
    img: 'https://github.com/shadcn.png',
    name: 'Office',
    description: 'lermgvi tqiteyfg',
    likes: 50,
    dislikes: 10,
  }
]

function Projects() {
  return (
    <main className="px-3 py-20 h-screen overflow-auto">
      <SearchSection header='Projects'/>
       <section>
        <ProjectList project={data} />
       </section>
    </main>
  )
}

export default Projects
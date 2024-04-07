'use client'

import SearchSection from '@/components/SearchSection'
import React from 'react'
import ProjectList from './features/ProjectList'
import { useProjectStore } from '@/lib/store/project-store'

function Projects() {
  const projects = useProjectStore((state) => state.projects);

  return (
    <main className="px-3 py-20 h-screen overflow-auto">
      <SearchSection header='Projects'/>
       <section>
        <ProjectList project={projects} />
       </section>
    </main>
  )
}

export default Projects
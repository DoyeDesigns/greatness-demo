import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

import {
    Search
  } from "lucide-react"

function SearchBar() {
  return (
    <form className='relative'>
        <Input type='search' placeholder='Search'/>
        <Button type='submit' className='bg-[transparent] absolute right-2 top-5 p-0 h-0'><Search className='text-black'/></Button>
    </form>
  )
}

export default SearchBar
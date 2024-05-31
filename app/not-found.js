import { Link } from 'next-view-transitions'
import React from 'react'

export default function Home() {
  return (
      <div className='flex min-h-screen w-full flex-col justify-center items-center'>
          <Link href='/' className='p-2 bg-primary-900 rounded-3xl'>
          Go Home </Link>
    </div>
  )
}

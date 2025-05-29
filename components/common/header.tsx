import { FileText } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button';

function Header() {
  const isLoggedIn = false;
  return (
    <div  className='flex  justify-between items-center gap-10 max-w py-4 lg:px-8 px-2'>
      <div className='flex lg:flex-1'>
        <Link href="/" className='flex items-center gap-1 lg:gap-2 shrink-0'>
          <FileText className='w-5 h-5 lg:w-8 lg:h-8
          text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out' />
        <span className='font-extrabold lg:text-xl text-gray-900'>PdfDigest</span> 
        </Link>
      </div>
      <div className='flex lg-justify-center gap-4 lg:gap-12 lg:items-center'>
        <Link href="/#pricing">Pricing</Link>
        {isLoggedIn && <Link href="/dashboard">Your Summaries</Link>}
      </div>
      <div className='flex lg:justify-end lg:flex-1'>
        {isLoggedIn ? (
          <div className='flex px-2 items-center'>
            <Link href="/upload">Upload Pdf</Link>
            <div>Pro</div>
            <Button>SignOut</Button>
          </div>
        ) : (
          <div>
           <Link href="/sign-in">Sign In</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header

import { FileText } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button';
import NavLink from './nav-link';

function Header() {
  const isLoggedIn = false;
  return (
    <div  className='flex  justify-between items-center gap-10 max-w py-4 lg:px-8 px-2'>
      <div className='flex lg:flex-1'>
        <NavLink href="/" className='flex items-center gap-1 lg:gap-2 shrink-0'>
          <FileText className='w-5 h-5 lg:w-8 lg:h-8
          text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out' />
        <span className='font-extrabold lg:text-xl text-gray-900'>PdfDigest</span> 
        </NavLink>
      </div>
      <div className='flex lg-justify-center gap-4 lg:gap-12 lg:items-center'>
        <NavLink href="/#pricing">Pricing</NavLink>
        {isLoggedIn && <NavLink href="/dashboard">Your Summaries</NavLink>}
      </div>
      <div className='flex lg:justify-end lg:flex-1'>
        {isLoggedIn ? (
          <div className='flex px-2 items-center'>
            <NavLink href="/upload">Upload Pdf</NavLink>
            <div>Pro</div>
            <Button>SignOut</Button>
          </div>
        ) : (
          <div>
           <NavLink href="/sign-in">Sign In</NavLink>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header

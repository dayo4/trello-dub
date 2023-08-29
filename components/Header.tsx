import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid"

function Header() {
  return (
    <header>
        <Image
            src="https://links.papareact.com/c2cdd5"
            alt="Trello Logo"
            width={300}
            height={100}
            className='w-44 md:w-56 pb-10 md:pb-0 object contain'
        />

        <div>
            {/* Search Box */}
            <form>
                <MagnifyingGlassIcon className='h-6 w-6 text-gray-400' />
                <input type="text" placeholder='Search'/>
                <button hidden>Search</button>
            </form>
            {/* Avatar */}
        </div>
    </header>
  )
}

export default Header
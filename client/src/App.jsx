import React from 'react'
import {BrowserRouter , Link , Route , Routes} from "react-router-dom"
import {logo} from "./assets"
import{Home , CreatePost} from "./pages"
import punycode from 'punycode'
import {SocialMedia} from "./components"

/**
 * Renders the main application component
 * @returns {JSX.Element} The rendered application structure
 */
const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between
      items-center bg-darker sm:px-8 px-4 py-6 border-b border-b-black">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain text-white" />
        </Link>
        <div>
          <Link to="/create-post" className='font-inter ml-5 font-medium bg-cold text-black px-4 py-2 rounded-md'>Create</Link>
          
          </div>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh - 73px)] bg-cold'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
      
    <SocialMedia />
    </BrowserRouter>
  )
}

export default App
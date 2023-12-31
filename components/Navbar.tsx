import Link from 'next/link';

const popUp = () =>{
  console.log('success')

}


const Navbar:React.FC = () => {
  
  return (
    <div className='items-center'>
        <nav className='top-0 fixed w-full p-0 overflow-hidden text-[1.5rem] justify-center py-2 text-white border-[#ffc300] border-2 
            bg-[#001d3d]
              flex
              justify-items-center'>
            <ul className="">
                <Link href = "/" className='nav-link hover:bg-[#003566] py-[2rem] px-[2rem]'>Home</Link>
                <Link href = "/MessagingPage" className='nav-link hover:bg-[#003566] py-[2rem] px-[2rem]'>Messaging</Link>
                <Link href = "/Login" className='nav-link hover:bg-[#003566] py-[2rem] px-[2rem]'>Login</Link>
            </ul>
        </nav>
    </div>

  )
}

export default Navbar
import { Link } from 'react-router-dom'

function Header() {
  return (
            <div className='max-w-7xl mx-auto py-5'>
            <nav className='flex justify-between items-center'>
                <div>
                </div>
                <div className='flex gap-4 font-mono'>
                    <Link className='hover:border-b-green hover:text-green-500 font-bold' to={"/Menu"}>Menu</Link>
                    <Link className='hover:border-b-green hover:text-green-500 font-bold' to={"/Orders"}>Orders</Link>
                    <Link className='hover:border-b-green hover:text-green-500 font-bold' to={"/Deliver"}>Deliver</Link>
                    <Link className='hover:border-b-green hover:text-green-500 font-bold' to={"/Login"}>Login</Link>
                </div>
            </nav>
        </div>
  )
}

export default Header
import Link from 'next/link'

const Navbar = () => {
    const handleLogout = () =>{
        console.log('saliendo bro...')
    }
	return (
		<header className='max-w-[80rem] mx-auto'>
            <h1 className='text-3xl text-center my-4 font-bold'>RESTO APP</h1>

            <div className='flex justify-between border-b-2 py-2 '>
                <h2>Pepito restaurant</h2>
                <div onClick={handleLogout} className='cursor-pointer'>
                    <p>Logout🚶🏻</p>
                </div>
            </div>
			<nav className='w-full flex justify-between my-5'>
				<Link href='/'>Dashboard</Link>
				<Link href='/productos'>Productos</Link>
				<Link href='/personas'>Personas</Link>
			</nav>
		</header>
	)
}

export default Navbar

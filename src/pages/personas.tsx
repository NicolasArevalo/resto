import Head from 'next/head'
import Layout from '@components/Layout'

import { usePeople, addPerson } from '@services/db'

interface Person {
	id: string
	name: string
	rol: string
	ndoc: number
}

export default function Personas() {
	const { people, loading } = usePeople()

	const handleAddPerson = () => {
		let name = prompt('Nombre de la perrsona...')
		let rol = prompt('Rol de la persona...')
		let ndoc = prompt('Número de documento de la persona...')

		addPerson({ name, rol, ndoc })
	}

	return (
		<Layout headerTitle='Productos'>
			<>
				<h2>Personas</h2>
				<span
					onClick={handleAddPerson}
					className='font-bold text-2xl cursor-pointer'
				>
					+
				</span>
				{loading && <div>CARGANDO...</div>}
				<ul>
					{people.lenght < 1 && <div>No hay personas</div>}
					{people.map((person: Person) => (
						<li key={person.id} className='flex gap-2'>
							<h4 className='font-bold text-lg'>{person.name}</h4>
							<span className='my-auto '>{person.rol}</span>
						</li>
					))}
				</ul>
			</>
		</Layout>
	)
}

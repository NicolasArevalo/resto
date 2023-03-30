import Layout from '@components/Layout'
import { useTables, addTable, deleteTable } from '@services/db'
import Image from 'next/image'

interface Table {
	id: string
	ntable: number
	order: any
}

export default function Home() {
	const { tables, loading } = useTables()
	
	const handleAddTable = () => {
		const nextTable = tables.length + 1
		addTable(nextTable)
	}
	const handleDeleteTable = () => {
		console.log(tables)
		/* deleteTable(tables[tables.length-1].id) */
	}

	return (
		<Layout headerTitle='Dashboard'>
			<>
				<h2 className='inline-block'>Mesas</h2>{' '}
				<button
					onClick={handleAddTable}
					className='inline-block border py-1 px-2'
				>
					+
				</button>
				<button
					onClick={handleDeleteTable}
					className='inline-block border py-1 px-2'
				>
					-
				</button>
				{loading && <div>CARGANDO...</div>}
				{tables.lenght < 1 && <div>No hay Mesas</div>}
				{tables.map((table: Table) => {
					return (
						<li key={table.id} className='flex gap-2'>
							<Image src='/table.png' width='50' height='50' alt='table icon' />
							<h4 className='font-bold text-lg'>{table.ntable}</h4>
							{/* <span>Id orden: {table.order._key.segments.pop()}</span> */}
						</li>
					)
				})}
			</>
		</Layout>
	)
}

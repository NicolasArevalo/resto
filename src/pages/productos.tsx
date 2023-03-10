import Layout from '@components/Layout'
import { useProducts, addProduct } from '@services/db'

interface Product {
	id: string
	name: string
	price: number
	description: string
}

export default function Productos() {
	const { products, loading } = useProducts()

	const handleAddProduct = () => {
		let name = prompt('Nombre del producto...')
		let price = prompt('Precio del producto...')
		let description = prompt('Descripción del producto...')

		addProduct({name, price, description})
	}

	return (
		<Layout headerTitle='Productos'>
			<>
				<h2>Productos</h2> <span onClick={handleAddProduct} className='font-bold text-2xl cursor-pointer'>+</span>
				{loading && <div>CARGANDO...</div>}
				<ul>
					{products.lenght < 1 && <div>No hay productos</div>}
					{products.map((product: Product) => (
						<li key={product.id} className='flex gap-2'>
						<h4 className='font-bold text-lg'>{product.name}</h4>
						<span className='my-auto '>${product.price}</span>
					</li>
					))}
				</ul>
			</>
		</Layout>
	)
}

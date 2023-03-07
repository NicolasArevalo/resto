import Layout from '@components/Layout'
import { useProducts } from '@services/db'
import { useState, useEffect } from 'react'

interface Product {
	id: string;
	name: string;
	price: number;
	description: string;
  }

export default function Productos() {
	const [products, setProducts] = useState<Product[]>([])

	useEffect(() => {
		const FetchProducts = async () => {
			const fetchedProducts = await useProducts()
			setProducts(fetchedProducts)
		}
		FetchProducts()
	}, [])

	return (
		<Layout headerTitle='Productos'>
			<>
				<div>Productos RESTO</div>
				<ul>
					{products.map(product => (
						<li key={product.id}>{product.name}</li>
					))}
				</ul>
			</>
		</Layout>
	)
}

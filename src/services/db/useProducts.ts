import { db } from '@services/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useState, useEffect } from 'react'

interface Product {
	id: string
	name: string
	price: number
	description: string
}

export const useProducts = (): Product[] => {
	const [products, setProducts] = useState<Product[]>([])

	useEffect(() => {
		const fetchProducts = async () => {
			const querySnapshot = await getDocs(collection(db, 'products'))
			const fetchedProducts = querySnapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data(),
			})) as Product[]
			setProducts(fetchedProducts as Product[])
		}
		fetchProducts()
	}, [])

	return products
}

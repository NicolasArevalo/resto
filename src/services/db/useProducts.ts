import { db } from '@services/firebaseConfig'
import { collection, getDocs, query, where, addDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'

interface Product {
	id: string
	name: string
	price: number
	description: string
}

export const useProducts = (): any => {
	const [products, setProducts] = useState<Product[]>([])
	const [loading, setLoading] = useState<Boolean>()

	useEffect(() => {
		const fetchProducts = async () => {
			setLoading(true)
			const querySnapshot = await getDocs(collection(db, 'products'))
			const fetchedProducts = querySnapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data(),
			})) as Product[]
			setProducts(fetchedProducts as Product[])
			setLoading(false)
		}
		fetchProducts()
	}, [])

	return {
		products: products,
		loading: loading
	}
}

export const addProduct = async ({ name, price, description }) => {

	try{
		const newProduct = await addDoc(collection(db, 'products'), {
			name: name,
			price: price,
			description: description
		})
		console.log('Producto agregado con éxito: id:'+newProduct)
		
	} catch (err){
		console.log('Error agregando producto bro: '+err )
	}
}	
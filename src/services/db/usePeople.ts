import { db } from '@services/firebaseConfig'
import { collection, getDocs, query, where, addDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'

interface Person {
	id: string
	name: string
	rol: string
    ndoc: number
}

export const usePeople = (): any => {
	const [people, setPeople] = useState<Person[]>([])
	const [loading, setLoading] = useState<Boolean>()

	useEffect(() => {
		const fetchProducts = async () => {
			setLoading(true)
			const querySnapshot = await getDocs(collection(db, 'people'))
			const fetchedProducts = querySnapshot.docs.map( person => ({
				id: person.id,
				...person.data(),
			})) as Person[]
			setPeople(fetchedProducts as Person[])
			setLoading(false)
		}
		fetchProducts()
	}, [])

	return {
		people: people,
		loading: loading
	}
}

export const addPerson = async ({ name, rol, ndoc }) => {

	try{
		const newPerson = await addDoc(collection(db, 'people'), {
			name: name,
			rol: rol,
			ndoc: ndoc
		})
		console.log('Persona agregada con éxito: id:'+newPerson?.id)
		
	} catch (err){
		console.log('Error agregando persona bro: '+err )
	}
}	
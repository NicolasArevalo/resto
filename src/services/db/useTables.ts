import { db } from '@services/firebaseConfig'
import { collection, getDocs, doc, query, where, addDoc, deleteDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'

interface Table {
    id: string
	ntable: number
    order: any
}

export const useTables = (): any => {
	const [tables, setTables] = useState<Table[]>([])
	const [loading, setLoading] = useState<Boolean>()

	useEffect(() => {
		const fetchTables = async () => {
			setLoading(true)
			const querySnapshot = await getDocs(collection(db, 'tables'))
			const fetchedTables = querySnapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data(),
			})) as Table[]
			setTables(fetchedTables as Table[])
			setLoading(false)
		}
		fetchTables()
	}, [])

	return {
		tables: tables,
		loading: loading
	}
}
export const addTable = async (ntable: Table) => {

	try{
		const newTable = await addDoc(collection(db, 'tables'), {
			ntable: ntable
		})
		console.log('Mesa creada con éxito: id: '+newTable)
		
	} catch (err){
		console.log('Error agregando mesa bro: '+err )
	}
}	
export const deleteTable = async (id: string) => {

	try{
		const deletedTable = await deleteDoc(doc(db, 'tables', id))
		console.log('Mesa creada con éxito: id: '+deletedTable)
		
	} catch (err){
		console.log('Error agregando mesa bro: '+err )
	}
}	
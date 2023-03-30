import { db } from '@services/firebaseConfig'
import { getDoc, doc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
/* 
interface Order{
	products: object[]
	status: string
	table: any
	waitressId: any
} */
export const GetDocument = (table: string, id: string): any => {
/*     /* const [ docu, setDocu ] = useState<object>() 

    let docu 
    const fetchDoc = async () => {
        const snap = await getDoc(doc(db, table, id))

        if (snap.exists()) {
            docu = snap.data()
        } else {
            console.log('No such document')
        }
    }
    fetchDoc()

	return docu */
}

import app from '@services/firebaseConfig'
import { getDatabase } from "firebase/database";

export function getDB(params:JSON) {
    const database = getDatabase(app);
}
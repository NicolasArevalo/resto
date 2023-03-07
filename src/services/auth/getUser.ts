import app from '@services/firebaseConfig'

import { getAuth } from "firebase/auth";

export function getUser(params:JSON) {
    const auth = getAuth(app);
}
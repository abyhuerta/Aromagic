import { getAuth, signOut as firebaseSignOut} from "firebase/auth";
import { auth } from "./firebaseConfig";


export function signOut(){
firebaseSignOut(auth).then(() => {
  // Sign-out successful.
  console.log("Signed out successfully!")
}).catch((error) => {
  // An error happened.
});
}

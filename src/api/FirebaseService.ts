import {
  arrayRemove,
  arrayUnion,
  doc,
  DocumentData,
  DocumentReference,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { firestoreDB } from "../firebase";
import { IUserData } from "../types/IUserData";

export default class FirebaseService {
  static async getUserData(
    id: string,
    callback?: (docRef: DocumentReference<DocumentData>) => void
  ): Promise<IUserData | undefined> {
    const docRef = doc(firestoreDB, "users", id);
    callback && callback(docRef);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as IUserData;
    }
  }

  static async addUserFavorite(
    userId: string,
    animeId: string
  ): Promise<IUserData | undefined> {
    return this.getUserData(userId, async (docRef) => {
      await updateDoc(docRef, {
        favorites: arrayUnion(animeId),
      });
    });
  }

  static async removeUserFavorite(
    userId: string,
    animeId: string
  ): Promise<IUserData | undefined> {
    try {
      return this.getUserData(userId, async (docRef) => {
        await updateDoc(docRef, {
          favorites: arrayRemove(animeId),
        });
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async addNewUser(
    id: string,
    nickname: string,
    email: string
  ): Promise<void> {
    try {
      return await setDoc(doc(firestoreDB, "users", id), {
        username: nickname,
        email: email,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

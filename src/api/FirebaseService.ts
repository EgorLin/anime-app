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
import { IComment, ICommentsData } from "../types/ICommentsData";
import { IUserData } from "../types/IUserData";

export default class FirebaseService {
  static async getFirebaseData<T>(
    id: string,
    docName: string,
    callback?: (docRef: DocumentReference<DocumentData>) => void
  ): Promise<T | undefined> {
    const docRef = doc(firestoreDB, docName, id);
    callback && callback(docRef);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as T;
    }
  }

  static async getUserData(id: string): Promise<IUserData | undefined> {
    return this.getFirebaseData<IUserData>(id, "users");
  }

  static async getCommentsData(id: string): Promise<ICommentsData | undefined> {
    return this.getFirebaseData<ICommentsData>(id, "comments");
  }

  static async addNewComment(
    animeId: string,
    uid: string,
    date: number,
    text: string
  ): Promise<IComment[] | undefined> {
    try {
      return this.getFirebaseData<IComment[]>(
        animeId,
        "comments",
        async (docRef) => {
          await updateDoc(docRef, {
            comments: arrayUnion({ uid, date, text }),
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  static async addFirstComment(
    animeId: string,
    uid: string,
    date: number,
    text: string
  ): Promise<void> {
    try {
      return await setDoc(doc(firestoreDB, "comments", animeId), {
        comments: [{ uid, date, text }],
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async addUserFavorite(
    userId: string,
    animeId: string
  ): Promise<IUserData | undefined> {
    return this.getFirebaseData<IUserData>(userId, "users", async (docRef) => {
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
      return this.getFirebaseData<IUserData>(
        userId,
        "users",
        async (docRef) => {
          await updateDoc(docRef, {
            favorites: arrayRemove(animeId),
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  static async addNewUser(
    id: string,
    username: string,
    email: string,
    favorites: string[],
    imageUrl: string
  ): Promise<void> {
    try {
      return await setDoc(doc(firestoreDB, "users", id), {
        username,
        favorites,
        email,
        imageUrl,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async updateUserImageUrl(userId: string, newUrl: string) {
    return this.getFirebaseData(userId, "users", async (docRef) => {
      await updateDoc(docRef, {
        imageUrl: newUrl,
      });
    });
  }
}

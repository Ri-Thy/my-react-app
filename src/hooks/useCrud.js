import { useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

function useCrud(collectionName) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function getAll() {
    try {
      setLoading(true);
      setError("");

      const querySnapshot = await getDocs(
        collection(db, collectionName)
      );

      const items = querySnapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));

      setData(items);
    } catch (error) {
      console.error(error);
      setError("Failed to load data.");
    } finally {
      setLoading(false);
    }
  }

  async function create(item) {
    try {
      setError("");

      await addDoc(collection(db, collectionName), item);

      await getAll();
    } catch (error) {
      console.error(error);
      setError("Failed to create data.");
    }
  }

  async function update(id, item) {
    try {
      setError("");

      const itemRef = doc(db, collectionName, id);

      await updateDoc(itemRef, item);

      await getAll();
    } catch (error) {
      console.error(error);
      setError("Failed to update data.");
    }
  }

  async function remove(id) {
    try {
      setError("");

      const itemRef = doc(db, collectionName, id);

      await deleteDoc(itemRef);

      await getAll();
    } catch (error) {
      console.error(error);
      setError("Failed to delete data.");
    }
  }

  return {
    data,
    loading,
    error,
    getAll,
    create,
    update,
    remove,
  };
}

export default useCrud;
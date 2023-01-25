import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  query,
  QuerySnapshot,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";

import { IRelationship } from "../types";

const useRelationships = () => {
  const [relationships, setRelationships] = useState<IRelationship[]>([]);

  const fetchRelationships = async () => {
    const relationshipsRef = collection(db, "relationships");
    const q = query(relationshipsRef);
    const docsSnap = await getDocs(q);

    const result: IRelationship[] = [];
    docsSnap.forEach((doc) => {
      result.push({ id: doc.id, ...doc.data() } as IRelationship);
    });

    setRelationships(result);
  };

  useEffect(() => {
    fetchRelationships();

    const collectionRef = collection(db, "relationships");

    const unsubsribe = onSnapshot(collectionRef, (snapshot: QuerySnapshot) => {
      const updatedCollection = snapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as IRelationship)
      );
      setRelationships(updatedCollection);
    });

    return () => unsubsribe();
  }, []);

  return relationships;
};

export default useRelationships;

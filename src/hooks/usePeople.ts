import { useState, useEffect } from "react";

import { query, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import { IPerson } from "../types";

const usePeople = () => {
  const [people, setPeople] = useState<IPerson[]>([]);

  const fetchPeople = async () => {
    const peopleRef = collection(db, "people");
    const q = query(peopleRef);
    const docsSnap = await getDocs(q);

    const result: IPerson[] = [];
    docsSnap.forEach((doc) => {
      result.push({ id: doc.id, ...doc.data() } as IPerson);
    });

    setPeople(result);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return people;
};

export default usePeople;

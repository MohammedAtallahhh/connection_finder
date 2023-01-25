import { useEffect, useState } from "react";

import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";

interface IPerson {
  id: string;
  //   name: string;
}

const usePeople = () => {
  const [people, setPeople] = useState<IPerson[]>([]);

  const fetchPeople = async () => {
    const peopleRef = collection(db, "people");
    const q = query(peopleRef);
    const docsSnap = await getDocs(q);

    const result: IPerson[] = [];
    docsSnap.forEach((doc) => {
      result.push({ id: doc.id, ...doc.data() });
    });

    setPeople(result);
  };
  useEffect(() => {
    fetchPeople();
  }, []);

  return people;
};

export default usePeople;

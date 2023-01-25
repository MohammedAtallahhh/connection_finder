import {
  query,
  collection,
  where,
  limit,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./";
import { uuidv4 } from "@firebase/util";

export interface IPerson {
  id: string;
  name: string;
}

export interface IRelationship {
  first: string;
  second: string;
  type: string;
}

export const isPersonExist = async (name: string) => {
  const peopleRef = collection(db, "people");
  const q = query(peopleRef, where("name", "==", name.toLowerCase()), limit(1));

  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return false;
  } else {
    return true;
  }
};

export const addPerson = async ({ id, name }: IPerson) => {
  const docRef = doc(db, "people", id);

  await setDoc(docRef, { name: name.toLowerCase() });
};

export const deletePerson = async (id: string) => {
  if (!id) return;

  const docRef = doc(db, "people", id);

  await deleteDoc(docRef);
};

export const isRelationshipExist = async (data: IRelationship) => {
  const relationshipsRef = collection(db, "relationships");

  const q = query(
    relationshipsRef,
    where("first", "==", data.first),
    where("second", "==", data.second),
    where("type", "==", data.type),
    limit(1)
  );

  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return false;
  } else {
    return true;
  }
};

export const addRelationship = async (data: IRelationship) => {
  const docRef = doc(db, "relationships", uuidv4());

  await setDoc(docRef, data);
};

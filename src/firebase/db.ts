import {
  query,
  collection,
  where,
  limit,
  getDoc,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./";
import { uuidv4 } from "@firebase/util";

import { IPerson, IRelationship } from "../types";

export const isPersonExist = async (name: string) => {
  const peopleRef = collection(db, "people");
  const q = query(
    peopleRef,
    where("name", "==", name.toLowerCase().trim()),
    limit(1)
  );

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

export const deleteById = async (id: string, collection: string) => {
  if (!id) return;

  const docRef = doc(db, collection, id);

  await deleteDoc(docRef);
};

export const isRelationshipExist = async (data: Omit<IRelationship, "id">) => {
  const relationshipsRef = collection(db, "relationships");

  const q = query(
    relationshipsRef,
    where("first", "==", data.first.trim()),
    where("second", "==", data.second.trim()),
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

export const addRelationship = async (data: Omit<IRelationship, "id">) => {
  const docRef = doc(db, "relationships", uuidv4());

  await setDoc(docRef, data);
};

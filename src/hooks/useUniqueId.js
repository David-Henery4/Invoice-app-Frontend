import { customAlphabet } from "nanoid";

const useUniqueId = (length = 6) => {
  const usedIds = new Set()
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const generateId = customAlphabet(alphabet, length);
  //
const generateUnique = () => {
  const id = generateId();
  if (usedIds.has(id)) {
    return generateUnique();
  }
  if (!usedIds.has(id)) {
    usedIds.add(id)
  }
  return id;
};
  return generateUnique;
};

export default useUniqueId;


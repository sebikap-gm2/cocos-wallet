export const getUniqueByField = <T = any>(arr: T[], field: keyof T) => {
  if (!arr || !arr.length) return [];

  // Get the unique element field values
  const uniqueElementFields = Array.from(new Set(arr.map((i) => i[field])).values());

  // For each unique value, use find to get the first element in the original array.
  // Force Typescript to remove undefined generated from the find function, as it will always be a defined T element.
  const uniqueElements = uniqueElementFields.map(
    (elementFieldValue) => arr.find((element) => element[field] === elementFieldValue) as T,
  );

  return uniqueElements;
};

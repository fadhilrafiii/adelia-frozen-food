export const getTitleCase = (str: string) => {
  const words = str.split(' ');
  const capitalizedWords = words.map(
    (word: string) => word[0].toUpperCase() + word.slice(1).toLowerCase(),
  );

  return capitalizedWords.join(' ');
};

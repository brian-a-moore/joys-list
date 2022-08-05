export const getId = (): string => {
  return Math.random().toString();
};

export const getDate = (date: Date): string => {
  const month = new Date(date).getMonth() + 1;
  const day = new Date(date).getDate();
  const year = new Date(date).getFullYear();

  return `${month < 10 ? "0" + month : month}/${
    day < 10 ? "0" + day : day
  }/${year}`;
};

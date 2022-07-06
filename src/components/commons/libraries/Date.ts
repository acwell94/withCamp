export const getDateDot = (date: Date) => {
  const newdate = new Date(date);
  const yyyy = newdate.getFullYear();
  const mm = String(newdate.getMonth() + 1).padStart(2, "0");
  const dd = String(newdate.getDate()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd}`;
};

export const getDateSliceYear = (date: Date) => {
  const newdate = new Date(date);
  const yyyy = String(newdate.getFullYear()).slice(2);
  const mm = String(newdate.getMonth() + 1).padStart(2, "0");
  const dd = String(newdate.getDate()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd}`;
};

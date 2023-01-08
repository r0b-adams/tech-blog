export const format_date = (ISO: string) => {
  const date = new Date(ISO);
  return date.toLocaleString();
};

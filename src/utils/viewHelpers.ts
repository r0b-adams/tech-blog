export const format_date = (ISO: string) => {
  const date = new Date(ISO);
  return date.toLocaleString();
};

export const get_year = () => {
  const date = new Date();
  return date.getFullYear();
};

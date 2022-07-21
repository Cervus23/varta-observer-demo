export const formatDay = (date: Date) => {
  const from = new Date(date.setHours(0, 0, 0, 0)).getTime();
  const to = new Date(date.setHours(23, 59, 59, 999)).getTime();
  return [from, to];
};

export const formatWeek = (date: Date) => {
  const day = date.getDate();
  const dayOfWeek = date.getDay() - 1;
  const dayDiff = 6 - dayOfWeek;
  const from = new Date(date.setHours(0, 0, 0, 0)).setDate(day - dayOfWeek);
  const to = new Date(date.setHours(23, 59, 59, 999)).setDate(day + dayDiff);
  return [from, to];
};

export const formatMonth = (date: Date) => {
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const from = new Date(
    new Date(date.setHours(0, 0, 0, 0)).setDate(1)
  ).getTime();
  const to = new Date(
    new Date(date.setHours(23, 59, 59, 999)).setDate(lastDay)
  ).getTime();
  return [from, to];
};

export const formatYear = (date: Date) => {
  const from = new Date(
    new Date(new Date(date.setHours(0, 0, 0, 0)).setDate(1)).setMonth(0)
  ).getTime();
  const to = new Date(
    new Date(new Date(date.setHours(23, 59, 59, 999)).setMonth(11)).setDate(31)
  ).getTime();
  return [from, to];
};

export const conjugationMonth = {
  Январь: "Января",
  Февраль: "Февраля",
  Март: "Марта",
  Апрель: "Апреля",
  Май: "Мая",
  Июнь: "Июня",
  Июль: "Июля",
  Август: "Августа",
  Сентябрь: "Сентября",
  Октябрь: "Октября",
  Ноябрь: "Ноября",
  Декабрь: "Декабря",
};

export const convertToDate = ({ day, month }: { day: string; month: string }) => {
  return day + " " + conjugationMonth[month as keyof typeof conjugationMonth];
};

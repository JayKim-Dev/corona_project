const dateFormat = (day) => {
  const now = new Date(new Date().setDate(new Date().getDate() - day));
  const year = now.getFullYear();
  const month = `0${now.getMonth() + 1}`.slice(-2);
  const date = `0${now.getDate()}`.slice(-2);
  return `${year}${month}${date}`;
};

const properties = {
  ServiceKey: 'MymrrXPoMcFDebHXSUQYDklXpKdbBfvt%2FulM%2BlnLRWec%2FecG7cOsDFhak264dyHXJ0JRth66RNR4W5P0afBreg%3D%3D',
  startCreateDt: dateFormat(1),
  endCreateDt: dateFormat(0),
  startDt: dateFormat(2),
};

export default properties;

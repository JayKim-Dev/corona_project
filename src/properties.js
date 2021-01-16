const dateFormat = (day) => {
  const year = new Date().getFullYear();
  const month = `0${new Date().getMonth() + 1}`.slice(-2);
  const date = `0${new Date().getDate()}`.slice(-2) - day;
  return `${year}${month}${date}`;
};

const properties = {
  ServiceKey: 'MymrrXPoMcFDebHXSUQYDklXpKdbBfvt%2FulM%2BlnLRWec%2FecG7cOsDFhak264dyHXJ0JRth66RNR4W5P0afBreg%3D%3D',
  startCreateDt: dateFormat(1),
  endCreateDt: dateFormat(0),
  startDt: dateFormat(2),
};

export default properties;

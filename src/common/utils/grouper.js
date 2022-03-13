export const grouper = data => {
  if (data.length < 1) {
    return [];
  }
  let index = 0;
  let groupedData = [{date: data[0].transactionDate.slice(0, 10), data: []}];
  data.map(item => {
    let itemDate = item.transactionDate.slice(0, 10);
    if (groupedData[index].date === itemDate) {
      groupedData[index].data.push(item);
    } else {
      groupedData.push({date: itemDate, data: [item]});
      index++;
    }
  });
  return groupedData;
};

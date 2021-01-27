const revenue = transactions => {
  const seen = [];

  const days = transactions
    .map(transaction => new Date(transaction.timestamp).toDateString())
    .filter(date => {
      if(seen.includes(date)) return false;

      seen.push(date)
      return true;
    })

  const revenues = {};

  days.forEach(day => {
    const filteredTransactions = transactions
      .filter(transaction => {
        let dateString = new Date(transaction.timestamp)
          .toUTCString()
          .split(' ')
          .slice(0, -2)

        dateString[0] = dateString[0].slice(0, -1);
        dateString = switchElements(dateString, 1, 2).join(' ');

        return dateString === day;
      });

    const revenue = filteredTransactions
      .reduce((agg, curr) => agg + curr.price, 0)

    if(revenue) revenues[day] = revenue;
  })

  return revenues;
};

function switchElements(arr, indexOne, indexTwo) {
  let item = arr[indexOne];
  arr[indexOne] = arr[indexTwo]
  arr[indexTwo] = item;

  return arr;
}


module.exports = { revenue };

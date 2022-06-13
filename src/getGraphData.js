const getGraphData = () => {
  const data = [];
  return fetch("https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=" + process.env.REACT_API)
  .then(res => res.json())
  .then(result => {
    const arrResult = result["Weekly Time Series"];
    for (var inst in arrResult) {
      const myData = arrResult[inst];
      myData.date = inst;
      data.push(myData);
    }
    return data;
  }, err => {
    console.error(err);
    console.log(err.message);
  })
}

export default getGraphData;
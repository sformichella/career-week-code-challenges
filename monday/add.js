const convertToMilliseconds = diff => {
  const conversionFactors = {
    "y": { nextUnit: "M", factor: 12 },
    "M": { nextUnit: "d", factor: 30 },
    "d": { nextUnit: "h", factor: 24 },
    "h": { nextUnit: "m", factor: 60 },
    "m": { nextUnit: "s", factor: 60 },
    "s": { nextUnit: "ms", factor: 1000 },
  };

  if(diff.slice(-2) === 'ms') return Number(diff.slice(0, -2));

  let milliseconds = 1;
  let unit = diff.slice(-1);

  const amount = Number(diff.slice(0, -1));
      
  while(unit !== "ms") {
    const { nextUnit, factor } = conversionFactors[unit];

    unit = nextUnit;
    milliseconds = milliseconds * factor;
  }

  return milliseconds * amount;
};

const add = (date, diff) => {
  const current = date.getTime();
  const diffMilliseconds = convertToMilliseconds(diff);

  console.log(diffMilliseconds);

  return new Date(current + diffMilliseconds)
};

module.exports = { add };

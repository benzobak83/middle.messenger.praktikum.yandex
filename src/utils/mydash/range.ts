function range(start = 0, end: number, step = null, isRight = false) {
  if (!end) {
    end = start;
    start = 0;
  }
  let length = Math.ceil((end - start) / (step || 1));
  let resultArray = new Array();

  for (let i = 0; i < (length > 0 ? length : -length); i++) {
    resultArray[i] = start;
    start += step ? step : end > 0 ? 1 : -1;
  }

  return isRight ? resultArray.reverse() : resultArray;
}

export { range };

const removeDuplicate = arr => {
  let newArr = [];
  arr.reduce((prev, curr) => !newArr.includes(curr) && newArr.push(curr));
  return newArr;
};

export default removeDuplicate;

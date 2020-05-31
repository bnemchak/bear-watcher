let bearArray = [];

const addBearsToArray = () => {
  let newBear = {};

  newBear ['name'] = document.getElementById("inputName").value
  newBear ['imageUrl'] = document.getElementById("addImage").value

  bearArray.push(newBear);
  console.log(bearArray)
}

const getBear = () => {
  return bearArray;
};

export default { addBearsToArray, getBear }

import utils from "../helpers/utils.js"
import bearData from "../helpers/data/bearData.js"

const makeCard = () => {
  const newBear = bearData.getBear ()
  let domstring = '';

  for (let i = 0; i < newBear.length; i++) {
    const bear = newBear[i];
      domstring += `<div class="card">`
      domstring += `<img class="card-img-top" src="${bear.imageUrl}" alt="Bear pics">`
      domstring += `<class="card-body">`
      domstring += `<h2 class="card-title">${bear.name}</h2>`
      domstring += `</div>`
      domstring += `</div>`
  }

  utils.printToDom("#river", domstring)
}

export default { makeCard }

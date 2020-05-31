import utils from "../helpers/utils.js"
import bearData from "../helpers/data/bearData.js"
import showBear from "./river.js"

const clickSubmitEvent = (e) => {
  e.preventDefault();
  bearData.addBearsToArray ();
  document.getElementById("inputName").value = null;
  document.getElementById("addImage").value = null;
  showBear.makeCard();
}

const makeForm = () => {
  const domString = `
  <form>
      <div class="bears"
            <h4> To keep track of your favorite bears, submit their details in the form below!</h4>
        <div class="form-group">
          <input type="text" class="form-control" id="inputName" placeholder="Name of Bear">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="addImage" placeholder="Image Url">
        </div>
        <button id="printBears" type="button" class="btn btn-primary">Submit</button>
  </form>
  `;

  utils.printToDom("#bearForm", domString);

  document.querySelector("#printBears").addEventListener("click", clickSubmitEvent)
}

export default { makeForm }

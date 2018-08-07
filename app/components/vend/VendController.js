import VendService from "./VendService.js";

//PRIVATE PARTS

//variables outside of the exported class are not accessible
const vendService = new VendService()

function draw(total) {
  document.getElementById('total').innerText = total
}

//PUBLIC PARTS
//Controllers are used for getting user input
//Updating Screen
//Sending and reciving data from Service
class VendController {
  constructor() {

  }


  //used to send money to service
  addMoney(cur) {
    console.log('controller: ', cur)
    let total = vendService.addMoney(cur)
    console.log('returned to controller: ', total)
    draw(total)
  }

}


export default VendController
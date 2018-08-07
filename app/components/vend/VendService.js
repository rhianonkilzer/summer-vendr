//Private Parts

let total = 0


//dictionary
const currency = {
  quarter: .25,
  dime: .1,
  nickel: .05
}


//public to controller
class VendService {
  constructor() {

  }

  addMoney(type) {
    console.log('service: ', type)
    //confirm currency is acceptable
    if (currency[type]) {
      //add to total
      total += currency[type]
    }
    return total.toFixed(2)
  }
}


export default VendService
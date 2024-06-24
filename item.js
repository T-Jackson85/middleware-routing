
/** Item in a shopping cart. */
const items = require("./fakeDB")

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;

    // keep track of all items
    items.push(this);
  }

  static findAll(){
    return items
  }
  /** Update found item with matching name to data. */

  static update(name, data) {
    let foundItem = Item.find(name);
    if (foundItem === undefined) {
      throw {message: "Not Found", status: 404}
    }
    savedItem.name = data.name;
    savedItem.price = data.price;

    return savedItem;
  }

  

  static find(name) {
    const savedItem = items.find(v => v.name === name);
    if(savedItem === undefined){
      throw { message: "Not Found", status: 404 }
    }
    return savedItem
  }

  


  static remove(name) {
    let foundIdx = items.findIndex(v => v.name === name);
    if (foundIdx === -1) {
      throw {message: "Not Found", status: 404}
    }
    items.splice(foundIdx, 1);
  }
}

module.exports = Item;

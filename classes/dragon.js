class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  static getDragons(...dragons) {
    let newArr = [];
    dragons.forEach((dragon) => newArr.push(dragon.name));
    return newArr;
  }
}


exports.Dragon = Dragon;

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}

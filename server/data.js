const faker = require("faker");

let list = [
  {
    id: faker.random.uuid(),
    dessert: "Oreo",
    nutritionInfo: {
      calories: 437,
      fat: 18,
      carb: 63,
      protein: 4
    }
  },
  {
    id: faker.random.uuid(),
    dessert: "Nougat",
    nutritionInfo: {
      calories: 308,
      fat: 19,
      carb: 9,
      protein: 37
    }
  },
  {
    id: faker.random.uuid(),
    dessert: "Marshmallow",
    nutritionInfo: {
      calories: 318,
      fat: 3,
      carb: 81,
      protein: 2
    }
  },
  {
    id: faker.random.uuid(),
    dessert: "Lollipop",
    nutritionInfo: {
      calories: 398,
      fat: 2,
      carb: 98,
      protein: 0
    }
  },
  {
    id: faker.random.uuid(),
    dessert: "KitKat",
    nutritionInfo: {
      calories: 518,
      fat: 26,
      carb: 65,
      protein: 60
    }
  }
];

const constList = JSON.parse(JSON.stringify(list));

module.exports = {
  list,
  constList
};

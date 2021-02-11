const { ApolloServer, gql } = require("apollo-server");
const faker = require("faker");
let data = require("./data");

const typeDefs = gql`
  type Nutrition {
    id: ID!
    dessert: String
    nutritionInfo: NutritionInfo
  }

  type NutritionInfo {
    calories: Int
    fat: Int
    carb: Int
    protein: Int
  }

  type Query {
    getList: [Nutrition]
    resetList: [Nutrition]
  }

  type Mutation {
    addNutrition(dessert: String, nutritionInfo: AddNutritionInfo): Nutrition
    deleteNutrition(ids: [ID]): [Nutrition]
  }

  input AddNutritionInfo {
    calories: Int
    fat: Int
    carb: Int
    protein: Int
  }
`;

const resolvers = {
  Query: {
    getList: () => data.list,
    resetList: () => {
      data.list = JSON.parse(JSON.stringify(data.constList));
      return data.list;
    }
  },

  Mutation: {
    addNutrition(_, payload) {
      console.log("adding..", payload);

      const nutrition = {
        id: faker.random.uuid(),
        ...payload
      };
      data.list.push(nutrition);
      return data.list;
    },
    deleteNutrition(_, { ids }) {
      console.log(new Date());
      console.log(ids);
      let deleteData = [];
      let set = new Set();
      ids.map((id) => set.add(id));
      data.list = data.list.filter((e) => {
        if (set.has(e.id)) {
          deleteData.push(e);
          return false;
        }
        return true;
      });
      return deleteData;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

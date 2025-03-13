import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://dummyjson.com/",
});

const APIKit = {
  prodcuts: {
    getProducts: async (skip) => {
      const url = `/products?limit=8&skip=${skip}`;
      return apiClient.get(url).then(({ data }) => data);
    },
  },
  category:{
    getCategories: async () => {
      const url = `/products/category-list`;
      return apiClient.get(url).then(({ data }) => data);
    }
  }
};

export default APIKit;

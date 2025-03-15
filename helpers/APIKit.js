import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://dummyjson.com/",
});

const APIKit = {
  prodcuts: {
    getProducts: async (category = "", skip) => {
      let url;

      if (category.length > 0) {
        url = `/products/category/${category}?limit=8&skip=${skip}`;
      } else {
        url = `/products?limit=8&skip=${skip}`;
      }

      return apiClient.get(url).then(({ data }) => data);
    },
  },
  category: {
    getCategories: async () => {
      const url = `/products/category-list`;
      return apiClient.get(url).then(({ data }) => data);
    },
  },
};

export default APIKit;

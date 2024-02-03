import axios from "axios";

const baseURL = "https://fakestoreapi.com/products";

// export const getProduct = async () => {
//   const product = await axios.get(`${baseURL}/products`);
//   return product.data;
// };

export const getProduct = (callback) => {
  axios
    .get(baseURL)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

import { baseURL } from "../../../core/services/basesUrl";

export function getProductList() {
  return new Promise((resolve, reject) => {
    baseURL
      .get("?limit=12")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

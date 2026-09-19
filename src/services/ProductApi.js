
import API from "../api/axios";

export const getProducts = async ({ page, limit, search }) => {
  const skip = (page - 1) * limit;

  const endpoint = search ? "/products/search" : "/products";

  const response = await API.get(endpoint, {
    params: {
      ...(search && { q: search }),
      limit,
      skip,
    },
  });

  return response.data;
};

export const getProductById = async (id) => {
  const response = await API.get(`/products/${id}`);

  return response.data;
};
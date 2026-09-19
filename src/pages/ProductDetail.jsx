import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";

import { getProductById } from "../services/ProductApi";

function ProductDetails() {
  const { id } = useParams();

  const {
    data: product,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });

  if (isPending) {
    return (
      <p className="mt-10 text-center">
        Loading product...
      </p>
    );
  }

  if (isError) {
    return (
      <p className="mt-10 text-center text-red-500">
        {error.message}
      </p>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-6 shadow">

        <img
          src={product.thumbnail}
          alt={product.title}
          className="mx-auto mb-6 h-80 w-full object-contain"
        />

        <h1 className="mb-4 text-3xl font-bold">
          {product.title}
        </h1>

        <p className="mb-4 text-gray-600">
          {product.description}
        </p>

        <div className="mb-4 flex justify-between">
          <span className="text-2xl font-bold text-blue-600">
            ${product.price}
          </span>

          <span className="text-yellow-500">
            ★ {product.rating}
          </span>
        </div>

        <p className="mb-2">
          <strong>Brand:</strong> {product.brand}
        </p>

        <p className="mb-6">
          <strong>Category:</strong> {product.category}
        </p>

        <Link
          to="/products"
          className="inline-block rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          Back to Products
        </Link>

      </div>
    </main>
  );
}

export default ProductDetails;


import { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

import { getProducts } from "../services/ProductApi";
import ProductCard from "../components/ProductCard";

function Products() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const limit = 10;

  const {
    data,
    isPending,
    isError,
    error,
    isPlaceholderData,
  } = useQuery({
    queryKey: ["products", search, page, limit],
    queryFn: () => getProducts({ page, limit, search }),
    placeholderData: keepPreviousData,
  });

  const totalPages = data
    ? Math.ceil(data.total / limit)
    : 0;

  function handleSearch(e) {
    setSearch(e.target.value);
    setPage(1);
  }

  function handlePrevious() {
    setPage((oldPage) => Math.max(oldPage - 1, 1));
  }

  function handleNext() {
    if (!isPlaceholderData && page < totalPages) {
      setPage((oldPage) => oldPage + 1);
    }
  }

  if (isPending) {
    return (
      <p className="mt-10 text-center text-lg">
        Loading products...
      </p>
    );
  }

  if (isError) {
    return (
      <p className="mt-10 text-center text-red-500">
        {error.message || "Something went wrong"}
      </p>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Products
      </h1>

      {/* Search */}
      <div className="mx-auto mb-8 max-w-md">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search products..."
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      {/* Products Grid */}
      {data.products.length === 0 ? (
        <p className="text-center text-gray-500">
          No products found.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={handlePrevious}
              disabled={page === 1}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            <span className="font-medium">
              Page {page} of {totalPages}
            </span>

            <button
              onClick={handleNext}
              disabled={
                page >= totalPages || isPlaceholderData
              }
              className="rounded-lg bg-blue-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </>
      )}
    </main>
  );
}

export default Products;
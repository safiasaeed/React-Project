import { Link } from "react-router-dom";
import Card from "./ui/card";

function ProductCard({ product }) {
  return (
    <Card
      title={product.title}
      description={product.description}
      image={product.thumbnail}
    >
      <div className="mt-3 flex items-center justify-between">
        <span className="text-lg font-bold text-blue-600">
          ${product.price}
        </span>

        <span className="text-sm text-yellow-500">
          ★ {product.rating}
        </span>
      </div>

      <Link
        to={`/products/${product.id}`}
        className="mt-4 block rounded-lg bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
      >
        View Details
      </Link>
    </Card>
  );
}

export default ProductCard;
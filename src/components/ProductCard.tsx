import React from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-[250px] h-[350px] bg-[#e0e0e0] rounded-[20px] shadow-[9px_9px_18px_#5a5a5a,-9px_-9px_18px_#ffffff] flex flex-col transition duration-400 hover:scale-[1.02] hover:shadow-[0px_0px_10px_2px_#5a5a5a] relative m-4">
      {/* Card Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-[150px] object-contain rounded-t-[20px]"
      />

      {/* Card Content */}
      <div className="flex-1 p-4 grid gap-2 overflow-hidden">
        {/* Title */}
        <h2 className="text-center text-[#323232] font-bold text-base truncate">
          {product.title}
        </h2>

        {/* Price */}
        <p className="text-center text-[#323232] font-semibold text-sm">
          ${product.price.toFixed(2)}
        </p>

        {/* Description */}
        <p className="text-[#323232] text-xs line-clamp-3">
          {product.description}
        </p>

        {/* Links */}
        <div className="flex justify-between mt-auto">
          <a
            href="#"
            className="text-[#323232] font-semibold text-sm hover:underline"
          >
            View Details
          </a>
          <a
            href="#"
            className="text-[#323232] font-semibold text-sm hover:underline"
          >
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

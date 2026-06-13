'use client';

import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <Link href={`/product/${product.id}`} className="text-lg font-semibold text-gray-900 hover:underline">{product.name}</Link>
        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
          <button
            onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

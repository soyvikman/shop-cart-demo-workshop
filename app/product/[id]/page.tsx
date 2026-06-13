// app/product/[id]/page.tsx
// Product detail page with add to cart functionality and premium UI

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getProductById } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types';
import Link from 'next/link';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const router = useRouter();
  const { dispatch } = useCart();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const p = getProductById(id);
    if (!p) {
      // If product not found, navigate back after a short delay
      setTimeout(() => router.push('/'), 2000);
    }
    setProduct(p ?? null);
  }, [id, router]);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
        <p className="text-xl text-gray-700">Cargando producto...</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-6 flex items-center justify-center">
      <article className="bg-white/70 backdrop-blur-lg rounded-xl shadow-xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">
        {/* Image */}
        <figure className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </figure>
        {/* Details */}
        <div className="p-8 md:w-1/2 flex flex-col justify-between">
          <header>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-lg text-gray-600">${product.price}</p>
          </header>
          <p className="mt-4 text-gray-700 flex-1">{product.description}</p>
          <div className="mt-6 flex gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Añadir al carrito
            </button>
            <Link href="/" className="text-blue-600 hover:underline self-center">
              ← Volver al catálogo
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}

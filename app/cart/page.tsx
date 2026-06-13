'use client';

import { useCart } from '@/context/CartContext';
import { CartItem } from '@/components/CartItem';
import Link from 'next/link';

export default function CartPage() {
  const { state } = useCart();

  const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (state.items.length === 0) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Tu carrito está vacío</h1>
        <p className="text-gray-600 mb-6">Agrega algunos productos para comenzar.</p>
        <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
          ← Volver a productos
        </Link>
      </div>
    );
  }

  // TODO: Agrega una funcionalidad para eliminar items del carrito

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Carrito de Compras</h1>
      <div className="max-w-2xl">
        {state.items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
          <span className="text-xl font-bold text-gray-900">Total:</span>
          <span className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</span>
        </div>
      </div>
      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
          ← Seguir comprando
        </Link>
      </div>
    </div>
  );
}

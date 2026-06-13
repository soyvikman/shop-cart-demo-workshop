'use client';

import { useCart } from '@/context/CartContext';
import { CartItem } from '@/components/CartItem';
import Link from 'next/link';

export default function CartPage() {
  const { state, dispatch } = useCart();

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

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Carrito de Compras</h1>
        <button
          onClick={() => {
            if (window.confirm('¿Estás seguro de que deseas vaciar tu carrito?')) {
              dispatch({ type: 'CLEAR_CART' });
            }
          }}
          className="text-sm font-medium text-red-600 hover:text-red-800 transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-red-50 border border-transparent hover:border-red-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Vaciar carrito
        </button>
      </div>
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

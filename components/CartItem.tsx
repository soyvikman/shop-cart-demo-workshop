'use client';

import { CartItem as CartItemType } from '@/types';
import { useCart } from '@/context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { dispatch } = useCart();

  return (
    <div className="flex items-center gap-4 py-4 border-b border-slate-100 last:border-0 group">
      {/* Imagen del producto */}
      <div className="w-20 h-20 relative rounded-xl overflow-hidden bg-slate-100 border border-slate-100 shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Detalles del producto */}
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-slate-800 truncate text-base hover:text-indigo-600 transition-colors">
          {item.name}
        </h3>
        <p className="text-indigo-600 font-extrabold mt-1 text-sm">
          ${item.price}
        </p>
      </div>

      {/* Controles de cantidad */}
      <div className="flex items-center gap-3 bg-slate-50 p-1 rounded-full border border-slate-100">
        <button
          onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity - 1 } })}
          className="w-8 h-8 rounded-full flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:bg-white active:scale-90 transition-all font-semibold"
          aria-label="Disminuir cantidad"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
          </svg>
        </button>
        <span className="w-6 text-center font-bold text-slate-700 text-sm select-none">
          {item.quantity}
        </span>
        <button
          onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity + 1 } })}
          className="w-8 h-8 rounded-full flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:bg-white active:scale-90 transition-all font-semibold"
          aria-label="Aumentar cantidad"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      {/* Botón de eliminación */}
      <button
        onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
        className="text-slate-400 hover:text-rose-500 hover:bg-rose-50 p-2 rounded-xl active:scale-95 transition-all shrink-0"
        aria-label="Eliminar producto"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
}

'use client';

import { CartItem as CartItemType } from '@/types';
import { useCart } from '@/context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

// PRUEBA MCP GITHUB MCP 
export function CartItem({ item }: CartItemProps) {
  const { dispatch } = useCart();

  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-200">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-md"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{item.name}</h3>
        <p className="text-gray-600">${item.price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity - 1 } })}
          className="w-8 h-8 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-100"
        >
          -
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity + 1 } })}
          className="w-8 h-8 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-100"
        >
          +
        </button>
      </div>
      <button
        onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
        className="text-red-500 hover:text-red-700 ml-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
}

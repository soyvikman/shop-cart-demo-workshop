'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export function Navbar() {
  const { state } = useCart();
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-6 py-4 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo de marca con gradiente e isotipo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-indigo-100 group-hover:scale-105 transition-transform duration-200">
            T
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
            TechShop
          </span>
        </Link>

        {/* Enlace al carrito con botón redondeado premium */}
        <Link 
          href="/cart" 
          className="relative p-2.5 rounded-full text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-all duration-200 border border-transparent hover:border-slate-100 active:scale-95"
          aria-label="Ver carrito"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-[10px] font-bold rounded-full min-w-5 h-5 px-1.5 flex items-center justify-center shadow-md shadow-rose-200 animate-pulse">
              {itemCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

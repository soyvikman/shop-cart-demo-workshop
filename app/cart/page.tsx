'use client';

import { useCart } from '@/context/CartContext';
import { CartItem } from '@/components/CartItem';
import Link from 'next/link';

export default function CartPage() {
  const { state } = useCart();

  const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (state.items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <div className="bg-gradient-to-b from-slate-50 to-white border border-slate-100 rounded-3xl p-10 max-w-md w-full shadow-xl shadow-slate-100/50 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-200 animate-float">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute top-1 right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
          </div>

          <h1 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 bg-clip-text text-transparent">
            Tu carrito está vacío
          </h1>
          <p className="text-slate-500 mb-8 max-w-sm mx-auto leading-relaxed">
            Parece que aún no has añadido ningún producto. ¡Explora nuestra tienda y encuentra algo que te encante!
          </p>
          
          <Link href="/" className="inline-flex items-center justify-center w-full px-6 py-3.5 border border-transparent text-base font-semibold rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md shadow-indigo-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
            Volver al catálogo
            <svg className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Banner de Bienvenida Premium */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-indigo-950 to-purple-950 text-white rounded-3xl p-8 mb-10 shadow-xl shadow-indigo-950/10">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-indigo-200 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Tu Selección
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">
              ¡Excelente elección!
            </h1>
            <p className="text-indigo-200 text-sm max-w-md">
              Revisa los productos que has añadido. Estás a un solo paso de completar tu pedido.
            </p>
          </div>
          
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm self-start md:self-auto">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-indigo-300 font-medium">Total de artículos</p>
              <p className="text-lg font-bold text-white">
                {state.items.reduce((sum, item) => sum + item.quantity, 0)} {state.items.reduce((sum, item) => sum + item.quantity, 0) === 1 ? 'producto' : 'productos'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Lista de productos */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            Artículos en tu Carrito
            <span className="text-xs font-normal text-slate-500">({state.items.length})</span>
          </h2>
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm divide-y divide-slate-100">
            {state.items.map((item) => (
              <div key={item.id} className="py-4 first:pt-0 last:pb-0">
                <CartItem item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Resumen del pedido */}
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-sm lg:sticky lg:top-8">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Resumen del pedido</h3>
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-slate-600">
              <span>Subtotal</span>
              <span className="font-semibold text-slate-900">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-slate-600">
              <span>Envío</span>
              <span className="text-emerald-600 font-semibold">Gratis</span>
            </div>
            <div className="border-t border-slate-200 pt-4 flex justify-between items-end">
              <span className="text-base font-bold text-slate-900">Total</span>
              <div className="text-right">
                <span className="text-2xl font-black text-slate-900">${total.toFixed(2)}</span>
                <p className="text-[10px] text-slate-400">Impuestos incluidos</p>
              </div>
            </div>
          </div>

          <button className="w-full mt-6 py-3.5 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-md shadow-indigo-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none">
            Proceder al pago
          </button>

          <div className="mt-4 text-center">
            <Link href="/" className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
              <svg className="w-4 h-4 mr-1.5 transition-transform duration-200 hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Seguir comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


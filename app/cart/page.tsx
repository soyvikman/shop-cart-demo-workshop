'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { CartItem } from '@/components/CartItem';
import Link from 'next/link';

export default function CartPage() {
  const { state, dispatch } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);

  const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 200 ? 0 : 15; // Envío gratis a partir de $200
  const tax = subtotal * 0.16; // 16% IVA simulado
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    // Simulamos la compra exitosa y vaciamos el carrito local
    setIsSuccess(true);
    dispatch({ type: 'CLEAR_CART' });
  };

  // Pantalla de éxito en la compra
  if (isSuccess) {
    return (
      <div className="text-center py-16 max-w-md mx-auto space-y-6 bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50">
        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-500 shadow-sm border border-emerald-100">
          <svg className="w-10 h-10 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-black text-slate-800">¡Pedido Realizado con Éxito!</h1>
          <p className="text-slate-500 text-sm">
            Gracias por tu compra. Te hemos enviado un correo de confirmación con los detalles del envío.
          </p>
        </div>
        <div className="pt-4">
          <Link 
            href="/" 
            className="inline-block bg-slate-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors shadow-lg active:scale-95 text-sm"
          >
            Volver a la Tienda
          </Link>
        </div>
      </div>
    );
  }

  // Pantalla de carrito vacío
  if (state.items.length === 0) {
    return (
      <div className="text-center py-16 max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-black text-slate-800">Tu carrito está vacío</h1>
          <p className="text-slate-500 text-sm">
            Explora nuestra colección y añade algunos artículos a tu carrito.
          </p>
        </div>
        <div className="pt-4">
          <Link 
            href="/" 
            className="inline-block bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-indigo-100 hover:shadow-lg active:scale-95 text-sm"
          >
            Explorar Productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-slate-800">Carrito de Compras</h1>
        <p className="text-slate-500 text-sm mt-1">Revisa los artículos que has seleccionado antes de pagar.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Lista de productos en el carrito */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 p-6 shadow-sm divide-y divide-slate-100">
          {state.items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        {/* Resumen del pedido */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm space-y-6">
          <h2 className="text-lg font-bold text-slate-800">Resumen del Pedido</h2>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-slate-500">
              <span>Subtotal</span>
              <span className="font-semibold text-slate-700">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>Costo de envío</span>
              <span className="font-semibold text-slate-700">
                {shipping === 0 ? (
                  <span className="text-emerald-600 font-bold">Gratis</span>
                ) : (
                  `$${shipping.toFixed(2)}`
                )}
              </span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>Impuesto estimado (16%)</span>
              <span className="font-semibold text-slate-700">${tax.toFixed(2)}</span>
            </div>
            
            <div className="border-t border-slate-100 pt-4 flex justify-between text-base font-bold text-slate-800">
              <span>Total estimado</span>
              <span className="text-lg text-indigo-600">${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-md shadow-indigo-100 hover:shadow-lg active:scale-95 text-sm"
          >
            Proceder al Pago
          </button>

          <p className="text-center text-xs text-slate-400 font-light leading-relaxed">
            Compra protegida y encriptación SSL. El envío se calcula según la política local.
          </p>
        </div>
      </div>
      
      <div>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 transition-colors font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Seguir comprando
        </Link>
      </div>
    </div>
  );
}

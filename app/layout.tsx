import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TechShop - Carrito de Compras Premium',
  description: 'Una experiencia moderna de e-commerce construida con Next.js and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-800 antialiased min-h-screen flex flex-col`}>
        <CartProvider>
          <Navbar />
          <main className="max-w-6xl mx-auto px-4 py-8 flex-grow w-full">
            {children}
          </main>
          <footer className="border-t border-slate-200 bg-white py-6 mt-12 text-center text-sm text-slate-500">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <p>&copy; {new Date().getFullYear()} TechShop. Todos los derechos reservados.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-indigo-600 transition-colors">Privacidad</a>
                <a href="#" className="hover:text-indigo-600 transition-colors">Términos de Servicio</a>
                <a href="#" className="hover:text-indigo-600 transition-colors">Soporte</a>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}

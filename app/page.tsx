import { products } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';

export default function Home() {
  return (
    <div>
      {/* Banner de Bienvenida Premium */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-3xl p-8 md:p-12 mb-10 shadow-xl shadow-indigo-500/10">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md">
            🔥 Ofertas de la semana
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            ¡Bienvenido a nuestra tienda!
          </h1>
          <p className="text-indigo-100 text-base md:text-lg leading-relaxed font-light">
            Explora nuestro exclusivo catálogo de productos, encuentra las mejores ofertas y agrégalas directamente a tu carrito con un solo clic.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

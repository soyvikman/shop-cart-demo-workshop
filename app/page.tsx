import { products } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Banner de Bienvenida Premium */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-8 md:p-12 shadow-2xl shadow-indigo-500/20 text-white transition-all duration-300 hover:shadow-indigo-500/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white mb-4 animate-pulse">
            ✨ ¡Nuevo Taller de IA!
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text bg-gradient-to-b from-white to-indigo-100">
            ¡Te damos la bienvenida a nuestra tienda!
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 font-light leading-relaxed">
            Explora nuestra colección curada de productos de demostración creados especialmente para probar el flujo de agentes de IA y habilidades de automatización.
          </p>
        </div>
        
        {/* Elementos decorativos */}
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-10 top-5 w-24 h-24 bg-pink-400/20 rounded-full blur-2xl pointer-events-none" />
      </div>

      <div>
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-8 relative inline-block">
          Productos Destacados
          <span className="absolute left-0 bottom-[-8px] w-12 h-1 bg-indigo-600 rounded-full" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

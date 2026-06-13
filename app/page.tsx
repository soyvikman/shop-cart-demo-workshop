import { products } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Sección Héroe Premium */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-900 text-white py-16 px-8 md:px-12 shadow-lg">
        {/* Luces de fondo decorativas (gradientes) */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-600/10 rounded-full blur-2xl -ml-20 -mb-20 pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-6">
          <span className="inline-block bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Novedades de Verano
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Descubre el futuro de la tecnología
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed font-light">
            Equipos y accesorios de alto nivel diseñados para potenciar tu productividad y llevar tu flujo de trabajo al siguiente nivel.
          </p>
          <div className="pt-2">
            <a 
              href="#productos" 
              className="inline-flex items-center justify-center bg-white text-slate-900 font-bold px-6 py-3 rounded-xl hover:bg-slate-100 transition-colors shadow-lg active:scale-95"
            >
              Explorar Catálogo
            </a>
          </div>
        </div>
      </section>

      {/* Catálogo de Productos */}
      <div id="productos" className="scroll-mt-24 space-y-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-800">
            Nuestros Productos
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Explora la mejor selección de hardware y periféricos seleccionados a mano.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

import { products } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';

export default function Home() {
  const msg = "¡Bienvenido a nuestra tienda!";
  return (
    <div>
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-100/80 mb-8 shadow-sm">
        <h2 className="text-2xl font-extrabold text-indigo-950 tracking-tight">{msg}</h2>
        <p className="text-indigo-700/90 mt-1.5 font-medium text-sm">Disfruta de los mejores productos al mejor precio.</p>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

import { products } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';

export default function Home() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">¡Bienvenido a nuestra tienda!</h1>
        <p className="text-gray-600">Explora nuestro catálogo de productos y agrégalos a tu carrito.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

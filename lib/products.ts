import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Laptop Pro',
    price: 1299,
    image: 'https://placehold.co/300x200?text=Laptop+Pro',
    description: 'Laptop para desarrollo profesional',
  },
  {
    id: '2',
    name: 'Mouse Inalámbrico',
    price: 29,
    image: 'https://placehold.co/300x200?text=Mouse',
    description: 'Mouse ergonómico con precisión óptica',
  },
  {
    id: '3',
    name: 'Teclado Mecánico',
    price: 89,
    image: 'https://placehold.co/300x200?text=Teclado',
    description: 'Teclado RGB con switches mecánicos',
  },
  {
    id: '4',
    name: 'Monitor 4K',
    price: 349,
    image: 'https://placehold.co/300x200?text=Monitor',
    description: 'Monitor 27 pulgadas 4K UHD',
  },
  {
    id: '5',
    name: 'Auriculares Bluetooth',
    price: 79,
    image: 'https://placehold.co/300x200?text=Headphones',
    description: 'Auriculares con cancelación de ruido',
  },
  {
    id: '6',
    name: 'Webcam HD',
    price: 59,
    image: 'https://placehold.co/300x200?text=Webcam',
    description: 'Webcam 1080p para videollamadas',
  },
];

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}

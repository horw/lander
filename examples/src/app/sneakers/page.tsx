"use client"


import React, { useState } from 'react';
import { ShoppingCart, Heart, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

const sneakers = [
  {
    id: 1,
    name: "Nike Air Max Pulse",
    price: 12990,
    image: "/api/placeholder/300/200",
    tag: "NEW"
  },
  {
    id: 2,
    name: "Adidas Ultraboost Light",
    price: 15990,
    image: "/api/placeholder/300/200",
    tag: "HOT"
  },
  {
    id: 3,
    name: "Puma Nitro Elite",
    price: 11990,
    image: "/api/placeholder/300/200"
  },
  {
    id: 4,
    name: "New Balance 574",
    price: 9990,
    image: "/api/placeholder/300/200",
    tag: "SALE"
  }
];

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sneakers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sneakers.length) % sneakers.length);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 font-bold text-2xl text-red-500">
              КРОССОВИК
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-red-500 transition-colors">Новинки</a>
              <a href="#" className="hover:text-red-500 transition-colors">Коллекция</a>
              <a href="#" className="hover:text-red-500 transition-colors">Sale</a>
              <div className="flex items-center space-x-4">
                <Heart className="w-6 h-6 hover:text-red-500 cursor-pointer transition-colors" />
                <ShoppingCart className="w-6 h-6 hover:text-red-500 cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 hover:text-red-500 transition-colors">Новинки</a>
              <a href="#" className="block px-3 py-2 hover:text-red-500 transition-colors">Коллекция</a>
              <a href="#" className="block px-3 py-2 hover:text-red-500 transition-colors">Sale</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />
        <div className="relative h-full flex items-center justify-center">
          <img 
            src="/api/placeholder/1920/1080" 
            alt="Hero" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 text-red-500">
              КРОССОВИК
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Твой стиль. Твоя скорость.
            </p>
            <button className="bg-red-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition-colors">
              Смотреть коллекцию
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Горячие новинки
        </h2>
        
        {/* Product Carousel */}
        <div className="relative">
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-red-500/80 p-2 rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-red-500/80 p-2 rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {sneakers.map((sneaker) => (
                <div 
                  key={sneaker.id}
                  className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] p-4"
                >
                  <div className="bg-gray-900 rounded-lg overflow-hidden group relative">
                    <img 
                      src={sneaker.image}
                      alt={sneaker.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {sneaker.tag && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full">
                        {sneaker.tag}
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{sneaker.name}</h3>
                      <p className="text-red-500 font-bold">{sneaker.price} ₽</p>
                      <button className="w-full bg-red-500 text-white py-2 rounded-lg mt-4 hover:bg-red-600 transition-colors">
                        В корзину
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">О нас</h3>
              <p className="text-gray-400">
                КРОССОВИК - твой проводник в мире стильной спортивной обуви.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <p className="text-gray-400">Email: info@krossovik.ru</p>
              <p className="text-gray-400">Тел: +7 (999) 123-45-67</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Следите за нами</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">VK</a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Telegram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 КРОССОВИК. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
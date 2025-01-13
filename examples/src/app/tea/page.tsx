"use client"


import React, { useState } from 'react';
import { Menu, X, Clock, MapPin, Phone } from 'lucide-react';

const teaCategories = [
  {
    title: "Классический молочный чай",
    items: [
      {
        name: "Улун с жемчужинами",
        description: "Нежный улун с молоком и тапиокой",
        price: "390 ₽",
        image: "/api/placeholder/400/300"
      },
      {
        name: "Жасминовый молочный",
        description: "Утонченный жасминовый чай с молоком",
        price: "370 ₽",
        image: "/api/placeholder/400/300"
      }
    ]
  },
  {
    title: "Фруктовые чаи",
    items: [
      {
        name: "Манго маття",
        description: "Японский зеленый чай маття с манго",
        price: "420 ₽",
        image: "/api/placeholder/400/300"
      },
      {
        name: "Клубничный улун",
        description: "Молочный улун с клубничным пюре",
        price: "390 ₽",
        image: "/api/placeholder/400/300"
      }
    ]
  }
];

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 font-serif text-2xl text-emerald-800">
              茶 Tea House
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 font-serif">
              <a href="#menu" className="hover:text-emerald-700 transition-colors">Меню</a>
              <a href="#about" className="hover:text-emerald-700 transition-colors">О нас</a>
              <a href="#contact" className="hover:text-emerald-700 transition-colors">Контакты</a>
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
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-b border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 font-serif">
              <a href="#menu" className="block px-3 py-2 hover:text-emerald-700 transition-colors">Меню</a>
              <a href="#about" className="block px-3 py-2 hover:text-emerald-700 transition-colors">О нас</a>
              <a href="#contact" className="block px-3 py-2 hover:text-emerald-700 transition-colors">Контакты</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img 
          src="/api/placeholder/1920/1080" 
          alt="Tea House Interior" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center text-center text-white">
          <div>
            <h1 className="text-6xl md:text-7xl font-serif mb-4">
              Tea House
            </h1>
            <p className="text-xl md:text-2xl font-serif mb-8">
              Аутентичный китайский чай с жемчужинами
            </p>
            <a 
              href="#menu"
              className="inline-block border-2 border-white px-8 py-3 text-lg font-serif hover:bg-white hover:text-emerald-800 transition-colors"
            >
              Смотреть меню
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-center text-emerald-800 mb-16">О нашем чайном доме</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/api/placeholder/600/400" 
                alt="Tea Preparation" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Tea House – это уникальное место, где традиционные китайские рецепты молочного чая
                встречаются с современными вкусами. Мы используем только премиальные сорта чая,
                привезенные напрямую из лучших чайных провинций Китая.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Каждый напиток готовится вручную нашими опытными чайными мастерами, 
                которые прошли обучение в Китае и знают все тонкости приготовления
                идеального bubble tea.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-center text-emerald-800 mb-16">Наше меню</h2>
          
          {teaCategories.map((category, idx) => (
            <div key={idx} className="mb-16 last:mb-0">
              <h3 className="text-2xl font-serif text-emerald-700 mb-8">{category.title}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-serif text-emerald-800">{item.name}</h4>
                        <span className="text-lg font-medium text-emerald-700">{item.price}</span>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-center text-emerald-800 mb-16">Контакты</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-emerald-700 mx-auto mb-4" />
              <h3 className="text-xl font-serif text-emerald-800 mb-2">Адрес</h3>
              <p className="text-gray-600">ул. Пушкина, 123<br />Москва, Россия</p>
            </div>
            
            <div className="text-center">
              <Clock className="w-8 h-8 text-emerald-700 mx-auto mb-4" />
              <h3 className="text-xl font-serif text-emerald-800 mb-2">Часы работы</h3>
              <p className="text-gray-600">Пн-Вс: 10:00 - 22:00</p>
            </div>
            
            <div className="text-center">
              <Phone className="w-8 h-8 text-emerald-700 mx-auto mb-4" />
              <h3 className="text-xl font-serif text-emerald-800 mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (999) 123-45-67</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="font-serif text-2xl mb-4">Tea House</div>
            <p className="text-emerald-100">© 2025 Tea House. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
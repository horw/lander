"use client"

import React, { useState } from 'react';
import { Check, Mail, Phone, MapPin, Clock, Menu, X } from 'lucide-react';

export default function CleaningAgency() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Уборка квартир",
      description: "Профессиональная уборка жилых помещений с использованием экологичных средств",
      icon: "🏠"
    },
    {
      title: "Уборка офисов",
      description: "Комплексная уборка офисных помещений любой площади",
      icon: "🏢"
    },
    {
      title: "Химчистка",
      description: "Глубокая чистка мягкой мебели и ковровых покрытий",
      icon: "🛋️"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-lg z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-bold text-teal-600">
              Европа
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-teal-600 transition-colors">
                Услуги
              </a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                О нас
              </a>
              <a href="#contacts" className="text-gray-600 hover:text-blue-600 transition-colors">
                Контакты
              </a>
              <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors">
                Заказать
              </button>
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a href="#services" className="block text-gray-600">Услуги</a>
              <a href="#about" className="block text-gray-600">О нас</a>
              <a href="#contacts" className="block text-gray-600">Контакты</a>
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-full">
                Заказать
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-50 via-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Профессиональная уборка помещений 
              <span className="block bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                в Европейском стиле
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
              Доверьте чистоту вашего пространства профессионалам с многолетним опытом
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors w-full sm:w-auto">
                Заказать уборку
              </button>
              <button className="border-2 border-teal-600 text-blue-600 px-8 py-3 rounded-full hover:bg-teal-50 transition-colors w-full sm:w-auto">
                Рассчитать стоимость
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="inline-block relative">
              Наши услуги
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-teal-600 rounded-full"></div>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeService === index 
                    ? 'bg-teal-50 shadow-xl scale-105' 
                    : 'bg-white shadow-lg hover:shadow-xl'
                }`}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(-1)}
              >
                <div className={`text-4xl mb-4 transition-transform duration-300 ${
                  activeService === index ? 'scale-110' : ''
                }`}>{service.icon}</div>
                <h3 className={`text-xl font-bold mb-4 tracking-wide ${
                  activeService === index ? 'text-teal-600' : ''
                }`}>{service.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{service.description}</p>
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-teal-600 transform transition-transform duration-300 ${
                  activeService === index ? 'scale-x-100' : 'scale-x-0'
                } origin-left`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Точность</h3>
              <p className="text-gray-600">Выполняем работу строго в оговоренные сроки</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Check className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Качество</h3>
              <p className="text-gray-600">Гарантируем высокое качество уборки</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <MapPin className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Удобство</h3>
              <p className="text-gray-600">Работаем во всех районах города</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Mail className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Поддержка</h3>
              <p className="text-gray-600">Всегда на связи с клиентами</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Свяжитесь с нами</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 tracking-tight relative inline-block">
                Контактная информация
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-600 to-transparent"></div>
              </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-blue-600 mr-4" />
                    <span>+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-blue-600 mr-4" />
                    <span>info@europa-clean.ru</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                    <span>г. Москва, ул. Примерная, д. 1</span>
                  </div>
                </div>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
                <textarea
                  placeholder="Сообщение"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Европа</h3>
              <p className="text-gray-400">Профессиональная уборка помещений с европейским качеством</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (999) 123-45-67</p>
                <p>info@europa-clean.ru</p>
                <p>г. Москва, ул. Примерная, д. 1</p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Режим работы</h4>
              <div className="space-y-2 text-gray-400">
                <p>Пн-Пт: 8:00 - 20:00</p>
                <p>Сб: 9:00 - 18:00</p>
                <p>Вс: 10:00 - 16:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Клининговое агентство "Европа". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
"use client"

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Truck, Ship, Plane, Package, Globe, Clock, Shield, Trophy,
  BarChart, Users, Target, Map, ArrowRight, CheckCircle, Phone,
  Mail, Navigation, Box, Rocket, Zap, Menu
} from 'lucide-react';

export default function ModernLogisticsPage() {
  const [scrollY, setScrollY] = useState<number>(0);
  const [visibleSections, setVisibleSections] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = document.querySelectorAll('[data-animate]');
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const id = section.getAttribute('id');
        if (id && sectionTop < window.innerHeight - 100) {
          setVisibleSections(prev => ({ ...prev, [id]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Инициализация при загрузке
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Функция для определения видимости секции
  const getSectionClass = (sectionId: string) => {
    return `transform transition-all duration-1000 ${visibleSections[sectionId] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      {/* Плавающий хедер */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
              GlobalLogix
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-purple-600 transition-colors">Услуги</a>
            <a href="#benefits" className="text-gray-600 hover:text-purple-600 transition-colors">Преимущества</a>
            <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors">Контакты</a>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Рассчитать стоимость
            </Button>
          </div>
          <Button className="md:hidden" variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          </div>
        </div>
        
        <div className="relative container mx-auto px-4 text-white">
          <Badge className="mb-8 bg-white/10 text-white hover:bg-white/20 transition-colors">
            Инновационная логистика
          </Badge>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block transform hover:scale-105 transition-transform cursor-default">
              Будущее
            </span>
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text transform hover:scale-105 transition-transform cursor-default">
              логистики
            </span>
            <span className="block transform hover:scale-105 transition-transform cursor-default">
              уже здесь
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-2xl text-gray-200">
            Используем искусственный интеллект и передовые технологии для оптимизации
            логистических процессов по всему миру
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 group">
              Начать сейчас
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Узнать больше
            </Button>
          </div>
        </div>

        {/* Плавающие элементы на фоне */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 animate-bounce-slow">
            <Box className="w-16 h-16 text-purple-400 opacity-30" />
          </div>
          <div className="absolute top-1/3 right-1/4 animate-bounce-medium">
            <Navigation className="w-24 h-24 text-indigo-400 opacity-20" />
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-bounce-fast">
            <Globe className="w-20 h-20 text-blue-400 opacity-25" />
          </div>
        </div>
      </header>

      {/* Преимущества */}
      <section 
        className={`py-20 relative ${getSectionClass('benefits')}`}
        id="benefits" 
        data-animate
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
              Наши преимущества
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы объединяем передовые технологии и многолетний опыт для достижения
              максимальной эффективности
            </p>
          </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-12 h-12" />,
                title: "Точность доставки",
                description: "99.9% грузов доставляются точно в срок благодаря ИИ-оптимизации маршрутов"
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "Глобальное покрытие",
                description: "Работаем в более чем 200 странах с локальными партнерами"
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Скорость",
                description: "Сокращаем время доставки на 40% с помощью умной маршрутизации"
              }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-none bg-white/50 backdrop-blur">
                <CardContent className="p-8">
                  <div className="mb-6 text-purple-600 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section 
        className={`py-20 bg-gradient-to-b from-white to-purple-50 ${getSectionClass('services')}`}
        id="services" 
        data-animate
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
              Наши услуги
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Комплексные решения
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Предоставляем полный спектр логистических услуг с использованием
              современных технологий
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Truck className="w-16 h-16" />,
                title: "Наземная логистика",
                features: ["Автоперевозки", "ЖД перевозки", "Мультимодальные перевозки"]
              },
              {
                icon: <Ship className="w-16 h-16" />,
                title: "Морская логистика",
                features: ["Контейнерные перевозки", "Балкерные грузы", "Портовая обработка"]
              },
              {
                icon: <Plane className="w-16 h-16" />,
                title: "Авиа логистика",
                features: ["Срочная доставка", "Чартерные рейсы", "Опасные грузы"]
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-8">
                  <div className="mb-6 text-purple-600 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "20+", label: "Лет опыта" },
              { number: "100k+", label: "Клиентов" },
              { number: "500k+", label: "Доставок в год" },
              { number: "99.9%", label: "Точность" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Контактная форма */}
      <section 
        className={`py-20 ${getSectionClass('contact')}`}
        id="contact" 
        data-animate
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
                Свяжитесь с нами
              </Badge>
              <h2 className="text-4xl font-bold mb-4">Начните работу с нами</h2>
              <p className="text-xl text-gray-600">
                Оставьте заявку, и мы свяжемся с вами в течение 24 часов
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-center group">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors">
                      <Phone className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-gray-600">+7 (800) 555-55-55</p>
                    </div>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">contact@globallogix.com</p>
                    </div>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors">
                      <Navigation className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-gray-600">Москва, ул. Инновационная, 42</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700 group">
                  Заказать звонок
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="w-full">
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Rocket className="h-8 w-8 text-purple-500" />
                <span className="text-2xl font-bold text-white">GlobalLogix</span>
              </div>
              <p className="text-gray-400">
                Инновационные логистические решения для вашего бизнеса
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Услуги</h3>
              <ul className="space-y-2">
                {[
                  "Автомобильные перевозки",
                  "Морские перевозки",
                  "Авиаперевозки",
                  "Мультимодальные перевозки"
                ].map((service, index) => (
                  <li key={index} className="hover:text-purple-400 transition-colors cursor-pointer">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Компания</h3>
              <ul className="space-y-2">
                {[
                  "О нас",
                  "Карьера",
                  "Новости",
                  "Блог"
                ].map((item, index) => (
                  <li key={index} className="hover:text-purple-400 transition-colors cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Подписка на новости</h3>
              <p className="text-gray-400 mb-4">
                Получайте последние новости и специальные предложения
              </p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 group">
                Подписаться
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} GlobalLogix. Все права защищены.</p>
          </div>
        </div>
      </footer>

    </div>


  );
}
"use client"

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Ship, Plane, Globe, Clock, Shield, Trophy } from 'lucide-react';

export default function LogisticsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700">
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
            Глобальные логистические решения
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-3xl">
            Доставляем грузы по всему миру быстро, надежно и эффективно
          </p>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
            Рассчитать стоимость
          </Button>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="flex flex-col items-center text-center">
                <Truck className="w-16 h-16 text-blue-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Автоперевозки</h3>
                <p className="text-gray-600">
                  Доставка грузов любого объема по России и странам СНГ
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="flex flex-col items-center text-center">
                <Ship className="w-16 h-16 text-blue-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Морские перевозки</h3>
                <p className="text-gray-600">
                  Контейнерные перевозки через основные морские порты
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="flex flex-col items-center text-center">
                <Plane className="w-16 h-16 text-blue-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Авиаперевозки</h3>
                <p className="text-gray-600">
                  Срочная доставка грузов воздушным транспортом
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Globe className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Глобальное покрытие</h3>
              <p className="text-gray-600">Доставляем грузы в более чем 200 стран мира</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Clock className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Точность доставки</h3>
              <p className="text-gray-600">98% грузов доставляются точно в срок</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Shield className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Безопасность</h3>
              <p className="text-gray-600">Полная страховка и отслеживание грузов</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Trophy className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Опыт</h3>
              <p className="text-gray-600">15+ лет успешной работы на рынке</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg">Лет на рынке</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50k+</div>
              <div className="text-lg">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-lg">Стран доставки</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-lg">Выполненных заказов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Готовы начать?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Свяжитесь с нами для получения индивидуального предложения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
              Связаться с нами
            </Button>
            <Button size="lg" variant="outline">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">О компании</h3>
            <p className="text-sm">
              Мы предоставляем комплексные логистические решения для бизнеса любого масштаба
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <p className="text-sm">
              Телефон: +7 (800) 555-55-55<br />
              Email: info@logistics.com<br />
              Адрес: г. Москва, ул. Примерная, 123
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Услуги</h3>
            <ul className="text-sm space-y-2">
              <li>Автоперевозки</li>
              <li>Морские перевозки</li>
              <li>Авиаперевозки</li>
              <li>Складская логистика</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Соцсети</h3>
            <ul className="text-sm space-y-2">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
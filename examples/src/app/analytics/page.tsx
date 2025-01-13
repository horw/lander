"use client"

// page.tsx
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Users,TrendingUp, ArrowRight, Moon } from 'lucide-react';

// Генерация данных остается той же
const generateData = () => {
  const data = [];
  for (let i = 0; i < 7; i++) {
    data.push({
      date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString(),
      users: Math.floor(Math.random() * 1000) + 500,
      revenue: Math.floor(Math.random() * 10000) + 5000,
      engagement: Math.floor(Math.random() * 100) + 50,
    });
  }
  return data.reverse();
};

// Обновленный декоративный разделитель
const GothicDivider = () => (
  <div className="flex items-center justify-center my-12">
    <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-700/50 to-transparent"></div>
    <Moon className="mx-4 text-purple-600 rotate-45" />
    <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-700/50 to-transparent"></div>
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md z-50 border-b border-purple-900/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center">
          <span className="text-3xl font-gothic text-purple-400">Алланико</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-gothic">Возможности</a>
          <a href="#demo" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-gothic">Демо</a>
          <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-gothic">Контакты</a>
          <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-950">Войти</Button>
          <Button className="bg-purple-700 hover:bg-purple-800 text-gray-100">Начать</Button>
        </div>
      </div>
    </div>
  </nav>
);

export default function GothicLanding() {
  const [data, setData] = useState(generateData());
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(true);
      setTimeout(() => {
        setData(generateData());
        setIsLoading(false);
      }, 500);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Users,
      title: "Тёмная аналитика",
      description: "Погрузитесь в глубины данных вашего бизнеса с помощью продвинутых алгоритмов"
    },
    {
      icon: Activity,
      title: "Мистические инсайты",
      description: "Раскройте скрытые паттерны в режиме реального времени"
    },
    {
      icon: TrendingUp,
      title: "Предсказания судьбы",
      description: "Используйте силу ML-моделей для предвидения будущих трендов"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-300">
      <Navbar />
      
      {/* Hero секция */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
          <h1 className="text-6xl md:text-7xl font-gothic text-gray-100 mb-6 relative">
            Тёмное искусство
            <span className="text-purple-400"> аналитики</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto font-gothic">
            Раскройте тайны ваших данных с помощью мистической силы Алланико
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-purple-700 hover:bg-purple-800 text-gray-100 font-gothic">
              Начать ритуал
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-purple-700 text-purple-400 hover:bg-purple-950 font-gothic">
              Демо-версия
            </Button>
          </div>
        </div>
      </section>

      <GothicDivider />

      {/* Секция с преимуществами */}
      <section id="features" className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gothic text-gray-100 mb-4">
              Тёмные искусства аналитики
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Откройте врата к неизведанным возможностям вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900/50 border-purple-900/30 transition-all duration-300 hover:border-purple-700">
                <CardContent className="p-6">
                  <div className="bg-purple-900/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-gothic text-gray-100 mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <GothicDivider />

      {/* Демо-секция */}
      <section id="demo" className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gothic text-gray-100 mb-4">
              Погрузитесь в тьму данных
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Живое демо нашей мистической аналитической панели
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className={`bg-gray-900/50 border-purple-900/30 transition-all duration-300 ${isLoading ? 'opacity-50' : ''}`}>
              <CardHeader>
                <CardTitle className="text-gray-100 font-gothic">Активность душ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#2d2d2d" />
                      <XAxis dataKey="date" stroke="#666" />
                      <YAxis stroke="#666" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1a1a1a', 
                          border: '1px solid #333',
                          borderRadius: '4px'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="users" 
                        stroke="#9f7aea" 
                        strokeWidth={2}
                        dot={{ fill: '#9f7aea' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className={`bg-gray-900/50 border-purple-900/30 transition-all duration-300 ${isLoading ? 'opacity-50' : ''}`}>
              <CardHeader>
                <CardTitle className="text-gray-100 font-gothic">Мистическая прибыль</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#2d2d2d" />
                      <XAxis dataKey="date" stroke="#666" />
                      <YAxis stroke="#666" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1a1a1a', 
                          border: '1px solid #333',
                          borderRadius: '4px'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="#9f7aea" 
                        strokeWidth={2}
                        dot={{ fill: '#9f7aea' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <GothicDivider />

      {/* CTA секция */}
      <section id="contact" className="py-20 bg-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-gothic text-gray-100 mb-4">
            Готовы присоединиться к тёмному культу аналитики?
          </h2>
          <p className="text-purple-200 mb-8 max-w-2xl mx-auto">
            Тысячи компаний уже познали силу наших тёмных искусств
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-gray-100 font-gothic">
              Начать ритуал
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-900/10 font-gothic">
              Вызвать менеджера
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12 border-t border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-gray-100 font-gothic mb-4">Таинства</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Руководства</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Поддержка</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Статус</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-100 font-gothic mb-4">Договоры</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Конфиденциальность</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Условия</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Безопасность</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Печати</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-900/30 mt-12 pt-8 text-center">
            <p className="font-gothic">© 2025 Алланико. Все права защищены тёмной магией.</p>
          </div>
        </div>
      </footer>

      {/* Декоративный фоновый эффект */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-30 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent"></div>
      </div>
    </div>
  );
}
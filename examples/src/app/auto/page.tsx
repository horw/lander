'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

const luxuryCards = [
  {
    id: 1,
    name: 'Mercedes-Benz S-Class',
    price: '12 500 000 ₽',
    description: 'Новое поколение роскоши',
    specs: ['Разгон до 100 км/ч за 4.9с', 'Мощность 523 л.с.', 'Полный привод 4MATIC+'],
    features: ['Premium Sound System', 'Массаж передних и задних сидений', 'Полуавтономное вождение'],
    image: '/api/placeholder/1920/1080'
  },
  {
    id: 2,
    name: 'BMW 7 Series',
    price: '11 800 000 ₽',
    description: 'Технологии будущего',
    specs: ['Разгон до 100 км/ч за 5.1с', 'Мощность 545 л.с.', 'Полный привод xDrive'],
    features: ['Theatre Screen 31.3"', 'Sky Lounge LED', 'Driving Assistant Professional'],
    image: '/api/placeholder/1920/1080'
  },
  {
    id: 3,
    name: 'Rolls-Royce Ghost',
    price: '35 900 000 ₽',
    description: 'Совершенство в деталях',
    specs: ['Разгон до 100 км/ч за 4.8с', 'Мощность 571 л.с.', 'Полный привод'],
    features: ['Starlight Headliner', 'Bespoke Audio', 'Satellite Aided Transmission'],
    image: '/api/placeholder/1920/1080'
  }
];

const ContactInfo = () => (
  <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
    <a 
      href="tel:+7123456789" 
      className="bg-yellow-400 p-4 rounded-full shadow-xl hover:bg-yellow-500 transition-colors"
      aria-label="Связаться с нами по телефону"
    >
      <Phone className="w-6 h-6 text-black" />
    </a>
    <a 
      href="mailto:info@autoplav.ru" 
      className="bg-yellow-400 p-4 rounded-full shadow-xl hover:bg-yellow-500 transition-colors"
      aria-label="Написать нам на email"
    >
      <Mail className="w-6 h-6 text-black" />
    </a>
  </div>
);

export default function Page() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      {/* Навигация */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-black/90 backdrop-blur-sm shadow-xl' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h2 className="text-2xl text-yellow-400 font-light tracking-widest">
            PREMIUM AUTO SPACE
          </h2>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-yellow-400 px-6 py-2 rounded text-black font-light tracking-wider hover:bg-yellow-500 transition-colors"
          >
            КАТАЛОГ
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm border-t border-yellow-400">
            <div className="container mx-auto px-4 py-6">
              <ul className="space-y-4">
                <li>
                  <a href="#models" className="text-yellow-400 hover:text-yellow-300 transition-colors text-lg tracking-wider">
                    АВТОМОБИЛИ
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-yellow-400 hover:text-yellow-300 transition-colors text-lg tracking-wider">
                    ФИЛОСОФИЯ
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-yellow-400 hover:text-yellow-300 transition-colors text-lg tracking-wider">
                    СВЯЗАТЬСЯ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>

      {/* Героический заголовок */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm" />
        <div className="relative z-10 text-center space-y-8">
          <h1 className="text-7xl md:text-9xl text-yellow-400 font-extralight tracking-[.25em] leading-tight">
            PREMIUM<br/>AUTO SPACE
          </h1>
          <p className="text-xl md:text-2xl text-white font-light tracking-[.5em] uppercase">
            Искусство выбора
          </p>
        </div>
      </header>

      {/* Основной контент */}
      <main className="container mx-auto px-4 py-16">
        {/* Секция с автомобилями */}
        <section id="models" className="space-y-32">
          {luxuryCards.map((car, index) => (
            <div key={car.id} className="relative group">
              <div className="relative overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-96 md:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-black/80 backdrop-blur-sm p-8">
                    <h3 className="text-4xl text-yellow-400 font-light tracking-wider mb-2">
                      {car.name}
                    </h3>
                    <p className="text-lg text-yellow-200 font-light tracking-wide mb-4">
                      {car.description}
                    </p>
                    <p className="text-3xl text-white font-light tracking-widest mb-6">
                      {car.price}
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-yellow-400 text-lg font-light tracking-wider mb-4">
                          ХАРАКТЕРИСТИКИ
                        </h4>
                        <ul className="space-y-2">
                          {car.specs.map((spec, i) => (
                            <li key={i} className="text-white font-light tracking-wide">
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-yellow-400 text-lg font-light tracking-wider mb-4">
                          ОСОБЕННОСТИ
                        </h4>
                        <ul className="space-y-2">
                          {car.features.map((feature, i) => (
                            <li key={i} className="text-white font-light tracking-wide">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* О нас */}
        <section id="about" className="mt-32 text-center">
          <div className="bg-black/80 backdrop-blur-sm p-12">
            <h2 className="text-5xl md:text-6xl text-yellow-400 font-extralight tracking-[.25em] mb-8">
              ФИЛОСОФИЯ
            </h2>
            <p className="text-xl text-white font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
              Premium Auto Space — пространство, где технологии будущего встречаются с безупречным стилем. 
              Мы создаем уникальный опыт выбора автомобиля, сочетая инновационный подход с глубоким пониманием 
              индивидуальных предпочтений каждого клиента.
            </p>
          </div>
        </section>

        {/* Контакты */}
        <section id="contact" className="mt-32 text-center">
          <h2 className="text-5xl md:text-6xl text-yellow-400 font-extralight tracking-[.25em] mb-12">
            КОНТАКТЫ
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-black/80 backdrop-blur-sm p-8">
              <Phone className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <p className="text-white text-lg font-light tracking-wider">
                +7 495 123-45-67
              </p>
              <p className="text-yellow-200 text-sm font-light tracking-wider mt-2">
                Ежедневно 9:00 – 21:00
              </p>
            </div>
            <div className="bg-black/80 backdrop-blur-sm p-8">
              <Mail className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <p className="text-white text-lg font-light tracking-wider">
                hello@premium-auto.space
              </p>
              <p className="text-yellow-200 text-sm font-light tracking-wider mt-2">
                Онлайн-консультация 24/7
              </p>
            </div>
            <div className="bg-black/80 backdrop-blur-sm p-8">
              <MapPin className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <p className="text-white text-lg font-light tracking-wider">
                Москва, Пресненская наб., 12
              </p>
              <p className="text-yellow-200 text-sm font-light tracking-wider mt-2">
                Башня "Федерация"
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Футер */}
      <footer className="bg-black/90 backdrop-blur-sm py-8 mt-20 border-t border-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white text-lg font-light tracking-wider">
            PREMIUM AUTO SPACE © 2025
          </p>
          <p className="text-yellow-200 text-sm font-light tracking-wider mt-2">
            Премиальный автомобильный шоурум
          </p>
        </div>
      </footer>

      {/* Плавающие кнопки связи */}
      <ContactInfo />
    </div>
  );
}
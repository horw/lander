import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white">
        <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Language School</h1>
          <div className="space-x-6">
            <a href="#courses" className="hover:text-blue-200">Курсы</a>
            <a href="#teachers" className="hover:text-blue-200">Преподаватели</a>
            <a href="#prices" className="hover:text-blue-200">Цены</a>
            <a href="#contacts" className="hover:text-blue-200">Контакты</a>
          </div>
        </nav>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold mb-6">Изучайте английский и китайский языки</h2>
            <p className="text-xl mb-8">Профессиональные преподаватели и современные методики обучения</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Записаться на пробный урок
            </button>
          </div>
        </div>
      </header>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши курсы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Английский язык</h3>
              <ul className="space-y-3">
                <li>• Общий английский для всех уровней</li>
                <li>• Подготовка к IELTS и TOEFL</li>
                <li>• Бизнес английский</li>
                <li>• Разговорный клуб</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Китайский язык</h3>
              <ul className="space-y-3">
                <li>• Базовый китайский для начинающих</li>
                <li>• Подготовка к HSK</li>
                <li>• Деловой китайский</li>
                <li>• Иероглифика и каллиграфия</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши преподаватели</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((teacher) => (
              <div key={teacher} className="text-center">
                <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Преподаватель {teacher}</h3>
                <p className="text-gray-600">Опыт преподавания более 5 лет</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Стоимость обучения</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-4">Индивидуальные занятия</h3>
              <p className="text-4xl font-bold mb-4">от 1500₽</p>
              <p className="text-gray-600">за 60 минут</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-4">Мини-группа (2-3 человека)</h3>
              <p className="text-4xl font-bold mb-4">от 1000₽</p>
              <p className="text-gray-600">за 90 минут</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-4">Группа (4-6 человек)</h3>
              <p className="text-4xl font-bold mb-4">от 800₽</p>
              <p className="text-gray-600">за 90 минут</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-blue-600" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-blue-600" />
                <span>info@languageschool.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-4 text-blue-600" />
                <span>ул. Примерная, д. 123, офис 45</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-4 text-blue-600" />
                <span>Пн-Пт: 9:00-21:00, Сб: 10:00-18:00</span>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
              <textarea
                placeholder="Сообщение"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              ></textarea>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Отправить
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Language School. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Страница не найдена</h2>
        <p className="text-gray-500 mt-2">Извините, страница, которую вы ищете, не существует.</p>
        <Link 
          to="/" 
          className="inline-flex items-center mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Home className="w-5 h-5 mr-2" />
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage; 
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { useSlider } from "../../../utils/slider";
import Cow1 from "../../../assets/img/cow1.webp";
import Cow2 from "../../../assets/img/cow2.webp";
import Cow3 from "../../../assets/img/cow3.webp";

const SLIDES = [
  {
    image: Cow1,
    alt: "Коворкинг 1",
  },
  {
    image: Cow2,
    alt: "Коворкинг 2",
  },
  {
    image: Cow3,
    alt: "Коворкинг 3",
  },
];

export default function WhoUs() {
  const { currentSlide, setCurrentSlide } = useSlider(SLIDES);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Почему мы?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Мы — ваш надежный помощник в поиске и аренде коворкингов. Наша
              платформа позволяет быстро находить свободные рабочие
              пространства, идеально подходящие для встреч, работы или
              творческих задач. Просто выберите локацию, забронируйте — и
              начинайте работать!
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <Calendar className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                     Мгновенное бронирование
                  </h3>
                  <p className="text-gray-600">
                    Арендуйте коворкинги онлайн за пару кликов — без звонков,
                    ожиданий и лишней суеты.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                     Актуальное расписание
                  </h3>
                  <p className="text-gray-600">
                    Видите только доступные рабочие места и свободные часы —
                    никаких сюрпризов.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                     Проверенные пространства
                  </h3>
                  <p className="text-gray-600">
                    Работаем только с проверенными коворкингами, каждый из
                    которых имеет реальные отзывы и высокие оценки.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {SLIDES.map((slide, index) => (
                <div
                  key={index}
                  className={`
                    absolute inset-0 transition-all duration-1000 transform
                    ${
                      index === currentSlide
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-full"
                    }
                  `}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              ))}
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {SLIDES.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white w-6"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

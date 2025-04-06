import { Building2 } from "lucide-react";

export function LandlordModalInfo() {
  return (
    <>
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-3 bg-blue-100 rounded-full">
          <Building2 className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Стать арендодателем</h2>
          <p className="text-gray-600">
            Начните зарабатывать на своем помещении уже сегодня
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <p className="text-gray-600">
          Оставьте свои контактные данные, и наш менеджер свяжется с вами для
          обсуждения условий сотрудничества и размещения вашего помещения на
          платформе.
        </p>
      </div>
    </>
  );
}

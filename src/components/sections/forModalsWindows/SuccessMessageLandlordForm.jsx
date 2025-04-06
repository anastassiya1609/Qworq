import { Building2 } from 'lucide-react';

export function SuccessMessage() {
  return (
    <div className="text-center py-8">
      <div className="p-3 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
        <Building2 className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">Заявка отправлена</h3>
      <p className="text-gray-600">
        Наш менеджер свяжется с вами в ближайшее время для обсуждения условий размещения
      </p>
    </div>
  );
}

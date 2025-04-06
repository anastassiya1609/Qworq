import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function BackToHome() {
  return (
    <div className="p-4">
      <Link
        to="/"
        className="inline-flex items-center text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        На главную
      </Link>
    </div>
  );
}

import React from "react";
import type { Route } from "../../+types/root";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import {
  Users,
  Calendar,
  CheckCircle,
  Target,
  Heart,
  Sparkles,
} from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TuniBless Tozeur - منصة تنظيم العمل التطوعي" },
    {
      name: "description",
      content: "منصة احترافية لتنظيم وإدارة العمل التطوعي في تونيبليس توزر",
    },
  ];
}

const Homepage = () => {
  return (
    <div
      dir="rtl"
      className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-30">
          <div className="w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 blur-3xl opacity-30">
          <div className="w-96 h-96 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>منصة احترافية لتنظيم العمل التطوعي</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              <span className="block">تونيبليس توزر</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                نُنظم عملنا التطوعي معاً
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-2xl mx-auto text-xl sm:text-2xl text-gray-600 leading-relaxed">
              منصة شاملة وسهلة الاستخدام لإدارة وتنسيق المشاريع التطوعية والمهام
              في تونيبليس توزر
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/sign-up">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <Heart className="w-5 h-5 ml-2" />
                  إنشاء حساب جديد
                </Button>
              </Link>
              <Link to="/sign-in">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 px-8 py-6 text-lg rounded-xl"
                >
                  تسجيل الدخول
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <p className="text-xl text-gray-600">
            كل ما تحتاجه لتنظيم عملك التطوعي في مكان واحد
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Users className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              إدارة الفرق
            </h3>
            <p className="text-gray-600 leading-relaxed">
              نظم فريقك التطوعي، حدد الأدوار والمسؤوليات، وتعاون بفعالية مع جميع
              الأعضاء
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              تتبع المشاريع
            </h3>
            <p className="text-gray-600 leading-relaxed">
              راقب تقدم المشاريع التطوعية، حدد الأولويات، وحقق أهدافك بكل سهولة
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <CheckCircle className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              إدارة المهام
            </h3>
            <p className="text-gray-600 leading-relaxed">
              أنشئ المهام، وزعها على الأعضاء، وتابع إنجازها خطوة بخطوة بكل
              احترافية
            </p>
          </div>

          {/* Feature 4 */}
          <div className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Calendar className="w-7 h-7 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              جدولة الأنشطة
            </h3>
            <p className="text-gray-600 leading-relaxed">
              خطط للفعاليات والأنشطة التطوعية مع تحديد المواعيد والتذكيرات
              التلقائية
            </p>
          </div>

          {/* Feature 5 */}
          <div className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Heart className="w-7 h-7 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              سهولة الاستخدام
            </h3>
            <p className="text-gray-600 leading-relaxed">
              واجهة بسيطة وسهلة للجميع، لا تحتاج لخبرة تقنية، ابدأ فوراً بتنظيم
              عملك
            </p>
          </div>

          {/* Feature 6 */}
          <div className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-pink-200">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Sparkles className="w-7 h-7 text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              تقارير شاملة
            </h3>
            <p className="text-gray-600 leading-relaxed">
              احصل على تقارير مفصلة عن إنجازات الفريق وتقدم المشاريع والأنشطة
              التطوعية
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-gray-600">
            <p className="text-lg">
              © 2026 TuniBless Tozeur - جميع الحقوق محفوظة
            </p>
            <p className="mt-2 text-sm">منصة تنظيم العمل التطوعي</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;

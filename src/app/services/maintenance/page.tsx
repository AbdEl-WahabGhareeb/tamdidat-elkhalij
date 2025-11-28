import Footer from "@/components/FooterComponent/Footer";
import Image from "next/image";
import React from "react";

export const metadata = {
    title: "صيانة شبكات الغاز - خدمات صيانة دورية وعلاجية من تمديدات الخليج",
    description: "خدمات صيانة شاملة لأنظمة الغاز من تمديدات الخليج - صيانة وقائية وعلاجية وطارئة مع كشف تسريبات احترافي. اتصل بنا لضمان سلامة نظامك.",
    keywords: ["صيانة الغاز", "كشف تسريبات الغاز", "صيانة دورية", "شبكات الغاز", "تمديدات الخليج"],
};

export default function MaintenanceServices() {
    return (
        <>
            <h1 className="text-xl md:text-2xl text-center lg:text-3xl font-bold mt-36 mb-10">
                صيانة خطوط الغاز
            </h1>

            <div className="container mx-auto">
                <div className=" px-5 md:px-16 flex flex-col lg:flex-row h-fit justify-between items-start lg:items-center pb-5 py-10">
                    <div className="text">
                        <h3 className="text-2xl font-semibold mb-3">
                            نظرة عامة على الخدمة
                        </h3>

                        <h4 className="text-lg font-semibold mb-10">
                            الصيانة الدورية لأنظمة الغاز ليست رفاهية، بل ضرورة
                            للحفاظ على السلامة والكفاءة. في تمديدات الخليج، نقدم
                            حزمة متكاملة من خدمات الصيانة تشمل الوقائية
                            والعلاجية والطارئة، بأعلى معايير الجودة.
                        </h4>

                        <p className="text-xl font-bold leading-8 text-center mb-3 mt-3">
                            مميزات الخدمة
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16 gap-4 ">
                            <div className=" bg-[#F2F2F2] rounded-3xl shadow-services p-3">
                                <p className="text-base font-bold leading-8 mb-3">
                                    صيانة وقائية{" "}
                                </p>

                                <ul className="gap-2 flex flex-col ">
                                    <li className="list-none">
                                        فحص دوري شامل للشبكات
                                    </li>
                                    <li className="list-none">
                                        كشف التسريبات باستخدام أحدث الأجهزة
                                    </li>
                                    <li className="list-none">
                                        تنظيف وصيانة المعدات بانتظام
                                    </li>
                                    <li className="list-none">
                                        استبدال القطع المعطبة مسبقاً
                                    </li>
                                    <li className="mt-5">
                                        <div className="relative w-full h-60 rounded-3xl">
                                            <Image
                                                className="object-cover w-full h-full rounded-3xl "
                                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                                fill
                                                src="/assets/services/maintenance/preventive-maintenance.svg"
                                                alt="خدمات الصيانة الوقائية والفحص الدوري الشامل لشبكات الغاز"
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className=" bg-[#F2F2F2] rounded-3xl shadow-services p-3">
                                <p className="text-base font-bold leading-8 mb-3">
                                    صيانة علاجية{" "}
                                </p>

                                <ul className="gap-2 flex flex-col">
                                    <li className="list-none me-5">
                                        إصلاح الأعطال الفورية
                                    </li>
                                    <li className="list-none">
                                        استبدال القطع التالفة بأصلية
                                    </li>
                                    <li className="list-none">
                                        معايرة الأجهزة والعدادات
                                    </li>
                                    <li className="list-none">
                                        اختبار الأداء بعد الإصلاح
                                    </li>
                                    <li className="mt-5">
                                        <div className="relative w-full h-60 rounded-3xl">
                                            <Image
                                                className="object-cover w-full h-full rounded-3xl "
                                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                                fill
                                                src="/assets/services/maintenance/fixing.svg"
                                                alt="under-construction page image"
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className=" bg-[#F2F2F2] rounded-3xl shadow-services p-3">
                                <p className="text-base font-bold leading-8 mb-3">
                                    صيانة طارئة{" "}
                                </p>

                                <ul className="gap-2 flex flex-col">
                                    <li className="list-none">
                                        خدمة 24/7 لطوارئ الغاز
                                    </li>
                                    <li className="list-none">
                                        فريق طوارئ متخصص
                                    </li>
                                    <li className="list-none">
                                        استجابة خلال 60 دقيقة
                                    </li>
                                    <li className="list-none">
                                        حلول فورية وآمنة
                                    </li>
                                    <li className="mt-5">
                                        <div className="relative w-full h-60 rounded-3xl">
                                            <Image
                                                className="object-cover w-full h-full rounded-3xl "
                                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                                fill
                                                src="/assets/services/maintenance/emergency-maintenance.svg"
                                                alt="under-construction page image"
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-xl font-bold leading-8 text-center mb-3 mt-3">
                            برامج الصيانة
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                            <div className=" bg-[#F2F2F2] rounded-3xl shadow-services p-3">
                                <p className="text-base font-bold leading-8 mb-2">
                                    الباقة الأساسية
                                </p>

                                <ul className="gap-2 flex flex-col ">
                                    <li className="list-none">
                                        فحص ربع سنوي شامل
                                    </li>
                                    <li className="list-none">كشف التسريبات</li>
                                    <li className="list-none">
                                        تقرير مفصل عن الحالة
                                    </li>
                                    <li className="list-none">
                                        خصم 10% على قطع الغيار
                                    </li>
                                    <li className="mt-5">
                                        <div className="relative w-full h-60 rounded-3xl">
                                            <Image
                                                className="object-cover w-full h-full rounded-3xl "
                                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                                fill
                                                src="/assets/services/maintenance/main-package.svg"
                                                alt="under-construction page image"
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className=" bg-[#F2F2F2] rounded-3xl shadow-services p-3">
                                <p className="text-base font-bold leading-8 mb-2">
                                    الباقة المتقدمة
                                </p>

                                <ul className="gap-2 flex flex-col">
                                    <li className="list-none me-5">
                                        فحص شهري شامل
                                    </li>
                                    <li className="list-none">
                                        صيانة وقائية كاملة
                                    </li>
                                    <li className="list-none">تنظيف النظام</li>
                                    <li className="list-none">
                                        خصم 20% على قطع الغيار
                                    </li>
                                    <li className="mt-5">
                                        <div className="relative w-full h-60 rounded-3xl">
                                            <Image
                                                className="object-cover w-full h-full rounded-3xl "
                                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                                fill
                                                src="/assets/services/maintenance/advanced-package.svg"
                                                alt="under-construction page image"
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className=" bg-[#F2F2F2] rounded-3xl shadow-services p-3">
                                <p className="text-base font-bold leading-8 mb-2">
                                    الباقة الشاملة
                                </p>

                                <ul className="gap-2 flex flex-col">
                                    <li className="list-none">فحص أسبوعي</li>
                                    <li className="list-none">
                                        صيانة وقائية متكاملة
                                    </li>
                                    <li className="list-none">مراقبة مستمرة</li>
                                    <li className="list-none">
                                        صيانة طارئة مجانية
                                    </li>
                                    <li className="mt-5">
                                        <div className="relative w-full h-60 rounded-3xl">
                                            <Image
                                                className="object-cover w-full h-full rounded-3xl "
                                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                                fill
                                                src="/assets/services/maintenance/pack.svg"
                                                alt="under-construction page image"
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-xl font-bold leading-8 text-center mb-3 mt-3">
                            خدمات الصيانة المتخصصة
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                            <div className=" bg-[#F2F2F2] rounded-3xl  shadow-services p-2">
                                <p className="text-base font-bold leading-8 text-center mb-2">
                                    صيانة الشبكات المنزلية
                                </p>
                                <div className="flex items-center justify-center">
                                    <ul className="gap-2 flex flex-col w-7/12">
                                        <li className="list-none">
                                            فحص المواقد والدفايات
                                        </li>
                                        <li className="list-none">
                                            صيانة الأنابيب والتوصيلات
                                        </li>
                                        <li className="list-none">
                                            كشف التسريبات الخفية
                                        </li>
                                        <li className="list-none">
                                            تنظيف الفلاتر والمرشحات
                                        </li>
                                    </ul>

                                    <div className="relative h-32 rounded-3xl w-5/12">
                                        <Image
                                            className="object-cover w-full h-full rounded-3xl "
                                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                            fill
                                            src="/assets/services/maintenance/home-maintenance.svg"
                                            alt="under-construction page image"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className=" bg-[#F2F2F2] rounded-3xl shadow-services p-3">
                                <p className="text-base font-bold leading-8 text-center mb-2">
                                    صيانة الشبكات التجارية
                                </p>
                                <div className="flex items-center justify-center">
                                    <ul className="gap-2 flex flex-col w-7/12">
                                        <li className="list-none">
                                            صيانة أنظمة المطاعم
                                        </li>
                                        <li className="list-none">
                                            فحص أنظمة الفنادق
                                        </li>
                                        <li className="list-none">
                                            صيانة المجمعات التجارية
                                        </li>
                                        <li className="list-none">
                                            برامج صيانة مكثفة
                                        </li>
                                    </ul>

                                    <div className="relative h-32 rounded-3xl w-5/12">
                                        <Image
                                            className="object-cover w-full h-full rounded-3xl "
                                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                            fill
                                            src="/assets/services/maintenance/com-maintenance.svg"
                                            alt="under-construction page image"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className=" bg-[#F2F2F2] rounded-3xl shadow-services p-3">
                                <p className="text-base font-bold leading-8  text-center mb-2">
                                    صيانة الشبكات الصناعية
                                </p>
                                <div className="flex items-center justify-center">
                                    <ul className="gap-2 flex flex-col w-7/12">
                                        <li className="list-none">
                                            صيانة محطات التوزيع
                                        </li>
                                        <li className="list-none">
                                            فحص أنظمة المصانع
                                        </li>
                                        <li className="list-none">
                                            صيانة خطوط الغاز الرئيسية
                                        </li>
                                        <li className="list-none">
                                            برامج صيانة متخصصة
                                        </li>
                                    </ul>

                                    <div className="relative h-32 rounded-3xl w-5/12">
                                        <Image
                                            className="object-cover w-full h-full rounded-3xl "
                                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                            fill
                                            src="/assets/services/maintenance/industerial.svg"
                                            alt="under-construction page image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                        <Footer /> 
            
        </>
    );
}

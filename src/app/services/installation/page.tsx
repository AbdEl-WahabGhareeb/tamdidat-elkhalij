import Image from "next/image";
import React from "react";

export const metadata = {
    title: "الخدمات الصناعية - تمديدات الخليج",
    description:
        "خدمات تمديدات الغاز الصناعية من تمديدات الخليج - حلول متخصصة للمصانع والمنشآت الصناعية",
};

export default function IndustrialServices() {
    return (
        <>
            <h1 className="text-xl text-center md:text-2xl lg:text-3xl font-bold mt-36 mb-10">
                تصميم وتركيب شبكات الغاز
            </h1>

            <div className="container mx-auto">
                <div className=" px-5 md:px-16 flex flex-col lg:flex-row h-fit justify-between items-start lg:items-center pb-5 py-10">
                    <div className="text">
                        <h3 className="text-2xl font-semibold mb-3">
                            نظرة عامة على الخدمة
                        </h3>
                        <h4 className="text-lg font-semibold mb-10">
                            في تمديدات الخليج، نؤمن بأن التصميم الهندسي المتقن
                            والتركيب الاحترافي هما أساس أنظمة الغاز الآمنة
                            والفعّالة. نقدم حلولاً متكاملة تشمل كل مراحل
                            المشروع، من التصميم الأولي وحتى التسليم النهائي، مع
                            الالتزام بأعلى معايير الجودة والسلامة.{" "}
                        </h4>

                        <p className="text-xl font-bold leading-8 text-center mb-3 mt-3">
                            اهتماماتنا في التصميم{" "}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16 gap-4 ">
                            <div className=" bg-[#F2F2F2] rounded-3xl shadow-services p-3">
                                <p className="text-base font-bold leading-8 mb-3">
                                    التصميم المتقن
                                </p>

                                <ul className="gap-2 flex flex-col ">
                                    <li className="list-none">
                                        دراسة متعمقة لاحتياجات العميل وطبيعة
                                        الموقع
                                    </li>
                                    <li className="list-none">
                                        تصميم هندسي دقيق باستخدام أحدث برامج
                                        التصميم
                                    </li>
                                    <li className="list-none">
                                        مراعاة جميع عوامل السلامة والكفاءة في
                                        التصميم
                                    </li>
                                    <li className="list-none">
                                        توفير حلول مبتكرة تناسب الميزانيات
                                        المختلفة
                                    </li>
                                    <li className="mt-5">
                                        <div className="relative w-full h-60 rounded-3xl">
                                            <Image
                                                className="object-cover w-full h-full rounded-3xl "
                                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                                fill
                                                src="/assets/services/installation/elaborate-design.svg"
                                                alt="Elaborate design image"
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className=" bg-[#F2F2F2] rounded-3xl shadow-services p-3">
                                <p className="text-base font-bold leading-8 mb-3">
                                    التركيب الاحترافي{" "}
                                </p>

                                <ul className="gap-2 flex flex-col">
                                    <li className="list-none me-5">
                                        استخدام مواد وتجهيزات عالية الجودة
                                        ومعتمدة
                                    </li>
                                    <li className="list-none">
                                        فريق تركيب معتمد ومدرب على أعلى مستوى
                                    </li>
                                    <li className="list-none">
                                        الالتزام بمواصفات السلامة المحلية
                                        والدولية
                                    </li>
                                    <li className="list-none">
                                        تنفيذ دقيق حسب للمخططات الهندسية
                                    </li>
                                    <li className="mt-5">
                                        <div className="relative w-full h-60 rounded-3xl">
                                            <Image
                                                className="object-cover w-full h-full rounded-3xl "
                                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                                fill
                                                src="/assets/services/installation/professional-installation.svg"
                                                alt="under-construction page image"
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className=" bg-[#F2F2F2] rounded-3xl shadow-services p-3">
                                <p className="text-base font-bold leading-8 mb-3">
                                    التسليم المتكامل{" "}
                                </p>

                                <ul className="gap-2 flex flex-col">
                                    <li className="list-none">
                                        اختبارات شاملة للضغط والسلامة
                                    </li>
                                    <li className="list-none">
                                        تدريب العميل على استخدام النظام
                                    </li>
                                    <li className="list-none">
                                        توفير ملف تقني كامل للمشروع
                                    </li>
                                    <li className="list-none">
                                        خدمة ما بعد البيع والدعم الفني
                                    </li>
                                    <li className="mt-5">
                                        <div className="relative w-full h-60 rounded-3xl">
                                            <Image
                                                className="object-cover w-full h-full rounded-3xl "
                                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                                fill
                                                src="/assets/services/installation/delivery.svg"
                                                alt="under-construction page image"
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-xl font-bold leading-8 text-center mb-3 mt-3">
                            مراحل تنفيذ المشروع
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                            <div className=" bg-[#F2F2F2] rounded-3xl shadow-services p-4">
                                <p className="text-base font-bold leading-8 mb-2">
                                    المرحلة الأولى: الدراسة والتحليل
                                </p>

                                <ul className="gap-2 flex flex-col ">
                                    <li className="list-none">
                                        زيارة موقع المشروع وتقييم الاحتياجات
                                    </li>
                                    <li className="list-none">
                                        تحليل الجدوى الفنية والاقتصادية
                                    </li>
                                    <li className="list-none">
                                        إعداد التقرير الأولي والتوصيات
                                    </li>
                                    <li className="mt-5">
                                        <div className="relative w-full h-40 rounded-3xl">
                                            <Image
                                                className="object-cover w-full h-full rounded-3xl "
                                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                                fill
                                                src="/assets/services/installation/analysis.svg"
                                                alt="under-construction page image"
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className=" bg-[#F2F2F2] rounded-3xl shadow-services p-3">
                                <p className="text-base font-bold leading-8 mb-2">
                                    المرحلة الثانية: التصميم الهندسي
                                </p>

                                <ul className="gap-2 flex flex-col">
                                    <li className="list-none me-5">
                                        وضع المخططات التنفيذية التفصيلية
                                    </li>
                                    <li className="list-none">
                                        دراسة أنظمة السلامة والطوارئ
                                    </li>
                                    <li className="list-none">
                                        التوافق مع متطلبات الدفاع المدني
                                    </li>
                                    <li className="mt-5">
                                        <div className="relative w-full h-40 rounded-3xl">
                                            <Image
                                                className="object-cover w-full h-full rounded-3xl "
                                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                                fill
                                                src="/assets/services/installation/engineering-design.svg"
                                                alt="under-construction page image"
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className=" bg-[#F2F2F2] rounded-3xl shadow-services p-3">
                                <p className="text-base font-bold leading-8 mb-2">
                                    المرحلة الثالثة: التنفيذ والتركيب
                                </p>

                                <ul className="gap-2 flex flex-col">
                                    <li className="list-none">
                                        توفير المواد والمعدات المعتمدة
                                    </li>
                                    <li className="list-none">
                                        تنفيذ أعمال التركيب بدقة عالية
                                    </li>
                                    <li className="list-none">
                                        المراقبة المستمرة للجودة
                                    </li>
                                    <li className="mt-5">
                                        <div className="relative w-full h-40 rounded-3xl">
                                            <Image
                                                className="object-cover w-full h-full rounded-3xl "
                                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                                fill
                                                src="/assets/services/installation/implementation.svg"
                                                alt="under-construction page image"
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className=" bg-[#F2F2F2] rounded-3xl shadow-services p-3">
                                <p className="text-base font-bold leading-8 mb-2">
                                    المرحلة الرابعة: الاختبار والتسليم
                                </p>

                                <ul className="gap-2 flex flex-col">
                                    <li className="list-none">
                                        اختبارات الضغط والكشف عن التسريبات
                                    </li>
                                    <li className="list-none">
                                        تدريب المشغّلين على النظام
                                    </li>
                                    <li className="list-none">
                                        تسليم الوثائق والفواتير
                                    </li>
                                    <li className="mt-5">
                                        <div className="relative w-full h-40 rounded-3xl">
                                            <Image
                                                className="object-cover w-full h-full rounded-3xl "
                                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                                fill
                                                src="/assets/services/installation/testing.svg"
                                                alt="under-construction page image"
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-xl font-bold leading-8 text-center mb-3 mt-3">
                            مجالات التطبيق
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                            <div className=" bg-[#F2F2F2] rounded-3xl  shadow-services p-2">
                                <p className="text-base font-bold leading-8 text-center mb-2">
                                    المشاريع السكنية{" "}
                                </p>
                                <div className="flex items-center justify-center">
                                    <ul className="gap-2 flex flex-col w-7/12">
                                        <li className="list-none">
                                            الفيلات والمنازل المستقلة
                                        </li>
                                        <li className="list-none">
                                            العمارات والمجمعات السكنية
                                        </li>
                                        <li className="list-none">
                                            القصور والاستراحات
                                        </li>
                                    </ul>

                                    <div className="relative h-32 rounded-3xl w-5/12">
                                        <Image
                                            className="object-cover w-full h-full rounded-3xl "
                                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                            fill
                                                src="/assets/services/installation/houses.svg"
                                            alt="under-construction page image"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className=" bg-[#F2F2F2] rounded-3xl shadow-services p-5">
                                <p className="text-base font-bold leading-8 text-center mb-2">
                                    المشاريع التجارية{" "}
                                </p>
                                <div className="flex items-center justify-center">

                                <ul className="gap-2 flex flex-col w-7/12">
                                    <li className="list-none">
                                        المطاعم والفنادق
                                    </li>
                                    <li className="list-none">
                                        المجمعات التجارية
                                    </li>
                                    <li className="list-none">
                                        المستشفيات والعيادات
                                    </li>
                                </ul>

                                <div className="relative h-32 rounded-3xl w-5/12">
                                        <Image
                                            className="object-cover w-full h-full rounded-3xl "
                                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                            fill
                                                src="/assets/services/installation/commercial.svg"
                                            alt="under-construction page image"
                                        />
                                    </div>
                            </div>
                            </div>

                            <div className=" bg-[#F2F2F2] rounded-3xl shadow-services p-5">
                                <p className="text-base font-bold leading-8  text-center mb-2">
                                    المشاريع الصناعية
                                </p>
                                <div className="flex items-center justify-center">

                                <ul className="gap-2 flex flex-col w-7/12">
                                    <li className="list-none">
                                        المصانع والمنشآت الإنتاجية
                                    </li>
                                    <li className="list-none">
                                        المستودعات ومراكز التخزين
                                    </li>
                                    <li className="list-none">محطات التوزيع</li>
                                </ul>

                                <div className="relative h-32 rounded-3xl w-5/12">
                                        <Image
                                            className="object-cover w-full h-full rounded-3xl "
                                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                            fill
                                                src="/assets/services/installation/industrial.svg"
                                            alt="under-construction page image"
                                        />
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

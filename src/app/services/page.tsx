import React from "react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { metadata } from "./page-metadata";
// import Footer from "@/components/FooterComponent/Footer";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/FooterComponent/Footer";

export { metadata };

export default function Services() {
    return (
        <>
            <div className="px-0 sm:px-12 container mx-auto" dir="rtl">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mt-24 sm:mt-28 mb-10">
                    حلول غاز آمنة تلبي احتياجاتك السكنية والتجارية والصناعية
                </h1>
                <div className="relative h-[300px]  w-full lg:h-[600px] mb-5 sm:mb-16">
                    <Image
                        className="object-cover w-full h-full rounded-3xl px-0"
                        sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                        fill
                        src="/assets/services/services-main.svg"
                        alt="under-construction page image"
                    />
                </div>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-5 sm:mb-8">
                    مقدمة
                </p>
                <div className=" px-5 md:px-16 bg-[#F2F2F2] rounded-3xl shadow-services mb-5 sm:mb-16 flex flex-col  lg:flex-row h-fit justify-between items-start lg:items-center py-10">
                    <div className="text lg:w-3/5">
                        <h3 className="text-2xl font-semibold mb-3">
                            خدماتنا المتكاملة في مجال أنظمة الغاز
                        </h3>
                        <p className="text-base font-base leading-8 mb-8">
                            في شركة تمديدات الخليج ، ندرك أن أنظمة الغاز ليست
                            مجرد &quot; تمديدات &quot;، بل هي شريان حيوي يتطلب
                            الدقة والأمان المطلق. لهذا السبب، نقدم حزمة خدمات
                            متكاملة تبدأ معك من الخطوة الأولى.
                        </p>
                        <p className="text-base font-base leading-8">
                            نحن شركة سعودية متخصصة في تصميم، تنفيذ، صيانة، وشحن
                            خزانات الغاز للمنازل والمنشآت التجارية والصناعية. من
                            خلال فريق فني معتمد وأحدث التقنيات، نضمن لك حلول غاز
                            آمنة وموثوقة تتوافق مع أعلى المعايير المعتمدة في
                            المملكة العربية السعودية. اكتشف كيف يمكن لخدماتنا أن
                            توفر لك الكفاءة وراحة البال.
                        </p>
                    </div>

                    <div className="image w-full lg:w-2/5 h-3/4 py-10 lg:pe-16">
                        <div className="relative lg:bottom-1/2 w-full lg:w-10/12 ms-auto h-[300px] sm:h-[450px] lg:h-[300px] xl:h-[350px] bg-blue-900 rounded-[45px]">
                            <div className="absolute z-10 w-full h-full lg:top-8 lg:left-8 rounded-[45px] border-4 border-white bg-white ">
                                <Image
                                    className="object-cover w-full h-full rounded-[45px] md:px-0"
                                    sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                    fill
                                    src="/assets/services/services-2.svg"
                                    alt="under-construction page image"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-5 sm:mb-8">
                    خدماتنا الرئيسية
                </p>

                <div className=" px-5 md:px-16 bg-[#F2F2F2] rounded-3xl shadow-services mb-10 sm:mb-16 flex flex-col  lg:flex-row h-fit justify-between items-start lg:items-center py-10">
                    <div className="text lg:w-3/5">
                        <h3 className="text-2xl font-semibold mb-3">
                            تصميم وتركيب أنظمة الغاز
                        </h3>
                        <h4 className="text-xl font-semibold mb-3">
                            حلول هندسية متكاملة تلبي أعلى معايير الجودة والسلامة
                        </h4>
                        <p className="text-base font-semibold leading-8 mb-1">
                            مميزات الخدمة
                        </p>
                        <ul className="mb-10 ms-5">
                            <li className="list-disc me-5">
                                دراسة متطلبات المشروع وتحليل الاحتياجات الدقيقة.
                            </li>
                            <li className="list-disc me-5">
                                تصميم هندسي متكامل يواكب أحدث التقنيات.
                            </li>
                            <li className="list-disc me-5">
                                استخدام مواد وتجهيزات معتمدة وذات جودة عالية.
                            </li>
                            <li className="list-disc me-5">
                                تنفيذ التركيب بكوادر فنية معتمدة ومدربة.
                            </li>
                            <li className="list-disc me-5">
                                اختبارات شاملة للسلامة والكفاءة بعد التركيب.
                            </li>
                            <li className="list-disc me-5">
                                تقديم ملف تسليم متكامل للمشروع.
                            </li>
                        </ul>

                        <p className="text-base font-semibold leading-8 mb-3">
                            نقدم خدمات تصميم وتركيب شبكات الغاز للمنازل، الفلل،
                            المنشآت التجارية، والمصانع باستخدام مواد معتمدة
                            ومعايير هندسية دقيقة.
                        </p>

                        <p className="text-base font-semibold leading-8 mb-3">
                            يشمل عملنا إعداد المخططات، اختيار المواسير المناسبة،
                            تركيب العدادات والصمامات، وإجراء اختبارات الضغط قبل
                            التشغيل.
                        </p>

                        <p className="text-base font-semibold leading-8 mb-16">
                            كل مشروع يتم تحت إشراف مهندسين وفنيين معتمدين
                            وبالتنسيق مع الدفاع المدني والجهات المختصة. مع
                            الالتزام التام بمعايير السلامة المحلية والدولية.
                        </p>

                        <Link
                            href="/services/installation"
                            className="text-white w-[130px] sm:w-[200px] md:w-[220px] lg:w-[300px] text-sm md:text-base flex justify-center items-center cursor-pointer mt-10 font-bold bg-blue-900 px-6 py-4 rounded-lg hover:bg-blue-400 transition-colors duration-300"
                        >
                            إعرف أكثر...
                        </Link>
                    </div>

                    <div className="image w-full lg:w-2/5 h-3/4 py-10 lg:pe-20">
                        <div className="relative ms-auto lg:bottom-1/2 w-full lg:w-10/12  h-[300px] sm:h-[450px] lg:h-[300px] xl:h-[310px] bg-blue-900 rounded-[45px]">
                            <div className="absolute z-10 w-full h-full lg:top-8 lg:left-8 rounded-[45px] border-4 border-white bg-white ">
                                <Image
                                    className="object-cover w-full h-full rounded-[45px] md:px-0"
                                    sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                    fill
                                    src="/assets/services/services-3.svg"
                                    alt="under-construction page image"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-10 sm:mb-16 rounded-3xl shadow-services py-10 h-fit px-5 md:px-16 bg-[#F2F2F2]">
                    <div className=" flex flex-col lg:pb-3 lg:flex-row justify-between items-start lg:items-center py-10">
                        <div className="image lg:translate-x-10 xl:translate-x-0 w-full lg:w-2/5 h-full">
                            <div className="relative w-full xl:w-8/12 lg:w-11/12 lg:-translate-y-1/12  h-[300px] sm:h-[450px] xl:h-80 lg:-translate-x-8 lg:h-[350px] bg-blue-900 rounded-[45px]">
                                <div className="absolute z-10 w-full h-full lg:top-8 lg:left-8 rounded-[45px] border-4 border-white bg-white ">
                                    <Image
                                        className="object-cover w-full h-full rounded-[45px] md:px-0"
                                        sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                        fill
                                        src="/assets/services/services-4.svg"
                                        alt="under-construction page image"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="text lg:w-3/5 mt-10 lg:mt-0">
                            <h3 className="text-2xl font-semibold mb-3">
                                شحن خزانات الغاز
                            </h3>
                            <h4 className="text-xl font-semibold mb-3">
                                خدمة شحن آمنة ومضمونة على مدار الساعة
                            </h4>
                            <p className="text-base font-semibold leading-8 mb-1">
                                مميزات الخدمة
                            </p>
                            <ul className="mb-6 ms-5">
                                <li className="list-disc me-5">
                                    أسطول مركبات متخصص ومجهز بأحدث تقنيات
                                    السلامة
                                </li>
                                <li className="list-disc me-5">
                                    فنيون معتمدون في عمليات الشحن والتوصيل
                                </li>
                                <li className="list-disc me-5">
                                    بروتوكولات أمان صارمة خلال جميع مراحل الشحن
                                </li>
                                <li className="list-disc me-5">
                                    خدمة طوارئ على مدار 24/7
                                </li>
                                <li className="list-disc me-5">
                                    نظام تتبع متقدم للمركبات ومواعيد التسليم
                                </li>
                            </ul>

                            <p className="text-base font-semibold leading-8 mb-3">
                                نوفر خدمة شحن خزانات الغاز باستخدام أحدث المعدات
                                والمركبات المتخصصة، مع فريق فني مدرب على أعلى
                                مستوى لضمان توفير خدمة آمنة ومستمرة لعملائنا.
                            </p>
                        </div>
                    </div>

                    <Link
                        href="/services/shipping"
                        className="text-white w-[130px] sm:w-[200px] md:w-[220px] lg:w-[300px] text-sm md:text-base flex justify-center items-center cursor-pointer mt-10 font-bold bg-blue-900 px-6 py-4 rounded-lg hover:bg-blue-400 transition-colors duration-300"
                    >
                        إعرف أكثر...
                    </Link>
                </div>

                <div className=" px-5 md:px-16 bg-[#F2F2F2] rounded-3xl shadow-services mb-10 sm:mb-16 flex flex-col  lg:flex-row h-fit justify-between items-start lg:items-center py-10">
                    <div className="text lg:w-3/5">
                        <h3 className="text-2xl font-semibold mb-3">
                            صيانة شبكات الغاز
                        </h3>
                        <h4 className="text-xl font-semibold mb-3">
                            برامج صيانة شاملة تضمن استمرارية التشغيل الآمن
                        </h4>
                        <p className="text-base font-semibold leading-8 mb-1">
                            مميزات الخدمة
                        </p>
                        <ul className="mb-10 ms-5">
                            <li className="list-disc me-5">
                                فحص دوري شامل لأنظمة الغاز
                            </li>
                            <li className="list-disc me-5">
                                تصميم هندسي متكامل يواكب أحدث التقنيات
                            </li>
                            <li className="list-disc me-5">
                                كشف التسريبات وإصلاحها باستخدام أحدث الأجهزة
                            </li>
                            <li className="list-disc me-5">
                                صيانة وقائية مخططة تمنع الأعطال قبل حدوثها
                            </li>
                            <li className="list-disc me-5">
                                صيانة طارئة على مدار 24/7
                            </li>
                            <li className="list-disc me-5">
                                تقارير مفصلة عن حالة النظام بعد الصيانة
                            </li>
                        </ul>

                        <p className="text-base font-semibold leading-8 mb-3">
                            نقدم خدمات الصيانة الدورية والطارئة لشبكات الغاز
                            المنزلية والصناعية، لضمان التشغيل الآمن والمستقر.
                        </p>

                        <p className="text-base font-semibold leading-8 mb-16">
                            تشمل الصيانة فحص المواسير، اختبار الصمامات، التأكد
                            من عدم وجود تسريبات، وتنظيف الأنظمة بشكل وقائي. فريق
                            الدعم الفني متاح دائمًا لمعالجة أي أعطال بسرعة
                            واحترافية.
                        </p>

                        <Link
                            href="/services/maintenance"
                            className="text-white w-[130px] sm:w-[200px] md:w-[220px] lg:w-[300px] text-sm md:text-base flex justify-center items-center cursor-pointer mt-10 font-bold bg-blue-900 px-6 py-4 rounded-lg hover:bg-blue-400 transition-colors duration-300"
                        >
                            إعرف أكثر...
                        </Link>
                    </div>

                    <div className="image w-full lg:w-2/5 h-3/4 py-10 lg:pe-20">
                        <div className="relative lg:bottom-1/2 w-full lg:w-10/12 me-auto  h-[300px] sm:h-[450px] lg:h-[300px] xl:h-[350px] ms-auto bg-blue-900 rounded-[45px]">
                            <div className="absolute z-10 w-full h-full lg:top-8 lg:left-8 rounded-[45px] border-4 border-white bg-white ">
                                <Image
                                    className="object-cover w-full h-full rounded-[45px] md:px-0"
                                    sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                    fill
                                    src="/assets/services/services-5.svg"
                                    alt="under-construction page image"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-8">
                    أسئلة شائعة
                </p>

                <div className="bg-[#F2F2F2] py-10 rounded-3xl shadow-services mb-16 flex flex-col h-fit justify-between items-start lg:items-center">
                    <div className="px-5 md:px-16 w-full">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                            defaultValue="item-1"
                        >
                            <AccordionItem
                                value="item-1"
                                className=" bg-[#EEF0FF] border-b-0 pb-3 shadow-accordion rounded-3xl"
                            >
                                <AccordionTrigger className=" bg-[#EEF0FF] px-8 text-xl cursor-pointer hover:no-underline text-start font-semibold ">
                                    ما هي مدة تنفيذ مشروع تمديدات الغاز للمنزل؟
                                </AccordionTrigger>
                                <AccordionContent className=" bg-[#EEF0FF] flex flex-col gap-4 text-pretty text-base font-semibold leading-8 mb-3 px-8">
                                    <p>
                                        تتراوح مدة التنفيذ بين 3-7 أيام عمل حسب
                                        طبيعة المشروع وتعقيده.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem
                                value="item-2"
                                className=" bg-[#EEF0FF] border-b-0 -translate-y-5 pb-3 shadow-accordion rounded-3xl"
                            >
                                <AccordionTrigger className=" bg-[#EEF0FF] px-8 text-xl cursor-pointer hover:no-underline text-start font-semibold">
                                    هل تقدمون خدمة الطوارئ؟
                                </AccordionTrigger>
                                <AccordionContent className=" bg-[#EEF0FF] flex flex-col gap-4 text-pretty text-base font-semibold leading-8 mb-3 px-8">
                                    <p>
                                        نعم، لدينا خدمة طوارئ على مدار 24/7
                                        لجميع أعمال الصيانة والإصلاح.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem
                                value="item-3"
                                className=" bg-[#EEF0FF] border-b-0 -translate-y-10 pb-3 shadow-accordion rounded-3xl"
                            >
                                <AccordionTrigger className=" px-8 text-xl cursor-pointer hover:no-underline text-start  bg-[#EEF0FF] font-semibold">
                                    ما هي ضمانات الخدمة التي تقدمونها؟
                                </AccordionTrigger>
                                <AccordionContent className=" bg-[#EEF0FF] flex flex-col gap-4 text-pretty text-base font-semibold leading-8 mb-3 px-8">
                                    <p>
                                        نقدم ضمانًا لمدة سنتين على جميع أعمالنا
                                        وتركيباتنا.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem
                                value="item-4"
                                className=" bg-[#EEF0FF] border-b-0 -translate-y-15 shadow-accordion rounded-3xl"
                            >
                                <AccordionTrigger className=" bg-[#EEF0FF] px-8 text-xl cursor-pointer hover:no-underline text-start font-semibold">
                                    هل تراعون معايير السلامة في أعمالكم؟
                                </AccordionTrigger>
                                <AccordionContent className=" flex flex-col gap-4 text-pretty text-base font-semibold leading-8 mb-3 px-8">
                                    <p>
                                        نلتزم بأعلى معايير السلامة المحلية
                                        والدولية في جميع مشاريعنا.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <div className="w-full flex justify-start items-center gap-1 px-5 md:px-16 bg-blue-900 text-white -translate-y-3">
                        <p className="text-[10.99px] md:text-xl sm:text-base">
                            يمكنكم الاطلاع على مزيد من الأسئلة من خلال زيارة
                        </p>
                        <Link
                            href="/"
                            className="font-black text-[10px] sm:text-base md:text-xl cursor-pointer underline"
                        >
                            هذه الصفحة
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

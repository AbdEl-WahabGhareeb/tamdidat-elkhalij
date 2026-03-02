import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "شروط الاستخدام | تمديدات الخليج المبتكرة",
    description: "شروط الاستخدام لشركة تمديدات الخليج المبتكرة",
};

export default function Terms() {
    return (
        <main
            className="max-w-3xl mx-auto px-6 py-28 text-gray-700 leading-relaxed"
            dir="rtl"
        >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                شروط الاستخدام
            </h1>
            <p className="text-sm text-gray-500 mb-8">
                آخر تحديث: 02 مارس 2026
            </p>

            <p className="mb-8">
                يرجى قراءة شروط الاستخدام هذه بعناية قبل استخدام خدمتنا.
            </p>

            {/* التفسير والتعريفات */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                التفسير والتعريفات
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
                التفسير
            </h3>
            <p className="mb-4">
                الكلمات التي تبدأ بحرف كبير لها معانٍ محددة وفق الشروط التالية،
                وتحمل نفس المعنى سواء وردت بصيغة المفرد أو الجمع.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
                التعريفات
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>
                    <strong>الشركة</strong> تشير إلى تمديدات الخليج المبتكرة،
                    JDSC7433، 7433 متعب، 3193 حي الصفا، جدة 23454، المملكة
                    العربية السعودية.
                </li>
                <li>
                    <strong>الدولة</strong> تشير إلى: المملكة العربية السعودية.
                </li>
                <li>
                    <strong>الجهاز</strong> يعني أي جهاز يمكنه الوصول إلى الخدمة
                    كالحاسوب أو الهاتف المحمول أو الجهاز اللوحي.
                </li>
                <li>
                    <strong>الخدمة</strong> تشير إلى الموقع الإلكتروني.
                </li>
                <li>
                    <strong>شروط الاستخدام</strong> تعني هذه الشروط والأحكام
                    التي تحكم وصولك إلى الخدمة واستخدامها.
                </li>
                <li>
                    <strong>خدمة التواصل الاجتماعي التابعة لجهة خارجية</strong>{" "}
                    تعني أي خدمات أو محتوى يقدمه طرف ثالث ويمكن الوصول إليه عبر
                    الخدمة.
                </li>
                <li>
                    <strong>الموقع الإلكتروني</strong> يشير إلى تمديدات الخليج
                    المبتكرة، ويمكن الوصول إليه عبر{" "}
                    <a
                        href="https://www.taamco.com"
                        className="text-blue-600 hover:underline"
                    >
                        www.taamco.com
                    </a>
                    .
                </li>
                <li>
                    <strong>أنت</strong> تعني الفرد الذي يصل إلى الخدمة أو
                    يستخدمها.
                </li>
            </ul>

            {/* الإقرار */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                الإقرار
            </h2>
            <p className="mb-4">
                تُمثّل هذه الشروط الاتفاقية بينك وبين الشركة بشأن استخدام
                الخدمة. يُشترط لاستخدامك للخدمة قبولك لهذه الشروط والامتثال لها،
                وتسري على جميع الزوار والمستخدمين.
            </p>
            <p className="mb-4">
                باستخدامك للخدمة، فإنك توافق على الالتزام بهذه الشروط. إذا كنت
                لا توافق على أي جزء منها، فلا يحق لك استخدام الخدمة.
            </p>
            <p className="mb-4">
                تُقرّ بأنك تجاوزت سن 18 عاماً. لا تسمح الشركة لمن هم دون هذا
                السن باستخدام الخدمة.
            </p>

            {/* الروابط لمواقع أخرى */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                الروابط لمواقع أخرى
            </h2>
            <p className="mb-4">
                قد تحتوي خدمتنا على روابط لمواقع أو خدمات تابعة لجهات خارجية لا
                تملكها الشركة ولا تتحكم فيها. لا تتحمل الشركة أي مسؤولية عن
                محتوى تلك المواقع أو سياسات الخصوصية المتبعة فيها.
            </p>
            <p className="mb-4">
                ننصحك بشدة بقراءة شروط الاستخدام وسياسات الخصوصية الخاصة بأي
                موقع تابع لجهة خارجية تزوره.
            </p>

            {/* إنهاء الخدمة */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                إنهاء الخدمة
            </h2>
            <p className="mb-4">
                يحق لنا إنهاء وصولك أو تعليقه فوراً دون إشعار مسبق أو مسؤولية
                لأي سبب، بما في ذلك انتهاكك لهذه الشروط. عند الإنهاء، يتوقف حقك
                في استخدام الخدمة فوراً.
            </p>

            {/* تحديد المسؤولية */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                تحديد المسؤولية
            </h2>
            <p className="mb-4">
                بصرف النظر عن أي أضرار قد تتكبدها، تقتصر المسؤولية الكاملة
                للشركة على المبلغ الذي دفعته فعلياً عبر الخدمة أو 100 دولار
                أمريكي إن لم تكن قد اشتريت أي شيء عبر الخدمة.
            </p>
            <p className="mb-4">
                لن تكون الشركة في أي حال مسؤولة عن أي أضرار خاصة أو عرضية أو غير
                مباشرة أو تبعية، بما في ذلك خسارة الأرباح أو البيانات أو انقطاع
                الأعمال.
            </p>

            {/* إخلاء المسؤولية */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                إخلاء المسؤولية
            </h2>
            <p className="mb-4">
                تُقدَّم الخدمة لك &quot;كما هي&quot; و&quot;كما هي متاحة&quot;
                دون أي ضمان من أي نوع. لا تضمن الشركة أن الخدمة ستلبي متطلباتك
                أو ستعمل دون انقطاع أو أخطاء.
            </p>

            {/* القانون الحاكم */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                القانون الحاكم
            </h2>
            <p className="mb-4">
                تخضع هذه الشروط لقوانين المملكة العربية السعودية، بصرف النظر عن
                أحكام تعارض القوانين فيها.
            </p>

            {/* تسوية النزاعات */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                تسوية النزاعات
            </h2>
            <p className="mb-4">
                في حال وجود أي نزاع أو استفسار بشأن الخدمة، توافق على محاولة حل
                النزاع بشكل ودي عن طريق التواصل مع الشركة أولاً.
            </p>

            {/* قابلية الفصل والتنازل */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                قابلية الفصل والتنازل
            </h2>
            <p className="mb-4">
                إذا تبيّن أن أي بند من هذه الشروط غير قابل للتنفيذ، يُعدَّل ذلك
                البند بالقدر اللازم وتظل باقي البنود سارية المفعول. عدم ممارسة
                أي حق من هذه الشروط لا يُعدّ تنازلاً عنه.
            </p>

            {/* التغييرات على الشروط */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                التغييرات على شروط الاستخدام
            </h2>
            <p className="mb-4">
                نحتفظ بالحق في تعديل هذه الشروط في أي وقت. في حال وجود تغييرات
                جوهرية، سنسعى إلى إشعارك قبل 30 يوماً على الأقل من سريان الشروط
                الجديدة. استمرارك في استخدام الخدمة بعد سريان التعديلات يعني
                موافقتك عليها.
            </p>

            {/* تواصل معنا */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                تواصل معنا
            </h2>
            <p className="mb-2">إذا كان لديك أي أسئلة حول شروط الاستخدام:</p>
            <ul className="list-disc list-inside space-y-2">
                <li>
                    البريد الإلكتروني:{" "}
                    <a
                        href="mailto:info@taamco.com"
                        className="text-blue-600 hover:underline"
                    >
                        info@taamco.com
                    </a>
                </li>
                <li>
                    الهاتف:{" "}
                    <a
                        href="tel:+966551635304"
                        className="text-blue-600 hover:underline"
                    >
                        966+ 55 163 5304
                    </a>
                </li>
            </ul>
        </main>
    );
}

// export default function Terms() {
//   return (
//     <main className="max-w-3xl mx-auto px-6 py-16 text-gray-700 leading-relaxed">
//       <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
//       <p className="text-sm text-gray-500 mb-8">Last updated: March 02, 2026</p>

//       <p className="mb-8">
//         Please read these terms and conditions carefully before using Our Service.
//       </p>

//       {/* Interpretation and Definitions */}
//       <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Interpretation and Definitions</h2>

//       <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Interpretation</h3>
//       <p className="mb-4">
//         The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
//       </p>

//       <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Definitions</h3>
//       <ul className="list-disc list-inside space-y-2 mb-6">
//         <li><strong>Company</strong> refers to تمديدات الخليج المبتكرة, JDSC7433, 7433 Muteb, 3193 As Safa Dist. Jeddah 23454, Kingdom of Saudi Arabia.</li>
//         <li><strong>Country</strong> refers to: Saudi Arabia.</li>
//         <li><strong>Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.</li>
//         <li><strong>Service</strong> refers to the Website.</li>
//         <li><strong>Terms and Conditions</strong> means these Terms and Conditions that govern Your access to and use of the Service.</li>
//         <li><strong>Third-Party Social Media Service</strong> means any services or content provided by a third party that is linked to through the Service.</li>
//         <li><strong>Website</strong> refers to تمديدات الخليج المبتكرة, accessible from <a href="https://www.taamco.com" className="text-blue-600 hover:underline">www.taamco.com</a>.</li>
//         <li><strong>You</strong> means the individual accessing or using the Service.</li>
//       </ul>

//       {/* Acknowledgment */}
//       <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Acknowledgment</h2>
//       <p className="mb-4">
//         These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company. Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions.
//       </p>
//       <p className="mb-4">
//         By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
//       </p>
//       <p className="mb-4">
//         You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
//       </p>

//       {/* Links to Other Websites */}
//       <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Links to Other Websites</h2>
//       <p className="mb-4">
//         Our Service may contain links to third-party websites or services that are not owned or controlled by the Company. The Company has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party websites or services.
//       </p>
//       <p className="mb-4">
//         We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit.
//       </p>

//       {/* Termination */}
//       <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Termination</h2>
//       <p className="mb-4">
//         We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions. Upon termination, Your right to use the Service will cease immediately.
//       </p>

//       {/* Limitation of Liability */}
//       <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Limitation of Liability</h2>
//       <p className="mb-4">
//         The entire liability of the Company shall be limited to the amount actually paid by You through the Service or 100 USD if You have not purchased anything through the Service.
//       </p>
//       <p className="mb-4">
//         In no event shall the Company be liable for any special, incidental, indirect, or consequential damages whatsoever, including but not limited to loss of profits, loss of data, or business interruption.
//       </p>

//       {/* AS IS Disclaimer */}
//       <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h2>
//       <p className="mb-4">
//         The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; without warranty of any kind. The Company does not warrant that the Service will meet Your requirements, be uninterrupted, error-free, or free of viruses or other harmful components.
//       </p>

//       {/* Governing Law */}
//       <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Governing Law</h2>
//       <p className="mb-4">
//         The laws of Saudi Arabia shall govern these Terms and Your use of the Service, excluding its conflicts of law rules.
//       </p>

//       {/* Disputes Resolution */}
//       <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Disputes Resolution</h2>
//       <p className="mb-4">
//         If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
//       </p>

//       {/* Severability and Waiver */}
//       <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Severability and Waiver</h2>
//       <p className="mb-4">
//         If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible, and the remaining provisions will continue in full force and effect.
//       </p>
//       <p className="mb-4">
//         The failure to exercise a right or require performance of an obligation under these Terms shall not affect a party&apos;s ability to exercise such right at any time thereafter.
//       </p>

//       {/* Changes to Terms */}
//       <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Changes to These Terms and Conditions</h2>
//       <p className="mb-4">
//         We reserve the right to modify or replace these Terms at any time. If a revision is material, We will make reasonable efforts to provide at least 30 days&apos; notice before any new terms take effect. By continuing to access or use Our Service after revisions become effective, You agree to be bound by the revised terms.
//       </p>

//       {/* Contact Us */}
//       <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Contact Us</h2>
//       <p className="mb-2">If you have any questions about these Terms and Conditions:</p>
//       <ul className="list-disc list-inside space-y-2">
//         <li>
//           Email:{" "}
//           <a href="mailto:info@taamco.com" className="text-blue-600 hover:underline">
//             info@taamco.com
//           </a>
//         </li>
//         <li>
//           Phone:{" "}
//           <a href="tel:+966551635304" className="text-blue-600 hover:underline">
//             +966 55 163 5304
//           </a>
//         </li>
//       </ul>
//     </main>
//   );
// }

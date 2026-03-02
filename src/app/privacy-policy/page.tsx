import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | تمديدات الخليج المبتكرة",
    description: "سياسة الخصوصية لشركة تمديدات الخليج المبتكرة",
};

export default function PrivacyPolicy() {
    return (
        <main
            className="max-w-3xl mx-auto px-6 py-28 text-gray-700 leading-relaxed"
            dir="rtl"
        >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                سياسة الخصوصية
            </h1>
            <p className="text-sm text-gray-500 mb-8">
                آخر تحديث: 02 مارس 2026
            </p>

            <p className="mb-4">
                تصف سياسة الخصوصية هذه سياساتنا وإجراءاتنا المتعلقة بجمع
                معلوماتك واستخدامها والإفصاح عنها عند استخدامك للخدمة، وتُعلمك
                بحقوق الخصوصية الخاصة بك وكيف يحميك القانون.
            </p>
            <p className="mb-8">
                نستخدم بياناتك الشخصية لتقديم الخدمة وتحسينها. باستخدامك للخدمة،
                فإنك توافق على جمع معلوماتك واستخدامها وفقاً لسياسة الخصوصية
                هذه.
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
                    <strong>ملفات تعريف الارتباط (Cookies)</strong> هي ملفات
                    صغيرة تُوضع على جهازك من قِبل الموقع الإلكتروني.
                </li>
                <li>
                    <strong>الدولة</strong> تشير إلى: المملكة العربية السعودية.
                </li>
                <li>
                    <strong>الجهاز</strong> يعني أي جهاز يمكنه الوصول إلى الخدمة
                    كالحاسوب أو الهاتف المحمول أو الجهاز اللوحي.
                </li>
                <li>
                    <strong>البيانات الشخصية</strong> هي أي معلومات تتعلق بشخص
                    محدد أو قابل للتحديد.
                </li>
                <li>
                    <strong>الخدمة</strong> تشير إلى الموقع الإلكتروني.
                </li>
                <li>
                    <strong>مزود الخدمة</strong> يعني أي شخص طبيعي أو اعتباري
                    يعالج البيانات نيابةً عن الشركة.
                </li>
                <li>
                    <strong>بيانات الاستخدام</strong> تشير إلى البيانات التي يتم
                    جمعها تلقائياً من خلال استخدام الخدمة.
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

            {/* جمع البيانات واستخدامها */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                جمع بياناتك الشخصية واستخدامها
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
                أنواع البيانات التي يتم جمعها
            </h3>
            <p className="mb-4">
                يتم جمع بيانات الاستخدام تلقائياً عند استخدام الخدمة، وقد تشمل
                عنوان IP الخاص بجهازك، ونوع المتصفح، وإصداره، والصفحات التي
                تزورها، وتاريخ ووقت الزيارة، والوقت الذي تقضيه في تلك الصفحات.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
                تقنيات التتبع وملفات تعريف الارتباط
            </h3>
            <p className="mb-4">
                نستخدم ملفات تعريف الارتباط وتقنيات تتبع مماثلة لتتبع النشاط على
                خدمتنا. نستخدم نوعين منها:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>
                    <strong>ملفات تعريف الارتباط الضرورية:</strong> ضرورية
                    لتقديم الخدمات المتاحة عبر الموقع.
                </li>
                <li>
                    <strong>ملفات تعريف الارتباط للإشعارات:</strong> تُحدد ما
                    إذا كان المستخدمون قد وافقوا على استخدام ملفات تعريف
                    الارتباط.
                </li>
                <li>
                    <strong>ملفات تعريف الارتباط الوظيفية:</strong> تتيح لنا
                    تذكر الخيارات التي تتخذها عند استخدام الموقع.
                </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
                استخدام بياناتك الشخصية
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>لتقديم خدمتنا وصيانتها.</li>
                <li>لإدارة طلباتك.</li>
                <li>للتواصل معك بشأن التحديثات والمعلومات المتعلقة بالخدمة.</li>
                <li>لتزويدك بالأخبار والعروض الخاصة ومعلومات حول خدماتنا.</li>
                <li>لتحليل البيانات وتحسين خدمتنا.</li>
            </ul>

            {/* الاحتفاظ بالبيانات */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                الاحتفاظ ببياناتك الشخصية
            </h2>
            <p className="mb-4">
                ستحتفظ الشركة ببياناتك الشخصية فقط طالما كان ذلك ضرورياً للأغراض
                المحددة في سياسة الخصوصية هذه. يتم الاحتفاظ ببيانات الاستخدام
                لمدة تصل إلى 24 شهراً. عند انتهاء فترات الاحتفاظ، نقوم بحذف
                البيانات الشخصية بشكل آمن أو إخفاء هويتها.
            </p>

            {/* نقل البيانات */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                نقل بياناتك الشخصية
            </h2>
            <p className="mb-4">
                قد يتم نقل معلوماتك ومعالجتها على أجهزة كمبيوتر خارج نطاق ولايتك
                القضائية. ستتخذ الشركة جميع الخطوات اللازمة لضمان التعامل مع
                بياناتك بشكل آمن ووفقاً لسياسة الخصوصية هذه.
            </p>

            {/* حذف البيانات */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                حذف بياناتك الشخصية
            </h2>
            <p className="mb-4">
                يحق لك طلب حذف بياناتك الشخصية. يمكنك التواصل معنا لطلب الوصول
                إلى بياناتك أو تصحيحها أو حذفها.
            </p>

            {/* الإفصاح عن البيانات */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                الإفصاح عن بياناتك الشخصية
            </h2>
            <p className="mb-4">
                قد تُفصح الشركة عن بياناتك الشخصية إذا كان ذلك مطلوباً بموجب
                القانون أو استجابةً لطلبات صادرة عن الجهات الحكومية المختصة، أو
                لحماية حقوق الشركة ومستخدميها.
            </p>

            {/* الأمان */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                أمان بياناتك الشخصية
            </h2>
            <p className="mb-4">
                يُعدّ أمان بياناتك الشخصية أمراً مهماً لنا، غير أنه لا توجد
                طريقة نقل عبر الإنترنت أو طريقة تخزين إلكتروني آمنة بنسبة 100%.
                نسعى جاهدين لاستخدام وسائل معقولة تجارياً لحماية بياناتك.
            </p>

            {/* خصوصية الأطفال */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                خصوصية الأطفال
            </h2>
            <p className="mb-4">
                لا تستهدف خدمتنا أي شخص دون سن 16 عاماً. لا نقوم بجمع معلومات
                شخصية من أي شخص دون سن 16 عاماً عن علم منا.
            </p>

            {/* الروابط لمواقع أخرى */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                روابط لمواقع أخرى
            </h2>
            <p className="mb-4">
                قد تحتوي خدمتنا على روابط لمواقع أخرى لا نتحكم فيها. ننصحك بشدة
                بمراجعة سياسة الخصوصية لكل موقع تزوره.
            </p>

            {/* التغييرات */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                التغييرات على سياسة الخصوصية
            </h2>
            <p className="mb-4">
                قد نقوم بتحديث سياسة الخصوصية الخاصة بنا من وقت لآخر. سنُعلمك
                بأي تغييرات عن طريق نشر سياسة الخصوصية الجديدة على هذه الصفحة
                وتحديث تاريخ &quot;آخر تحديث&quot;.
            </p>

            {/* تواصل معنا */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                تواصل معنا
            </h2>
            <p className="mb-2">
                إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه:
            </p>
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

// export default function PrivacyPolicy() {
//     return (
//         <main className="max-w-3xl mx-auto px-6 py-16 text-gray-700 leading-relaxed">
//             <h1 className="text-3xl font-bold text-gray-900 mb-2">
//                 Privacy Policy
//             </h1>
//             <p className="text-sm text-gray-500 mb-8">
//                 Last updated: March 02, 2026
//             </p>

//             <p className="mb-4">
//                 This Privacy Policy describes Our policies and procedures on the
//                 collection, use and disclosure of Your information when You use
//                 the Service and tells You about Your privacy rights and how the
//                 law protects You.
//             </p>
//             <p className="mb-8">
//                 We use Your Personal Data to provide and improve the Service. By
//                 using the Service, You agree to the collection and use of
//                 information in accordance with this Privacy Policy.
//             </p>

//             {/* Interpretation and Definitions */}
//             <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
//                 Interpretation and Definitions
//             </h2>

//             <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
//                 Interpretation
//             </h3>
//             <p className="mb-4">
//                 The words whose initial letters are capitalized have meanings
//                 defined under the following conditions. The following
//                 definitions shall have the same meaning regardless of whether
//                 they appear in singular or in plural.
//             </p>

//             <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
//                 Definitions
//             </h3>
//             <ul className="list-disc list-inside space-y-2 mb-6">
//                 <li>
//                     <strong>Company</strong> refers to تمديدات الخليج المبتكرة,
//                     JDSC7433, 7433 Muteb, 3193 As Safa Dist. Jeddah 23454,
//                     Kingdom of Saudi Arabia.
//                 </li>
//                 <li>
//                     <strong>Cookies</strong> are small files placed on Your
//                     device by a website, containing browsing history details.
//                 </li>
//                 <li>
//                     <strong>Country</strong> refers to: Saudi Arabia.
//                 </li>
//                 <li>
//                     <strong>Device</strong> means any device that can access the
//                     Service such as a computer, cell phone, or digital tablet.
//                 </li>
//                 <li>
//                     <strong>Personal Data</strong> is any information that
//                     relates to an identified or identifiable individual.
//                 </li>
//                 <li>
//                     <strong>Service</strong> refers to the Website.
//                 </li>
//                 <li>
//                     <strong>Service Provider</strong> means any natural or legal
//                     person who processes data on behalf of the Company.
//                 </li>
//                 <li>
//                     <strong>Usage Data</strong> refers to data collected
//                     automatically from the Service infrastructure.
//                 </li>
//                 <li>
//                     <strong>Website</strong> refers to تمديدات الخليج المبتكرة,
//                     accessible from{" "}
//                     <a
//                         href="https://www.taamco.com"
//                         className="text-blue-600 hover:underline"
//                     >
//                         www.taamco.com
//                     </a>
//                     .
//                 </li>
//                 <li>
//                     <strong>You</strong> means the individual accessing or using
//                     the Service.
//                 </li>
//             </ul>

//             {/* Collecting and Using */}
//             <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
//                 Collecting and Using Your Personal Data
//             </h2>

//             <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
//                 Types of Data Collected
//             </h3>
//             <p className="mb-4">
//                 Usage Data is collected automatically when using the Service. It
//                 may include Your IP address, browser type, browser version,
//                 pages visited, time and date of visit, time spent on pages, and
//                 other diagnostic data.
//             </p>

//             <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
//                 Tracking Technologies and Cookies
//             </h3>
//             <p className="mb-4">
//                 We use Cookies and similar tracking technologies to track
//                 activity on Our Service. We use both Session Cookies and
//                 Persistent Cookies for the following purposes:
//             </p>
//             <ul className="list-disc list-inside space-y-2 mb-6">
//                 <li>
//                     <strong>Necessary / Essential Cookies:</strong> Required to
//                     provide services available through the Website.
//                 </li>
//                 <li>
//                     <strong>Cookies Policy / Notice Acceptance Cookies:</strong>{" "}
//                     Identify if users have accepted the use of cookies.
//                 </li>
//                 <li>
//                     <strong>Functionality Cookies:</strong> Allow Us to remember
//                     choices You make when using the Website.
//                 </li>
//             </ul>

//             <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
//                 Use of Your Personal Data
//             </h3>
//             <ul className="list-disc list-inside space-y-2 mb-6">
//                 <li>To provide and maintain our Service.</li>
//                 <li>To manage Your requests.</li>
//                 <li>
//                     To contact You regarding updates or informative
//                     communications.
//                 </li>
//                 <li>
//                     To provide news, special offers, and general information
//                     about our services.
//                 </li>
//                 <li>
//                     For business transfers, data analysis, and improving our
//                     Service.
//                 </li>
//             </ul>

//             {/* Retention */}
//             <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
//                 Retention of Your Personal Data
//             </h2>
//             <p className="mb-4">
//                 The Company will retain Your Personal Data only for as long as
//                 necessary for the purposes set out in this Privacy Policy. Usage
//                 data is retained for up to 24 months. When retention periods
//                 expire, We securely delete or anonymize Personal Data.
//             </p>

//             {/* Transfer */}
//             <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
//                 Transfer of Your Personal Data
//             </h2>
//             <p className="mb-4">
//                 Your information may be transferred to computers located outside
//                 of Your jurisdiction. The Company will take all steps reasonably
//                 necessary to ensure that Your data is treated securely and in
//                 accordance with this Privacy Policy.
//             </p>

//             {/* Delete */}
//             <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
//                 Delete Your Personal Data
//             </h2>
//             <p className="mb-4">
//                 You have the right to request deletion of Your Personal Data.
//                 You may contact Us to request access to, correct, or delete any
//                 Personal Data You have provided.
//             </p>

//             {/* Disclosure */}
//             <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
//                 Disclosure of Your Personal Data
//             </h2>
//             <p className="mb-4">
//                 The Company may disclose Your Personal Data if required by law
//                 or in response to valid requests by public authorities, or to
//                 protect the rights and safety of the Company and its users.
//             </p>

//             {/* Security */}
//             <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
//                 Security of Your Personal Data
//             </h2>
//             <p className="mb-4">
//                 The security of Your Personal Data is important to Us. While We
//                 strive to use commercially reasonable means to protect Your
//                 data, no method of transmission over the Internet is 100%
//                 secure.
//             </p>

//             {/* Children */}
//             <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
//                 Children&apos;s Privacy
//             </h2>
//             <p className="mb-4">
//                 Our Service does not address anyone under the age of 16. We do
//                 not knowingly collect personally identifiable information from
//                 anyone under the age of 16.
//             </p>

//             {/* Links */}
//             <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
//                 Links to Other Websites
//             </h2>
//             <p className="mb-4">
//                 Our Service may contain links to other websites not operated by
//                 Us. We strongly advise You to review the Privacy Policy of every
//                 site You visit. We have no control over third-party sites or
//                 services.
//             </p>

//             {/* Changes */}
//             <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
//                 Changes to this Privacy Policy
//             </h2>
//             <p className="mb-4">
//                 We may update Our Privacy Policy from time to time. We will
//                 notify You by posting the new Privacy Policy on this page and
//                 updating the &quot;Last updated&quot; date.
//             </p>

//             {/* Contact */}
//             <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
//                 Contact Us
//             </h2>
//             <p className="mb-2">
//                 If you have any questions about this Privacy Policy:
//             </p>
//             <ul className="list-disc list-inside space-y-2">
//                 <li>
//                     Email:{" "}
//                     <a
//                         href="mailto:info@taamco.com"
//                         className="text-blue-600 hover:underline"
//                     >
//                         info@taamco.com
//                     </a>
//                 </li>
//                 <li>
//                     Phone:{" "}
//                     <a
//                         href="tel:+966551635304"
//                         className="text-blue-600 hover:underline"
//                     >
//                         +966 55 163 5304
//                     </a>
//                 </li>
//             </ul>
//         </main>
//     );
// }

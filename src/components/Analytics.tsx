import Script from 'next/script';

export default function Analytics() {
    const GA_MEASUREMENT_ID = 'G-6KW7MWVNNF'; // Your Google Analytics ID
    const GOOGLE_ADS_ID = 'AW-11147929803'; // Your Google Ads ID

    return (
        <>
            {/* Google Analytics and Google Ads Script */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            
            {/* Combined Google Analytics and Ads Configuration */}
            <Script id="google-analytics-ads" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    // Google Analytics Configuration
                    gtag('config', '${GA_MEASUREMENT_ID}');
                    
                    // Google Ads Configuration
                    gtag('config', '${GOOGLE_ADS_ID}');
                `}
            </Script>
        </>
    );
}
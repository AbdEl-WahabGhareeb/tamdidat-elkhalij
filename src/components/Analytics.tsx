import Script from 'next/script';

// Analytics configuration
const config = {
    GA_MEASUREMENT_ID: 'G-6KW7MWVNNF',
    GOOGLE_ADS_ID: 'AW-11147929803',
} as const;

// Error handler for script loading failures
const handleError = (error: Error) => {
    console.error('Analytics script failed to load:', error);
    // You could add additional error reporting here
};

export default function Analytics() {
    return (
        <>
            {/* Google Analytics and Google Ads Script */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${config.GA_MEASUREMENT_ID}`}
                onError={handleError}
            />
            
            {/* Combined Google Analytics and Ads Configuration */}
            <Script 
                id="google-analytics-ads" 
                strategy="afterInteractive"
                onError={handleError}
            >
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    // Google Analytics Configuration
                    gtag('config', '${config.GA_MEASUREMENT_ID}', {
                        send_page_view: true,
                        anonymize_ip: true,
                        cookie_flags: 'SameSite=None;Secure'
                    });
                    
                    // Google Ads Configuration
                    gtag('config', '${config.GOOGLE_ADS_ID}', {
                        allow_enhanced_conversions: true
                    });
                `}
            </Script>
        </>
    );
}
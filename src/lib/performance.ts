// Lazy loading utility for components
export const lazyLoad = <T>(componentImport: () => Promise<T>): Promise<T> => {
    return new Promise((resolve) => {
        // Add slight delay for non-critical components
        setTimeout(() => {
            resolve(componentImport());
        }, 100);
    });
};

// Prefetch critical resources
export const prefetchResources = () => {
    const resources = [
        '/assets/logo-192x192.png',
        '/assets/fonts/cairo.woff2'
    ];

    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            resources.forEach(resource => {
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = resource;
                document.head.appendChild(link);
            });
        });
    }
};

// Optimize reflow by batching DOM reads and writes
export interface DOMOperationsResult {
    measurements: Record<string, number>;
    updates: Array<() => void>;
}

export const batchDOMOperations = (callback: () => DOMOperationsResult) => {
    if ('requestAnimationFrame' in window) {
        requestAnimationFrame(() => {
            // Read phase
            const { measurements, updates } = callback();
            console.debug('DOM measurements:', measurements);
            
            requestAnimationFrame(() => {
                // Write phase
                updates.forEach(update => update());
            });
        });
    } else {
        const { measurements, updates } = callback();
        console.debug('DOM measurements:', measurements);
        updates.forEach(update => update());
    }
};

// Reduce unused JavaScript by code splitting
export const loadScript = (src: string, async = true) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = async;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
    });
};
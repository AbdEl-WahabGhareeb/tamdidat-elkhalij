import { Suspense } from 'react';

export interface LoadingBoundaryProps {
    /** The content to wrap with the loading boundary */
    children: React.ReactNode;
    /** Optional custom loading component to show while content is loading */
    fallback?: React.ReactNode;
    /** Optional minimum height for the loading container */
    minHeight?: string;
}

export interface LoadingSpinnerProps {
    /** Size of the spinner in pixels */
    size?: number;
    /** Primary color for the spinner (should be a Tailwind color class) */
    color?: string;
    /** Optional additional CSS classes */
    className?: string;
}

export function LoadingSpinner({ 
    size = 32, 
    color = 'blue', 
    className = '' 
}: LoadingSpinnerProps) {
    return (
        <div 
            className={`w-${size / 4} h-${size / 4} border-4 border-gray-200 rounded-full animate-spin border-t-${color}-500 ${className}`}
            role="status"
            aria-label="Loading"
        />
    );
}

export function DefaultLoadingFallback({ minHeight = '100px' }: { minHeight?: string }) {
    return (
        <div 
            className={`flex items-center justify-center w-full h-full min-h-[${minHeight}]`}
            role="progressbar"
            aria-busy="true"
            aria-label="Content is loading"
        >
            <LoadingSpinner />
        </div>
    );
}

export function LoadingBoundary({ children, fallback, minHeight = '100px' }: LoadingBoundaryProps) {
    return (
        <Suspense fallback={fallback || <DefaultLoadingFallback minHeight={minHeight} />}>
            {children}
        </Suspense>
    );
}
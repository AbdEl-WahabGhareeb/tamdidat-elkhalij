import Image from 'next/image';
import { useState } from 'react';

type OptimizedImageProps = {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
    priority?: boolean;
    sizes?: string;
};

export default function OptimizedImage({
    src,
    alt,
    className = '',
    width,
    height,
    priority = false,
    sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}: OptimizedImageProps) {
    const [isLoading, setLoading] = useState(true);

    return (
        <div className={`aspect-w-16 aspect-h-9 overflow-hidden ${isLoading ? 'animate-pulse bg-gray-200' : ''}`}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={`
                    duration-700 ease-in-out
                    ${className}
                    ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
                `}
                onLoadingComplete={() => setLoading(false)}
                priority={priority}
                sizes={sizes}
                quality={90}
                loading={priority ? 'eager' : 'lazy'}
            />
        </div>
    );
}
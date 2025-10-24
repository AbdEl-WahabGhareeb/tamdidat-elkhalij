import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError' | 'loading' | 'blurDataURL'> {
    blurHash?: string;
}

export function OptimizedImage({
    src,
    alt,
    className,
    priority,
    ...props
}: OptimizedImageProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={`relative overflow-hidden ${className || ''}`}>
            <Image
                src={src}
                alt={alt}
                className={`
                    duration-700 ease-in-out
                    ${isLoading 
                        ? 'scale-110 blur-2xl grayscale'
                        : 'scale-100 blur-0 grayscale-0'
                    }
                `}
                onLoadingComplete={() => setIsLoading(false)}
                priority={priority}
                loading={priority ? 'eager' : 'lazy'}
                quality={85}
                {...props}
            />
        </div>
    );
}
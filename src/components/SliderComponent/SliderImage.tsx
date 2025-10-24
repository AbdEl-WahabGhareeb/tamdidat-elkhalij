'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export interface SliderImageProps {
    src: string;
    alt: string;
    priority?: boolean;
}

export default function SliderImage({ src, alt, priority = false }: SliderImageProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const handleLoad = () => {
        setIsLoading(false);
    };

    const handleError = () => {
        setIsLoading(false);
        setIsError(true);
    };

    if (isError) {
        return (
            <div className="relative h-[90vh] w-full overflow-hidden bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Failed to load image</span>
            </div>
        );
    }

    return (
        <div className="relative h-[90vh] w-full overflow-hidden bg-gray-100">
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-gray-200 rounded-full animate-spin border-t-blue-500" />
                </div>
            )}
            <Image
                src={src}
                alt={alt}
                fill
                className={`
                    object-cover transition-all duration-700
                    ${isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0'}
                `}
                sizes="100vw"
                priority={priority}
                loading={priority ? 'eager' : 'lazy'}
                quality={85}
                onLoad={handleLoad}
                onError={handleError}
                unoptimized={false}
            />
        </div>
    );
}
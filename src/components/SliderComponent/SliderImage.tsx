import React from 'react';
import Image from 'next/image';

export interface SliderImageProps {
    src: string;
    alt: string;
    priority?: boolean;
}

export default function SliderImage({ src, alt, priority = false }: SliderImageProps) {
    return (
        <div className="relative h-[90vh] w-full overflow-hidden">
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="100vw"
                priority={priority}
                loading={priority ? 'eager' : 'lazy'}
                quality={85}
            />
        </div>
    );
}
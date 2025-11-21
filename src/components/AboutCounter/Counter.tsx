"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

export default function Counter() {
    const [firstCount, setFirstCount] = useState(0);
    const firstNumber = 40;

    const [secondCount, setSecondCount] = useState(0);
    const secondNumber = 15;

    const [thirdCount, setThirdCount] = useState(0);
    const thirdNumber = 200;

    const [fourthCount, setFourthCount] = useState(0);
    const fourthNumber = 500;

    const [hasStarted, setHasStarted] = useState(false);
    const statsRef = useRef(null);

    useEffect(() => {
        if (hasStarted) return; // Don't set up observer if counting has already started

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);

                    // First counter
                    const firstInterval = setInterval(() => {
                        setFirstCount((prev) => {
                            if (prev < firstNumber) return prev + 1;
                            clearInterval(firstInterval);
                            return prev;
                        });
                    }, 100);

                    // Second counter
                    const secondInterval = setInterval(() => {
                        setSecondCount((prev) => {
                            if (prev < secondNumber) return prev + 1;
                            clearInterval(secondInterval);
                            return prev;
                        });
                    }, 50);

                    // Third counter
                    const thirdInterval = setInterval(() => {
                        setThirdCount((prev) => {
                            if (prev < thirdNumber) return prev + 1;
                            clearInterval(thirdInterval);
                            return prev;
                        });
                    }, 5);

                    // Fourth counter
                    const fourthInterval = setInterval(() => {
                        setFourthCount((prev) => {
                            if (prev < fourthNumber) return prev + 1;
                            clearInterval(fourthInterval);
                            return prev;
                        });
                    }, 5); // Faster interval for larger number
                }
            },
            { threshold: 0.1 } // Start when 10% of the element is visible
        );

        // Save the current value to avoid cleanup closure issues
        const currentRef = statsRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            // Use the saved ref value in cleanup
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [hasStarted, firstNumber, secondNumber, thirdNumber, fourthNumber]);

    return (
        <>
            <div className="mt-8" dir="rtl">
                <div ref={statsRef} className="bg-image relative mt-4">
                    <div className="absolute top-0 left-0 px-16 right-0 bottom-0 z-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center text-white text-center p-4">
                        <div className="first text-center">
                            <p className="text-4xl font-bold mb-4">
                                +{firstCount}
                            </p>
                            <span className="text-2xl font-bold">
                                مشروع مكتمل
                            </span>
                        </div>

                        <div className="second text-center">
                            <p className="text-4xl font-bold mb-4">
                                +{secondCount}
                            </p>
                            <span className="text-2xl font-bold">
عميل راض                            </span>
                        </div>

                        <div className="third text-center">
                            <p className="text-4xl font-bold mb-4">
                                +{thirdCount}
                            </p>
                            <span className="text-2xl font-bold">
سنة خبرة                            </span>
                        </div>

                        <div className="fourth text-center">
                            <p className="text-4xl font-bold mb-4">
                                +{fourthCount}
                            </p>
                            <span className="text-2xl font-bold">
علامة حصرية                            </span>
                        </div>
                    </div>
                    <div className="relative w-full h-screen md:h-80 overflow-hidden">
                        <div className="statistics z-10 bg-[#2F3A97]/55 absolute top-0 left-0 w-full h-full "></div>
                        <Image
                            className="w-full opacity-50 object-cover md:object-fill h-full"
                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                            fill
                            src="/assets/clients-statistics.png"
                            alt="إحصائيات وإنجازات تمديدات الخليج في المشاريع السكنية والتجارية والصناعية"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

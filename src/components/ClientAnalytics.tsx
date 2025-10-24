"use client";
import dynamic from 'next/dynamic';

const AnalyticsComponent = dynamic(() => import("./Analytics"), {
    ssr: false,
    loading: () => null
});

export default function ClientAnalytics() {
    return <AnalyticsComponent />;
}
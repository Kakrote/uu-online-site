'use client';

import React from 'react';
import { TrendingUp, Share2, Users, BarChart3, DollarSign, Globe, Code, Package } from 'lucide-react';
import { SpecializationSection } from '@/lib/course-configs';

const IconComponent = ({ type }: { type: string }) => {
    const icons: Record<string, React.JSX.Element> = {
        marketing: <TrendingUp className="h-8 w-8 text-white" />,
        digital: <Share2 className="h-8 w-8 text-white" />,
        hr: <Users className="h-8 w-8 text-white" />,
        analytics: <BarChart3 className="h-8 w-8 text-white" />,
        finance: <DollarSign className="h-8 w-8 text-white" />,
        international: <Globe className="h-8 w-8 text-white" />,
        technology: <Code className="h-8 w-8 text-white" />,
        logistics: <Package className="h-8 w-8 text-white" />,
    }
    return icons[type] || icons.marketing
}

interface SpecialisationsSectionProps {
    specializationData: SpecializationSection;
}

export default function SpecialisationsSection({ specializationData }: SpecialisationsSectionProps) {
    return (
        <section className="w-full bg-white px-8 py-16 lg:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
                    <div>
                        <h1 className="text-4xl font-bold leading-tight">
                            <span className="text-black">{specializationData.title.main}</span>
                            <br />
                            <span className="text-green-500 md:text-5xl lg:text-7xl">{specializationData.title.highlighted}</span>
                        </h1>
                    </div>
                    <p className="max-w-lg text-sm leading-relaxed text-gray-900">
                        {specializationData.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {specializationData.specializations.map((spec, index) => (
                        <div key={index} className="flex flex-col lg:flex-row  items-start lg:items-center border gap-4 rounded-lg bg-gray-50 p-3">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500">
                                <IconComponent type={spec.icon} />
                            </div>
                            <h3 className="text-sm font-bold leading-snug text-black">
                                {spec.title.split('\n').map((line, i) => (
                                    <div key={i}>{line}</div>
                                ))}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

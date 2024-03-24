// pages/pdf-viewer.tsx
"use-client"
import React, { useState } from 'react';

const History: React.FC = () => {
    // Assuming your PDF file is named example.pdf and is located in the public directory
    const pdfUrl = [
        '/3638.pdf',
        '/3638.pdf',
    ];

    interface PDFViewerProps {
        pdfUrl: string;
    }

    return (
        <section>
            <div className="bg-white py-10 sm:py-10">
                <div className="mx-auto grid max-w-6xl gap-x-8 gap-y-10 px-6 lg:px-8">
                    <div className="md:w-900">
                        <h2 className="text-3xl font-bold tracking-tight text-[#BE1E2D] sm:text-4xl">Literature</h2>
                        <p className="text-justify mt-4 text-sm text-gray-600">
                            To celebrate the culinary diversity of our state through its districts, we have meticulously curated a collection that showcases the unique flavors, ingredients, and traditions of each district. From the rugged terrain of our mountainous districts to the fertile plains of our agricultural heartlands, each district has its own distinct identity shaped by its natural landscape, historical heritage, and local communities.
                        </p>
                    </div>
                    {pdfUrl.map((url, index) => (
                        <div key={index} className="flex justify-center items-center h-screen">
                            <iframe src={url} className="w-full h-full rounded-xl" title="PDF Viewer" />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default History;

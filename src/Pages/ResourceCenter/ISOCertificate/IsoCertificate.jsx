import React, { useState } from 'react';

const pdfFiles = [
    { title: 'ESIPL Certificate', url: 'https://drive.google.com/file/d/1ZhdPkSBw5W4nQrCet_esni9zQVgkJuor/view?usp=share_link' },
    { title: 'GIS Certificate', url: 'https://drive.google.com/file/d/1GJDBNJmKVPYyMv_dXYGGMyGN7LiVQ8pY/view?usp=share_link' },
];

const IsoCertificate = () => {
    const [currentPdf, setCurrentPdf] = useState(pdfFiles[0].url);

    const handlePdfChange = (url) => {
        setCurrentPdf(url);
        // Open the PDF in a new tab
        window.open(url, '_blank');
    };

    return (
        <div className="flex flex-col items-center min-h-screen p-4">
            <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 py-3 pt-10">
                ISO Certificate
            </h1>
            <div className="mt-8 mb-4 flex space-x-4">
                {pdfFiles.map((pdf, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <button 
                            onClick={() => handlePdfChange(pdf.url)} 
                            className="p-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                        >
                            View {pdf.title}
                        </button>
                        <a 
                            href={pdf.url} 
                            download 
                            className="mt-2 text-blue-600 underline hover:text-blue-800"
                        >
                            Download
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default IsoCertificate;

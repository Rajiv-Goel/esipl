import React from 'react';

const pdfFiles = [
    { title: 'Paper1', url: 'https://drive.google.com/file/d/1LSICgg9oRHjloopTmFDYagr0hmS5wk3R/view?usp=sharing' }, // Replace with the actual hosted URL
    { title: 'Paper2', url: 'https://drive.google.com/file/d/1zeIn9vNqyfXVKohWBfDSD2kMDfmtr5eE/view?usp=sharing' },
    { title: 'Paper3', url: 'https://drive.google.com/file/d/1JbKgXa-e-s6OlqO9PthHdBZwqgVoWZa4/view?usp=sharing' },
    { title: 'Paper4', url: 'https://drive.google.com/file/d/1zX58-wP1AsZrXgYtj6hXAd8bm8u8wClO/view?usp=sharing' },
];

const TechnicalPapers = () => {
    return (
        <div className="flex flex-col items-center min-h-screen p-4">
            <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 py-3 pt-10">
                Technical Paper
            </h1>
            <div className="mt-8 mb-4 flex space-x-4">
                {pdfFiles.map((pdf, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <a 
                            href={pdf.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                        >
                            View {pdf.title}
                        </a>
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

export default TechnicalPapers;

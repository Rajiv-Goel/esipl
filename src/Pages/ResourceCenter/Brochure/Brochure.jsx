import React from 'react';

const pdfFiles = [
    { title: 'Brochure', url: 'https://drive.google.com/file/d/1wj8_Z_CgtzZhniN03u3NZ8mijHi2Vo4l/view?usp=sharing' }, // Replace with the actual hosted URL
];

const Broucher = () => {
    return (
        <div className="flex flex-col items-center min-h-screen p-4">
            <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 py-3 pt-10">
                Brochure
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

export default Broucher;

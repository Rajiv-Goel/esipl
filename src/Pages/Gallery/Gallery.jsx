import React, { useEffect, useState, useRef } from 'react';
import 'animate.css'; // Import Animate.css for animations
import './Gallery.css'; // Import your custom CSS styles

// Helper function to import images
const importAll = (r) => r.keys().map(r);

// Import images from each category
const sitePictureImages = importAll(require.context('../../Assets/Gallery/SitePictures/', false, /\.(png|jpe?g|svg)$/));
const annualMeetImages = importAll(require.context('../../Assets/Gallery/AnnualMeet', false, /\.(png|jpe?g|svg)$/));
const festivalCelebrationImages = importAll(require.context('../../Assets/Gallery/FestivalsCelebration', false, /\.(png|jpe?g|svg)$/));
const coCurricularActivityImages = importAll(require.context('../../Assets/Gallery/Co-curricularActivities', false, /\.(png|jpe?g|svg)$/));
// Log results
console.log('Site Pictures:', sitePictureImages);
console.log('Annual Meet:', annualMeetImages);
console.log('Festival Celebration:', festivalCelebrationImages);
console.log('Co-curricular Activities:', coCurricularActivityImages);
const Gallery = () => {
    const sectionRefs = useRef([]);
    const [activeSection, setActiveSection] = useState('');
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [currentImages, setCurrentImages] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionTitle = entry.target.getAttribute('data-title');
                    setActiveSection(sectionTitle);
                    switch (sectionTitle) {
                        case 'Site Pictures':
                            setCurrentImages(sitePictureImages);
                            break;
                        case 'Annual Meet':
                            setCurrentImages(annualMeetImages);
                            break;
                        case 'Festival Celebration':
                            setCurrentImages(festivalCelebrationImages);
                            break;
                        case 'Co-curricular Activities':
                            setCurrentImages(coCurricularActivityImages);
                            break;
                        default:
                            setCurrentImages([]);
                    }
                    console.log('Active Section:', sectionTitle); // Log active section
                }
            });
        }, { threshold: 0.5 });

        sectionRefs.current.forEach(ref => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            sectionRefs.current.forEach(ref => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    const nextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
    };

    const prevImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + currentImages.length) % currentImages.length);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 overflow-hidden">
            <GreetingOverlay />

            <header className="fixed top-0 w-full py-6 bg-white shadow-lg z-10">
                <h2 className="text-3xl font-bold text-center text-orange-600 animate__animated animate__fadeInDown pt-10">
                    {activeSection || 'Welcome to Our Gallery'}
                </h2>
            </header>

            <main className="pt-32 px-8">
                {['Site Pictures', 'Annual Meet', 'Festival Celebration', 'Co-curricular Activities'].map((title, index) => (
                    <Section
                        key={title}
                        title={title}
                        images={
                            title === "Site Pictures" ? sitePictureImages :
                            title === "Annual Meet" ? annualMeetImages :
                            title === "Festival Celebration" ? festivalCelebrationImages :
                            coCurricularActivityImages
                        }
                        setRef={(el) => (sectionRefs.current[index] = el)}
                        onImageClick={handleImageClick}
                    />
                ))}
            </main>

            {selectedImageIndex !== null && currentImages.length > 0 && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
                    <button onClick={prevImage} className="absolute left-4 text-white text-3xl">&lt;</button>
                    <img src={currentImages[selectedImageIndex]} alt="Enlarged View" className="max-w-full max-h-full p-4 rounded-lg" />
                    <button onClick={nextImage} className="absolute right-4 text-white text-3xl">&gt;</button>
                    <button onClick={closeModal} className="absolute top-4 right-4 text-white text-3xl">×</button>
                </div>
            )}
        </div>
    );
};

const GreetingOverlay = () => {
    const [showGreeting, setShowGreeting] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowGreeting(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        showGreeting && (
            <div className={`fixed inset-0 z-50 animate__animated animate__fadeIn`}>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-80 flex items-center justify-center">
                    <h1 className="text-white text-7xl font-extrabold animate__animated animate__zoomIn">Gallery</h1>
                </div>
            </div>
        )
    );
};

const Section = ({ title, images, setRef, onImageClick }) => {
    console.log('Images for section:', title, images); // Log images for debugging
    return (
        <section ref={setRef} data-title={title} className="py-16">
            <h2 className="text-4xl font-bold text-center text-orange-600 mb-8">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 animate__animated animate__fadeIn">
                {images.map((image, index) => (
                    <div className="relative group" key={index}>
                        <img 
                            src={image} 
                            alt={`Image ${index + 1}`} 
                            className="w-full h-96 object-cover rounded-xl transform transition-transform duration-500 hover:scale-110 shadow-2xl animate__animated animate__zoomIn cursor-pointer"
                            onClick={() => onImageClick(index)} 
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 flex items-center justify-center rounded-xl">
                            <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">View Image</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;

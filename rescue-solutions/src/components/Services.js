import React, { useState, useEffect, useRef } from 'react';
import './Services.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Import icons for each service category
import {
    Briefcase, // Job Portal Development
    Users, // HR Management Systems
    Code, // Custom Web Development
    Database, // Database Solutions
    Cloud, // Cloud Services
    Shield, // Security Solutions
    Smartphone, // Mobile App Development
    BarChart2 // Business Analytics
} from 'lucide-react';

const servicesData = [
    {
        title: "Job Portal Development",
        description: "Custom job portals with advanced matching algorithms, recruiter dashboards, and candidate management systems.",
        items: ["Advanced Search", "AI Matching", "Application Tracking", "Custom Dashboards"],
        icon: Briefcase
    },
    {
        title: "HR Management Systems",
        description: "Comprehensive HR solutions for employee management, payroll, and performance tracking.",
        items: ["Employee Portal", "Payroll Integration", "Performance Analytics", "Compliance Management"],
        icon: Users
    },
    {
        title: "Custom Web Development",
        description: "Tailored web applications built with modern technologies to meet your specific business needs.",
        items: ["Responsive Design", "Modern Tech Stack", "Scalable Architecture", "SEO Optimization"],
        icon: Code
    },
    {
        title: "Database Solutions",
        description: "Robust database design and management for optimal performance and data security.",
        items: ["Data Migration", "Performance Optimization", "Backup Solutions", "Cloud Database"],
        icon: Database
    },
    {
        title: "Cloud Services",
        description: "Scalable cloud infrastructure and migration services for modern business operations.",
        items: ["Cloud Migration", "Infrastructure Setup", "Monitoring", "Cost Optimization"],
        icon: Cloud
    },
    {
        title: "Security Solutions",
        description: "Comprehensive cybersecurity measures to protect your business data and operations.",
        items: ["Security Audits", "Data Protection", "Compliance", "Threat Detection"],
        icon: Shield
    },
    {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android platforms.",
        items: ["Cross-Platform", "Native Performance", "App Store Optimization", "User Experience Design"],
        icon: Smartphone
    },
    {
        title: "Business Analytics",
        description: "Data-driven insights and reporting solutions to help make informed business decisions.",
        items: ["Custom Dashboards", "Real-time Reports", "Data Visualization", "Predictive Analytics"],
        icon: BarChart2
    },
];

const Services = () => {
    // Refs for the two scrollable carousel elements
    const carouselRef1 = useRef(null);
    const carouselRef2 = useRef(null);

    // Refs for the two wrapper elements to apply classes
    const wrapperRef1 = useRef(null);
    const wrapperRef2 = useRef(null);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [hasSwiped, setHasSwiped] = useState(false);
    
    // Initial states for arrow/animation control
    const [isRow1Start, setIsRow1Start] = useState(true);
    const [isRow2Start, setIsRow2Start] = useState(true);
    const [isRow1End, setIsRow1End] = useState(false);
    const [isRow2End, setIsRow2End] = useState(false);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        // We ensure a correct initial check right after component mounts
        handleResize(); 
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    // --- SCROLL POSITION LOGIC ---
    const checkScrollPosition = (ref, isStartSetter, isEndSetter, wrapperRef) => {
        if (!ref.current || !wrapperRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = ref.current;
        const scrollThreshold = 5; // Tolerance for checking start/end position

        // 1. Check Start Position
        const atStart = scrollLeft <= scrollThreshold;
        isStartSetter(atStart);
        
        // 2. Check End Position
        // Subtract clientWidth from scrollWidth to get the max scrollable distance
        const maxScroll = scrollWidth - clientWidth;
        const atEnd = scrollLeft >= maxScroll - scrollThreshold;
        isEndSetter(atEnd);

        // Apply/Remove 'at-start' class based on position (for hiding left arrow/breathing anim)
        if (atStart) {
            wrapperRef.current.classList.add('at-start');
        } else {
            wrapperRef.current.classList.remove('at-start');
        }

        // Apply/Remove 'at-end' class (for hiding right arrow)
        if (atEnd) {
            wrapperRef.current.classList.add('at-end');
        } else {
            wrapperRef.current.classList.remove('at-end');
        }
        
        // 3. Hide Swiping Indicator after first interaction
        if (scrollLeft > scrollThreshold && !hasSwiped) {
            setHasSwiped(true);
        }
    };
    
    // Unified handler for all scrolling events
    const handleScroll = (row) => {
        if (row === 1) {
            checkScrollPosition(carouselRef1, setIsRow1Start, setIsRow1End, wrapperRef1);
        } else if (row === 2) {
            checkScrollPosition(carouselRef2, setIsRow2Start, setIsRow2End, wrapperRef2);
        }
    };

    // Attach scroll handlers on mount/mobile switch
    useEffect(() => {
        if (!isMobile) return;

        const currentRef1 = carouselRef1.current;
        const currentRef2 = carouselRef2.current;
        
        // Ensure refs are available before accessing properties
        if (!currentRef1 || !currentRef2) return;

        // Initial check to correctly set arrow visibility when component loads
        handleScroll(1);
        handleScroll(2);

        // Attach event listeners
        const scrollHandler1 = () => handleScroll(1);
        const scrollHandler2 = () => handleScroll(2);
        
        currentRef1.addEventListener('scroll', scrollHandler1);
        currentRef2.addEventListener('scroll', scrollHandler2);

        // Cleanup
        return () => {
            currentRef1.removeEventListener('scroll', scrollHandler1);
            currentRef2.removeEventListener('scroll', scrollHandler2);
        };
    }, [isMobile, handleScroll]); // Re-run effect when isMobile or handleScroll changes
    // Removed 'hasSwiped' from dependencies to prevent excessive re-renders/listener re-attachment

    // --- ARROW NAVIGATION LOGIC ---
    const scrollByCard = (ref, direction) => {
        if (ref.current) {
            // Estimate a single card width based on the CSS: 85% of parent + 20px gap
            // Using requestAnimationFrame to ensure accurate clientWidth if the DOM hasn't settled
            requestAnimationFrame(() => {
                // Ensure the width is calculated *after* the initial render
                const cardWidth = ref.current.clientWidth * 0.85 + 20; 
                
                const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;
                
                ref.current.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
                
                // Instantly hide the indicator upon manual navigation
                setHasSwiped(true);
            });
        }
    };

    const scrollPrev = (row) => {
        const ref = row === 1 ? carouselRef1 : carouselRef2;
        scrollByCard(ref, 'prev');
    };

    const scrollNext = (row) => {
        const ref = row === 1 ? carouselRef1 : carouselRef2;
        scrollByCard(ref, 'next');
    };
    // ----------------------------
    
    const midPoint = servicesData.length / 2;
    const firstRowData = servicesData.slice(0, midPoint);
    const secondRowData = servicesData.slice(midPoint);

    const renderCards = (data) => (
        data.map((service, index) => (
            <div key={index} className="service-card card">
                <div className="service-icon">
                    <service.icon size={30} color="#6a00ff" strokeWidth={2.5} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                    {service.items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        ))
    );

    const layoutClass = isMobile ? "services-mobile-container" : "services-grid";

    return (
        <div className='wholeservices'>
            <section id="services" className="services-section section-container">
                <span className="tag">Our Services</span>
                <h2>Dealing in all professional<br /><span className="text-primary">IT services.</span></h2>
                <p className="services-subtitle">We provide comprehensive IT solutions designed to accelerate your business growth and digital transformation journey.</p>
                
                {/* Desktop Grid Layout */}
                {!isMobile && (
                    <div className={layoutClass}>
                        {renderCards(servicesData)}
                    </div>
                )}

                {/* Mobile Two-Row Carousel Layout */}
                {isMobile && (
                    <div className={layoutClass}>
                        {/* Instructional Indicator (Visible before swipe) */}
                        {!hasSwiped && (
                            <div className="carousel-indicator-box">
                                <p className="carousel-indicator-text">
                                    &larr; Swipe or Tap Arrows &rarr;
                                </p>
                            </div>
                        )}

                        {/* ROW 1 WRAPPER */}
                        <div className={`carousel-row-wrapper ${isRow1End ? 'at-end' : ''} ${isRow1Start ? 'at-start' : ''}`} ref={wrapperRef1}>
                            <button 
                                className="carousel-nav-button prev" 
                                onClick={() => scrollPrev(1)}
                            >
                                <ArrowLeft size={20} />
                            </button>
                            <div className="services-carousel services-carousel-row-1" ref={carouselRef1}>
                                {renderCards(firstRowData)}
                            </div>
                            <button 
                                className="carousel-nav-button next" 
                                onClick={() => scrollNext(1)}
                            >
                                <ArrowRight size={20} />
                            </button>
                        </div>
                        
                        {/* ROW 2 WRAPPER */}
                        <div className={`carousel-row-wrapper ${isRow2End ? 'at-end' : ''} ${isRow2Start ? 'at-start' : ''}`} ref={wrapperRef2}>
                            <button 
                                className="carousel-nav-button prev" 
                                onClick={() => scrollPrev(2)}
                            >
                                <ArrowLeft size={20} />
                            </button>
                            <div className="services-carousel services-carousel-row-2" ref={carouselRef2}>
                                {renderCards(secondRowData)}
                            </div>
                            <button 
                                className="carousel-nav-button next" 
                                onClick={() => scrollNext(2)}
                            >
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Services;

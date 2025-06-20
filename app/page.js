"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {

  const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  const { name, email, phone, service, message } = formData;

  const text = `Hello, I would like to inquire about your services:

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Service:* ${service}
*Message:* ${message}`;

  const encodedMessage = encodeURIComponent(text);
  const whatsappURL = `https://wa.me/916290950197?text=${encodedMessage}`;

  window.open(whatsappURL, '_blank');
};

    const totalImages = 28;
  const imagesPerPage = 9;
  const [visibleCount, setVisibleCount] = useState(imagesPerPage);

  const loadMoreImages = () => {
    setVisibleCount((prev) => Math.min(prev + imagesPerPage, totalImages));
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    "Glass & mirror shop",
    "Glass installation",
    "Auto glass repair",
    "Custom mirror and glass",
    "General door repair",
    "Glass cutting",
    "Glass design",
    "Glass fitting",
    "Glass restoration & repair",
    "Shower doors",
    "Window installation",
    "Window repair",
    "Window tinting",
    "12mm toughened glass door partition",
    "Aluminium sliding service",
    "Glass shower cubicle repair",
    "Glass sliding door",
    "Aluminium Domal section sliding"
  ];

  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "Homeowner",
      comment: "Excellent work on my shower cubicle! The team was professional and delivered on time.",
      rating: 5
    },
    {
      name: "Priya Banerjee",
      role: "Office Manager",
      comment: "We got all our office partitions done by Digital Glass. Perfect finish and great service.",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Hotel Owner",
      comment: "Reliable glass solutions for our hotel renovation. Highly recommended!",
      rating: 4
    }
  ];

  const features = [
    {
      title: "Premium Quality",
      description: "We use only the finest glass materials from trusted suppliers",
      icon: "M5 13l4 4L19 7"
    },
    {
      title: "Expert Craftsmanship",
      description: "Our skilled technicians have years of experience in glass work",
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    },
    {
      title: "Timely Delivery",
      description: "We respect your time and complete projects as promised",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Digital Glass India | Premium Glass Solutions in Kolkata</title>
        <meta name="description" content="Your trusted glass shop in Kolkata offering glass installation, repair, custom mirrors, shower doors, window solutions and more." />
      </Head>

      {/* Background with glass effect */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        <Image 
          src="/img/1 (2).jpeg" 
          alt="Glass shop background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-50"
        />
      </div>

      {/* Main container with glass morphism effect */}
      <div className="min-h-screen flex flex-col">
        {/* Shop Banner/Navbar */}
        <header className="bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-500/20 backdrop-blur rounded-full border border-white/30 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                  Digital Glass India
                </h1>
              </div>

              <div className="hidden md:flex space-x-6 items-center">
                <a href="#services" className="text-white hover:text-blue-300 transition-colors">Services</a>
                <a href="#gallery" className="text-white hover:text-blue-300 transition-colors">Gallery</a>
                <a href="#about" className="text-white hover:text-blue-300 transition-colors">About</a>
                <a href="#testimonials" className="text-white hover:text-blue-300 transition-colors">Testimonials</a>
                <a href="#contact" className="text-white hover:text-blue-300 transition-colors">Contact</a>
                <a 
                  href="https://maps.app.goo.gl/3VebaNgEWTqWuzVQA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-white flex items-center space-x-2 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Visit Us</span>
                </a>
              </div>

              <button 
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
              <div className="md:hidden mt-4 pb-4 space-y-3 animate-fadeIn">
                <a href="#services" className="block text-white hover:text-blue-300 transition-colors">Services</a>
                <a href="#gallery" className="block text-white hover:text-blue-300 transition-colors">Gallery</a>
                <a href="#about" className="block text-white hover:text-blue-300 transition-colors">About</a>
                <a href="#testimonials" className="block text-white hover:text-blue-300 transition-colors">Testimonials</a>
                <a href="#contact" className="block text-white hover:text-blue-300 transition-colors">Contact</a>
                <a 
                  href="https://maps.app.goo.gl/3VebaNgEWTqWuzVQA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-white flex items-center space-x-2 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Visit Us</span>
                </a>
              </div>
            )}
          </div>
        </header>

        {/* Hero Section - Full Page with Left-aligned Glass Panel */}
        <section className="relative w-full h-screen">
          {/* Full-page shop facade image */}
          <div className="absolute inset-0">
            <Image 
              src="/img/1 (7).jpeg"
              alt="Digital Glass India Shop Front"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
          
          {/* Glass panel overlay on left side */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="w-full md:w-1/2 lg:w-5/12">
                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-6 md:p-8 shadow-2xl animate-float">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Digital Glass India
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <p className="text-white font-medium">47/B RIPON ST</p>
                          <p className="text-white/80">DHARMATALA TALTALA</p>
                          <p className="text-white/80">KOLKATA, 700016</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a href="tel:6290950197" className="text-white hover:text-blue-300 transition-colors text-lg">62909 50197</a>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href="mailto:lamalilaskar16@gmail.com" className="text-white hover:text-blue-300 transition-colors">lamalilaskar16@gmail.com</a>
                      </div>
                    </div>
                    
                    <div className="bg-blue-900/30 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h3 className="text-white font-semibold mb-2">Today&apos;s Featured Service:</h3>
                      <p className="text-blue-200 text-xl font-medium animate-pulse">
                        {services[currentSlide]}
                      </p>
                    </div>

                    <div className="flex space-x-4">
                      <a 
                        href="#services"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-medium transition-colors text-center"
                      >
                        Our Services
                      </a>
                      <a 
                        href="#contact"
                        className="flex-1 bg-transparent border border-white/50 hover:border-blue-300 px-6 py-3 rounded-lg text-white font-medium transition-colors text-center"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-16 px-4 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <Image 
                  src="/img/1 (7).jpeg"
                  alt="Our Glass Workshop"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  About <span className="text-blue-400">Digital Glass India</span>
                </h2>
                <p className="text-white/80 mb-6">
                  Established in Kolkata, Digital Glass India has been providing premium glass solutions for residential, commercial, and industrial clients. With our team of skilled craftsmen and cutting-edge technology, we deliver precision and perfection in every project.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all">
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-500/20 p-3 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                          <p className="text-white/70">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4 bg-gradient-to-b from-blue-900/20 to-blue-900/40">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our <span className="text-blue-400">Glass Solutions</span>
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Comprehensive glass services tailored to meet your residential and commercial needs with precision and care.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all hover:shadow-lg hover:shadow-blue-500/20 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500/20 p-3 rounded-full group-hover:bg-blue-500/30 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section id="gallery" className="py-16 px-4 bg-blue-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-blue-400">Work Gallery</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Explore our portfolio of completed projects showcasing our craftsmanship and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(visibleCount)].map((_, index) => (
            <div
              key={index + 1}
              className="relative group overflow-hidden rounded-xl aspect-square shadow-lg"
            >
              <Image
                src={`/img/2 (${index + 1}).jpeg`}
                alt={`Glass work sample ${index + 1}`}
                width={500}
                height={500}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white/90 text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-white transition-all transform translate-y-4 group-hover:translate-y-0">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < totalImages && (
          <div className="text-center mt-12">
            <button
              onClick={loadMoreImages}
              className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>


        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 px-4 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Client <span className="text-blue-400">Testimonials</span>
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Hear what our satisfied customers have to say about our services and craftsmanship.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-blue-400/50 transition-all">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-white/30'}`} 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/80 italic mb-6">&quot;{testimonial.comment}&quot;</p>
                  <div className="flex items-center">
                    <div className="bg-blue-500/20 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{testimonial.name}</h4>
                      <p className="text-white/60 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-blue-900/20 to-blue-900/40">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our <span className="text-blue-400">Process</span>
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                A streamlined approach to ensure quality and satisfaction at every step.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline bar */}
              <div className="absolute left-1/2 h-full w-1 bg-blue-500/30 transform -translate-x-1/2 hidden md:block"></div>
              
              {/* Process steps */}
              <div className="space-y-12 md:space-y-0">
                {[
                  {
                    title: "Consultation",
                    description: "We discuss your requirements and provide expert recommendations",
                    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  },
                  {
                    title: "Measurement",
                    description: "Precise on-site measurements for perfect fitting",
                    icon: "M12 4V2m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V2m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V2"
                  },
                  {
                    title: "Fabrication",
                    description: "Custom fabrication in our state-of-the-art workshop",
                    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  },
                  {
                    title: "Installation",
                    description: "Professional installation by our experienced team",
                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  }
                ].map((step, index) => (
                  <div key={index} className="relative md:flex items-center">
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-24 md:text-right' : 'md:pl-24'} mb-4 md:mb-0`}>
                      <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-white/70">{step.description}</p>
                    </div>
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/50 flex items-center justify-center mx-auto md:mx-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                      </svg>
                    </div>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-24' : 'md:pr-24 md:text-right'} mt-4 md:mt-0`}>
                      <div className="text-blue-300 font-mono text-sm">Step {index + 1}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get In <span className="text-blue-400">Touch</span>
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Have a project in mind? Contact us for a free consultation and quote.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/40 to-blue-700/40 rounded-xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-500/20 p-3 rounded-full flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Our Location</h3>
                        <p className="text-white/80">47/B RIPON ST, DHARMATALA TALTALA</p>
                        <p className="text-white/80">KOLKATA, 700016</p>
                        <a 
                          href="https://maps.app.goo.gl/3VebaNgEWTqWuzVQA" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-300 hover:text-blue-200 inline-flex items-center mt-1"
                        >
                          View on Map
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-500/20 p-3 rounded-full flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Call Us</h3>
                        <a href="tel:6290950197" className="text-white/80 hover:text-blue-300 transition-colors text-lg">62909 50197</a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-500/20 p-3 rounded-full flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Email Us</h3>
                        <a href="mailto:lamalilaskar16@gmail.com" className="text-white/80 hover:text-blue-300 transition-colors">lamalilaskar16@gmail.com</a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-500/20 p-3 rounded-full flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Business Hours</h3>
                        <p className="text-white/80">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                        <p className="text-white/80">Sunday: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 border-t md:border-t-0 md:border-l border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                  <form className="space-y-4" onSubmit={handleSubmit}>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    onChange={handleChange}
    value={formData.name}
    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50"
    required
  />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    onChange={handleChange}
    value={formData.email}
    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50"
    required
  />
  <input
    type="tel"
    name="phone"
    placeholder="Phone Number"
    onChange={handleChange}
    value={formData.phone}
    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50"
    required
  />
  <select
    name="service"
    onChange={handleChange}
    value={formData.service}
    className="w-full bg-white/10  backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-black"
    required
  >
    <option value="" disabled>Select Service</option>
    {services.map((service, index) => (
      <option key={index} value={service}>{service}</option>
    ))}
  </select>
  <textarea
    name="message"
    rows="4"
    placeholder="Your Message"
    onChange={handleChange}
    value={formData.message}
    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-black placeholder-white/50"
    required
  ></textarea>

  <button
    type="submit"
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center"
  >
    <span>Send via WhatsApp</span>
  </button>
</form>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-96 w-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.107427720634!2d88.3523143153625!3d22.572985585180843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a7f1318a6f%3A0x3f0e5a3a3a3a3a3a!2sDigital%20Glass%20India!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy"
            className="filter grayscale-50 contrast-125"
          ></iframe>
        </section>

        {/* Footer */}
        <footer className="bg-black/70 backdrop-blur-md text-white py-12 px-4 border-t border-white/10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-10 h-10 bg-blue-500/20 backdrop-blur rounded-full border border-white/30 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">Digital Glass India</h2>
                </div>
                <p className="text-white/70 mb-4">
                  Your trusted partner for premium glass solutions in Kolkata.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-white/70 hover:text-blue-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white/70 hover:text-blue-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white/70 hover:text-blue-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white/70 hover:text-blue-300 transition-colors">Home</a></li>
                  <li><a href="#about" className="text-white/70 hover:text-blue-300 transition-colors">About Us</a></li>
                  <li><a href="#services" className="text-white/70 hover:text-blue-300 transition-colors">Services</a></li>
                  <li><a href="#gallery" className="text-white/70 hover:text-blue-300 transition-colors">Gallery</a></li>
                  <li><a href="#testimonials" className="text-white/70 hover:text-blue-300 transition-colors">Testimonials</a></li>
                  <li><a href="#contact" className="text-white/70 hover:text-blue-300 transition-colors">Contact</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Our Services</h3>
                <ul className="space-y-3">
                  {services.slice(0, 6).map((service, index) => (
                    <li key={index}>
                      <a href="#services" className="text-white/70 hover:text-blue-300 transition-colors">{service}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Contact Info</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-white/70">47/B Ripon St, Dharmatala Taltala, Kolkata - 700016</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:6290950197" className="text-white/70 hover:text-blue-300 transition-colors">62909 50197</a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:lamalilaskar16@gmail.com" className="text-white/70 hover:text-blue-300 transition-colors">lamalilaskar16@gmail.com</a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white/70">Mon-Sat: 9:00 AM - 8:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
              <p>© {new Date().getFullYear()} Digital Glass India. All rights reserved.<br />
              Website Developed & Maintained by Digital Exposure Online Services.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
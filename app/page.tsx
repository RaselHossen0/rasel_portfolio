"use client";
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Github, Linkedin, Mail, Briefcase, GraduationCap, Apple, Smartphone, Eye } from 'lucide-react'
import Image from 'next/image'
import {  ChevronDown } from 'lucide-react';

export default function Home() {
  const [currentApp, setCurrentApp] = useState(0)
  const [previewUrl, setPreviewUrl] = useState('')

  const flutterApps = [
    {
      name: 'MASCON 2023',
      images: [
        '/mas/unnamed-3.png?height=600&width=300',
        '/mas/unnamed-2.png?height=600&width=300',
        '/mas/unnamed.png?height=600&width=300'
      ],
      description: 'The Annual MAS-ICNA Convention is the largest and most diverse Islamic convention in North America. The convention takes place in Chicago, Illinois every December during the winter holiday season. By the grace of Allah and the unique effort of over 300 volunteers, the number of attendees has successfully grown from 1,500 in 2001 to over 30,000 in 2022.The Muslim American Society (MAS) and Islamic Circle of North America (ICNA) are dynamic, religious, and educational organizations that offer unique programs and services.',
      appStoreLink: 'https://apps.apple.com/us/app/flutterchat',
      playStoreLink: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://apps.apple.com/us/app/mascon23/id6467641837&ved=2ahUKEwiNweO8zI6JAxXrxTgGHcTMBa4QFnoECBkQAQ&usg=AOvVaw1TtbatglKGTeYqebRycB7x'
    },
    {
      name: 'Nutri Guard',
      images: [
        '/nutri/download.jpeg?height=600&width=300',
        '/nutri/download1.jpeg?height=600&width=300',
        '/nutri/download1.jpeg?height=600&width=300'
      ],
      description: 'Key Features: * Scan with Ease: Effortlessly scan the ingredient list or barcode of any packaged food item using our intuitive OCR and barcode scanning features ...',
      appStoreLink: 'https://apps.apple.com/ie/app/nutriguard/id6496508089',
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.shreybajiya.nurti_guard&hl=as'
    },
    // {
    //   name: 'FlutterShop',
    //   images: [
    //     '/placeholder.svg?height=600&width=300',
    //     '/placeholder.svg?height=600&width=300',
    //     '/placeholder.svg?height=600&width=300'
    //   ],
    //   description: 'An e-commerce app with a beautiful UI and seamless checkout process.',
    //   appStoreLink: 'https://apps.apple.com/us/app/fluttershop',
    //   playStoreLink: 'https://play.google.com/store/apps/details?id=com.example.fluttershop'
    // },
  ]
  
  
  const HomeSection = () => (
    <section id='home' className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center">
        {/* Left side content */}
        <motion.div 
          className="lg:w-1/2 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-5xl lg:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Rasel Hossen
          </motion.h2>
          <motion.h3 
            className="text-2xl lg:text-4xl font-bold mb-6 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Flutter Developer & Web Enthusiast
          </motion.h3>
          <motion.p 
            className="text-xl mb-8 text-gray-400 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Crafting cutting-edge mobile applications and responsive websites with passion and precision.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <InfoButton title="Current Work" icon={<Briefcase className="mr-2" />}>
              Remote Flutter Developer at StarsTech Group USA
            </InfoButton>
            <InfoButton title="Education" icon={<GraduationCap className="mr-2" />}>
              BS in CS & Engineering, University Of Dhaka
            </InfoButton>
          </motion.div>
          <motion.a
            href="#about"
            className="inline-flex items-center bg-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-600 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Me
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="ml-2" />
            </motion.div>
          </motion.a>
        </motion.div>
        
        {/* Right side image */}
        <motion.div 
          className="lg:w-1/2 mt-12 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="relative w-full h-[500px] lg:h-[700px]">
            <Image
              src="/image.png?height=700&width=700"
              alt="Rasel Hossen"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
  
  const InfoButton = ({ title, icon, children }) => (
    <div className="bg-gray-800 px-4 py-2 rounded-full inline-flex items-center">
      {icon}
      <span className="font-semibold mr-2">{title}:</span>
      <span className="text-gray-300">{children}</span>
    </div>
  );
  
  
  
  const AboutSection = () => (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-800 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="md:w-1/3">
            <Image
              src="/myimage2.png?height=300&width=300"
              alt="Rasel Hossen"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-2/3 text-left">
            <h2 className="text-3xl font-bold mb-6 text-teal-300">About Me</h2>
            <p className="mb-4">
              Hi, I'm Rasel Hossen, a passionate Flutter developer and web enthusiast. I specialize in building cross-platform mobile applications and responsive websites.
            </p>
            <p className="mb-4">
              My journey started <b>2</b> years ago, and since then, I've worked on various projects, from small startups to large enterprises.
            </p>
  
            <InfoSection title="Experience" icon={<Briefcase className="mr-2" />}>
              <p className="text-lg font-semibold">Remote Flutter Developer at StarsTech Group USA</p>
              <p>Leading a team of 5 developers in creating cutting-edge mobile applications.</p>
            </InfoSection>
  
            <InfoSection title="Skills" icon={<GraduationCap className="mr-2" />}>
              <p className="text-lg">Java, React.js, Node.js, MySQL, Python</p>
            </InfoSection>
          </div>
        </div>
      </motion.div>
    </section>
  );
  
  const InfoSection = ({ title, icon, children }) => (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4 flex items-center text-teal-300">
        {icon} {title}
      </h3>
      <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
  
  const websites = [
    { name: 'TechBlog', url: 'https://techblog.example.com', description: 'A responsive blog built with Next.js and MDX.' },
    { name: 'PortfolioV1', url: 'https://portfoliov1.example.com', description: 'My first portfolio website built with React and Tailwind CSS.' },
    { name: 'WeatherApp', url: 'https://weatherapp.example.com', description: 'A weather forecast app using OpenWeatherMap API and Next.js.' },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white" style={{
      backgroundImage: "url('/bg.png?height=1080&width=1920')",
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
    }}>
      <div className="min-h-screen bg-black bg-opacity-70">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-800 bg-opacity-90 backdrop-blur-md">
          <ul className="flex justify-center space-x-8 p-4">
            <li><a href="#home" className="hover:text-teal-300 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-teal-300 transition-colors">About</a></li>
            <li><a href="#flutter-apps" className="hover:text-teal-300 transition-colors">Flutter Apps</a></li>
            <li><a href="#websites" className="hover:text-teal-300 transition-colors">Websites</a></li>
            <li><a href="#contact" className="hover:text-teal-300 transition-colors">Contact</a></li>
          </ul>
        </nav>

      
        <div className="bg-gray-900 text-white min-h-screen">
      <HomeSection />
      <AboutSection />
    </div>
        <section id="flutter-apps" className="min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 py-2 mt-2">
            
            <div className="relative">
              <div className="flex items-center justify-center">
                <button onClick={() => setCurrentApp((prev) => (prev - 1 + flutterApps.length) % flutterApps.length)} className="mr-4">
                  <ChevronLeft size={40} />
                </button>
                <motion.div 
                  key={currentApp}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center bg-slate-800 bg-opacity-80 backdrop-blur-md rounded-lg p-8"
                >
                  <div className="flex gap-4 mb-8">
                    {flutterApps[currentApp].images.map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        alt={`${flutterApps[currentApp].name} screenshot ${index + 1}`}
                        width={200}
                        height={400}
                        className="rounded-lg shadow-lg"
                      />
                    ))}
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-4">{flutterApps[currentApp].name}</h3>
                    <p className="mb-4">{flutterApps[currentApp].description}</p>
                    <div className="flex justify-center space-x-4 mb-4">
                      <a href={flutterApps[currentApp].appStoreLink} target="_blank" rel="noopener noreferrer" className="flex items-center bg-teal-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-teal-600 transition-colors">
                        <Apple className="mr-2" /> App Store
                      </a>
                      <a href={flutterApps[currentApp].playStoreLink} target="_blank" rel="noopener noreferrer" className="flex items-center bg-teal-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-teal-600 transition-colors">
                        <Smartphone className="mr-2" /> Play Store
                      </a>
                    </div>
                  </div>
                </motion.div>
                <button onClick={() => setCurrentApp((prev) => (prev + 1) % flutterApps.length)} className="ml-4">
                  <ChevronRight size={40} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="websites" className="min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Website Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {websites.map((site, index) => (
                <motion.div 
                  key={site.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800 bg-opacity-80 backdrop-blur-md rounded-lg p-6"
                >
                  <h3 className="text-2xl font-semibold mb-4">{site.name}</h3>
                  <p className="mb-4">{site.description}</p>
                  <div className="flex space-x-4">
                    <a href={site.url} target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-teal-100 transition-colors">Visit Website</a>
                    <button
                      onClick={() => setPreviewUrl(site.url)}
                      className="text-teal-300 hover:text-teal-100 transition-colors flex items-center"
                    >
                      <Eye className="mr-2" /> Preview
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
            <p className="mb-8 text-xl">I&apos;m always open to new opportunities and collaborations. Feel free to reach out!</p>
            <div className="flex justify-center space-x-8">
              <motion.a 
                href="https://github.com/RaselHossen0" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={40} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/rasel-hossen0/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={40} />
              </motion.a>
              <motion.a 
                href="mailto:hrasel2002@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={40} />
              </motion.a>
            </div>
          </div>
        </section>
      </div>

      {previewUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg w-full max-w-4xl h-3/4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Website Preview</h3>
              <button onClick={() => setPreviewUrl('')} className="text-gray-600 hover:text-gray-800">
                Close
              </button>
            </div>
            <iframe src={previewUrl} className="w-full h-full border-0 rounded" title="Website Preview"></iframe>
          </div>
        </div>
      )}
    </div>
  )
}
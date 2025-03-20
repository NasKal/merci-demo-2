import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram, Facebook, Clock, Phone, MapPin, ExternalLink, Cake, Cookie, Croissant, Bird as Birthday, Coffee, Heart, ChevronDown } from 'lucide-react';
import { CursorTrail } from './components/CursorTrail';
import { FloatingIcons } from './components/FloatingIcons';
import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';



const menuItems = [
  {
    name: 'Χειροποίητες Τούρτες',
    description: 'Φτιαγμένα στο χέρι με αγάπη',
    price: 'από €25',
    icon: Cake,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=500'
  },
  {
    name: 'Φρέσκα Μπισκότα',
    description: 'Ψημένα καθημερινά',
    price: 'από €2',
    icon: Cookie,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=500'
  },
  {
    name: 'Βουτυρένια Κρουασάν',
    description: 'Κλασική γαλλική συνταγή',
    price: 'από €3',
    icon: Croissant,
    image: 'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?auto=format&fit=crop&q=80&w=500'
  },
  {
    name: 'Τούρτες κατά παραγγελία',
    description: 'Φτιαγμένες κατά παραγγελία',
    price: 'από €45',
    icon: Birthday,
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=500'
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="min-h-screen bg-pattern">
      <CursorTrail />
      <FloatingIcons />
      
      {/* Header */}
      <motion.header 
  className="fixed w-full bg-white/80 backdrop-blur-lg shadow-sm z-50"
>
  <div className="container mx-auto px-6">
    <div className="flex items-center justify-between h-20">
      {/* Logo */}
      <motion.div 
        className="flex items-center space-x-3"
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-3xl font-script text-primary-600">Merci</span>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-12">
          {['Η Ιστορία Μας', 'Μενού', 'Γκάλλερι', 'Επικοινωνία'].map((item) => (
            <motion.li 
              key={item}
              className="relative group cursor-pointer"
              whileHover={{ y: -2 }}
            >
              <span className="text-gray-800 font-medium group-hover:text-primary-500 transition-colors">
                {item}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Burger Button for Mobile */}
      <button 
        className="md:hidden text-gray-600 focus:outline-none" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <motion.div 
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute top-20 left-0 w-full bg-white shadow-lg md:hidden overflow-hidden"
    >
      <ul className="flex flex-col space-y-6 p-6 text-lg text-center">
        {['Η Ιστορία Μας', 'Μενού', 'Γκάλλερι', 'Επικοινωνία'].map((item) => (
          <motion.li 
            key={item}
            whileHover={{ scale: 1.1 }}
            className="text-gray-800 hover:text-primary-500 transition-colors cursor-pointer"
            onClick={() => setMenuOpen(false)} // Close menu when clicking a link
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )}
</motion.header>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 parallax"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&q=80&w=2000")',
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-7xl md:text-8xl font-script text-white mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Καλώς Ορίσατε στο Merci
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl text-white/90 mb-8 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Γλυκές Απολαύσεις Κάθε Μέρα!
            </motion.p>
            <motion.p 
              className="text-xl text-white/80 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Βρισκόμαστε στη Βάρδα και δημιουργούμε φρέσκα, χειροποίητα γλυκά, τούρτες και επιδόρπια καθημερινά.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <motion.a 
                href="#explore"
                className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 text-white border-2 border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors"
                whileHover={{ y: -5 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ChevronDown size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Menu Section */}
      <section id="explore" className="py-24 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-5xl md:text-6xl font-script text-center mb-16 text-primary-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Οι Σπεσιαλιτέ μας
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuItems.map((item, index) => (
              <motion.div 
                key={item.name}
                className="menu-card rounded-3xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <item.icon className="absolute bottom-4 right-4 text-white" size={24} />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <p className="text-primary-500 font-bold">{item.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-cream-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Η ιστορία μας"
                className="rounded-3xl shadow-2xl"
              />
              <motion.div
                className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
              >
                <Heart className="text-primary-400 w-12 h-12 mb-2" />
                <p className="text-gray-600">Φτιαγμένα με αγάπη από το 2015</p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pl-12"
            >
              <h2 className="text-5xl font-script text-primary-600 mb-8">Η ιστορία μας</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Βρίσκεται στην καρδιά της Βάρδας, το Merci είναι κάτι περισσότερο από ένα ζαχαροπλαστείο - είναι ένα μέρος όπου τα γλυκά όνειρα γίνονται πραγματικότητα. Κάθε μέρα, οι έμπειροι τεχνίτες μας δημιουργούν απολαυστικά γλυκίσματα που χαρίζουν χαμόγελα στους πελάτες μας.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { label: 'Φρέσκα Καθημερινά', value: '100%' },
                  { label: 'Ευχαρηστιμένοι Πελάτες', value: '1000+' },
                  { label: 'Ειδικές Παραγγελίες', value: '500+' },
                  { label: 'Χρόνια Αγάπης', value: '10+' }
                ].map(({ label, value }) => (
                  <div key={label} className="text-center p-4 rounded-xl bg-white shadow-sm">
                    <p className="text-2xl font-semibold text-primary-500">{value}</p>
                    <p className="text-gray-600">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              className="h-[500px] rounded-3xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2222.1682632221314!2d21.365916929990334!3d38.03262595885914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135e1c318581cec3%3A0xbf0bd7b160f73732!2zzpbOsc-HzrHPgc6_z4DOu86xz4PPhM61zrnOvyBNZXJjaQ!5e0!3m2!1sen!2sgr!4v1742382238611!5m2!1sen!2sgr"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
            <div className="lg:pl-12">
              <motion.h2 
                className="text-5xl font-script text-primary-600 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Επισκεφθείτε το Κατάστημά μας
              </motion.h2>
              <div className="space-y-8">
                {[
                  { Icon: Phone, text: '26230 73528' },
                  { Icon: Clock, text: 'Καθημερινά ανοιχτά: 10 AM - 10 PM' },
                  { Icon: MapPin, text: 'Βάρδα, Νομός Ηλείας' }
                ].map(({ Icon, text }, index) => (
                  <motion.div 
                    key={text}
                    className="flex items-center space-x-6 p-6 bg-cream-50 rounded-2xl shadow-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-4 bg-primary-100 rounded-full">
                      <Icon className="text-primary-500" size={24} />
                    </div>
                    <p className="text-xl text-gray-700">{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-50 pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <motion.div 
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Heart className="text-primary-400" size={32} />
                <span className="text-3xl font-script text-primary-600">Merci</span>
              </motion.div>
              <p className="text-gray-600">Γλυκές Απολαύσεις Κάθε Μέρα!</p>
            </div>
            <div>
              <h4 className="font-semibold text-xl mb-6 text-gray-800">Ώρες Λειτουργίας </h4>
              <div className="space-y-2 text-gray-600">
                <p>Δευτέρα - Κυριακή</p>
                <p>10:00 π.μ. - 10:00 μ.μ.</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-xl mb-6 text-gray-800">Ακολουθήστε μας</h4>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-primary-100 rounded-full text-primary-500 hover:bg-primary-200 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 15 }}
                >
                  <Instagram size={24} />
                </motion.a>
                <motion.a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-primary-100 rounded-full text-primary-500 hover:bg-primary-200 transition-colors"
                  whileHover={{ scale: 1.1, rotate: -15 }}
                >
                  <Facebook size={24} />
                </motion.a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-100 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Merci. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <motion.button
        className={`fixed bottom-8 right-8 p-4 bg-primary-500 text-white rounded-full shadow-lg ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } transition-opacity`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Wifi, 
  Coffee, 
  MapPin, 
  ShieldCheck, 
  Users, 
  Calendar, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Flower 
} from 'lucide-react';
import logoImg from './images/homeslogowithoutbackgroundcropped.png';
import familyImg from './images/family.png';
import balconyImg from './images/balconylight.png';
import terraceImg from './images/terracelight.png';
import kitchenImg from './images/kitchen.jpg';
import mastersuiteImg from './images/mastersuitelight.png';

/* --- AWADHI & CORPORATE THEME CONFIGURATION ---
  Green (Leaf/Nature): #15803d (Tailwind green-700) -> 40% usage
  Yellow (Sober/Awadhi): #fcd34d (Tailwind amber-300/yellow-300 mix) -> 30% usage
  White/Cream: #fafaf9 (Tailwind stone-50) -> 20% usage
  Accents: Dark slate for text.
*/

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeScenario, setActiveScenario] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scenarios = [
    {
      title: "The 'Soft Landing' Relocation",
      icon: <MapPin className="w-8 h-8 text-green-800" />,
      desc: "For executives relocating to Lucknow, a hotel feels transient. Our homestay offers a fully furnished 'home' base for 30-90 days, allowing them to settle in, cook their own meals, and transition smoothly while hunting for permanent housing.",
      benefit: "Reduces relocation stress and improves employee retention."
    },
    {
      title: "The Project 'War Room'",
      icon: <Users className="w-8 h-8 text-green-800" />,
      desc: "When your team needs to crunch numbers or finalize a launch, standard office cubicles kill creativity. Our spacious living area serves as a private offsite where teams can collaborate late into the night with homemade food and zero distractions.",
      benefit: "Boosts team camaraderie and productivity sprints."
    },
    {
      title: "VIP Cultural Hospitality",
      icon: <Star className="w-8 h-8 text-green-800" />,
      desc: "Don't put your distinguished guests in a generic glass box. Give them the 'Lucknowi' experience. Our Awadhi-styled interiors and lush greenery impress clients by showing them the true soul of the city, coupled with 5-star comfort.",
      benefit: "Creates a memorable brand impression for your guests."
    }
  ];

  return (
    <div className="font-sans text-slate-800 bg-stone-50 overflow-x-hidden selection:bg-yellow-300">
      
      {/* --- NAVIGATION --- */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Logo Increased by ~80% (w-10 to w-16, text-xl to text-3xl) */}
            {/* <div className="w-16 h-16 bg-green-700 rounded-tr-2xl rounded-bl-2xl flex items-center justify-center shadow-md transform hover:scale-105 transition-transform duration-300">
              <span className="text-yellow-300 font-bold text-3xl">P</span>
            </div> */}
            <img src={logoImg} alt="Posh Gomti Nagar Logo" className="w-20 h-20 md:w-28 md:h-28 object-contain drop-shadow-glow" />
            <span className={`text-xl md:text-2xl font-bold tracking-tight leading-tight max-w-[150px] md:max-w-none ${isScrolled ? 'text-green-900' : 'text-white drop-shadow-md'}`}>
              Posh Gomti Nagar Luxury Homestay
            </span>
          </div>

          {/* Desktop Nav - Removed "View Listing" button */}
          <div className="hidden md:flex items-center space-x-8">
            {['For Corporates', 'The Experience',  'Amenities', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className={`text-sm font-semibold uppercase tracking-wider hover:text-yellow-400 transition-colors ${isScrolled ? 'text-slate-600' : 'text-white'}`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-yellow-400 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-green-800 shadow-xl py-6 flex flex-col items-center space-y-6 md:hidden border-t border-green-700">
            {['The Experience', 'For Corporates', 'Amenities', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-white font-medium text-lg"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* --- HERO SECTION (Green Theme - 40%) --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-green-800 overflow-hidden rounded-br-[3rem] md:rounded-br-[5rem] pt-28 pb-16">
        {/* Abstract "Jaali" Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ 
          backgroundImage: 'radial-gradient(circle, #fcd34d 2px, transparent 2.5px)', 
          backgroundSize: '30px 30px' 
        }}></div>
        
        {/* Decorative Leaf Shapes - Pushed further back and adjusted to not overlap content */}
        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-green-700 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-green-900 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 md:pr-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/50 rounded-full border border-yellow-400/30 backdrop-blur-sm shadow-sm">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-xs md:text-sm font-medium text-yellow-100">Premium Corporate Accommodation</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold leading-tight">
              Where <span className="text-yellow-400 italic">Awadhi</span> Hospitality Meets Business Class.
            </h1>
            
            <p className="text-base md:text-xl text-green-100 max-w-lg leading-relaxed">
              Experience the tranquility of nature and the warmth of Lucknow in Gomti Nagar. The perfect alternative to sterile hotels for your executives.
            </p>
            
            {/* Buttons - Adjusted size and padding */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 pb-4">
              <button 
                onClick={() => scrollToSection('contact')} 
                className="px-6 py-3 md:px-8 md:py-3.5 bg-yellow-400 text-green-900 text-sm md:text-base font-bold rounded-lg shadow-xl hover:bg-yellow-300 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Partner With Us <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => scrollToSection('the-experience')} 
                className="px-6 py-3 md:px-8 md:py-3.5 bg-transparent border-2 border-white text-white text-sm md:text-base font-bold rounded-lg hover:bg-white/10 hover:border-yellow-200 transition-all"
              >
                Explore The Stay
              </button>
            </div>
          </div>
          
          {/* Hero Image / Composition */}
          <div className="relative mt-8 md:mt-0">
            <div className="relative z-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-400/20 transform rotate-1 hover:rotate-0 transition-transform duration-500">
               {/* Placeholder for Main Living Room Image */}
               <div className="bg-stone-200 h-64 md:h-96 w-full flex items-center justify-center relative group">
                  <div className="absolute inset-0 bg-green-900/10 group-hover:bg-green-900/0 transition-all"></div>
                  {/* Image Placeholder logic preserved */}
                  <img src={familyImg} alt="Green and Yellow Living Room" className="object-cover w-full h-full opacity-40" onError={(e) => {e.target.style.opacity=0; e.target.parentElement.classList.add('bg-stone-200');}} />
                  <div className="text-center p-8 absolute inset-0 flex flex-col items-center justify-center">
                      <Flower size={48} className="text-green-700 mx-auto mb-4 opacity-50" />
                      <p className="text-green-800 font-serif text-lg md:text-xl px-4">Visual: Bright living space with indoor plants</p>
                  </div>
               </div>
            </div>
            {/* Decor element - Moved slightly so it doesn't overlap text on small screens */}
            <div className="absolute -bottom-6 -left-4 md:-bottom-10 md:-left-10 w-28 h-28 md:w-40 md:h-40 bg-yellow-400 rounded-full z-0 flex items-center justify-center shadow-lg transform rotate-12">
                <div className="text-center transform -rotate-12">
                    <span className="block text-2xl md:text-3xl font-bold text-green-900">100%</span>
                    <span className="text-[10px] md:text-xs font-bold text-green-800 uppercase leading-tight">Green<br/>Vibes</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATISTICS / TRUST BADGES (White Theme - 20%) --- */}
      <section className="py-12 bg-white border-b border-stone-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "High Speed WiFi", value: "40 Mbps" },
              { label: "Power Backup", value: "24/7" },
              { label: "Location", value: "Gomti Nagar" },
              { label: "Privacy", value: "100% Guaranteed" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-2">
                <p className="text-2xl md:text-3xl font-bold text-green-700">{stat.value}</p>
                <p className="text-xs md:text-sm text-stone-500 font-medium uppercase tracking-wide mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SCENARIOS SECTION (Yellow Theme - 30%) --- */}
      <section id="for-corporates" className="py-20 md:py-24 bg-amber-50 relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-stone-50 to-amber-50"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-green-800 font-bold tracking-wider uppercase text-xs md:text-sm mb-3">Why Choose Us?</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6">More Than Just A Room. <br/>A Corporate Strategy.</h3>
            <p className="text-slate-600 text-base md:text-lg px-4">
              We understand that business travel has evolved. Here is how leading corporates are utilizing our space.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {scenarios.map((item, index) => (
              <div 
                key={index}
                className={`p-6 md:p-8 rounded-2xl transition-all duration-300 cursor-pointer border-2 ${activeScenario === index ? 'bg-white border-yellow-400 shadow-xl scale-[1.02]' : 'bg-white/50 border-transparent hover:bg-white hover:shadow-lg'}`}
                onMouseEnter={() => setActiveScenario(index)}
                onClick={() => setActiveScenario(index)} // For mobile tap
              >
                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">{item.title}</h4>
                <p className="text-slate-600 mb-6 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
                <div className="pt-6 border-t border-slate-100">
                  <p className="text-xs md:text-sm font-bold text-green-700 flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 shrink-0" /> 
                    <span>{item.benefit}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE EXPERIENCE / VISUALS (Green Theme - 40%) --- */}
      <section id="the-experience" className="py-20 md:py-24 bg-green-900 text-white relative overflow-hidden">
        {/* Decorative Circles - Fixed positioning for mobile to prevent overflow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] border border-green-800 rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] border border-green-800 rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-8 md:mb-16">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-yellow-400 font-bold tracking-wider uppercase text-xs md:text-sm mb-3">The Atmosphere</h2>
              <h3 className="text-3xl md:text-5xl font-serif mb-6">Designed for Peace & Productivity</h3>
              <p className="text-green-100 text-base md:text-lg leading-relaxed">
                Our interior philosophy is simple: <strong>Biophilic Design</strong>. We bring the outdoors in. 
                With 40% of our visual theme dedicated to live plants and natural greens, we create an oxygen-rich environment 
                that reduces stress and enhances cognitive function for your executives.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-3 md:gap-4 w-full">
              <div className="space-y-3 md:space-y-4 md:mt-8">
                <div className="h-32 md:h-48 bg-green-800 rounded-2xl overflow-hidden relative group">
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                   <img src={balconyImg} alt="Balcony with Plants" className="object-cover w-full h-full opacity-100" onError={(e) => {e.target.style.opacity=0; e.target.parentElement.classList.add('bg-green-800');}} />
                   <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 font-bold text-sm md:text-base">Lush Balconies</div>
                </div>
                <div className="h-40 md:h-64 bg-yellow-500 rounded-2xl overflow-hidden relative group">
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                <img src={terraceImg} alt="Sunlit Workspace" className="object-cover w-full h-full opacity-100" onError={(e) => {e.target.style.opacity=0; e.target.parentElement.classList.add('bg-yellow-800');}} />
                   <div className="absolute top-3 left-3 md:top-4 md:left-4 font-bold text-slate-900 text-sm md:text-base">Sunlit Workspace</div>
                </div>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="h-40 md:h-64 bg-stone-200 rounded-2xl overflow-hidden relative group">
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                   <img src={kitchenImg} alt="Modern Kitchen" className="object-cover w-full h-full opacity-100" onError={(e) => {e.target.style.opacity=0; e.target.parentElement.classList.add('bg-stone-800');}} />
                   <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 font-bold text-sm md:text-base">Modern Kitchen</div>
                </div>
                <div className="h-32 md:h-48 bg-green-700 rounded-2xl overflow-hidden relative group">
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                <img src={mastersuiteImg} alt="Master Suite" className="object-cover w-full h-full opacity-100" onError={(e) => {e.target.style.opacity=0; e.target.parentElement.classList.add('bg-green-800');}} />
                   <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 font-bold text-sm md:text-base">Master Suite</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- AMENITIES (Yellow/White Mix) --- */}
      <section id="amenities" className="py-16 md:py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-3xl font-serif text-slate-900">Executive Amenities</h3>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: <Wifi />, title: "High-Speed Wi-Fi", desc: "Video-call ready" },
              { icon: <Briefcase />, title: "Dedicated Workspace", desc: "Ergonomic seating" },
              { icon: <Coffee />, title: "Fully Stocked Kitchen", desc: "Cook healthy meals" },
              { icon: <ShieldCheck />, title: "Secure Parking", desc: "Gated premises" },
              { icon: <Calendar />, title: "Flexible Check-in", desc: "For late arrivals" },
              { icon: <Users />, title: "Meeting Space", desc: "Living room for 6+" },
              { icon: <Briefcase />, title: "Daily Housekeeping", desc: "Available on request" },
              { icon: <MapPin />, title: "Prime Location", desc: "Heart of Gomti Nagar" },
            ].map((amenity, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-all group hover:border-green-200">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-50 text-green-700 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:bg-green-700 group-hover:text-white transition-colors">
                  {amenity.icon}
                </div>
                <h4 className="font-bold text-slate-800 mb-1 text-sm md:text-base">{amenity.title}</h4>
                <p className="text-xs md:text-sm text-slate-500">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA / CONTACT (Green/Yellow Split) --- */}
      <section id="contact" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="bg-green-800 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#fcd34d 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            <h2 className="text-3xl md:text-5xl font-serif mb-6 relative z-10">Ready to Upgrade Your Corporate Travel?</h2>
            <p className="text-lg md:text-xl text-green-100 mb-10 max-w-2xl mx-auto relative z-10">
              Schedule a visit or request a corporate rate card. We offer special packages for monthly stays and recurring bookings.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 relative z-10">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-white text-green-900 px-8 py-4 rounded-lg font-bold hover:bg-stone-100 transition-colors flex items-center justify-center gap-2 shadow-lg w-full md:w-auto"
              >
                <Mail size={20} /> Request Rate Card
              </button>
              <a 
                href="https://tinyurl.com/sunshinecove-contact" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-yellow-400 text-green-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2 shadow-lg w-full md:w-auto"
              >
                <Phone size={20} /> Chat on WhatsApp
              </a>
            </div>
            
            <div className="mt-12 pt-8 border-t border-green-700/50 text-green-200 text-sm">
              <p>Posh Gomti Nagar Homestay • Lucknow, Uttar Pradesh</p>
              {/* <a href="https://www.airbnb.co.in/h/poshgomtinagarhomestay" target="_blank" rel="noreferrer" className="underline hover:text-white mt-2 inline-block">View on Airbnb</a> */}
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT FORM MODAL --- */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-green-800 p-6 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">Request Corporate Rate Card</h3>
              <button onClick={() => setIsContactModalOpen(false)} className="text-green-100 hover:text-white hover:bg-green-700/50 rounded-full p-1 transition-colors">
                <X size={24} />
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="p-6 md:p-8">
              <form action="https://formspree.io/f/xgvgzdlo" method="POST" className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none transition-all" placeholder="John Doe" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-1">Company Name</label>
                    <input type="text" name="company" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none transition-all" placeholder="Acme Corp" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">Company Email</label>
                    <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none transition-all" placeholder="john@acme.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1">Message</label>
                  <textarea name="message" rows="3" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none transition-all resize-none" placeholder="We are looking for accommodation for 3 executives for 1 month..."></textarea>
                </div>

                <button type="submit" className="w-full bg-green-700 text-white font-bold py-4 rounded-lg hover:bg-green-800 transition-colors shadow-lg mt-2">
                  Send Message
                </button>
                <p className="text-xs text-slate-400 text-center mt-3">We typically respond within 2 hours.</p>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* --- FOOTER --- */}
      <footer className="bg-stone-50 py-8 text-center text-stone-400 text-sm border-t border-stone-200">
        <p>&copy; {new Date().getFullYear()} Posh Gomti Nagar Homestay. All rights reserved.</p>
        <p className="mt-2 px-4">Designed with Awadhi elegance for the modern professional.</p>
      </footer>

    </div>
  );
};

export default App;
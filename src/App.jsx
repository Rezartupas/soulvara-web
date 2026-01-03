import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, ChevronRight, CheckCircle, 
  Star, Users, BookOpen, Calendar, Clock, 
  MessageCircle, ArrowRight, Play, Award, 
  Linkedin, Instagram, Facebook, ShieldCheck,
  LayoutDashboard, FileText, Settings, LogOut, 
  Plus, Search, Edit, Trash2, DollarSign, BarChart3,
  Lock, Mail
} from 'lucide-react';

// --- DATA MOCKUPS BASED ON PDF ---

const PROGRAMS = {
  career: [
    {
      id: 'growth-accelerator',
      title: 'Soulvara Growth Accelerator',
      description: 'The flagship comprehensive bootcamp for aspiring Growth Marketers. Master the full stack of acquisition, retention, and monetization.',
      duration: '12 Weeks',
      level: 'Intermediate',
      format: 'Live + Mentorship',
      price: 'Rp 12.000.000',
      installment: 'Cicilan mulai Rp 1jt/bln',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
      tags: ['Flagship', 'Job Connector'],
      status: 'Active',
      students: 42,
      nextBatch: '2025-02-15'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Mastery',
      description: 'Become a full-stack digital marketer. Covers SEO, SEM, Social Media Strategy, and Analytics in a rigorous 16-week program.',
      duration: '16 Weeks',
      level: 'Beginner to Pro',
      format: 'Hybrid',
      price: 'Rp 15.000.000',
      installment: 'Cicilan mulai Rp 1.2jt/bln',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      tags: ['Hiring Partner Guarantee'],
      status: 'Active',
      students: 35,
      nextBatch: '2025-03-01'
    }
  ],
  skills: [
    {
      id: 'reels-masterclass',
      title: 'Instagram Reels Masterclass',
      description: 'Crack the viral algorithm. Learn shooting, editing, and hook psychology in this intensive weekend sprint.',
      duration: '2 Days',
      level: 'All Levels',
      format: 'Self-Paced',
      price: 'Rp 499.000',
      installment: null,
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
      tags: ['Best Seller'],
      status: 'Active',
      students: 128,
      nextBatch: 'Always Open'
    },
    {
      id: 'copywriting',
      title: 'Copywriting for Conversion',
      description: 'Write words that sell. A deep dive into sales psychology, landing page copy, and email marketing scripts.',
      duration: '4 Weeks',
      level: 'Beginner',
      format: 'Online Live',
      price: 'Rp 1.500.000',
      installment: null,
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800',
      tags: ['Skill Sprint'],
      status: 'Draft',
      students: 0,
      nextBatch: 'TBA'
    }
  ]
};

const SYLLABUS = [
  {
    week: 'Phase 1: Foundations',
    title: 'The Growth Mindset & Data Architecture',
    topics: [
      'Understanding the AARRR Funnel',
      'Setting up GA4 and Google Tag Manager',
      'Customer Persona Construction',
      'Competitor Analysis Frameworks'
    ]
  },
  {
    week: 'Phase 2: Acquisition',
    title: 'Organic & Paid Traffic Mastery',
    topics: [
      'Facebook Ads Manager Deep Dive',
      'SEO Technical Audits',
      'Viral Content Engineering',
      'Influencer Marketing Workflows'
    ]
  },
  {
    week: 'Phase 3: Retention',
    title: 'CRM & Lifecycle Marketing',
    topics: [
      'Email Automation Sequences',
      'WhatsApp Marketing Strategies',
      'Churn Reduction Tactics',
      'Community Building 101'
    ]
  },
  {
    week: 'Phase 4: Capstone',
    title: 'Real Client Project',
    topics: [
      'Live Brief from Hiring Partner',
      'Strategy Pitch Deck Creation',
      'Campaign Execution',
      'Final Presentation Day'
    ]
  }
];

const TESTIMONIALS = [
  {
    name: 'Sarah A.',
    role: 'Growth Lead at GoTo',
    prevRole: 'Fresh Graduate',
    content: "Soulvara didn't just teach me theory. The 'Real Client' project gave me the portfolio I needed to land my dream job. Best investment I ever made.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100'
  },
  {
    name: 'Budi S.',
    role: 'Agency Founder',
    prevRole: 'Freelancer',
    content: "The transition from 'creator' to 'strategist' is exactly what I learned here. My agency revenue doubled within 3 months of the Masterclass.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
  }
];

// --- COMPONENTS ---

// 1. Navigation (Mega Menu Simulated)
const Navbar = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0A192F] text-white border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-[#4F46E5] rounded-lg flex items-center justify-center mr-3">
              <span className="text-2xl font-bold">S</span>
            </div>
            <span className="font-bold text-2xl tracking-tight font-sans">SOULVARA</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {/* Programs Dropdown */}
            <div className="relative group">
              <button className="flex items-center hover:text-[#00B4D8] transition-colors font-medium">
                Programs <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {/* Mega Menu Dropdown */}
              <div className="absolute left-0 mt-2 w-[600px] bg-white text-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 grid grid-cols-2 overflow-hidden border border-gray-100">
                <div className="p-6 bg-gray-50">
                  <h4 className="font-bold text-[#0A192F] mb-4 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-[#4F46E5]" /> Career Bootcamps
                  </h4>
                  <ul className="space-y-3">
                    <li className="hover:text-[#4F46E5] cursor-pointer" onClick={() => onNavigate('detail')}>Soulvara Growth Accelerator</li>
                    <li className="hover:text-[#4F46E5] cursor-pointer">Digital Marketing Mastery</li>
                    <li className="hover:text-[#4F46E5] cursor-pointer">Data Science for Marketers</li>
                  </ul>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-[#0A192F] mb-4 flex items-center">
                    <Play className="w-4 h-4 mr-2 text-[#00B4D8]" /> Skill Sprints
                  </h4>
                  <ul className="space-y-3">
                    <li className="hover:text-[#4F46E5] cursor-pointer">Instagram Reels Masterclass</li>
                    <li className="hover:text-[#4F46E5] cursor-pointer">Copywriting for Conversion</li>
                    <li className="hover:text-[#4F46E5] cursor-pointer">LinkedIn Personal Branding</li>
                  </ul>
                </div>
              </div>
            </div>

            <a href="#" className="hover:text-[#00B4D8] transition-colors font-medium">Admissions</a>
            <a href="#" className="hover:text-[#00B4D8] transition-colors font-medium">Student Stories</a>
            
            <button 
              onClick={() => onNavigate('login')}
              className="text-gray-300 hover:text-white font-medium flex items-center"
            >
              Member Area
            </button>
            
            <button className="bg-[#4F46E5] hover:bg-[#4338ca] text-white px-6 py-2.5 rounded-md font-bold transition-all shadow-md transform hover:-translate-y-0.5">
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0A192F] border-t border-gray-800 pb-6">
          <div className="px-4 pt-4 space-y-4">
            <button 
              onClick={() => toggleDropdown('programs')}
              className="w-full flex justify-between items-center text-left text-lg font-medium py-2 border-b border-gray-700"
            >
              Programs <ChevronDown className="w-5 h-5" />
            </button>
            {activeDropdown === 'programs' && (
              <div className="pl-4 space-y-3 text-gray-300">
                <div className="text-xs uppercase tracking-wider text-[#00B4D8] mt-2">Career Tracks</div>
                <div className="block py-1" onClick={() => {onNavigate('detail'); setIsMenuOpen(false);}}>Growth Accelerator</div>
                <div className="block py-1">Digital Marketing Mastery</div>
                <div className="text-xs uppercase tracking-wider text-[#00B4D8] mt-2">Skill Sprints</div>
                <div className="block py-1">Instagram Reels</div>
                <div className="block py-1">Copywriting</div>
              </div>
            )}
            <a href="#" className="block text-lg font-medium py-2 border-b border-gray-700">Admissions</a>
            <a href="#" className="block text-lg font-medium py-2 border-b border-gray-700">Student Stories</a>
            <button 
              onClick={() => {onNavigate('login'); setIsMenuOpen(false);}}
              className="block w-full text-left text-lg font-medium py-2 border-b border-gray-700 text-[#00B4D8]"
            >
              Member Login
            </button>
            <button className="w-full bg-[#4F46E5] mt-4 py-3 rounded-md font-bold text-white">
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// 2. Hero Section
const Hero = ({ onNavigate }) => (
  <div className="relative bg-[#0A192F] text-white overflow-hidden">
    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
      <div className="md:w-2/3">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#1e293b] border border-[#00B4D8]/30 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00B4D8] mr-2 animate-pulse"></span>
          <span className="text-sm font-medium text-[#00B4D8] tracking-wide uppercase">New Cohort Starts Feb 15</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight font-sans mb-6">
          Forge Your Future in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] to-[#4F46E5]">Digital Growth</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light">
          Indonesia's premier digital academy. We don't just teach skills; we build careers through rigorous mentorship, real-world projects, and a hiring network that works.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => onNavigate('detail')}
            className="bg-[#4F46E5] hover:bg-[#4338ca] text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-lg hover:shadow-[#4F46E5]/50 flex items-center justify-center"
          >
            Explore Programs <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <button className="bg-transparent border-2 border-gray-600 hover:border-white text-white px-8 py-4 rounded-md font-bold text-lg transition-all flex items-center justify-center">
            <Play className="mr-2 w-5 h-5" /> Student Stories
          </button>
        </div>
        
        <div className="mt-12 flex items-center gap-6 text-gray-400 text-sm">
          <span>Trusted by alumni at:</span>
          <div className="flex gap-4 opacity-70 grayscale">
             {/* Simple Text Logos for Demo */}
             <span className="font-bold text-lg">Gojek</span>
             <span className="font-bold text-lg">Tokopedia</span>
             <span className="font-bold text-lg">Traveloka</span>
             <span className="font-bold text-lg">Shopee</span>
          </div>
        </div>
      </div>
    </div>
    
    {/* Decorative Elements */}
    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#4F46E5] rounded-full blur-[128px] opacity-20"></div>
  </div>
);

// 3. Program Card Component
const ProgramCard = ({ program, onNavigate }) => (
  <div 
    onClick={() => program.tags.includes('Flagship') ? onNavigate('detail') : null}
    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 cursor-pointer group flex flex-col h-full"
  >
    <div className="relative h-48 overflow-hidden">
      <img 
        src={program.image} 
        alt={program.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute top-4 left-4 flex gap-2">
        {program.tags.map(tag => (
          <span key={tag} className="bg-[#0A192F] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <div className="flex justify-between items-start mb-2">
        <span className="text-[#4F46E5] text-xs font-bold uppercase tracking-wider">{program.level}</span>
        <span className="text-gray-500 text-xs flex items-center"><Clock className="w-3 h-3 mr-1" /> {program.duration}</span>
      </div>
      <h3 className="text-xl font-bold text-[#0A192F] mb-3 leading-snug group-hover:text-[#4F46E5] transition-colors">
        {program.title}
      </h3>
      <p className="text-gray-600 text-sm mb-6 flex-grow">
        {program.description}
      </p>
      
      <div className="border-t border-gray-100 pt-4 mt-auto">
        <div className="flex justify-between items-end mb-4">
          <div>
            <div className="text-xs text-gray-500 mb-1">Tuition</div>
            <div className="font-bold text-lg text-[#0A192F]">{program.price}</div>
            {program.installment && (
              <div className="text-xs text-[#00B4D8] font-medium mt-1">{program.installment}</div>
            )}
          </div>
        </div>
        <button className="w-full py-3 rounded-lg border-2 border-[#4F46E5] text-[#4F46E5] font-bold hover:bg-[#4F46E5] hover:text-white transition-all">
          View Syllabus
        </button>
      </div>
    </div>
  </div>
);

// 4. Programs Grid
const ProgramsSection = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('career');

  return (
    <div className="py-20 bg-[#F8F9FA]" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-4">Choose Your Growth Path</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you need a complete career pivot or a quick skill upgrade, we have structured learning paths designed for the Indonesian digital economy.
          </p>
          
          <div className="mt-8 inline-flex bg-white p-1 rounded-full border border-gray-200 shadow-sm">
            <button 
              onClick={() => setActiveTab('career')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === 'career' 
                ? 'bg-[#0A192F] text-white shadow-md' 
                : 'text-gray-500 hover:text-[#0A192F]'
              }`}
            >
              Career Bootcamps
            </button>
            <button 
              onClick={() => setActiveTab('skills')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === 'skills' 
                ? 'bg-[#0A192F] text-white shadow-md' 
                : 'text-gray-500 hover:text-[#0A192F]'
              }`}
            >
              Skill Sprints
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'career' ? (
            PROGRAMS.career.map(p => <ProgramCard key={p.id} program={p} onNavigate={onNavigate} />)
          ) : (
            PROGRAMS.skills.map(p => <ProgramCard key={p.id} program={p} onNavigate={onNavigate} />)
          )}
        </div>
      </div>
    </div>
  );
};

// 5. Features / "Why Us"
const FeaturesSection = () => (
  <div className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-[#4F46E5] font-bold uppercase tracking-wider mb-2">The Soulvara Method</div>
          <h2 className="text-4xl font-bold text-[#0A192F] mb-6">More Than Just Videos.<br/>An Ecosystem of Growth.</h2>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-blue-50 rounded-lg mr-4">
                <Users className="w-6 h-6 text-[#4F46E5]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#0A192F] mb-2">Live Mentorship</h4>
                <p className="text-gray-600">Weekly live sessions with industry practitioners from top unicorns. Get your questions answered in real-time.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-blue-50 rounded-lg mr-4">
                <ShieldCheck className="w-6 h-6 text-[#4F46E5]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#0A192F] mb-2">Portfolio-Based Learning</h4>
                <p className="text-gray-600">No multiple choice tests. You graduate by building a real marketing strategy for a real hiring partner.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-blue-50 rounded-lg mr-4">
                <Linkedin className="w-6 h-6 text-[#4F46E5]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#0A192F] mb-2">Career Connector</h4>
                <p className="text-gray-600">Our hiring partners get first access to our graduates. We help with CV optimization and interview prep.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-[#00B4D8] rounded-2xl transform rotate-3 opacity-20"></div>
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" 
            alt="Mentorship Session" 
            className="relative rounded-2xl shadow-2xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl max-w-xs">
            <div className="flex items-center gap-4 mb-3">
              <div className="text-4xl font-bold text-[#4F46E5]">92%</div>
            </div>
            <p className="text-sm text-gray-600 font-medium">Hiring rate within 3 months of graduation for Career Track students.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// 6. Testimonials
const Testimonials = () => (
  <div className="py-20 bg-[#0A192F] text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-16">Success Stories</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="bg-[#112240] p-8 rounded-xl border border-gray-700 relative">
             <div className="absolute -top-4 left-8 text-[#4F46E5] bg-[#0A192F] p-2 border border-gray-700 rounded-full">
               <Star className="w-6 h-6 fill-current" />
             </div>
             <p className="text-gray-300 italic mb-6 text-lg">"{t.content}"</p>
             <div className="flex items-center">
               <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
               <div>
                 <div className="font-bold text-white">{t.name}</div>
                 <div className="text-sm text-[#00B4D8]">{t.role}</div>
                 <div className="text-xs text-gray-500">Formerly: {t.prevRole}</div>
               </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// 7. Footer
const Footer = () => (
  <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-[#4F46E5] rounded-lg flex items-center justify-center mr-2">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl text-[#0A192F]">SOULVARA</span>
          </div>
          <p className="text-gray-500 text-sm mb-6">
            Building the next generation of Indonesian digital leaders through rigorous, outcome-based education.
          </p>
          <div className="flex space-x-4">
            <Instagram className="w-5 h-5 text-gray-400 hover:text-[#4F46E5] cursor-pointer" />
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#4F46E5] cursor-pointer" />
            <Facebook className="w-5 h-5 text-gray-400 hover:text-[#4F46E5] cursor-pointer" />
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-[#0A192F] mb-4">Programs</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-[#4F46E5]">Growth Accelerator</a></li>
            <li><a href="#" className="hover:text-[#4F46E5]">Digital Marketing</a></li>
            <li><a href="#" className="hover:text-[#4F46E5]">Skill Sprints</a></li>
            <li><a href="#" className="hover:text-[#4F46E5]">Corporate Training</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-[#0A192F] mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-[#4F46E5]">About Us</a></li>
            <li><a href="#" className="hover:text-[#4F46E5]">Careers</a></li>
            <li><a href="#" className="hover:text-[#4F46E5]">Become a Mentor</a></li>
            <li><a href="#" className="hover:text-[#4F46E5]">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-[#0A192F] mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Jakarta, Indonesia</li>
            <li>hello@soulvara.id</li>
            <li>+62 812 3456 7890</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <div>&copy; 2025 Soulvara Education. All rights reserved.</div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

// 8. Program Detail Page
const ProgramDetailPage = ({ onBack }) => {
  const [openModule, setOpenModule] = useState(0);

  return (
    <div className="bg-white min-h-screen">
      {/* Detail Hero */}
      <div className="bg-[#0A192F] text-white pt-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={onBack} className="text-gray-400 hover:text-white flex items-center mb-8 text-sm font-bold uppercase tracking-wide">
            <ArrowRight className="w-4 h-4 rotate-180 mr-2" /> Back to Programs
          </button>
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3">
              <div className="flex gap-3 mb-6">
                <span className="bg-[#4F46E5] px-3 py-1 rounded text-xs font-bold">CAREER TRACK</span>
                <span className="bg-[#00B4D8]/20 text-[#00B4D8] px-3 py-1 rounded text-xs font-bold">NEXT BATCH: FEB 15</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Soulvara Growth Accelerator</h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                The most comprehensive growth marketing bootcamp in Indonesia. Master the T-shaped skills required to lead growth at top startups. From acquisition to retention.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-10 text-sm font-medium text-gray-300">
                <div className="flex items-center"><Calendar className="w-5 h-5 mr-2 text-[#00B4D8]" /> 12 Weeks</div>
                <div className="flex items-center"><Clock className="w-5 h-5 mr-2 text-[#00B4D8]" /> Live Sessions (Tue & Thu)</div>
                <div className="flex items-center"><Users className="w-5 h-5 mr-2 text-[#00B4D8]" /> Intermediate Level</div>
              </div>

              <div className="flex items-center gap-4">
                 <div className="flex -space-x-3">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0A192F] bg-gray-600"></div>
                   ))}
                 </div>
                 <div className="text-sm">
                   <span className="font-bold text-white">450+ Alumni</span> hired by partners
                 </div>
              </div>
            </div>
            
            {/* Desktop Pricing Card */}
            <div className="hidden md:block md:w-1/3 relative">
               <div className="bg-white text-gray-900 rounded-xl p-8 shadow-2xl absolute top-0 w-full">
                 <div className="text-gray-500 text-sm mb-1">Total Tuition</div>
                 <div className="text-4xl font-bold text-[#0A192F] mb-2">Rp 12.000.000</div>
                 <div className="text-[#00B4D8] text-sm font-bold mb-6">Or Cicilan from Rp 1jt/month</div>
                 
                 <button className="w-full bg-[#4F46E5] hover:bg-[#4338ca] text-white font-bold py-4 rounded-lg shadow-lg mb-4 transition-all">
                   Apply Now
                 </button>
                 <button className="w-full bg-white border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold py-4 rounded-lg flex items-center justify-center transition-all">
                   <MessageCircle className="w-5 h-5 mr-2" /> Consult via WhatsApp
                 </button>
                 
                 <div className="mt-6 text-xs text-gray-500 text-center">
                   <p className="mb-2">Secure payment via</p>
                   <div className="font-bold text-gray-400">MIDTRANS / GOPAY / VISA</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bar - Only visible on small screens */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50 flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <button className="flex-1 bg-white border-2 border-[#25D366] text-[#25D366] font-bold py-3 rounded-lg flex items-center justify-center">
          <MessageCircle className="w-5 h-5" />
        </button>
        <button className="flex-[3] bg-[#4F46E5] text-white font-bold py-3 rounded-lg">
          Apply Now
        </button>
      </div>

      {/* Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-2/3">
            {/* Syllabus Section */}
            <h2 className="text-2xl font-bold text-[#0A192F] mb-8">Curriculum Roadmap</h2>
            <div className="space-y-4">
              {SYLLABUS.map((module, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button 
                    onClick={() => setOpenModule(openModule === index ? -1 : index)}
                    className={`w-full flex justify-between items-center p-6 text-left transition-colors ${openModule === index ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'}`}
                  >
                    <div>
                      <div className="text-xs font-bold text-[#4F46E5] uppercase tracking-wide mb-1">{module.week}</div>
                      <div className="font-bold text-[#0A192F] text-lg">{module.title}</div>
                    </div>
                    {openModule === index ? <ChevronDown className="w-5 h-5 text-gray-400" /> : <ChevronRight className="w-5 h-5 text-gray-400" />}
                  </button>
                  
                  {openModule === index && (
                    <div className="bg-gray-50 px-6 pb-6 border-t border-gray-100">
                      <ul className="space-y-3 mt-4">
                        {module.topics.map((topic, i) => (
                          <li key={i} className="flex items-start text-gray-600 text-sm">
                            <CheckCircle className="w-4 h-4 text-[#00B4D8] mt-0.5 mr-3 flex-shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Hiring Partners */}
            <div className="mt-16">
               <h2 className="text-2xl font-bold text-[#0A192F] mb-6">Our Hiring Partners</h2>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {[1,2,3,4,5,6,7,8].map(i => (
                   <div key={i} className="h-16 bg-gray-100 rounded flex items-center justify-center text-gray-400 font-bold">Partner {i}</div>
                 ))}
               </div>
            </div>
          </div>
          
          <div className="md:w-1/3">
             {/* Sidebar Content (Sticky on Desktop) */}
             <div className="sticky top-24 pt-10 md:pt-64">
                <h3 className="font-bold text-[#0A192F] mb-4">What's Included</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-600 text-sm">
                    <BookOpen className="w-5 h-5 text-[#4F46E5] mr-3" /> 24 Live Sessions
                  </li>
                  <li className="flex items-center text-gray-600 text-sm">
                    <Users className="w-5 h-5 text-[#4F46E5] mr-3" /> Unlimited Mentor Chat
                  </li>
                  <li className="flex items-center text-gray-600 text-sm">
                    <Award className="w-5 h-5 text-[#4F46E5] mr-3" /> Industry Certification
                  </li>
                  <li className="flex items-center text-gray-600 text-sm">
                    <ShieldCheck className="w-5 h-5 text-[#4F46E5] mr-3" /> Job Guarantee*
                  </li>
                </ul>
                
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <div className="flex items-center mb-4">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" className="w-12 h-12 rounded-full mr-3" alt="Advisor" />
                    <div>
                      <div className="font-bold text-[#0A192F]">Talk to Admission</div>
                      <div className="text-xs text-gray-500">Unsure? Let's chat.</div>
                    </div>
                  </div>
                  <button className="w-full bg-white border border-gray-200 text-[#0A192F] font-bold py-2 rounded shadow-sm hover:shadow-md transition-all text-sm">
                    Schedule Free Consultation
                  </button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 9. Login Page
const LoginPage = ({ onLogin, onBack }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hardcoded demo auth
    if (email === 'admin@soulvara.id' && password === 'admin123') {
      onLogin('admin');
    } else {
      alert('Demo credentials: admin@soulvara.id / admin123');
    }
  };

  return (
    <div className="min-h-screen bg-[#0A192F] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-8 pb-0">
          <div 
             onClick={onBack}
             className="inline-flex items-center text-gray-400 hover:text-[#4F46E5] mb-6 cursor-pointer text-sm font-medium"
          >
            <ArrowRight className="w-4 h-4 rotate-180 mr-2" /> Back to Home
          </div>
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-[#4F46E5] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">S</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-[#0A192F] mb-1">Welcome Back</h2>
          <p className="text-center text-gray-500 text-sm">Enter your credentials to access the dashboard</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent outline-none transition-all"
                  placeholder="admin@soulvara.id"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent outline-none transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
            <button 
              type="submit"
              className="w-full bg-[#4F46E5] hover:bg-[#4338ca] text-white font-bold py-3 rounded-lg shadow-md transition-all transform active:scale-95"
            >
              Sign In
            </button>
          </div>
          <div className="mt-6 text-center text-xs text-gray-400">
            For demo purposes use: <br/> <span className="font-mono text-[#00B4D8]">admin@soulvara.id / admin123</span>
          </div>
        </form>
      </div>
    </div>
  );
};

// 10. Admin CMS Dashboard
const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const StatCard = ({ title, value, change, icon: Icon, color }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-lg ${color} bg-opacity-10`}>
          <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
        </div>
        <span className="text-xs font-medium text-green-500 bg-green-50 px-2 py-1 rounded-full">{change}</span>
      </div>
      <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
      <div className="text-2xl font-bold text-[#0A192F]">{value}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0A192F] text-white fixed h-full z-20 hidden md:block">
        <div className="p-6 border-b border-gray-800 flex items-center">
          <div className="w-8 h-8 bg-[#4F46E5] rounded flex items-center justify-center mr-3">
            <span className="font-bold text-lg">S</span>
          </div>
          <span className="font-bold text-lg tracking-wide">CMS Admin</span>
        </div>
        <nav className="p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${activeTab === 'overview' ? 'bg-[#4F46E5]' : 'hover:bg-gray-800 text-gray-400 hover:text-white'}`}
          >
            <LayoutDashboard className="w-5 h-5 mr-3" /> Overview
          </button>
          <button 
            onClick={() => setActiveTab('programs')}
            className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${activeTab === 'programs' ? 'bg-[#4F46E5]' : 'hover:bg-gray-800 text-gray-400 hover:text-white'}`}
          >
            <BookOpen className="w-5 h-5 mr-3" /> Programs
          </button>
          <button className="w-full flex items-center px-4 py-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors">
            <Users className="w-5 h-5 mr-3" /> Students
          </button>
          <button className="w-full flex items-center px-4 py-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors">
            <DollarSign className="w-5 h-5 mr-3" /> Finance
          </button>
          <button className="w-full flex items-center px-4 py-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors">
            <Settings className="w-5 h-5 mr-3" /> Settings
          </button>
        </nav>
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-800">
          <button 
            onClick={onLogout}
            className="w-full flex items-center px-4 py-3 text-red-400 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5 mr-3" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-[#0A192F] capitalize">{activeTab} Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
               <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" alt="Admin" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#0A192F]">Admin User</div>
              <div className="text-xs text-gray-500">Super Admin</div>
            </div>
          </div>
        </header>

        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <StatCard title="Total Students" value="1,248" change="+12%" icon={Users} color="bg-blue-500" />
              <StatCard title="Active Revenue" value="Rp 450M" change="+8.2%" icon={DollarSign} color="bg-green-500" />
              <StatCard title="Active Cohorts" value="12" change="0%" icon={BookOpen} color="bg-purple-500" />
              <StatCard title="Completion Rate" value="94%" change="+2%" icon={Award} color="bg-orange-500" />
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
               <h3 className="font-bold text-[#0A192F] mb-6">Recent Enrollments</h3>
               <div className="overflow-x-auto">
                 <table className="w-full text-left">
                   <thead>
                     <tr className="border-b border-gray-100 text-gray-500 text-sm">
                       <th className="pb-3 pl-2">Student Name</th>
                       <th className="pb-3">Program</th>
                       <th className="pb-3">Date</th>
                       <th className="pb-3">Status</th>
                       <th className="pb-3 text-right pr-2">Action</th>
                     </tr>
                   </thead>
                   <tbody className="text-sm">
                     {[1,2,3,4].map(i => (
                       <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                         <td className="py-4 pl-2 font-medium text-[#0A192F]">Budi Santoso {i}</td>
                         <td className="py-4 text-gray-600">Growth Accelerator</td>
                         <td className="py-4 text-gray-500">Dec 28, 2025</td>
                         <td className="py-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Paid</span></td>
                         <td className="py-4 text-right pr-2"><button className="text-[#4F46E5] hover:underline">View</button></td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'programs' && (
          <div className="space-y-6">
             <div className="flex justify-between items-center">
               <div className="relative">
                 <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                 <input type="text" placeholder="Search programs..." className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] w-64" />
               </div>
               <button className="bg-[#4F46E5] hover:bg-[#4338ca] text-white px-4 py-2 rounded-lg font-bold flex items-center text-sm shadow-sm">
                 <Plus className="w-4 h-4 mr-2" /> Add Program
               </button>
             </div>

             <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
               <table className="w-full text-left">
                   <thead className="bg-gray-50">
                     <tr className="border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wider">
                       <th className="py-4 pl-6">Program Name</th>
                       <th className="py-4">Category</th>
                       <th className="py-4">Students</th>
                       <th className="py-4">Next Batch</th>
                       <th className="py-4">Status</th>
                       <th className="py-4 text-right pr-6">Actions</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-100">
                     {[...PROGRAMS.career, ...PROGRAMS.skills].map((p, i) => (
                       <tr key={i} className="hover:bg-blue-50/50 transition-colors group">
                         <td className="py-4 pl-6">
                           <div className="font-bold text-[#0A192F]">{p.title}</div>
                           <div className="text-xs text-gray-500">{p.duration} • {p.level}</div>
                         </td>
                         <td className="py-4 text-sm text-gray-600">
                           {p.tags.includes('Job Connector') ? 'Career Track' : 'Skill Sprint'}
                         </td>
                         <td className="py-4 text-sm font-medium">{p.students || 0}</td>
                         <td className="py-4 text-sm text-gray-600">{p.nextBatch || '-'}</td>
                         <td className="py-4">
                           <span className={`px-2 py-1 rounded text-xs font-bold ${p.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                             {p.status || 'Active'}
                           </span>
                         </td>
                         <td className="py-4 text-right pr-6">
                           <div className="flex justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                             <button className="p-1 text-gray-400 hover:text-[#4F46E5]"><Edit className="w-4 h-4" /></button>
                             <button className="p-1 text-gray-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                           </div>
                         </td>
                       </tr>
                     ))}
                   </tbody>
               </table>
             </div>
          </div>
        )}
      </main>
    </div>
  );
};

// --- MAIN APP ---

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showWhatsapp, setShowWhatsapp] = useState(false);
  const [auth, setAuth] = useState({ isAuthenticated: false, role: null });

  // Simulate scroll effect for WhatsApp button appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowWhatsapp(true);
      } else {
        setShowWhatsapp(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  const handleLogin = (role) => {
    setAuth({ isAuthenticated: true, role });
    setCurrentPage('admin');
  };

  const handleLogout = () => {
    setAuth({ isAuthenticated: false, role: null });
    setCurrentPage('home');
  };

  if (currentPage === 'login') {
    return <LoginPage onLogin={handleLogin} onBack={() => handleNavigate('home')} />;
  }

  if (currentPage === 'admin' && auth.isAuthenticated) {
    return <AdminDashboard onLogout={handleLogout} />;
  }

  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-[#4F46E5] selection:text-white">
      <Navbar onNavigate={handleNavigate} />
      
      {currentPage === 'home' && (
        <>
          <Hero onNavigate={handleNavigate} />
          <FeaturesSection />
          <ProgramsSection onNavigate={handleNavigate} />
          <Testimonials />
        </>
      )}

      {currentPage === 'detail' && (
        <ProgramDetailPage onBack={() => handleNavigate('home')} />
      )}
      
      <Footer />

      {/* Floating WhatsApp Widget (Chaty Pro Simulation) */}
      <a
        href="https://wa.me/" 
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 transition-all duration-500 transform ${showWhatsapp ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:scale-110`}
      >
        <div className="relative group">
          <div className="absolute -top-12 right-0 bg-white px-4 py-2 rounded-lg shadow-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 mb-2">
            Chat with Admission
          </div>
          <div className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center">
            <MessageCircle className="w-8 h-8" />
          </div>
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        </div>
      </a>
    </div>
  );
};

export default App;
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
      description: 'Bootcamp komprehensif unggulan untuk calon Growth Marketer. Kuasai stack penuh akuisisi, retensi, dan monetisasi.',
      duration: '12 Minggu',
      level: 'Menengah',
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
      description: 'Jadilah digital marketer full-stack. Mencakup SEO, SEM, Strategi Media Sosial, dan Analitik dalam program ketat 16 minggu.',
      duration: '16 Minggu',
      level: 'Pemula hingga Pro',
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
      title: 'Masterclass Instagram Reels',
      description: 'Pecahkan algoritma viral. Pelajari pengambilan gambar, pengeditan, dan psikologi hook dalam sprint akhir pekan yang intensif.',
      duration: '2 Hari',
      level: 'Semua Level',
      format: 'Mandiri',
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
      title: 'Copywriting untuk Konversi',
      description: 'Tulis kata-kata yang menjual. Penyelaman mendalam ke psikologi penjualan, copy landing page, dan skrip pemasaran email.',
      duration: '4 Minggu',
      level: 'Pemula',
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
    week: 'Fase 1: Fondasi',
    title: 'Growth Mindset & Arsitektur Data',
    topics: [
      'Memahami Funnel AARRR',
      'Menyiapkan GA4 dan Google Tag Manager',
      'Konstruksi Persona Pelanggan',
      'Kerangka Analisis Kompetitor'
    ]
  },
  {
    week: 'Fase 2: Akuisisi',
    title: 'Penguasaan Trafik Organik & Berbayar',
    topics: [
      'Penyelaman Mendalam Facebook Ads Manager',
      'Audit Teknis SEO',
      'Rekayasa Konten Viral',
      'Alur Kerja Pemasaran Influencer'
    ]
  },
  {
    week: 'Fase 3: Retensi',
    title: 'CRM & Pemasaran Siklus Hidup',
    topics: [
      'Urutan Otomatisasi Email',
      'Strategi Pemasaran WhatsApp',
      'Taktik Pengurangan Churn',
      'Membangun Komunitas 101'
    ]
  },
  {
    week: 'Fase 4: Capstone',
    title: 'Proyek Klien Nyata',
    topics: [
      'Brief Langsung dari Mitra Perekrutan',
      'Pembuatan Pitch Deck Strategi',
      'Eksekusi Kampanye',
      'Hari Presentasi Akhir'
    ]
  }
];

const TESTIMONIALS = [
  {
    name: 'Sarah A.',
    role: 'Growth Lead di GoTo',
    prevRole: 'Fresh Graduate',
    content: "Soulvara tidak hanya mengajari saya teori. Proyek 'Klien Nyata' memberi saya portofolio yang saya butuhkan untuk mendapatkan pekerjaan impian saya. Investasi terbaik yang pernah saya buat.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100'
  },
  {
    name: 'Budi S.',
    role: 'Pendiri Agensi',
    prevRole: 'Freelancer',
    content: "Transisi dari 'kreator' ke 'ahli strategi' adalah apa yang saya pelajari di sini. Pendapatan agensi saya berlipat ganda dalam 3 bulan setelah Masterclass.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
  }
];

// --- UTILS ---

const FadeInSection = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    });
    const current = domRef.current;
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const ScaleOnHover = ({ children }) => (
  <div className="transform transition-transform duration-300 hover:scale-105">
    {children}
  </div>
);

// --- COMPONENTS ---

// 1. Navigation (Mega Menu Simulated)
const Navbar = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg text-gray-800 border-b border-gray-100 shadow-sm transition-all duration-300 supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <img src="/logo.svg" alt="Soulvara Logo" className="h-15 w-auto object-contain" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {/* Programs Dropdown */}
            <div className="relative group">
              <button className="flex items-center hover:text-[#02888f] transition-colors font-medium">
                Program <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {/* Mega Menu Dropdown */}
              <div className="absolute left-0 mt-2 w-[600px] bg-white text-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 grid grid-cols-2 overflow-hidden border border-gray-100">
                <div className="p-6 bg-gray-50">
                  <h4 className="font-bold text-[#02888f] mb-4 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-[#02888f]" /> Bootcamp Karir
                  </h4>
                  <ul className="space-y-3">
                    <li className="hover:text-[#02888f] cursor-pointer" onClick={() => onNavigate('detail')}>Soulvara Growth Accelerator</li>
                    <li className="hover:text-[#02888f] cursor-pointer">Digital Marketing Mastery</li>
                    <li className="hover:text-[#02888f] cursor-pointer">Data Science for Marketers</li>
                  </ul>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-[#02888f] mb-4 flex items-center">
                    <Play className="w-4 h-4 mr-2 text-[#fdcd03]" /> Skill Sprint
                  </h4>
                  <ul className="space-y-3">
                    <li className="hover:text-[#02888f] cursor-pointer">Masterclass Instagram Reels</li>
                    <li className="hover:text-[#02888f] cursor-pointer">Copywriting untuk Konversi</li>
                    <li className="hover:text-[#02888f] cursor-pointer">LinkedIn Personal Branding</li>
                  </ul>
                </div>
              </div>
            </div>

            <a href="#" className="hover:text-[#02888f] transition-colors font-medium">Pendaftaran</a>
            <a href="#" className="hover:text-[#02888f] transition-colors font-medium">Cerita Alumni</a>
            
            <button 
              onClick={() => onNavigate('login')}
              className="text-gray-500 hover:text-[#02888f] font-medium flex items-center"
            >
              Area Member
            </button>
            
            <button className="bg-[#02888f] hover:bg-[#026e74] text-white px-6 py-2.5 rounded-md font-bold transition-all shadow-md transform hover:-translate-y-0.5">
              Daftar Sekarang
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-500 hover:text-[#02888f]">
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-4 space-y-4">
          <button 
            onClick={() => toggleDropdown('programs')}
            className="w-full flex justify-between items-center text-left text-lg font-medium py-2 border-b border-gray-100"
          >
            Program <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'programs' ? 'rotate-180' : ''}`} />
          </button>
          {activeDropdown === 'programs' && (
            <div className="pl-4 space-y-3 text-gray-600">
              <div className="text-xs uppercase tracking-wider text-[#02888f] mt-2">Jalur Karir</div>
              <div className="block py-1" onClick={() => {onNavigate('detail'); setIsMenuOpen(false);}}>Growth Accelerator</div>
              <div className="block py-1">Digital Marketing Mastery</div>
              <div className="text-xs uppercase tracking-wider text-[#02888f] mt-2">Skill Sprint</div>
              <div className="block py-1">Instagram Reels</div>
              <div className="block py-1">Copywriting</div>
            </div>
          )}
          <a href="#" className="block text-lg font-medium py-2 border-b border-gray-100">Pendaftaran</a>
          <a href="#" className="block text-lg font-medium py-2 border-b border-gray-100">Cerita Alumni</a>
          <button 
            onClick={() => {onNavigate('login'); setIsMenuOpen(false);}}
            className="block w-full text-left text-lg font-medium py-2 border-b border-gray-100 text-[#02888f]"
          >
            Login Member
          </button>
          <button className="w-full bg-[#02888f] mt-4 py-3 rounded-md font-bold text-white">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </nav>
  );
};

// 2. Hero Section
const Hero = ({ onNavigate }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-white text-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-gray-50 via-white/50 to-transparent"></div>
        <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-[#02888f]/10 rounded-full blur-3xl animate-blob mix-blend-multiply"></div>
        <div className="absolute top-48 -left-20 w-[400px] h-[400px] bg-[#fdcd03]/20 rounded-full blur-3xl animate-blob animation-delay-2000 mix-blend-multiply"></div>
        <div className="absolute -bottom-48 left-48 w-[500px] h-[500px] bg-[#02888f]/10 rounded-full blur-3xl animate-blob animation-delay-4000 mix-blend-multiply"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="md:w-2/3 text-center md:text-left">
          <div className={`inline-flex items-center px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-[#02888f]/20 mb-8 shadow-lg hover:shadow-xl transition-all duration-500 cursor-default ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="relative flex h-3 w-3 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#02888f] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#02888f]"></span>
            </span>
            <span className="text-sm font-medium text-[#02888f] tracking-wide uppercase">Batch Baru Mulai 15 Feb</span>
          </div>
          <h1 className={`text-5xl md:text-7xl font-bold leading-[1.1] mb-6 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Raih Masa Depanmu di <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#02888f] via-[#00aeb8] to-[#fdcd03] drop-shadow-sm">Digital Growth</span>
          </h1>
          <p className={`text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Akademi digital premier di Indonesia. Kami tidak hanya mengajarkan skill; kami membangun karir melalui mentorship ketat, proyek dunia nyata, dan jaringan kerja yang efektif.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center md:justify-start transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button 
            onClick={() => onNavigate('detail')}
            className="group bg-[#02888f] hover:bg-[#026e74] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_10px_20px_-10px_rgba(2,136,143,0.5)] hover:shadow-[0_20px_30px_-10px_rgba(2,136,143,0.6)] transform hover:-translate-y-1 flex items-center justify-center"
          >
            Lihat Program <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group bg-white border border-gray-200 hover:border-[#02888f] text-gray-600 hover:text-[#02888f] px-8 py-4 rounded-full font-bold text-lg transition-all shadow-sm hover:shadow-lg flex items-center justify-center">
            <Play className="mr-2 w-5 h-5 fill-current group-hover:scale-110 transition-transform" /> Cerita Alumni
          </button>
        </div>
          
          <div className={`mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center gap-6 text-gray-400 text-sm transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <span>Dipercaya oleh alumni di:</span>
            <div className="flex gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Simple Text Logos for Demo */}
               <span className="font-bold text-xl">Gojek</span>
               <span className="font-bold text-xl">Tokopedia</span>
               <span className="font-bold text-xl">Traveloka</span>
               <span className="font-bold text-xl">Shopee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. Program Card Component
const ProgramCard = ({ program, onNavigate }) => (
  <div 
    onClick={() => program.tags.includes('Flagship') ? onNavigate('detail') : null}
    className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden hover:shadow-2xl hover:shadow-[#02888f]/10 hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-[#02888f]/30 cursor-pointer group flex flex-col h-full relative"
  >
    <div className="relative h-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
      <img 
        src={program.image} 
        alt={program.title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      <div className="absolute top-4 left-4 flex gap-2">
        {program.tags.map(tag => (
          <span key={tag} className="bg-white/90 backdrop-blur-sm text-[#02888f] text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20">
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <div className="flex justify-between items-start mb-2">
        <span className="text-[#02888f] bg-[#02888f]/10 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider">{program.level}</span>
        <span className="text-gray-500 text-xs flex items-center"><Clock className="w-3 h-3 mr-1" /> {program.duration}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#02888f] transition-colors line-clamp-2">
        {program.title}
      </h3>
      <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
        {program.description}
      </p>
      
      <div className="border-t border-gray-100 pt-4 mt-auto">
        <div className="flex justify-between items-end mb-4">
          <div>
            <div className="text-xs text-gray-500 mb-1">Biaya Pendidikan</div>
            <div className="font-bold text-xl text-[#02888f]">{program.price}</div>
            {program.installment && (
              <div className="text-xs text-[#02888f] font-medium mt-1">{program.installment}</div>
            )}
          </div>
        </div>
        <button className="w-full py-3 rounded-xl bg-gray-50 text-gray-900 font-bold group-hover:bg-[#02888f] group-hover:text-white transition-all shadow-sm hover:shadow-lg flex items-center justify-center">
          Lihat Detail <ChevronRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#02888f] mb-4">Pilih Jalur Pertumbuhanmu</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Baik Anda butuh perubahan karir total atau peningkatan skill cepat, kami memiliki jalur pembelajaran terstruktur untuk ekonomi digital Indonesia.
          </p>
          
          <div className="mt-10 inline-flex bg-white p-1.5 rounded-full border border-gray-200 shadow-sm">
            <button 
              onClick={() => setActiveTab('career')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === 'career' 
                ? 'bg-[#02888f] text-white shadow-md' 
                : 'text-gray-500 hover:text-[#02888f]'
              }`}
            >
              Bootcamp Karir
            </button>
            <button 
              onClick={() => setActiveTab('skills')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === 'skills' 
                ? 'bg-[#02888f] text-white shadow-md' 
                : 'text-gray-500 hover:text-[#02888f]'
              }`}
            >
              Skill Sprint
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
          <div className="text-[#fdcd03] font-bold uppercase tracking-wider mb-2 flex items-center"><span className="w-8 h-0.5 bg-[#fdcd03] mr-2"></span> Metode Soulvara</div>
          <h2 className="text-4xl font-bold text-[#02888f] mb-6">Lebih Dari Sekadar Video.<br/>Sebuah Ekosistem Pertumbuhan.</h2>
          <div className="space-y-8">
            <div className="flex items-start group p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
              <div className="flex-shrink-0 p-3 bg-[#02888f]/10 rounded-xl mr-4 group-hover:bg-[#02888f] group-hover:text-white transition-colors duration-300">
                <Users className="w-6 h-6 text-[#02888f]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#02888f] mb-2">Mentorship Langsung</h4>
                <p className="text-gray-600">Sesi langsung mingguan dengan praktisi industri dari unicorn teratas. Dapatkan jawaban atas pertanyaan Anda secara real-time.</p>
              </div>
            </div>
            <div className="flex items-start group p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
              <div className="flex-shrink-0 p-3 bg-[#02888f]/10 rounded-xl mr-4 group-hover:bg-[#02888f] group-hover:text-white transition-colors duration-300">
                <ShieldCheck className="w-6 h-6 text-[#02888f]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#02888f] mb-2">Pembelajaran Berbasis Portofolio</h4>
                <p className="text-gray-600">Tidak ada tes pilihan ganda. Anda lulus dengan membangun strategi pemasaran nyata untuk mitra perekrutan nyata.</p>
              </div>
            </div>
            <div className="flex items-start group p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
              <div className="flex-shrink-0 p-3 bg-[#02888f]/10 rounded-xl mr-4 group-hover:bg-[#02888f] group-hover:text-white transition-colors duration-300">
                <Linkedin className="w-6 h-6 text-[#02888f]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#02888f] mb-2">Konektor Karir</h4>
                <p className="text-gray-600">Mitra perekrutan kami mendapatkan akses pertama ke lulusan kami. Kami membantu optimalisasi CV dan persiapan wawancara.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#02888f] to-[#fdcd03] rounded-3xl transform -rotate-3 opacity-20 blur-xl"></div>
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" 
            alt="Mentorship Session" 
            className="relative rounded-3xl shadow-2xl transform transition-transform duration-700 hover:scale-[1.02] hover:rotate-1"
          />
          <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-xs border border-gray-100 animate-bounce-slow">
            <div className="flex items-center gap-4 mb-3">
              <div className="text-4xl font-bold text-[#02888f]">92%</div>
            </div>
            <p className="text-sm text-gray-600 font-medium">Tingkat perekrutan dalam 3 bulan setelah kelulusan untuk siswa Bootcamp Karir.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// 6. Testimonials
const Testimonials = () => (
  <div className="py-24 bg-gradient-to-br from-[#02888f] to-[#026e74] text-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="absolute -top-16 -right-16 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <h2 className="text-3xl font-bold text-center mb-16">Kisah Sukses</h2>
      <div className="grid md:grid-cols-2 gap-8 relative">
        {TESTIMONIALS.map((t, i) => (
          <FadeInSection key={i} delay={i * 100}>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 relative hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 shadow-lg">
               <div className="absolute -top-5 left-8 text-[#fdcd03] bg-[#026e74] p-3 border border-white/10 rounded-2xl shadow-lg">
                 <Star className="w-6 h-6 fill-current" />
               </div>
               <p className="text-gray-100 italic mb-6 text-lg leading-relaxed">"{t.content}"</p>
               <div className="flex items-center">
                 <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-[#fdcd03] shadow-md" />
                 <div>
                   <div className="font-bold text-white text-lg">{t.name}</div>
                   <div className="text-sm text-[#fdcd03] font-medium">{t.role}</div>
                   <div className="text-xs text-gray-400">Sebelumnya: {t.prevRole}</div>
                 </div>
               </div>
            </div>
          </FadeInSection>
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
            <div className="w-8 h-8 bg-[#02888f] rounded-lg flex items-center justify-center mr-2">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl text-[#02888f]">SOULVARA</span>
          </div>
          <p className="text-gray-500 text-sm mb-6">
            Membangun generasi pemimpin digital Indonesia berikutnya melalui pendidikan yang ketat dan berbasis hasil.
          </p>
          <div className="flex space-x-4">
            <Instagram className="w-5 h-5 text-gray-400 hover:text-[#fdcd03] cursor-pointer" />
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#fdcd03] cursor-pointer" />
            <Facebook className="w-5 h-5 text-gray-400 hover:text-[#fdcd03] cursor-pointer" />
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-[#02888f] mb-4">Program</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-[#02888f]">Growth Accelerator</a></li>
            <li><a href="#" className="hover:text-[#02888f]">Digital Marketing</a></li>
            <li><a href="#" className="hover:text-[#02888f]">Skill Sprint</a></li>
            <li><a href="#" className="hover:text-[#02888f]">Corporate Training</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-[#02888f] mb-4">Perusahaan</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-[#02888f]">Tentang Kami</a></li>
            <li><a href="#" className="hover:text-[#02888f]">Karir</a></li>
            <li><a href="#" className="hover:text-[#02888f]">Jadi Mentor</a></li>
            <li><a href="#" className="hover:text-[#02888f]">Kontak</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-[#02888f] mb-4">Kontak</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Jakarta, Indonesia</li>
            <li>hello@soulvara.id</li>
            <li>+62 812 3456 7890</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <div>&copy; 2025 Soulvara Education. Hak cipta dilindungi undang-undang.</div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#">Kebijakan Privasi</a>
          <a href="#">Syarat & Ketentuan</a>
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
      <div className="bg-[#02888f] text-white pt-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={onBack} className="text-gray-400 hover:text-white flex items-center mb-8 text-sm font-bold uppercase tracking-wide">
            <ArrowRight className="w-4 h-4 rotate-180 mr-2" /> Kembali ke Program
          </button>
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3">
              <div className="flex gap-3 mb-6">
                <span className="bg-[#fdcd03] text-gray-900 px-3 py-1 rounded text-xs font-bold">JALUR KARIR</span>
                <span className="bg-white/20 text-[#fdcd03] px-3 py-1 rounded text-xs font-bold">BATCH BERIKUTNYA: 15 FEB</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Soulvara Growth Accelerator</h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Bootcamp growth marketing paling komprehensif di Indonesia. Kuasai skill T-shaped yang dibutuhkan untuk memimpin pertumbuhan di startup teratas. Dari akuisisi hingga retensi.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-10 text-sm font-medium text-gray-300">
                <div className="flex items-center"><Calendar className="w-5 h-5 mr-2 text-[#fdcd03]" /> 12 Minggu</div>
                <div className="flex items-center"><Clock className="w-5 h-5 mr-2 text-[#fdcd03]" /> Sesi Langsung (Sel & Kam)</div>
                <div className="flex items-center"><Users className="w-5 h-5 mr-2 text-[#fdcd03]" /> Level Menengah</div>
              </div>

              <div className="flex items-center gap-4">
                 <div className="flex -space-x-3">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-[#02888f] bg-gray-600"></div>
                   ))}
                 </div>
                 <div className="text-sm">
                   <span className="font-bold text-white">450+ Alumni</span> direkrut oleh mitra
                 </div>
              </div>
            </div>
            
            {/* Desktop Pricing Card */}
            <div className="hidden md:block md:w-1/3 relative">
               <div className="bg-white text-gray-900 rounded-xl p-8 shadow-2xl absolute top-0 w-full">
                 <div className="text-gray-500 text-sm mb-1">Total Biaya</div>
                 <div className="text-4xl font-bold text-[#02888f] mb-2">Rp 12.000.000</div>
                 <div className="text-[#02888f] text-sm font-bold mb-6">Atau Cicilan mulai Rp 1jt/bln</div>
                 
                 <button className="w-full bg-[#fdcd03] hover:bg-[#e6ba02] text-gray-900 font-bold py-4 rounded-lg shadow-lg mb-4 transition-all">
                   Daftar Sekarang
                 </button>
                 <button className="w-full bg-white border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold py-4 rounded-lg flex items-center justify-center transition-all">
                   <MessageCircle className="w-5 h-5 mr-2" /> Konsultasi via WhatsApp
                 </button>
                 
                 <div className="mt-6 text-xs text-gray-500 text-center">
                   <p className="mb-2">Pembayaran aman via</p>
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
        <button className="flex-[3] bg-[#fdcd03] text-gray-900 font-bold py-3 rounded-lg">
          Daftar Sekarang
        </button>
      </div>

      {/* Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-2/3">
            {/* Syllabus Section */}
            <h2 className="text-2xl font-bold text-[#02888f] mb-8">Peta Kurikulum</h2>
            <div className="space-y-4">
              {SYLLABUS.map((module, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button 
                    onClick={() => setOpenModule(openModule === index ? -1 : index)}
                    className={`w-full flex justify-between items-center p-6 text-left transition-colors ${openModule === index ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'}`}
                  >
                    <div>
                      <div className="text-xs font-bold text-[#02888f] uppercase tracking-wide mb-1">{module.week}</div>
                      <div className="font-bold text-[#02888f] text-lg">{module.title}</div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openModule === index ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <div className={`grid transition-all duration-500 ease-in-out ${openModule === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <div className="bg-gray-50 px-6 pb-6 pt-4 border-t border-gray-100">
                        <ul className="space-y-3">
                          {module.topics.map((topic, i) => (
                            <li key={i} className="flex items-start text-gray-600 text-sm">
                              <CheckCircle className="w-4 h-4 text-[#02888f] mt-0.5 mr-3 flex-shrink-0" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Hiring Partners */}
            <div className="mt-16">
               <h2 className="text-2xl font-bold text-[#02888f] mb-6">Mitra Perekrutan Kami</h2>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {[1,2,3,4,5,6,7,8].map(i => (
                   <div key={i} className="h-16 bg-gray-100 rounded flex items-center justify-center text-gray-400 font-bold">Mitra {i}</div>
                 ))}
               </div>
            </div>
          </div>
          
          <div className="md:w-1/3">
             {/* Sidebar Content (Sticky on Desktop) */}
             <div className="sticky top-24 pt-10 md:pt-64">
                <h3 className="font-bold text-[#02888f] mb-4">Apa yang Termasuk</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-600 text-sm">
                    <BookOpen className="w-5 h-5 text-[#02888f] mr-3" /> 24 Sesi Langsung
                  </li>
                  <li className="flex items-center text-gray-600 text-sm">
                    <Users className="w-5 h-5 text-[#02888f] mr-3" /> Chat Mentor Tanpa Batas
                  </li>
                  <li className="flex items-center text-gray-600 text-sm">
                    <Award className="w-5 h-5 text-[#02888f] mr-3" /> Sertifikasi Industri
                  </li>
                  <li className="flex items-center text-gray-600 text-sm">
                    <ShieldCheck className="w-5 h-5 text-[#02888f] mr-3" /> Jaminan Kerja*
                  </li>
                </ul>
                
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <div className="flex items-center mb-4">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" className="w-12 h-12 rounded-full mr-3" alt="Advisor" />
                    <div>
                      <div className="font-bold text-[#02888f]">Bicara dengan Admisi</div>
                      <div className="text-xs text-gray-500">Ragu? Ayo ngobrol.</div>
                    </div>
                  </div>
                  <button className="w-full bg-white border border-gray-200 text-[#02888f] font-bold py-2 rounded shadow-sm hover:shadow-md transition-all text-sm">
                    Jadwalkan Konsultasi Gratis
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
    <div className="min-h-screen bg-gradient-to-br from-[#02888f] to-[#026e74] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-8 pb-0">
          <div 
             onClick={onBack}
             className="inline-flex items-center text-gray-400 hover:text-[#02888f] mb-6 cursor-pointer text-sm font-medium"
          >
            <ArrowRight className="w-4 h-4 rotate-180 mr-2" /> Kembali ke Beranda
          </div>
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-[#02888f] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">S</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-[#02888f] mb-1">Selamat Datang Kembali</h2>
          <p className="text-center text-gray-500 text-sm">Masukkan kredensial Anda untuk mengakses dashboard</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Alamat Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02888f] focus:border-transparent outline-none transition-all"
                  placeholder="admin@soulvara.id"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Kata Sandi</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02888f] focus:border-transparent outline-none transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
            <button 
              type="submit"
              className="w-full bg-[#02888f] hover:bg-[#026e74] text-white font-bold py-3 rounded-lg shadow-md transition-all transform active:scale-95"
            >
              Masuk
            </button>
          </div>
          <div className="mt-6 text-center text-xs text-gray-400">
            Untuk tujuan demo gunakan: <br/> <span className="font-mono text-[#fdcd03]">admin@soulvara.id / admin123</span>
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
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-lg ${color} bg-opacity-10`}>
          <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
        </div>
        <span className="text-xs font-medium text-green-500 bg-green-50 px-2 py-1 rounded-full">{change}</span>
      </div>
      <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
      <div className="text-2xl font-bold text-[#02888f]">{value}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#02888f] text-white fixed h-full z-20 hidden md:block">
        <div className="p-6 border-b border-gray-800 flex items-center">
          <div className="w-8 h-8 bg-[#fdcd03] rounded flex items-center justify-center mr-3">
            <span className="font-bold text-lg">S</span>
          </div>
          <span className="font-bold text-lg tracking-wide">Admin CMS</span>
        </div>
        <nav className="p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${activeTab === 'overview' ? 'bg-[#fdcd03] text-gray-900' : 'hover:bg-white/10 text-white/80 hover:text-white'}`}
          >
            <LayoutDashboard className="w-5 h-5 mr-3" /> Ringkasan
          </button>
          <button 
            onClick={() => setActiveTab('programs')}
            className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${activeTab === 'programs' ? 'bg-[#fdcd03] text-gray-900' : 'hover:bg-white/10 text-white/80 hover:text-white'}`}
          >
            <BookOpen className="w-5 h-5 mr-3" /> Program
          </button>
          <button className="w-full flex items-center px-4 py-3 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors">
            <Users className="w-5 h-5 mr-3" /> Siswa
          </button>
          <button className="w-full flex items-center px-4 py-3 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors">
            <DollarSign className="w-5 h-5 mr-3" /> Keuangan
          </button>
          <button className="w-full flex items-center px-4 py-3 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors">
            <Settings className="w-5 h-5 mr-3" /> Pengaturan
          </button>
        </nav>
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-800">
          <button 
            onClick={onLogout}
            className="w-full flex items-center px-4 py-3 text-red-200 hover:bg-white/10 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5 mr-3" /> Keluar
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-[#02888f] capitalize">{activeTab} Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
               <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" alt="Admin" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#02888f]">Pengguna Admin</div>
              <div className="text-xs text-gray-500">Super Admin</div>
            </div>
          </div>
        </header>

        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <StatCard title="Total Siswa" value="1,248" change="+12%" icon={Users} color="bg-blue-500" />
              <StatCard title="Pendapatan Aktif" value="Rp 450M" change="+8.2%" icon={DollarSign} color="bg-green-500" />
              <StatCard title="Cohort Aktif" value="12" change="0%" icon={BookOpen} color="bg-purple-500" />
              <StatCard title="Tingkat Penyelesaian" value="94%" change="+2%" icon={Award} color="bg-orange-500" />
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
               <h3 className="font-bold text-[#02888f] mb-6">Pendaftaran Terbaru</h3>
               <div className="overflow-x-auto">
                 <table className="w-full text-left">
                   <thead>
                     <tr className="border-b border-gray-100 text-gray-500 text-sm">
                       <th className="pb-3 pl-2">Nama Siswa</th>
                       <th className="pb-3">Program</th>
                       <th className="pb-3">Tanggal</th>
                       <th className="pb-3">Status</th>
                       <th className="pb-3 text-right pr-2">Aksi</th>
                     </tr>
                   </thead>
                   <tbody className="text-sm">
                     {[1,2,3,4].map(i => (
                       <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                         <td className="py-4 pl-2 font-medium text-[#02888f]">Budi Santoso {i}</td>
                         <td className="py-4 text-gray-600">Growth Accelerator</td>
                         <td className="py-4 text-gray-500">Dec 28, 2025</td>
                         <td className="py-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Lunas</span></td>
                         <td className="py-4 text-right pr-2"><button className="text-[#02888f] hover:underline">Lihat</button></td>
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
                 <input type="text" placeholder="Cari program..." className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02888f] w-64" />
               </div>
               <button className="bg-[#02888f] hover:bg-[#026e74] text-white px-4 py-2 rounded-lg font-bold flex items-center text-sm shadow-sm">
                 <Plus className="w-4 h-4 mr-2" /> Tambah Program
               </button>
             </div>

             <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
               <table className="w-full text-left">
                   <thead className="bg-gray-50">
                     <tr className="border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wider">
                       <th className="py-4 pl-6">Nama Program</th>
                       <th className="py-4">Kategori</th>
                       <th className="py-4">Siswa</th>
                       <th className="py-4">Batch Berikutnya</th>
                       <th className="py-4">Status</th>
                       <th className="py-4 text-right pr-6">Aksi</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-100">
                     {[...PROGRAMS.career, ...PROGRAMS.skills].map((p, i) => (
                       <tr key={i} className="hover:bg-blue-50/50 transition-colors group">
                         <td className="py-4 pl-6">
                           <div className="font-bold text-[#02888f]">{p.title}</div>
                           <div className="text-xs text-gray-500">{p.duration} • {p.level}</div>
                         </td>
                         <td className="py-4 text-sm text-gray-600">
                           {p.tags.includes('Job Connector') ? 'Jalur Karir' : 'Skill Sprint'}
                         </td>
                         <td className="py-4 text-sm font-medium">{p.students || 0}</td>
                         <td className="py-4 text-sm text-gray-600">{p.nextBatch || '-'}</td>
                         <td className="py-4">
                           <span className={`px-2 py-1 rounded text-xs font-bold ${p.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                             {p.status === 'Active' ? 'Aktif' : p.status || 'Aktif'}
                           </span>
                         </td>
                         <td className="py-4 text-right pr-6">
                           <div className="flex justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                             <button className="p-1 text-gray-400 hover:text-[#02888f]"><Edit className="w-4 h-4" /></button>
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
    <div className="antialiased text-gray-900 bg-white selection:bg-[#02888f] selection:text-white" style={{ fontFamily: '"Bell MT", "Bodoni MT", "Didot", "Times New Roman", serif' }}>
      <style>{`
        @keyframes float {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: float 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow { animation: bounce-slow 3s infinite ease-in-out; }
      `}</style>
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
        className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 transition-all duration-500 ease-in-out transform ${showWhatsapp ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:scale-110`}
      >
        <div className="relative group">
          <div className="absolute -top-12 right-0 bg-white px-4 py-2 rounded-lg shadow-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 mb-2">
            Chat dengan Admisi
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
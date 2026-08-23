import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Scale,
  Menu,
  X,
  Sparkles,
  BookOpen,
  FileText,
  Gift,
  FileCheck,
  Bookmark,
  ExternalLink,
  PenTool,
  Info
} from 'lucide-react';
import { storage } from '../../utils/storage';

interface NavbarProps {
  onOpenSavedModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSavedModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [savedCount, setSavedCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Update saved count
    const updateCount = () => {
      const saved = storage.getSavedCases();
      setSavedCount(saved.length);
    };
    updateCount();

    // Listen for custom storage events or focus
    window.addEventListener('storage', updateCount);
    window.addEventListener('focus', updateCount);
    return () => {
      window.removeEventListener('storage', updateCount);
      window.removeEventListener('focus', updateCount);
    };
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'AI Assistant', path: '/assistant', highlight: true },
    { name: 'Rights', path: '/rights' },
    { name: 'RTI', path: '/rti' },
    { name: 'Schemes', path: '/schemes' },
    { name: 'Doc Explainer', path: '/documents' },
    { name: 'Generator', path: '/generator' },
    { name: 'Resources', path: '/resources' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 no-print transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1"
            id="navbar-brand-link"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center shadow-sm shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Scale className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg text-slate-900 tracking-tight">CivicAI</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  Citizen
                </span>
              </div>
              <span className="text-[11px] text-slate-500 hidden sm:inline -mt-0.5">
                Civic & Legal Navigator
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? 'bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200/60'
                      : link.highlight
                      ? 'text-emerald-700 hover:bg-emerald-50/70'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {link.highlight && <Sparkles className="w-3.5 h-3.5 text-emerald-600" />}
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {onOpenSavedModal && (
              <button
                type="button"
                onClick={onOpenSavedModal}
                className="relative p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                title="Saved Analyses & Bookmarks"
                id="btn-saved-cases-nav"
              >
                <Bookmark className="w-4 h-4" />
                {savedCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center">
                    {savedCount}
                  </span>
                )}
              </button>
            )}

            <Link
              to="/assistant"
              id="btn-get-started-nav"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <Sparkles className="w-4 h-4" />
              <span>Analyze Problem</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {onOpenSavedModal && savedCount > 0 && (
              <button
                type="button"
                onClick={onOpenSavedModal}
                className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                <Bookmark className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center">
                  {savedCount}
                </span>
              </button>
            )}

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Toggle navigation menu"
              id="btn-mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-1 gap-1 pt-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium ${
                    active
                      ? 'bg-emerald-50 text-emerald-800 font-semibold border-l-4 border-emerald-600'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.name === 'Home' && <Scale className="w-4 h-4 text-slate-500" />}
                    {link.name === 'AI Assistant' && <Sparkles className="w-4 h-4 text-emerald-600" />}
                    {link.name === 'Rights' && <BookOpen className="w-4 h-4 text-slate-500" />}
                    {link.name === 'RTI' && <FileText className="w-4 h-4 text-slate-500" />}
                    {link.name === 'Schemes' && <Gift className="w-4 h-4 text-slate-500" />}
                    {link.name === 'Doc Explainer' && <FileCheck className="w-4 h-4 text-slate-500" />}
                    {link.name === 'Generator' && <PenTool className="w-4 h-4 text-slate-500" />}
                    {link.name === 'Resources' && <ExternalLink className="w-4 h-4 text-slate-500" />}
                    {link.name === 'About' && <Info className="w-4 h-4 text-slate-500" />}
                    {link.name}
                  </span>
                  {active && <span className="text-xs text-emerald-700 font-semibold">Active</span>}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <Link
              to="/assistant"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-700 text-white font-semibold text-sm shadow hover:bg-emerald-800"
            >
              <Sparkles className="w-4 h-4" />
              <span>Describe Your Problem Now</span>
            </Link>

            {onOpenSavedModal && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSavedModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50"
              >
                <Bookmark className="w-4 h-4 text-slate-500" />
                <span>Saved Analyses ({savedCount})</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

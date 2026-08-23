import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ToastContainer, ToastMessage } from './components/common/Toast';
import { SavedModal } from './components/common/SavedModal';

// Pages
import { Home } from './pages/Home';
import { Assistant } from './pages/Assistant';
import { AnalysisResult } from './pages/AnalysisResult';
import { Rights } from './pages/Rights';
import { RTIAssistant } from './pages/RTIAssistant';
import { Schemes } from './pages/Schemes';
import { DocumentExplainer } from './pages/DocumentExplainer';
import { DocumentGenerator } from './pages/DocumentGenerator';
import { Resources } from './pages/Resources';
import { About } from './pages/About';

export default function App() {
  const [isSavedModalOpen, setIsSavedModalOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (
    title: string,
    type: 'success' | 'info' | 'error' = 'success',
    description?: string
  ) => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    const newToast: ToastMessage = { id, title, type, description };
    setToasts((prev) => [...prev, newToast]);

    // Auto dismiss after 4 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
        {/* Navigation Bar */}
        <Navbar onOpenSavedModal={() => setIsSavedModalOpen(true)} />

        {/* Main Content Area */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assistant" element={<Assistant />} />
            <Route path="/analysis" element={<AnalysisResult onShowToast={showToast} />} />
            <Route path="/rights" element={<Rights />} />
            <Route path="/rti" element={<RTIAssistant onShowToast={showToast} />} />
            <Route path="/schemes" element={<Schemes />} />
            <Route path="/documents" element={<DocumentExplainer onShowToast={showToast} />} />
            <Route path="/generator" element={<DocumentGenerator onShowToast={showToast} />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            {/* Catch-all fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Saved Analyses & Bookmarks Modal */}
        <SavedModal
          isOpen={isSavedModalOpen}
          onClose={() => setIsSavedModalOpen(false)}
          onShowToast={showToast}
        />

        {/* Toast Notifications */}
        <ToastContainer toasts={toasts} onDismiss={dismissToast} />
      </div>
    </HashRouter>
  );
}

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bookmark, Trash2, ArrowRight, X, Calendar, ShieldCheck, AlertCircle } from 'lucide-react';
import { AnalysisResponse } from '../../types';
import { storage } from '../../utils/storage';

interface SavedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (title: string, type?: 'success' | 'info' | 'error') => void;
}

export const SavedModal: React.FC<SavedModalProps> = ({ isOpen, onClose, onShowToast }) => {
  const [savedCases, setSavedCases] = useState<AnalysisResponse[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setSavedCases(storage.getSavedCases());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    storage.removeSavedCase(id);
    const updated = storage.getSavedCases();
    setSavedCases(updated);
    onShowToast('Removed from saved analyses', 'info');
  };

  const handleOpenCase = (item: AnalysisResponse) => {
    storage.setCurrentAnalysis(item);
    onClose();
    navigate('/analysis');
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all saved cases and prototype cache?')) {
      storage.clearAllData();
      setSavedCases([]);
      onShowToast('All local saved data cleared', 'info');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 no-print animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Bookmark className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Saved Analyses & Cases</h3>
              <p className="text-xs text-slate-500">Stored safely on your browser device (LocalStorage)</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-3">
          {savedCases.length === 0 ? (
            <div className="text-center py-10 px-4 space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
                <Bookmark className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-slate-800 text-sm">No saved analyses yet</h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                When you analyze a civic or legal problem, click the "Save Analysis" button to bookmark it here for fast reference.
              </p>
            </div>
          ) : (
            savedCases.map((item) => (
              <div
                key={item.id}
                onClick={() => handleOpenCase(item)}
                className="group p-4 rounded-xl border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/30 transition-all cursor-pointer flex items-start justify-between gap-3"
              >
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-700 font-medium truncate">
                      {item.issueBadge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.rawInput}
                  </p>

                  <div className="flex items-center gap-3 text-[11px] text-slate-400 pt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(item.createdAt).toLocaleDateString()}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-emerald-700 font-medium">
                      <ShieldCheck className="w-3 h-3" />
                      {item.actionPlan?.length || 4} Steps Ready
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <button
                    type="button"
                    onClick={(e) => handleDelete(item.id, e)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                    title="Delete saved case"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="p-1.5 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        {savedCases.length > 0 && (
          <div className="px-6 py-3.5 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs">
            <button
              type="button"
              onClick={handleClearAll}
              className="text-rose-600 hover:text-rose-700 hover:underline flex items-center gap-1 font-medium"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear All Local Storage</span>
            </button>
            <span className="text-slate-500">{savedCases.length} analysis saved</span>
          </div>
        )}
      </div>
    </div>
  );
};

import { AnalysisResponse } from '../types';

const STORAGE_KEYS = {
  CURRENT_ANALYSIS: 'civicai_current_analysis',
  SAVED_CASES: 'civicai_saved_cases',
  RECENT_SEARCHES: 'civicai_recent_searches',
  DRAFT_DOCUMENT: 'civicai_draft_document',
  DISCLAIMER_ACCEPTED: 'civicai_disclaimer_seen'
};

export const storage = {
  // Current analysis for routing between /assistant and /analysis
  setCurrentAnalysis: (analysis: AnalysisResponse): void => {
    try {
      localStorage.setItem(STORAGE_KEYS.CURRENT_ANALYSIS, JSON.stringify(analysis));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  },

  getCurrentAnalysis: (): AnalysisResponse | null => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CURRENT_ANALYSIS);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  },

  // Saved bookmark cases
  getSavedCases: (): AnalysisResponse[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SAVED_CASES);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  saveCase: (analysis: AnalysisResponse): boolean => {
    try {
      const existing = storage.getSavedCases();
      const alreadySaved = existing.some((item) => item.id === analysis.id);
      if (!alreadySaved) {
        const updated = [analysis, ...existing];
        localStorage.setItem(STORAGE_KEYS.SAVED_CASES, JSON.stringify(updated));
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  },

  removeSavedCase: (id: string): void => {
    try {
      const existing = storage.getSavedCases();
      const filtered = existing.filter((item) => item.id !== id);
      localStorage.setItem(STORAGE_KEYS.SAVED_CASES, JSON.stringify(filtered));
    } catch (e) {
      console.warn(e);
    }
  },

  // Recent queries
  getRecentSearches: (): string[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.RECENT_SEARCHES);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  addRecentSearch: (query: string): void => {
    try {
      if (!query || query.trim().length === 0) return;
      const clean = query.trim();
      const existing = storage.getRecentSearches().filter((q) => q.toLowerCase() !== clean.toLowerCase());
      const updated = [clean, ...existing].slice(0, 6);
      localStorage.setItem(STORAGE_KEYS.RECENT_SEARCHES, JSON.stringify(updated));
    } catch (e) {
      console.warn(e);
    }
  },

  // Draft document
  saveDraftDocument: (draft: any): void => {
    try {
      localStorage.setItem(STORAGE_KEYS.DRAFT_DOCUMENT, JSON.stringify(draft));
    } catch (e) {
      console.warn(e);
    }
  },

  getDraftDocument: (): any | null => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.DRAFT_DOCUMENT);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  },

  // Clear all local prototype data
  clearAllData: (): void => {
    try {
      localStorage.removeItem(STORAGE_KEYS.CURRENT_ANALYSIS);
      localStorage.removeItem(STORAGE_KEYS.SAVED_CASES);
      localStorage.removeItem(STORAGE_KEYS.RECENT_SEARCHES);
      localStorage.removeItem(STORAGE_KEYS.DRAFT_DOCUMENT);
    } catch (e) {
      console.warn(e);
    }
  }
};

'use client';

import React, { createContext, useContext, useState } from 'react';

interface QuoteModalContextType {
  isQuoteModalOpen: boolean;
  openQuoteModal: (initialProjectType?: string) => void;
  closeQuoteModal: () => void;
  selectedProjectType: string;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export const QuoteModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProjectType, setSelectedProjectType] = useState<string>('commercial');

  const openQuoteModal = (initialProjectType?: string) => {
    if (initialProjectType) {
      setSelectedProjectType(initialProjectType);
    }
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <QuoteModalContext.Provider
      value={{
        isQuoteModalOpen,
        openQuoteModal,
        closeQuoteModal,
        selectedProjectType
      }}
    >
      {children}
    </QuoteModalContext.Provider>
  );
};

export const useQuoteModal = (): QuoteModalContextType => {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error('useQuoteModal must be used within a QuoteModalProvider');
  }
  return context;
};

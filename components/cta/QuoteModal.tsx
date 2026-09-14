'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import { QuoteForm } from './QuoteForm';
import { useQuoteModal } from '@/components/layout/QuoteModalContext';

export const QuoteModal: React.FC = () => {
  const { isQuoteModalOpen, closeQuoteModal, selectedProjectType } = useQuoteModal();

  return (
    <Modal
      isOpen={isQuoteModalOpen}
      onClose={closeQuoteModal}
      title="Request a Free Engineering Quotation"
      maxWidth="xl"
    >
      <QuoteForm
        initialProjectType={selectedProjectType}
        onSuccess={closeQuoteModal}
      />
    </Modal>
  );
};

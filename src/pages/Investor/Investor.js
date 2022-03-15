import React from 'react'
import { AnimatePage } from '../../components/Animate/AnimatePage';
import { useDocumentTitle } from '../../components/TitleChange/TitleChange';

export const Investor = () => {
  useDocumentTitle("Platform | Investor");
  return (
    <AnimatePage>
      <div>Investor</div>
    </AnimatePage>
  );
}

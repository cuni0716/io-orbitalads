import React from 'react';
import { primary } from 'constants/styles';

export default function Header() {
  return (
    <nav>
      <div className={`nav-wrapper ${primary}`}>
        <span className="brand-logo center">Ramon LLompart</span>
      </div>
    </nav>
  );
}

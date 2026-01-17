
import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface SecurityInsight {
  topic: string;
  advice: string;
}

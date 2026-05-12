import React from 'react';
import { Hero } from '../components/home/Hero';
import { AutoScrollProjectStrip } from '../components/home/AutoScrollProjectStrip';
import { EditorialBreak } from '../components/home/EditorialBreak';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { ProcessSection } from '../components/home/ProcessSection';
import { FeatureProject } from '../components/home/FeatureProject';
import { FreeFlowGallery } from '../components/home/FreeFlowGallery';
import { MicroStatement } from '../components/home/MicroStatement';
import { ClientLogoMarquee } from '../components/home/ClientLogoMarquee';
import { DesignerMinimal } from '../components/home/DesignerMinimal';
import { FinalCTA } from '../components/home/FinalCTA';

export const Home = () => {
  return (
    <>
      <Hero />
      <AutoScrollProjectStrip />
      <EditorialBreak />
      <ServicesGrid />
      <ProcessSection />
      <FeatureProject />
      <FreeFlowGallery />
      <MicroStatement />
      <ClientLogoMarquee />
      <DesignerMinimal />
      <FinalCTA />
    </>
  );
};

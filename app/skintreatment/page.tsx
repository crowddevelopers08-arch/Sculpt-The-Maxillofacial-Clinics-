"use client";
import BeforeAfterGalleryskin from '@/components/befaftskin';
import ClinicLocationMaphair from '@/components/ClinicLocationMaphair';
import Footerskin from '@/components/footerskin';
import SkinCombinedSectionhair from '@/components/skincombine';
import Skindoctor from '@/components/skindoctor';
import FAQSectionskin from '@/components/skinfaq';
import SkinheroSectionhair from '@/components/skinhero';
import Skintreatment from '@/components/skintreatments';
import SkinvideoTestimonials from '@/components/skinvideos';
import { TestimonialsSectionskin } from '@/components/testimonialskin';
import WhyTrustSectionskin from '@/components/whyskin';
// import { WhyChooseSection } from '@/components/TrustSectionhair';
import React, { useState, useEffect } from 'react';
import Script from 'next/script';

export default function Skin() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Meta Pixel Code */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '4155341721462818');
            fbq('track', 'PageView');
          `
        }}
      />
      
      {/* Fallback noscript image for Meta Pixel */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=4155341721462818&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      {/* End Meta Pixel Code */}

      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* <Navigation scrollY={scrollY} /> */}
        <section id='home'>
          <SkinheroSectionhair />
        </section>
        <BeforeAfterGalleryskin />
        <SkinvideoTestimonials />
        <section id='treatment'>
          <Skintreatment />
        </section>
        <SkinCombinedSectionhair />
        <section id='doctor'>
          <Skindoctor />
        </section>
        <WhyTrustSectionskin />
        <TestimonialsSectionskin />
        <FAQSectionskin />
        <ClinicLocationMaphair />
        <Footerskin />
      </div>
    </>
  );
}
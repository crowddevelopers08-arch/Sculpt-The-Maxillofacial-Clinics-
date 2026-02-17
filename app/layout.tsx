import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope, Poppins, Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Sculpt The Maxillofacial Clinic - Premium Beauty & Hair Treatments in Bangalore",
  description:
    "Bangalore's trusted destination for hair transplants, skin treatments, and facial aesthetics. Expert care by Dr. Priyanka Raj with proven, lasting results.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favda2.png", sizes: "16x16", type: "image/png" },
      { url: "/favda2.png", sizes: "32x32", type: "image/png" },
      { url: "/favda2.png", sizes: "48x48", type: "image/png" },
      { url: "/favda2.png", sizes: "192x192", type: "image/png" },
      { url: "/favda2.png", sizes: "512x512", type: "image/png" }, 
    ],
    apple: [
      { url: "/favda2.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favda2.png",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} ${poppins.variable} ${inter.variable} antialiased`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5WXBZP3M');
          `}
        </Script>
        
        {/* Google Analytics (GA4) */}
        <Script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=G-2N4LGTK2MH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2N4LGTK2MH');
          `}
        </Script>
        
        {/* Google Ads Script */}
        <Script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=AW-11327193954"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11327193954');
          `}
        </Script>
        
        {/* Microsoft Clarity Analytics */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "t4by93dkgg");
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
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
          `}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5WXBZP3M"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        {/* Meta Pixel (noscript) */}
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=4155341721462818&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        
        {children}
      </body>
    </html>
  )
}
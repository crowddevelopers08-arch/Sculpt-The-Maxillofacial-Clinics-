import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Thank You - Sculpt The Maxillofacial Clinic",
  description:
    "Thank you for booking your consultation with Sculpt The Maxillofacial Clinic. We will contact you soon.",
}

export default function Thanknavskin() {
  return (
    <div className="bg-black text-white">
      
      {/* Google Ads Conversion Tracking Script */}
      <Script
        id="google-ads-conversion-skin"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {
              'send_to': 'AW-11327193954/hBNnCLjo-sIbEOKGnZkq'
            });
          `,
        }}
      />
      
      {/* Header */}
      <header className="border-b border-[#d09a40]/20 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
           <div className="flex-shrink-0">
             <img className="w-[200px] h-[60px] max-[768px]:w-[150px] max-[768px]:h-[50px] max-[480px]:w-[120px] max-[480px]:h-[40px]" src="bglogo.png" alt="logo" />
            </div>
            <Link href="/skintreatment">
              <Button
                variant="outline"
                className="border-[#d09a40] text-[#d09a40] hover:bg-[#d09a40] hover:text-black bg-transparent"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}
import Hero from "@/components/Home/Hero"
import Features from "@/components/Home/Features"
import CryptoShowcase from "@/components/Home/CryptoShowcase"


export default function Home() {

  return (
    <div className="relative min-h-screen  items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      
      <Hero/>
      <Features/>
      <CryptoShowcase/>
  </div>
  )
}
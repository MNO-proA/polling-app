"use client"

import Footer from "@/components/Footer";
import Header from '@/components/Header';
import Features from "@/components/Features";
import PollingAnimate from "@/components/PollingAnimate";


export default function Home() {

  return (
    <div className="min-h-screen bg-background">
      <Header/>
        <main className="container mx-auto px-4 py-16">
          <PollingAnimate/>
          <Features/>
        </main>
      <Footer/>
    </div>
  )
}


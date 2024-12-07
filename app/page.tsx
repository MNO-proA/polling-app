// "use client"

// import Footer from "@/components/Footer";
// import Header from '@/components/Header';
// import Features from "@/components/Features";
// import PollingAnimate from "@/components/PollingAnimate";


// export default function Home() {

//   return (
//     <div className="min-h-screen bg-background">
//       <Header/>
//         <main className="container mx-auto px-4 py-16">
//           <PollingAnimate/>
//           <Features/>
//         </main>
//       <Footer/>
//     </div>
//   )
// }










// "use client"

// import Header from '@/components/Header';
// import Footer from "@/components/Footer";
// import Features from "@/components/Features";
// import PollingAnimate from "@/components/PollingAnimate";
// import { Home, Vote, User } from 'lucide-react';
// import Link from "next/link";
// import { ModeToggle } from "@/components/mode-toggle";

// export default function HomeApp() {
//   return (
//     <div className="min-h-screen bg-background flex flex-col">
//       {/* Desktop Header - Hidden on mobile */}
//       <Header  />

//       <main className="container mx-auto px-4 py-6 flex-grow">
//         <PollingAnimate />
//         <Features />
//       </main>

//       {/* Mobile Bottom Navigation - Visible only on mobile */}
//       <div className="fixed bottom-0 left-0 right-0 bg-background border-t md:hidden z-50">
//         <div className="grid grid-cols-4 py-2">
//           <Link href="/" className="flex flex-col items-center justify-center">
//             <Home className="w-6 h-6" />
//             {/* <span className="text-xs">Home</span> */}
//           </Link>
//           <Link href="/vote" className="flex flex-col items-center justify-center">
//             <Vote className="w-6 h-6" />
//             {/* <span className="text-xs">Vote</span> */}
//           </Link>
//           <Link href="/auth/login" className="flex flex-col items-center justify-center">
//             <User className="w-6 h-6" />
//             {/* <span className="text-xs">Admin</span> */}
//           </Link>
//           <div className="flex flex-col items-center justify-center">
//             <ModeToggle />
//             {/* <span className="text-xs mt-1">Theme</span> */}
//           </div>
//         </div>
//       </div>

//       {/* Desktop Footer - Hidden on mobile */}
//       <Footer />
//     </div>
//   )
// }


"use client"

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import PollingAnimate from "@/components/PollingAnimate";
import { Home, Vote, User, MoreHorizontal } from 'lucide-react';
// import Link from "next/link";
import { useRouter } from 'next/navigation';
import { ModeToggle } from "@/components/mode-toggle";

export default function HomeApp() {
  const [loadingNav, setLoadingNav] = useState<'home' | 'vote' | 'admin' | null>(null);
  const router = useRouter();

  const handleNavigation = (path: string, navType: 'home' | 'vote' | 'admin') => {
    setLoadingNav(navType);
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-6 flex-grow">
        <PollingAnimate />
        <Features />
      </main>

      {/* Mobile Bottom Navigation - Visible only on mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t md:hidden z-50">
        <div className="grid grid-cols-4 py-2">
          <button 
            onClick={() => handleNavigation('/', 'home')} 
            className="flex flex-col items-center justify-center"
          >
            {loadingNav === 'home' ? (
              <MoreHorizontal className="w-6 h-6 animate-pulse" />
            ) : (
              <Home className="w-6 h-6" />
            )}
          </button>
          <button 
            onClick={() => handleNavigation('/vote', 'vote')} 
            className="flex flex-col items-center justify-center"
          >
            {loadingNav === 'vote' ? (
              <MoreHorizontal className="w-6 h-6 animate-pulse" />
            ) : (
              <Vote className="w-6 h-6" />
            )}
          </button>
          <button 
            onClick={() => handleNavigation('/auth/login', 'admin')} 
            className="flex flex-col items-center justify-center"
          >
            {loadingNav === 'admin' ? (
              <MoreHorizontal className="w-6 h-6 animate-pulse" />
            ) : (
              <User className="w-6 h-6" />
            )}
          </button>
          <div className="flex flex-col items-center justify-center">
            <ModeToggle />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
// "use client"

// import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import { ModeToggle } from "@/components/mode-toggle"
// import Image from "next/image";
// import { Vote } from 'lucide-react';
// import Link from "next/link"



// const candidates = [
//   {
//     id: 1,
//     name: "Dr Mahamadu Bawumia",
//     avatar: "/img/Bawumia1.jpg",
//     bio: "Experienced leader with 10 years in community service",
//     position: "President",
//   },
//   {
//     id: 2,
//     name: "John Dramani Mahama",
//     avatar: "/img/dm1.jpg",
//     bio: "Innovation expert with a focus on sustainable development",
//     position: "President",
//   },
//   // Add more candidates as needed
// ]

// const clientImages = [
//   "/img/p2.jpg",
//   "/img/p3.png",
// ]

// export default function VotePage() {
//   return (
//     <div className="min-h-screen bg-background p-8">
//       <div className="container mx-auto">
//             <div className="flex justify-between gap-2">
//               <Link href={"/"}><Vote/></Link>
//                 <h1 className="text-3xl font-bold mb-8 mr-10">Current Election 2024</h1>
//                 <ModeToggle/>
//             </div>

         

//                 <div className="mb-12">
//                   <Carousel>
//                     <CarouselContent>
//                       {clientImages.map((image, index) => (
//                         <CarouselItem key={index}>
//                           <div className="h-[500px] relative rounded-lg overflow-hidden">
                          
//                             <Image
//                               src={image}
//                               alt={`Event ${index}`}
//                               layout="fill" // Ensures the image fills the container
//                               objectFit="cover" // Ensures the image scales correctly
//                               quality={80} // Optimize image quality
//                               // placeholder="blur" // Optional: Use this if you have blur placeholders
//                               // blurDataURL="/path-to-blur-placeholder.jpg" // Optional
//                             />
//                             <div className="absolute inset-0 bg-black/50" />
//                             <div className="absolute bottom-8 left-8 text-white">
//                               <h2 className="text-2xl font-bold">Event {index + 1}</h2>
//                               <p>Voting event</p>
//                             </div>
//                           </div>
//                         </CarouselItem>
//                       ))}
//                     </CarouselContent>
//                     <CarouselPrevious />
//                     <CarouselNext />
//                   </Carousel>
//                 </div>



//         <div className="grid gap-6">
//           {candidates.map((candidate) => (
//             <Card key={candidate.id} className="p-6">
//               <div className="flex items-center gap-6">
//                 <Avatar className="h-20 w-20">
//                 <AvatarImage 
//                     src={candidate.avatar} 
//                     alt={candidate.name} 
//                     className="object-cover rounded-full" // Ensures the image retains its aspect ratio and fits within a circle
//                   />
//                   <AvatarFallback>
//                     {candidate.name.split(" ").map(n => n[0]).join("")}
//                   </AvatarFallback>
//                 </Avatar>
//                 <div className="flex-1">
//                   <h3 className="text-xl font-semibold">{candidate.name}</h3>
//                   <p className="text-sm text-muted-foreground mb-2">
//                     {candidate.position}
//                   </p>
//                   <p>{candidate.bio}</p>
//                 </div>
//                 <Button>Vote</Button>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }



// "use client"

// import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import { ModeToggle } from "@/components/mode-toggle"
// import Image from "next/image";
// import { Vote, Home, User } from 'lucide-react';
// import Link from "next/link"

// const candidates = [
//   {
//     id: 1,
//     name: "Dr Mahamadu Bawumia",
//     avatar: "/img/Bawumia1.jpg",
//     bio: "Experienced leader with 10 years in community service",
//     position: "President",
//   },
//   {
//     id: 2,
//     name: "John Dramani Mahama",
//     avatar: "/img/dm1.jpg",
//     bio: "Innovation expert with a focus on sustainable development",
//     position: "President",
//   },
// ]

// const clientImages = [
//   "/img/p2.jpg",
//   "/img/p3.png",
// ]

// export default function VotePage() {
//   return (
//     <div className="min-h-screen bg-background">
//       {/* Mobile Top Header - Hidden on larger screens */}
//       <div className="hidden md:flex p-4 justify-between items-center">
//         <Link href={"/"}><Vote className="w-6 h-6"/></Link>
//         <h1 className="text-xl font-bold">Current Election 2024</h1>
//         <ModeToggle />
//       </div>

//       <div className="container mx-auto px-4 py-4">
//         {/* Responsive Carousel */}
//         <div className="mb-6">
//           <Carousel>
//             <CarouselContent>
//               {clientImages.map((image, index) => (
//                 <CarouselItem key={index}>
//                   <div className="aspect-video relative rounded-lg overflow-hidden">
//                     <Image
//                       src={image}
//                       alt={`Event ${index}`}
//                       fill
//                       className="object-cover"
//                       quality={80}
//                     />
//                     <div className="absolute inset-0 bg-black/50" />
//                     <div className="absolute bottom-4 left-4 text-white">
//                       <h2 className="text-lg font-bold">Event {index + 1}</h2>
//                       <p className="text-sm">Voting event</p>
//                     </div>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <CarouselPrevious className="hidden md:flex" />
//             <CarouselNext className="hidden md:flex" />
//           </Carousel>
//         </div>

//         {/* Candidate Cards */}
//         <div className="space-y-4 mb-20">
//           {candidates.map((candidate) => (
//             <Card key={candidate.id} className="p-4">
//               <div className="flex items-center gap-4">
//                 <Avatar className="h-16 w-16">
//                   <AvatarImage 
//                     src={candidate.avatar} 
//                     alt={candidate.name} 
//                     className="object-cover" 
//                   />
//                   <AvatarFallback>
//                     {candidate.name.split(" ").map(n => n[0]).join("")}
//                   </AvatarFallback>
//                 </Avatar>
//                 <div className="flex-1">
//                   <h3 className="text-lg font-semibold">{candidate.name}</h3>
//                   <p className="text-xs text-muted-foreground mb-1">
//                     {candidate.position}
//                   </p>
//                   <p className="text-sm">{candidate.bio}</p>
//                 </div>
//                 <Button size="sm">Vote</Button>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* Mobile Bottom Navigation */}
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
//           </div>
//           {/* <Link href="/settings" className="flex flex-col items-center justify-center">
//             <Settings className="w-6 h-6" />
//             <span className="text-xs">Settings</span>
//           </Link> */}
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import { useState } from 'react';
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ModeToggle } from "@/components/mode-toggle"
import Image from "next/image";
import { Vote, Home, User, MoreHorizontal } from 'lucide-react';
import Link from "next/link"
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

const candidates = [
  {
    id: 1,
    name: "Dr Mahamadu Bawumia",
    avatar: "/img/Bawumia1.jpg",
    bio: "Experienced leader with 10 years in community service",
    position: "President",
  },
  {
    id: 2,
    name: "John Dramani Mahama",
    avatar: "/img/dm1.jpg",
    bio: "Innovation expert with a focus on sustainable development",
    position: "President",
  },
]

const clientImages = [
  "/img/p2.jpg",
  "/img/p3.png",
]

export default function VotePage() {
  const [loadingNav, setLoadingNav] = useState<'home' | 'vote' | 'admin' | null>(null);
  const router = useRouter();

  const handleNavigation = (path: string, navType: 'home' | 'vote' | 'admin') => {
    setLoadingNav(navType);
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Top Header - Hidden on larger screens */}
      <div className="hidden md:flex p-4 justify-between items-center">
        <Link href={"/"}><Vote className="w-6 h-6"/></Link>
        <h1 className="text-xl font-bold">Current Election 2024</h1>
        <ModeToggle />
      </div>

      <div className="container mx-auto px-4 py-4">
        {/* Responsive Carousel */}
        <div className="mb-6">
          <Carousel>
            <CarouselContent>
              {clientImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`Event ${index}`}
                      fill
                      className="object-cover"
                      quality={80}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h2 className="text-lg font-bold">Event {index + 1}</h2>
                      <p className="text-sm">Voting event</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Candidate Cards */}
        <div className="space-y-4 mb-20">
          {candidates.map((candidate) => (
            <Card key={candidate.id} className="p-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage 
                    src={candidate.avatar} 
                    alt={candidate.name} 
                    className="object-cover" 
                  />
                  <AvatarFallback>
                    {candidate.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{candidate.name}</h3>
                  <p className="text-xs text-muted-foreground mb-1">
                    {candidate.position}
                  </p>
                  <p className="text-sm">{candidate.bio}</p>
                </div>
                <Button size="sm">Vote</Button>
              </div>
            </Card>
          ))}
        </div>
        <Footer/>
      </div>

      {/* Mobile Bottom Navigation */}
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
    </div>
  )
}
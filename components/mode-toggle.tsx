"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}



// now lets work on the admin part. we will create a shadcn ui admin-view (mobile responsive), side bar contains 4 pages with icons, dashboard-analytics, candidates, income, account page.
// Add another button in the landing page adjacent to the "vote now" button, use an icon for admin button, just the icon, and upon clicking, let it open a clerk login (centered on the page), upon logging in as an admin successfully, redirect to another auth form (centered on the page) with shadcn ui containing fields: 1. client name, 2. client email, 3. client phone number, 4. polling occasion name, 5. duration of polling, should be a shadcn ui datepicker for start and enddate, after the dates are picked use moment.js to calculate duration and show it in the form instantly, 6. number of admins field, this part should be a sub-form containing 1.username 2.password, create a "+" icon from lucide-react, when clicked will add more of these to add more admins, in this part, the password should be a generated password with a see icon in the input field that makes the password visible, create a function that generates random 8 digits password for each sub-form when added and a function to make the password visible when clicked. after everything is filled enable the submit button for the entire form and submit using server actions from next 14 to the database, then redirect to the candidate page in the admin view.

// in the dashboard-analytics create 1. shadcn ui bar chart with animation for our dummy candidate votes, simulate an increment of vote and order the bars in descending order of votes with animations in realtime. 2. shadcn ui card simulating realtime voters increasing in numbers (smooth animation as numbers changes) 3. shadcn ui for gender of voters, let it update real time with smooth animation as the number of males or females add up, also visisualization for gender based voters and the candidates they voted for, 4. shadcn ui bar chart for demographic data, simulate it realtime, and let the bars animate as the number increases.
// Next is the candidate page which contains the list of candiates(create dummy list), with a button at left top for Adding Candidates. the button should open a shadcn ui sheet with form to add a candidate using server action forms from next 14. when all fields arent filled, disable the submit button, if all fields are filled submit the data to the database (mongodb), and list all the candidates in the page from the database. render it smoothly with animation. remember to create a shadcn ui skeleton as the candidates page is loading. in the list add button icons for edit and delete, let edit button open a prefilled sheet of the candidates data that can be edited, create component for edit, the functionality for delete using server actions, that will function in the database.
// Next is the income page, simulate money increment from voters in a shadcn ui smooth card with animation as the numbers change, create an expense card also with the same design. (server component) i will be using Arkesel api which takes money as payment from voters using ussd and saving their payment in the database, then i pull that data into the income card for displaying.
// next is the account page that contains the admins accounts that was created in the beginning, each should be displayed in a shadcn ui table with edit and delete button which is functional, create an edit compenets that invokes a shadcn ui sheet prefilled with the details to be edited, and for the delete, call a server action to delete the admin account from the database. Above this page should be a count down timer reducing by the number of hours for the duration of the occassion taken from the admin form at the beginning and the current time or hour elasped using moment.js

// all buttons and links should have an icon, the admin page should have a light/dark mode, all loading pages should have skeleton component to simulate loading, footer should be powered by "qodexcore"on the sidebar, remember that all should be mobile responsive, create mongoose schema using mongodb, mongodb connect in their respective files, make sure all the types are defined in the code you write for me or where to add the types which you will write, you can use dummy data to make visuals possible, remember to give me full code for all i v asked of u



// This is a comprehensive project that I'll help you build step by step. Let's break it down into manageable parts. Due to the length, I'll provide the implementation in multiple responses.

// Let's start with the basic setup and initial components:

// 1. First, let's set up the MongoDB connection and schemas:

// ```typescript
// // lib/mongodb.ts
// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI!;

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable');
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function connectDB() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//       return mongoose;
//     });
//   }

//   try {
//     cached.conn = await cached.promise;
//   } catch (e) {
//     cached.promise = null;
//     throw e;
//   }

//   return cached.conn;
// }

// export default connectDB;
// ```

// 2. Let's create the Mongoose schemas:

// ```typescript
// // models/Admin.ts
// import mongoose from 'mongoose';

// const AdminSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   clientName: String,
//   clientEmail: String,
//   clientPhone: String,
//   pollingOccasion: String,
//   startDate: Date,
//   endDate: Date,
//   duration: String,
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export default mongoose.models.Admin || mongoose.model('Admin', AdminSchema);

// // models/Candidate.ts
// const CandidateSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   position: String,
//   votes: {
//     type: Number,
//     default: 0,
//   },
//   image: String,
//   bio: String,
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export default mongoose.models.Candidate || mongoose.model('Candidate', CandidateSchema);

// // models/Vote.ts
// const VoteSchema = new mongoose.Schema({
//   candidateId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Candidate',
//     required: true,
//   },
//   voterGender: String,
//   voterAge: Number,
//   amount: Number,
//   timestamp: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export default mongoose.models.Vote || mongoose.model('Vote', VoteSchema);
// ```

// 3. Let's create the types:

// ```typescript
// // types/index.ts
// export interface Admin {
//   _id: string;
//   username: string;
//   password: string;
//   clientName: string;
//   clientEmail: string;
//   clientPhone: string;
//   pollingOccasion: string;
//   startDate: Date;
//   endDate: Date;
//   duration: string;
//   createdAt: Date;
// }

// export interface Candidate {
//   _id: string;
//   name: string;
//   position: string;
//   votes: number;
//   image: string;
//   bio: string;
//   createdAt: Date;
// }

// export interface Vote {
//   _id: string;
//   candidateId: string;
//   voterGender: string;
//   voterAge: number;
//   amount: number;
//   timestamp: Date;
// }

// export interface AdminFormData {
//   clientName: string;
//   clientEmail: string;
//   clientPhone: string;
//   pollingOccasion: string;
//   startDate: Date;
//   endDate: Date;
//   admins: Array<{
//     username: string;
//     password: string;
//   }>;
// }
// ```

// 4. Let's create the admin layout with the sidebar:

// ```typescript
// // components/layouts/AdminLayout.tsx
// import { FC, ReactNode } from 'react';
// import { Sidebar } from '@/components/Sidebar';
// import { ThemeProvider } from '@/components/theme-provider';

// interface AdminLayoutProps {
//   children: ReactNode;
// }

// const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
//   return (
//     <ThemeProvider
//       attribute="class"
//       defaultTheme="system"
//       enableSystem
//       disableTransitionOnChange
//     >
//       <div className="flex h-screen">
//         <Sidebar />
//         <main className="flex-1 overflow-auto p-4">
//           {children}
//         </main>
//       </div>
//     </ThemeProvider>
//   );
// };

// export default AdminLayout;
// ```

// 5. Let's create the Sidebar component:

// ```typescript
// // components/Sidebar.tsx
// import { FC } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { cn } from '@/lib/utils';
// import {
//   LayoutDashboard,
//   Users,
//   DollarSign,
//   UserCog,
//   LogOut
// } from 'lucide-react';

// const routes = [
//   {
//     label: 'Dashboard',
//     icon: LayoutDashboard,
//     href: '/admin/dashboard',
//   },
//   {
//     label: 'Candidates',
//     icon: Users,
//     href: '/admin/candidates',
//   },
//   {
//     label: 'Income',
//     icon: DollarSign,
//     href: '/admin/income',
//   },
//   {
//     label: 'Account',
//     icon: UserCog,
//     href: '/admin/account',
//   },
// ];

// export const Sidebar: FC = () => {
//   const pathname = usePathname();

//   return (
//     <div className="space-y-4 py-4 flex flex-col h-full bg-slate-900 text-white">
//       <div className="px-3 py-2 flex-1">
//         <Link href="/admin/dashboard" className="flex items-center pl-3 mb-14">
//           <h1 className="text-2xl font-bold">
//             Admin Panel
//           </h1>
//         </Link>
//         <div className="space-y-1">
//           {routes.map((route) => (
//             <Link
//               key={route.href}
//               href={route.href}
//               className={cn(
//                 "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
//                 pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
//               )}
//             >
//               <div className="flex items-center flex-1">
//                 <route.icon className="h-5 w-5 mr-3" />
//                 {route.label}
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//       <div className="px-3 py-2">
//         <div className="text-xs text-center text-zinc-400">
//           Powered by qodexcore
//         </div>
//       </div>
//     </div>
//   );
// };
// ```

// Would you like me to continue with the next parts? The next parts will include:
// 1. Admin authentication and form
// 2. Dashboard analytics with charts
// 3. Candidates management
// 4. Income page
// 5. Account management
// 6. Server actions and API routes

// Let me know if you want me to explain any part of the code provided so far or proceed with the next sections.

// i want u to proceed

import { FC, ReactNode } from 'react';
import { Sidebar } from '@/components/Sidebar';
import type { Metadata } from "next";

import "../../app/globals.css";


export const metadata: Metadata = {
  title: "Admin",
  description: "Generated by create next app",
};


interface AdminLayoutProps {
  children: ReactNode;
  
}

const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body> 
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 overflow-auto p-4">
          {children}
        </main>
      </div>
    </body>
    </html>
   
  );
};

export default AdminLayout;
import type { Metadata } from 'next'
import './globals.css'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'BrainBoost - Apne Dimag Ko Tez Banayein',
  description: 'Brain training games aur cognitive exercises',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi">
      <body>
        <Header />

        {/* 👇 FIXED HEADER OFFSET */}
        <main className="pt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
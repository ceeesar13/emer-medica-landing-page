import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Scripts from '@/components/Scripts';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Emermédica - Atención Médica Inmediata en Casa y Online, 24/7',
  description: 'Servicio de atención médica inmediata en casa y online, disponible 24/7. Más de 33 años cuidando la salud de las familias colombianas.',
  keywords: 'atención médica, telemedicina, urgencias, emergencias, salud, Colombia',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#003366" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
        <Scripts />
      </body>
    </html>
  );
} 
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'CodanteVagas',
  description:
    'O CodanteVagas conecta candidatos a empregos ideais, oferecendo funcionalidades intuitivas para busca e gerenciamento de vagas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

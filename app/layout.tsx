import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fana Milling Center | Laboratorio Dental CAD/CAM y Suministros de Precisión',
  description: 'Tu socio tecnológico en fabricación de prótesis y suministros. Calidad, rapidez y el flujo digital CAD/CAM más eficiente.',
  keywords: 'laboratorio dental, CAD/CAM, prótesis dental, zirconio, implantes, fresado dental',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="font-lato antialiased">
        {children}
      </body>
    </html>
  );
}

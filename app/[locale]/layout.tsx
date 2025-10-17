import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import '../globals.css';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';

const locales = ['es', 'en'];

export const metadata: Metadata = {
  title: 'Fana Milling Center | Laboratorio Dental CAD/CAM y Suministros de Precisión',
  description: 'Tu socio tecnológico en fabricación de prótesis y suministros. Calidad, rapidez y el flujo digital CAD/CAM más eficiente.',
  keywords: 'laboratorio dental, CAD/CAM, prótesis dental, zirconio, implantes, fresado dental',
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="font-lato antialiased">
        <NextIntlClientProvider messages={messages}>
          <CustomCursor />
          <Navigation currentLocale={locale} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

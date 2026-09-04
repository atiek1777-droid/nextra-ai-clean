import { Space_Grotesk, IBM_Plex_Sans, Cairo, Tajawal } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '../components/LanguageProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';

const displayEn = Space_Grotesk({
  subsets: ['latin'],
  weight: ["400", "500", "700"],
  variable: '--font-display-en'
});
const bodyEn = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ["400", "500", "700"],
  variable: '--font-body-en'
});
// Headings: Cairo Bold — geometric, bold, high-clarity Arabic display face.
const displayAr = Cairo({
  subsets: ['arabic'],
  weight: ['700', '800', '900'],
  variable: '--font-display-ar'
});
// Body copy: Tajawal — comfortable, highly readable at small sizes.
const bodyAr = Tajawal({
  subsets: ['arabic'],
  weight: ["400", "500", "700"],
  variable: '--font-body-ar'
});

export const metadata = {
  title: 'nextra-ai — استوديو أوامر الذكاء الاصطناعي',
  description:
    'nextra-ai: استوديو مصغّر لتوليد وفحص أوامر الذكاء الاصطناعي للنصوص والصور والفيديو، بالعربية والإنجليزية.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${displayEn.variable} ${bodyEn.variable} ${displayAr.variable} ${bodyAr.variable} font-bodyar bg-ink text-platinum antialiased`}
      >
        <LanguageProvider>
          <Header />
          <main className="min-h-[70vh]">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

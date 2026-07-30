import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Nihaan\'s Dental Clinic - Bandlaguda | Premium Dental Care in Hyderabad',
  description: 'Nihaan\'s Dental Clinic - Bandlaguda offers premium dental care in Hyderabad, Telangana. Expert dentists and modern technology. Book now!',
  openGraph: { title: 'Nihaan\'s Dental Clinic - Bandlaguda | Premium Dental Care', description: 'Expert dental care in Hyderabad', type: 'website', locale: 'en_IN' },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}

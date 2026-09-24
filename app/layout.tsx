import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://acai-de-lei-penha.jvictor-franci.chatgpt.site'),
  title: 'Açaí de Lei | Puxa a cadeira',
  description: 'Açaí cremoso, caprichado e sem caô. Delivery na Penha, RJ. Puxa a cadeira e pede um de lei.',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Açaí de Lei | Puxa a cadeira',
    description: 'Delivery de açaí na Penha, RJ. Puxa a cadeira e pede um de lei.',
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: 'https://acai-de-lei-penha.jvictor-franci.chatgpt.site/acai-morango.jpg', width: 1216, height: 2160, alt: 'Copo real do Açaí de Lei com morangos' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Açaí de Lei | Puxa a cadeira',
    description: 'Delivery de açaí na Penha, RJ. Puxa a cadeira e pede um de lei.',
    images: ['https://acai-de-lei-penha.jvictor-franci.chatgpt.site/acai-morango.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}

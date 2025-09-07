import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Sam Cranstone',
  description: 'Get in touch with Sam Cranstone Racing for sponsorship opportunities, media enquiries, and general questions. Professional motorcycle racing contact.',
  keywords: 'contact Sam Cranstone, racing sponsorship, motorcycle racing enquiries, BMCRC contact, racing partnerships',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
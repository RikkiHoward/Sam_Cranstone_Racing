import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '2025 Race Calendar | Sam Cranstone',
  description: '2025 racing calendar for Sam Cranstone competing in BMCRC Rookie 1000 and Bemsee MRO championships. Race dates, circuits, and results.',
  keywords: 'Sam Cranstone 2025 calendar, BMCRC Rookie 1000 calendar, Bemsee MRO dates, motorcycle racing schedule, UK racing calendar',
};

export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
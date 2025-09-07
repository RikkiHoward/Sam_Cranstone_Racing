import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const dynamic = 'force-static';

export default function InternalServerError() {
  return (
    <div className="min-h-[70vh] grid place-items-center px-6 py-24 text-center">
      <div>
        <p className="text-sm text-red-400 font-semibold tracking-wider">500</p>
        <h1 className="mt-2 text-3xl md:text-5xl font-orbitron font-bold">Server Error</h1>
        <p className="mt-4 text-gray-400">
          Something went wrong on our end. Please try refreshing the page.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  });
}

export function formatDateRange(startDate: string, endDate?: string): string {
  const start = new Date(startDate);
  
  if (!endDate) {
    return start.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }
  
  const end = new Date(endDate);
  const startFormatted = start.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });
  
  const endFormatted = end.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  
  return `${startFormatted} - ${endFormatted}`;
}

export function getPodiumColor(result: string): { bg: string; text: string } {
  if (result.includes('P1')) return { bg: 'bg-yellow-400/20', text: 'text-yellow-300' };
  if (result.includes('P2')) return { bg: 'bg-gray-400/20', text: 'text-gray-200' };
  if (result.includes('P3')) return { bg: 'bg-orange-400/20', text: 'text-orange-300' };
  return { bg: 'bg-red-500/20', text: 'text-red-400' };
}
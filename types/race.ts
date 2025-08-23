export interface Race {
  round?: number;
  slug?: string;
  date: string;
  end_date?: string;
  circuit: string;
  series: string;
  class: string;
  status: 'upcoming' | 'completed';
  time?: string;
  result?: string;
  best_lap?: string;
  notes?: string;
  galleryTag?: string;
}
export interface Sponsor {
  name: string;
  url: string;
  logo: string;
  tier: 'headline' | 'associate' | 'support';
  tagline: string;
}
import type { ElevationDataset } from '@/types/elevation';

import brands from './brands-hatch-indy.json';
import donington from './donington-park-gp.json';
import snetterton from './snetterton-300.json';

export const ELEVATION_DATA: Record<string, ElevationDataset> = {
  'brands-hatch-indy': brands as ElevationDataset,
  'donington-park-gp': donington as ElevationDataset,
  'snetterton-300': snetterton as ElevationDataset
};

export function getElevation(slug: string): ElevationDataset | null {
  return ELEVATION_DATA[slug] ?? null;
}
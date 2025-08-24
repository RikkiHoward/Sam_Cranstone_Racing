export type CornerMarker = {
  name: string;
  /** distance from start/finish in meters */
  dist: number;
};

export type ElevationDataset = {
  /** total length in meters */
  length: number;
  /** sample distances in meters from S/F (ascending) */
  x: number[];
  /** elevations in meters (same length as x) */
  y: number[];
  /** labeled corner/feature markers (optional) */
  corners?: CornerMarker[];
};
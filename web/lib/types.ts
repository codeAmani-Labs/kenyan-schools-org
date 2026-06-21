export type Tier = 'National' | 'Extra-County' | 'County' | string;
export type Gender = 'Boys' | 'Girls' | 'Mixed' | 'SNE' | null;

export interface School {
  id: string | number; // supports legacy JSON + Prisma cuid
  indexNo: string; // CodeAmani Labs / KSO internal unique index e.g. KSO-0042
  slug: string;
  name: string;
  county: string;
  tier: Tier;
  rank: number | null;
  gender: Gender;
  cluster: string | null;

  // Community-enrichable fields
  shortName: string | null;
  address: string | null;
  website: string | null;
  phone: string | null;
  email: string | null;
  lat: number | null;
  lng: number | null;
  gpsConfidence: string | null;
  sportsNicknames: string | null;
  notes: string | null;
  sources: Array<{ id?: string; label: string; url?: string }>;
  established: string | null;

  addedAt: string;
  lastUpdated: string;
}

export interface Suggestion {
  id: string;
  schoolId?: number;
  schoolSlug?: string;
  schoolName: string;
  field: string;
  currentValue: string;
  proposedValue: string;
  source?: string;
  contributor?: string;
  message?: string;
  createdAt: string;
  status: 'pending' | 'approved' | 'rejected';
}

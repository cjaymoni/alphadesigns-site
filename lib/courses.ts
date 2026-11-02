export const COURSES = ['Basic', 'Intensive', 'School programme', 'Bespoke project', 'Not sure yet'] as const;
export type Course = (typeof COURSES)[number];

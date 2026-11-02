'use client';

import { createContext, useContext, useState } from 'react';
import type { Course } from '@/lib/courses';

type Ctx = { course: Course; setCourse: (c: Course) => void };
const CourseContext = createContext<Ctx | null>(null);

export function CourseProvider({ children }: { children: React.ReactNode }) {
  const [course, setCourse] = useState<Course>('Basic');
  return <CourseContext.Provider value={{ course, setCourse }}>{children}</CourseContext.Provider>;
}

export function useCourse() {
  const ctx = useContext(CourseContext);
  if (!ctx) throw new Error('useCourse must be used inside CourseProvider');
  return ctx;
}

// A link to the enquiry form that also preselects the matching course.
export function CourseLink({
  course,
  className,
  children,
}: {
  course: Course;
  className?: string;
  children: React.ReactNode;
}) {
  const { setCourse } = useCourse();
  return (
    <a className={className} href="#enrol" onClick={() => setCourse(course)}>
      {children}
    </a>
  );
}

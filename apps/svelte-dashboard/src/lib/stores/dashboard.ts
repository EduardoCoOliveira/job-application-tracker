import { derived, writable } from 'svelte/store';
import { applications as seedApplications } from '../data/applications';
import type { ApplicationStatus, JobApplication } from '../types';

const STORAGE_KEY = 'job-application-tracker.applications';

function isJobApplicationArray(value: unknown): value is JobApplication[] {
  return (
    Array.isArray(value) &&
    value.every(
      (item) =>
        typeof item === 'object' &&
        item !== null &&
        typeof item.id === 'string' &&
        typeof item.company === 'string' &&
        typeof item.position === 'string' &&
        typeof item.status === 'string' &&
        typeof item.modality === 'string' &&
        typeof item.appliedAt === 'string' &&
        typeof item.nextAction === 'string' &&
        typeof item.updatedAt === 'string' &&
        typeof item.source === 'string' &&
        typeof item.summary === 'string',
    )
  );
}

function loadApplications(): JobApplication[] {
  if (typeof localStorage === 'undefined') {
    return seedApplications;
  }

  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return seedApplications;
  }

  try {
    const parsed = JSON.parse(raw);
    return isJobApplicationArray(parsed) && parsed.length > 0
      ? parsed
      : seedApplications;
  } catch {
    return seedApplications;
  }
}

export const applications = writable<JobApplication[]>(loadApplications());
export const selectedStatus = writable<ApplicationStatus | 'all'>('all');

if (typeof window !== 'undefined') {
  window.addEventListener('storage', (event) => {
    if (event.key === STORAGE_KEY) {
      applications.set(loadApplications());
    }
  });
}

export const filteredApplications = derived(
  [applications, selectedStatus],
  ([$applications, $selectedStatus]) =>
    $applications.filter((application) =>
      $selectedStatus === 'all' ? true : application.status === $selectedStatus,
    ),
);

export const metrics = derived([applications], ([$applications]) => {
  const active = $applications.filter(
    (application) =>
      application.status !== 'rejected' && application.status !== 'offer',
  ).length;

  const interview = $applications.filter(
    (application) => application.status === 'interview',
  ).length;

  const remoteFriendly = $applications.filter(
    (application) => application.modality !== 'onsite',
  ).length;

  const offer = $applications.filter(
    (application) => application.status === 'offer',
  ).length;

  return { active, interview, remoteFriendly, offer };
});

export const recentApplications = derived([applications], ([$applications]) =>
  [...$applications].slice(0, 4),
);

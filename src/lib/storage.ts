const KEYS = {
  user: "ef.user",
  entries: "ef.entries",
  saved: "ef.saved",
  stories: "ef.stories",
  community: "ef.community",
} as const;

export type User = {
  name: string;
  email: string;
  provider?: string;
};

export type JournalEntry = {
  id: string;
  createdAt: string;
  body: string;
  forEstefani: boolean;
  prompt?: string;
};

export type Story = {
  id: string;
  createdAt: string;
  tema: string;
  title: string;
  body: string;
  author: string;
  anonymous: boolean;
};

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getUser(): User | null {
  return read<User | null>(KEYS.user, null);
}

export function setUser(user: User | null) {
  if (!user) localStorage.removeItem(KEYS.user);
  else write(KEYS.user, user);
}

export function getEntries(): JournalEntry[] {
  return read<JournalEntry[]>(KEYS.entries, []);
}

export function addEntry(entry: Omit<JournalEntry, "id" | "createdAt">) {
  const next: JournalEntry = {
    ...entry,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  write(KEYS.entries, [next, ...getEntries()]);
  return next;
}

export function getSaved(): string[] {
  return read<string[]>(KEYS.saved, []);
}

export function toggleSaved(slug: string) {
  const current = getSaved();
  const next = current.includes(slug) ? current.filter((s) => s !== slug) : [...current, slug];
  write(KEYS.saved, next);
  return next;
}

export function getStories(): Story[] {
  return read<Story[]>(KEYS.stories, []);
}

export function addStory(story: Omit<Story, "id" | "createdAt">) {
  const next: Story = {
    ...story,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  write(KEYS.stories, [next, ...getStories()]);
  return next;
}

export function getCommunity(): Story[] {
  return read<Story[]>(KEYS.community, []);
}

export function addCommunity(post: Omit<Story, "id" | "createdAt">) {
  const next: Story = {
    ...post,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  write(KEYS.community, [next, ...getCommunity()]);
  return next;
}

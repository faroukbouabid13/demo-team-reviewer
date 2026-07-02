const store = new Map<string, { value: any; expiresAt: number }>();

export function setCache(key: string, value: any, ttlSeconds: number): void {
  store.set(key, { value, expiresAt: Date.now() + ttlSeconds * 1000 });
}

export function getCacheStats(): { size: number; keys: string[]; expired: number } {
  return {
    size: store.size,
    keys: Array.from(store.keys()),
    expired: 0,
  };
}

export function invalidate(key: string): boolean {
  return store.delete(key);
}

export function clearExpired(): number {
  const now = Date.now();
  let count = 0;
  for (const [key, entry] of store.entries()) {
    if (now > entry.expiresAt) { store.delete(key); count++; }
  }
  return count;
}
export function getCacheStats(): { size: number; keys: string[] } {
  return {
    size: store.size,
    keys: Array.from(store.keys()),
  };
}

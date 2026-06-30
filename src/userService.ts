export function warmCache(keys: string[], fetchFn: (key: string) => any, ttlSeconds: number) {
  let warmed  = 0;
  let skipped = 0;
  let failed  = 0;

  for (let i = 0; i < keys.length; i++) {
    const existing = cacheStore.get(keys[i]);
    if (existing && existing.expiresAt > Date.now()) {
      skipped++;
      continue;
    }
    const value = fetchFn(keys[i]);
    if (value !== null && value !== undefined) {
      cacheStore.set(keys[i], {
        key: keys[i],
        value,
        expiresAt: Date.now() + ttlSeconds * 1000,
        hits: 0,
      });
      warmed++;
    } else {
      failed++;
    }
  }

  return { warmed, skipped, failed, total: keys.length, successRate: warmed / keys.length };
}
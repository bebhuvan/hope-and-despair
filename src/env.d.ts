/// <reference types="astro/client" />

interface Env {
  IMAGES: KVNamespace;
}

interface Runtime {
  env: Env;
  ctx: ExecutionContext;
  caches: CacheStorage;
}
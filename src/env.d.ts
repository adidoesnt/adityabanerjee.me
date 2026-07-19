/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly BLOG_ENABLED?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

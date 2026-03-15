import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/**/*.{png,jpg,jpeg,webp,avif,gif}',
  { eager: true }
);

/**
 * Resolves an image path (e.g. "/assets/projects/foo/bar.png")
 * to an Astro ImageMetadata object for use with <Image />.
 * Returns undefined for SVGs or missing images.
 */
export function resolveImage(path: string): ImageMetadata | undefined {
  const key = `/src${path}`;
  return images[key]?.default;
}

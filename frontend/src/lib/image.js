// Doctor images are a mix of local ESM imports (ImageMetadata objects) and
// remote hotlinked URL strings (see project notes on doctor photo sourcing).
// This normalizes either into a plain src string for places that can't use
// astro:assets' <Image /> component directly (e.g. JSON-LD, mixed-source lists).
export function imageSrc(image) {
  return typeof image === "string" ? image : image.src;
}

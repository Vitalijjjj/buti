import { MetaPixel } from "./MetaPixel";
import { TikTokPixel } from "./TikTokPixel";
import { PinterestTag } from "./PinterestTag";

/**
 * PixelManager - Centralized tracking pixel management
 *
 * Automatically loads enabled pixels based on environment variables.
 * Add pixel IDs to .env.local to enable tracking.
 */
export function PixelManager() {
  return (
    <>
      <MetaPixel />
      <TikTokPixel />
      <PinterestTag />
    </>
  );
}

import { generateOgImage } from "@/src/lib/og-image";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return generateOgImage(size);
}

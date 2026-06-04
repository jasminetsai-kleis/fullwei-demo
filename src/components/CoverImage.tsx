'use client';

import { useState } from 'react';
import { CATEGORY_COLORS, type CategoryId } from '@/data/posts';

/**
 * Blog cover thumbnail with graceful fallback.
 *
 * Looks for /covers/cover-<slug>.png by filename convention. If the file is
 * missing (not generated yet) the <img> errors out and we fall back to the
 * original solid category-colour band + dot pattern — so cards never show a
 * broken image. Drop a file into public/covers/ and it lights up automatically.
 */
export default function CoverImage({
  slug,
  category,
  heightClass,
  label,
}: {
  slug: string;
  category: CategoryId;
  heightClass: string;
  label?: string;
}) {
  const [hasImage, setHasImage] = useState(true);

  return (
    <div className={`relative ${heightClass} overflow-hidden ${CATEGORY_COLORS[category]}`}>
      {/* Fallback dot pattern (always behind the photo) */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />

      {hasImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/covers/cover-${slug}.png`}
          alt=""
          loading="lazy"
          onError={() => setHasImage(false)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      )}

      {label && (
        <>
          {/* Legibility scrim under the label */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
          <span className="absolute bottom-4 left-6 z-10 font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">
            {label}
          </span>
        </>
      )}
    </div>
  );
}

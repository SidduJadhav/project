'use client';

import { Suspense } from 'react';
import '@google/model-viewer/dist/model-viewer';

interface ModelViewerProps {
  src: string;
  alt?: string;
  poster?: string;
  className?: string;
}

export default function ModelViewer({ src, alt, poster, className }: ModelViewerProps) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      }
    >
      <model-viewer
        src={src}
        alt={alt || '3D model'}
        poster={poster}
        class={className}
        auto-rotate
        camera-controls
        shadow-intensity="1"
      ></model-viewer>
    </Suspense>
  );
}

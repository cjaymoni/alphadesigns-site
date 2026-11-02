import { ImageResponse } from 'next/og';

// Home-screen icon for iPhones and iPads (also used as the logo in search results).
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f1b2d',
        }}
      >
        <svg width="132" height="132" viewBox="0 0 100 100">
          <polygon points="12,86 50,10 88,86 68,86 50,66 32,86" fill="#ffffff" />
          <rect x="43" y="42" width="14" height="14" fill="#f2a900" />
        </svg>
      </div>
    ),
    size,
  );
}

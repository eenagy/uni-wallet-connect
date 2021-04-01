import React from 'react';

export function WalletConnectIcon({ width = '24px', height = '24px' }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="24" height="15.0867" fill="url(#pattern1)" />
      <defs>
        <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image1" transform="translate(-0.00968744) scale(0.00339792 0.00540541)" />
        </pattern>
        <image
          id="image1"
          width="300"
          height="185"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

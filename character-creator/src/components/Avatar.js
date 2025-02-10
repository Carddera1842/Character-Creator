import React from 'react';

// We can reference the images from 'public' by using "/filename.png"
// or you can import them if they are in src/assets. For simplicity, let's do public references.

function Avatar({ hairStyle, outfit, hairColor }) {
  // We'll build URLs to the images based on user selections
  const hairImg = `/${hairStyle}.png`;    // e.g. "/hair1.png"
  const outfitImg = `/${outfit}.png`;     // e.g. "/outfit1.png"

  // Optional: A style filter to colorize the hair image
  // Using a quick approach with an 'invert' or 'drop-shadow' or 'hue-rotate' might be an oversimplification.
  // For a real tinted color, you might consider using an <svg> approach or a canvas library.
  // But let's do a simple approach with a "drop-shadow" filter to illustrate the idea:
  const hairStyleFilter = {
    filter: `drop-shadow(0px 0px 6px ${hairColor})`
  };

  return (
    <div style={{ position: 'relative', width: 200, height: 300 }}>
      {/* Base Body */}
      <img
        src="/body.png"
        alt="Character Base"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          width: '100%',
          height: 'auto'
        }}
      />

      {/* Hair */}
      <img
        src={hairImg}
        alt="Hair"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 2,
          width: '100%',
          height: 'auto',
          ...hairStyleFilter // apply the filter
        }}
      />

      {/* Outfit */}
      <img
        src={outfitImg}
        alt="Outfit"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 3,
          width: '100%',
          height: 'auto'
        }}
      />
    </div>
  );
}

export default Avatar;

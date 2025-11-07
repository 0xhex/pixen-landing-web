export default function TestFont() {
  return (
    <div className="min-h-screen bg-white p-12">
      <h1 className="text-6xl font-bold mb-8 font-eurostile" style={{ fontFamily: 'Eurostile, Orbitron, sans-serif' }}>
        Eurostile Font Test - Pixen
      </h1>
      <div className="space-y-4">
        <p className="text-2xl font-eurostile">This should be in Eurostile font</p>
        <p className="text-xl">This is default Inter font for comparison</p>
        <div className="mt-8 p-4 bg-gray-100 rounded">
          <p className="text-sm text-gray-600">
            If you see the same font for both lines above, the Eurostile font is not loading.
            <br />
            Check browser console (F12) for font loading errors.
            <br />
            Try hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
          </p>
        </div>
      </div>
    </div>
  )
}


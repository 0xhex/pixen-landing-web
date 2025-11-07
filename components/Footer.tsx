export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Pixen</h3>
            <p className="text-gray-400">
              Transform your photos into stunning images and videos with AI-powered templates.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#features-section" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#templates-section" className="hover:text-white transition-colors">
                  Templates
                </a>
              </li>
              <li>
                <a href="#video-section" className="hover:text-white transition-colors">
                  Demo
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition-colors">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Download</h4>
            <a
              href="https://apps.apple.com/app/pixen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-us?size=250x83&releaseDate=1609459200"
                alt="Download on the App Store"
                className="h-12 w-auto"
              />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pixen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


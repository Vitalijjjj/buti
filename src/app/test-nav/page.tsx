import { Navbar } from "@/components/navigation/Navbar";

export default function TestNavPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      {/* New Mega Menu Navigation */}
      <Navbar />

      {/* Test Content */}
      <div className="pt-32 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
              Navigation Test Page
            </h1>
            <p className="text-xl text-neutral-600">
              Preview your new mega menu navigation system
            </p>
          </div>

          {/* Testing Instructions */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                ✓
              </span>
              Features to Test
            </h2>

            <div className="space-y-6">
              {/* Desktop Testing */}
              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="font-semibold text-lg text-neutral-900 mb-3">
                  Desktop Navigation (Large Screens)
                </h3>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">→</span>
                    <span>
                      <strong>Hover over &quot;TREATMENTS&quot;</strong> - The mega menu should appear with a smooth fade-in animation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">→</span>
                    <span>
                      <strong>Click different categories</strong> in the left sidebar (Injectables, Laser Hair Removal, etc.)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">→</span>
                    <span>
                      <strong>Hover over treatment links</strong> - They should highlight and show a subtle arrow
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">→</span>
                    <span>
                      <strong>Check the right column</strong> - Contains CTAs and trust indicators
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">→</span>
                    <span>
                      <strong>Click outside</strong> - The mega menu should close
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">→</span>
                    <span>
                      <strong>Press ESC key</strong> - Should also close the mega menu
                    </span>
                  </li>
                </ul>
              </div>

              {/* Mobile Testing */}
              <div className="border-l-4 border-accent-rose pl-6">
                <h3 className="font-semibold text-lg text-neutral-900 mb-3">
                  Mobile Navigation (Resize Browser to &lt; 1024px)
                </h3>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <span className="text-accent-rose mr-2">→</span>
                    <span>
                      <strong>Click hamburger menu</strong> (≡) - Drawer should slide in from the right
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-rose mr-2">→</span>
                    <span>
                      <strong>Tap &quot;TREATMENTS&quot;</strong> - Should expand to show categories
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-rose mr-2">→</span>
                    <span>
                      <strong>Tap a category</strong> - Should expand to show treatment links
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-rose mr-2">→</span>
                    <span>
                      <strong>Scroll the drawer</strong> - Should be smooth with sticky CTA at bottom
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-rose mr-2">→</span>
                    <span>
                      <strong>Click X or backdrop</strong> - Should close the menu
                    </span>
                  </li>
                </ul>
              </div>

              {/* Sticky Behavior */}
              <div className="border-l-4 border-primary-400 pl-6">
                <h3 className="font-semibold text-lg text-neutral-900 mb-3">
                  Sticky Header Behavior
                </h3>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">→</span>
                    <span>
                      <strong>Scroll down</strong> - Navigation stays at the top with enhanced shadow
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">→</span>
                    <span>
                      <strong>Scroll back up</strong> - Shadow should reduce smoothly
                    </span>
                  </li>
                </ul>
              </div>

              {/* Accessibility */}
              <div className="border-l-4 border-neutral-400 pl-6">
                <h3 className="font-semibold text-lg text-neutral-900 mb-3">
                  Keyboard Navigation & Accessibility
                </h3>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <span className="text-neutral-400 mr-2">→</span>
                    <span>
                      <strong>Press TAB</strong> - Should move through all navigation items
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neutral-400 mr-2">→</span>
                    <span>
                      <strong>Press ENTER</strong> - Should activate links and buttons
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neutral-400 mr-2">→</span>
                    <span>
                      <strong>Focus indicators</strong> - Should show clear blue rings around focused elements
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Categories Overview */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
              Available Treatment Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Injectables", count: "16 treatments" },
                { name: "Laser Hair Removal", count: "13 treatments" },
                { name: "Skin Treatments", count: "14 treatments" },
                { name: "Body Treatments", count: "11 treatments" },
                { name: "Anti-Ageing", count: "13 treatments" },
                { name: "Men's Treatments", count: "12 treatments" },
              ].map((category, index) => (
                <div
                  key={index}
                  className="p-4 border border-neutral-200 rounded-lg hover:border-primary-600 hover:bg-primary-50 transition-all duration-200"
                >
                  <h3 className="font-semibold text-neutral-900">{category.name}</h3>
                  <p className="text-sm text-neutral-600">{category.count}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison with Old Nav */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
              New vs. Old Navigation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Old Navigation */}
              <div className="p-6 bg-neutral-50 rounded-lg border-2 border-neutral-200">
                <h3 className="font-semibold text-lg text-neutral-700 mb-4">
                  Old FloatingNav
                </h3>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-center">
                    <span className="text-neutral-400 mr-2">•</span>
                    Simple horizontal menu
                  </li>
                  <li className="flex items-center">
                    <span className="text-neutral-400 mr-2">•</span>
                    No dropdown menus
                  </li>
                  <li className="flex items-center">
                    <span className="text-neutral-400 mr-2">•</span>
                    Limited treatment visibility
                  </li>
                  <li className="flex items-center">
                    <span className="text-neutral-400 mr-2">•</span>
                    Basic mobile sheet
                  </li>
                </ul>
              </div>

              {/* New Navigation */}
              <div className="p-6 bg-primary-50 rounded-lg border-2 border-primary-600">
                <h3 className="font-semibold text-lg text-primary-900 mb-4">
                  New Navbar with Mega Menu ⭐
                </h3>
                <ul className="space-y-2 text-sm text-primary-800">
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">✓</span>
                    Full mega menu dropdown
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">✓</span>
                    79 treatment links organized by category
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">✓</span>
                    Solution-focused CTAs
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">✓</span>
                    Mobile accordion menu
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">✓</span>
                    Full accessibility support
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Scroll Test Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              Scroll Test Area
            </h2>
            <p className="text-neutral-600 mb-6">
              Scroll down and back up to test the sticky navigation behavior.
              The navbar should stay at the top of the screen with a smooth shadow transition.
            </p>

            {/* Filler content for scrolling */}
            <div className="space-y-4">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-medium text-neutral-900 mb-2">
                    Scroll Test Section {i + 1}
                  </h3>
                  <p className="text-sm text-neutral-600">
                    This is placeholder content to enable scrolling. Keep scrolling to see the
                    sticky navigation behavior. Notice how the navbar shadow becomes more prominent
                    as you scroll down.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-8 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">
              Ready to Deploy?
            </h2>
            <p className="text-primary-50 mb-6">
              Once you&apos;ve tested everything and you&apos;re happy with the navigation,
              we can replace the old FloatingNav across your entire site.
            </p>
            <div className="space-y-2 text-sm text-primary-100">
              <p>📝 See NAVIGATION_QUICKSTART.md for implementation instructions</p>
              <p>📚 See NAVIGATION_README.md for full documentation</p>
              <p>⚙️ Edit src/data/navigation-data.ts to customize menu content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

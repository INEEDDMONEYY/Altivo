export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 border-t-2 border-slate-200">
      
      <div className="container py-12 sm:py-16 lg:py-20">

        {/* TOP GRID */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12 text-sm text-slate-700">

          {/* BRAND */}
          <div>
            <h3 className="text-black text-lg font-semibold">
              Altivo Aviation
            </h3>

            <p className="mt-3 leading-relaxed text-slate-600">
              A real-time RFQ network for private aviation.
              Connect with verified operators worldwide.
            </p>
          </div>

          {/* PLATFORM */}
          <div>
            <h4 className="text-black font-medium mb-4">Platform</h4>
            <ul className="space-y-2">
              <li className="hover:text-black transition">Request Flight</li>
              <li className="hover:text-black transition">Operators</li>
              <li className="hover:text-black transition">Quotes</li>
              <li className="hover:text-black transition">SLA Tracking</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-black font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li className="hover:text-black transition">About</li>
              <li className="hover:text-black transition">Contact</li>
              <li className="hover:text-black transition">Careers</li>
              <li className="hover:text-black transition">Security</li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-black font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li className="hover:text-black transition">Privacy Policy</li>
              <li className="hover:text-black transition">Terms of Service</li>
              <li className="hover:text-black transition">Cookies</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-8 pt-5 md:mt-12 md:pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-sm text-slate-500 text-center">

          <p className="text-sm text-slate-500 text-center">
            © {new Date().getFullYear()} Altivo Aviation. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-500 justify-center">
            <span className="hover:text-black transition cursor-pointer">Status</span>
            <span className="hover:text-black transition cursor-pointer">Support</span>
            <span className="hover:text-black transition cursor-pointer">Docs</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
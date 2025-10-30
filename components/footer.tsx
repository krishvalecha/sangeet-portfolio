export default function Footer() {
  return (
    <footer className="bg-burgundy text-ivory py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">
              Melroy Fernandes & Company
            </h3>
            <p className="font-sans text-ivory/80">
              Making your sangeet unforgettable with premium choreography.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Contact</h4>
            <p className="font-sans text-ivory/80 mb-2">
              <a
                href="mailto:melroyfernandes.business@gmail.com"
                className="hover:text-gold transition-colors"
              >
                Email: melroyfernandes.business@gmail.com
              </a>
            </p>
            <p className="font-sans text-ivory/80">
              <a
                href="tel:+919819435840"
                className="hover:text-gold transition-colors"
              >
                Phone: +91 9819435840
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-ivory/20 pt-8 text-center">
          <p className="font-sans text-ivory/60">
            © 2025 Melroy Fernandes & Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

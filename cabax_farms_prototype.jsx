import React from "react";

// CabaxFarms_Prototype.jsx
// Single-file React component prototype for Cabax Farms (Palm oil production & sales)
// Tailwind CSS utility classes are used for styling.
// Assumptions: Tailwind is installed and configured, shadcn/ui is available (optional), and lucide-react icons are available.

export default function CabaxFarmsPrototype() {
  const products = [
    {
      id: 1,
      title: "Crude Palm Oil (CPO)",
      price: "₦420,000 / MT",
      desc: "Cold-pressed, sustainably produced crude palm oil for industrial and food use.",
      img: "https://images.unsplash.com/photo-1581987507721-e15f1b7a2b2b?auto=format&fit=crop&w=1200&q=60",
    },
    {
      id: 2,
      title: "Refined Palm Oil",
      price: "₦520,000 / MT",
      desc: "Refined and deodorized palm oil — food-grade, consistent color and smell.",
      img: "https://images.unsplash.com/photo-160１００4890684-d8cbf643f5f2?auto=format&fit=crop&w=1200&q=60",
    },
    {
      id: 3,
      title: "Palm Kernel Oil",
      price: "₦650,000 / MT",
      desc: "High-quality palm kernel oil for cosmetics and speciality food products.",
      img: "https://images.unsplash.com/photo-1625232344060-65e5b3e4f8a6?auto=format&fit=crop&w=1200&q=60",
    },
    {
      id: 4,
      title: "Palm Kernel Cake (PKC)",
      price: "₦80,000 / MT",
      desc: "Nutrient-rich animal feed byproduct from kernel crushing.",
      img: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1200&q=60",
    },
    {
      id: 5,
      title: "Biodiesel Blend",
      price: "Quote on request",
      desc: "Sustainably sourced biodiesel blends for industrial energy applications.",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=60",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-slate-800">
      {/* NAV */}
      <header className="max-w-7xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white font-bold">CF</div>
          <div>
            <h1 className="text-lg font-semibold">Cabax Farms</h1>
            <p className="text-sm text-slate-500">Sustainable Palm Oil Production & Sales</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-700">
          <a href="#home" className="hover:text-emerald-600">Home</a>
          <a href="#about" className="hover:text-emerald-600">About</a>
          <a href="#products" className="hover:text-emerald-600">Products</a>
          <a href="#trace" className="hover:text-emerald-600">Traceability</a>
          <a href="#sustainability" className="hover:text-emerald-600">Sustainability</a>
          <a href="#contact" className="hover:text-emerald-600">Contact</a>
        </nav>
        <div className="hidden md:flex gap-3">
          <button className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm">Get a Quote</button>
        </div>
        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button aria-label="Open menu" className="p-2 rounded-md bg-white shadow">☰</button>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Cabax Farms — Trusted Palm Oil Suppliers</h2>
          <p className="mt-4 text-lg text-slate-600">From our plantation to your factory: responsibly grown palm, vertically integrated processing, and full traceability for food, cosmetic, and energy customers.</p>

          <div className="mt-6 flex gap-4">
            <a href="#products" className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold">View Products</a>
            <a href="#trace" className="px-6 py-3 rounded-lg border border-emerald-600 text-emerald-600">Trace Our Supply</a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="text-sm text-slate-500">Processing Capacity</h3>
              <p className="text-xl font-semibold">2,500 MT / mo</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="text-sm text-slate-500">Sustainably Certified</h3>
              <p className="text-xl font-semibold">RSPO Pending</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=60" alt="palm plantation" className="w-full h-96 object-cover" />
          </div>
          <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur rounded-xl p-4 shadow">
            <p className="text-sm">Fresh harvest — quality tested daily</p>
            <p className="text-xs text-slate-600">Batch #C-2104 • Lab ID: 12345</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold">About Cabax Farms</h3>
            <p className="mt-3 text-slate-600">Cabax Farms is a vertically integrated palm oil business operating across planting, harvesting, milling and distribution. We focus on yield optimization, responsible land use, and delivering consistent, high-quality oil at commercial scale.</p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
              <li>• Farm management & good agricultural practices</li>
              <li>• On-site processing & refining</li>
              <li>• Quality control lab & traceability systems</li>
              <li>• Offtake & export logistics</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 justify-center">
            <div className="p-4 bg-emerald-50 rounded-lg">
              <h4 className="text-sm text-slate-500">Contact</h4>
              <p className="text-sm">info@cabaxfarms.ng</p>
              <p className="text-sm">+234 800 123 4567</p>
            </div>
            <div className="p-4 bg-emerald-50 rounded-lg">
              <h4 className="text-sm text-slate-500">Location</h4>
              <p className="text-sm">Ogun State, Nigeria — Farm & Mill</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">Our Products</h3>
          <a href="#shop" className="text-sm text-emerald-600">See full catalogue →</a>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <img src={p.img} alt={p.title} className="w-full h-44 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-sm text-slate-500 mt-1">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium">{p.price}</span>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 rounded-lg border text-sm">Details</button>
                    <button className="px-3 py-1 rounded-lg bg-emerald-600 text-white text-sm">Request Quote</button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TRACEABILITY */}
      <section id="trace" className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl p-6 shadow-sm grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-bold">Traceability & Batch Tracking</h3>
            <p className="mt-3 text-slate-600">We provide batch-level traceability from plantation block → mill → packing. Enter a batch ID to see harvest date, processing notes, and lab test results.</p>

            <form className="mt-4 flex gap-3">
              <input aria-label="Batch ID" placeholder="Enter Batch ID (e.g. C-2104)" className="flex-1 p-3 rounded-lg border" />
              <button className="px-4 py-3 rounded-lg bg-emerald-600 text-white">Lookup</button>
            </form>

            <ul className="mt-6 text-sm text-slate-700 space-y-2">
              <li>• Harvest Date: 2025-02-10</li>
              <li>• Mill: Cabax Mill #1</li>
              <li>• Lab Results: FFA 4.2% • Moisture 0.5%</li>
              <li>• Transport: Truck ID CBX-092</li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden">
            {/* Placeholder for a simple farm map or timeline illustration */}
            <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=60" alt="trace map" className="w-full h-72 object-cover" />
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section id="sustainability" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h4 className="text-xl font-semibold">Sustainable Practices</h4>
            <p className="mt-2 text-slate-600">We maintain riparian buffers, reduce burning, and use integrated pest management to protect biodiversity and soil health.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h4 className="text-xl font-semibold">Community Development</h4>
            <p className="mt-2 text-slate-600">Local employment, training programs for smallholders, and revenue sharing with nearby communities.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h4 className="text-xl font-semibold">Quality Control</h4>
            <p className="mt-2 text-slate-600">On-site lab testing, ISO-inspired checklists and supplier audits to keep consistency high.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl p-6 shadow-sm grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-bold">Get in touch</h3>
            <p className="mt-3 text-slate-600">For pricing, logistics, or quality certificates, contact our sales team.</p>

            <form className="mt-6 grid gap-3">
              <input aria-label="Name" placeholder="Your name" className="p-3 rounded-lg border" />
              <input aria-label="Email" placeholder="Email address" className="p-3 rounded-lg border" />
              <input aria-label="Company" placeholder="Company (optional)" className="p-3 rounded-lg border" />
              <textarea aria-label="Message" placeholder="How can we help?" className="p-3 rounded-lg border h-32" />
              <div className="flex items-center gap-3">
                <button type="button" className="px-5 py-3 rounded-lg bg-emerald-600 text-white">Send Message</button>
                <button type="button" className="px-5 py-3 rounded-lg border">Call Sales</button>
              </div>
            </form>
          </div>

          <div className="flex flex-col gap-4 justify-center">
            <div className="p-4 bg-emerald-50 rounded-lg">
              <h4 className="text-sm text-slate-500">Sales (Local)</h4>
              <p className="text-sm">+234 800 123 4567</p>
              <p className="text-sm">sales@cabaxfarms.ng</p>
            </div>
            <div className="p-4 bg-emerald-50 rounded-lg">
              <h4 className="text-sm text-slate-500">Export & Logistics</h4>
              <p className="text-sm">export@cabaxfarms.ng</p>
              <p className="text-sm">+234 801 987 6543</p>
            </div>
            <div className="p-4 bg-emerald-50 rounded-lg">
              <h4 className="text-sm text-slate-500">Office</h4>
              <p className="text-sm">Cabax HQ, Abeokuta, Ogun State</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white mt-12">
        <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row items-start justify-between gap-6">
          <div>
            <h4 className="font-bold">Cabax Farms</h4>
            <p className="text-sm text-slate-300 mt-2">Growing responsibly. Delivering consistently.</p>
            <p className="text-xs text-slate-400 mt-4">© {new Date().getFullYear()} Cabax Farms — All rights reserved</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold">Products</h5>
              <ul className="mt-2 text-sm text-slate-300 space-y-1">
                <li>Crude Palm Oil</li>
                <li>Refined Palm Oil</li>
                <li>Palm Kernel Oil</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold">Company</h5>
              <ul className="mt-2 text-sm text-slate-300 space-y-1">
                <li>About</li>
                <li>Sustainability</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

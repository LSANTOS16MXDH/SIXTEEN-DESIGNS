const services = [
  {
    title: "Capacetes",
    description: "Pintura customizada para capacetes de motocross e downhill com acabamento em verniz alto brilho.",
    image: "/IMG_3479.JPEG"
  },
  {
    title: "Bikes",
    description: "Personalização completa de quadros e componentes com designs exclusivos e alta durabilidade.",
    image: "/IMG_2785.JPEG"
  },
  {
    title: "Componentes",
    description: "Detalhes que fazem a diferença. Pintura de peças e acessórios com precisão e acabamento premium.",
    image: "/IMG_2911.JPEG"
  }
]

function Services() {
  return (
    <section id="servicos" className="py-24 bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #FF5500 0px, #FF5500 2px, transparent 2px, transparent 10px)'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-sixteen-orange font-bold uppercase tracking-[0.3em] mb-4">
            O Que Faço
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-black mb-4">
            SERVIÇOS
          </h2>
          <div className="w-24 h-1 bg-sixteen-orange mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border-4 border-black neo-border hover:transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="font-display text-3xl text-black mb-4 group-hover:text-sixteen-orange transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-body text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Carbon Fiber Accent */}
                <div className="h-2 bg-carbon-fiber rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

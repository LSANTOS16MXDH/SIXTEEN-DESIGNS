function About() {
  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      {/* Carbon Fiber Background */}
      <div className="absolute inset-0 bg-carbon-fiber opacity-10"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sixteen-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sixteen-orange/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-square bg-white border-4 border-black neo-border overflow-hidden">
              <img
                src="/IMG_7318.JPEG"
                alt="Luiz Santos - Artista e Piloto"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Badge */}
            <div className="absolute -bottom-6 -right-6 bg-sixteen-orange text-black p-6 border-4 border-black neo-border-sm rotate-3">
              <p className="font-display text-2xl">CAMPEÃO</p>
              <p className="font-body font-bold text-sm uppercase tracking-wider">Downhill MG</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:pl-12">
            <p className="font-body text-sixteen-orange font-bold uppercase tracking-[0.3em] mb-4">
              Sobre o Artista
            </p>

            <h2 className="font-display text-5xl md:text-6xl text-black mb-6">
              LUIZ SANTOS
            </h2>

            <div className="w-24 h-1 bg-sixteen-orange mb-8"></div>

            <div className="space-y-6 font-body text-gray-700 leading-relaxed">
              <p>
                <strong className="text-black">Perfeccionista e Campeão Mineiro de Downhill</strong>, uno a paixão pela velocidade com a precisão da arte em pintura automotiva de alta performance.
              </p>

              <p>
                Cada projeto é tratado como uma obra única, onde a fibra de carbono encontra o verniz alto brilho, e a adrenalina do esporte se transforma em design exclusivo.
              </p>

              <p>
                Com anos de experiência nas pistas e no ateliê, entendo o que um piloto precisa: <strong className="text-sixteen-orange">durabilidade, estilo e performance</strong>.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="bg-white border-2 border-black p-4 text-center neo-border-sm">
                <p className="font-display text-3xl text-sixteen-orange">100%</p>
                <p className="font-body text-xs uppercase tracking-wider text-gray-600 mt-1">Handmade</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center neo-border-sm">
                <p className="font-display text-3xl text-sixteen-orange">MG</p>
                <p className="font-body text-xs uppercase tracking-wider text-gray-600 mt-1">Campeão</p>
              </div>
              <div className="bg-white border-2 border-black p-4 text-center neo-border-sm">
                <p className="font-display text-3xl text-sixteen-orange">∞</p>
                <p className="font-body text-xs uppercase tracking-wider text-gray-600 mt-1">Detalhes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

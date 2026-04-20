function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Carbon Fiber Background */}
      <div className="absolute inset-0 bg-carbon-fiber opacity-10"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sixteen-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sixteen-orange/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-3 md:px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-square bg-white border-4 border-black neo-border overflow-hidden">
              <img
                src="/l santos whip.png"
                alt="Luiz Santos - Artista e Piloto"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Badge */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-sixteen-orange text-black p-3 md:p-6 border-4 border-black neo-border-sm rotate-3">
              <p className="font-display text-lg md:text-2xl">CAMPEÃO MINEIRO</p>
              <p className="font-body font-bold text-xs md:text-sm uppercase tracking-wider">DOWNHILL 2018</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:pl-12">
            <p className="font-body text-sixteen-orange font-bold uppercase tracking-[0.2em] text-xs md:text-base mb-4">
              Sobre o Artista
            </p>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-black mb-4 md:mb-6">
              LUIZ SANTOS
            </h2>

            <div className="w-16 md:w-24 h-1 bg-sixteen-orange mb-6 md:mb-8"></div>

            <div className="space-y-4 md:space-y-6 font-body text-gray-700 leading-relaxed text-sm md:text-base">
              <p>
                <strong className="text-black">Especialista em personalização de capacetes e componentes</strong>, Luiz Santos eleva o padrão da pintura personalizada. Com um olhar perfeccionista, cada projeto é tratado como uma obra de engenharia estética.
              </p>

              <p>
                Com anos de experiência nas pistas e no ateliê, entendo o que um piloto precisa: <strong className="text-sixteen-orange">durabilidade, estilo e performance</strong>.
              </p>

              <p>
                Utilizamos materiais de linha premium para garantir que o estilo e a qualidade sejam acompanhados por um verniz impecável e acabamento de nível profissional. Se você busca performance que se destaca, você busca a <strong className="text-sixteen-orange">Sixteen</strong>.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 mt-8 md:mt-12">
              <div className="bg-white border-2 border-black p-2 md:p-4 text-center neo-border-sm">
                <p className="font-display text-xl md:text-3xl text-sixteen-orange">100%</p>
                <p className="font-body text-[10px] md:text-xs uppercase tracking-wider text-gray-600 mt-1">Handmade</p>
              </div>
              <div className="bg-white border-2 border-black p-2 md:p-4 text-center neo-border-sm">
                <p className="font-display text-lg md:text-3xl text-sixteen-orange">GARANTIA</p>
                <p className="font-body text-[10px] md:text-xs uppercase tracking-wider text-gray-600 mt-1">100%</p>
              </div>
              <div className="bg-white border-2 border-black p-2 md:p-4 text-center neo-border-sm">
                <p className="font-display text-lg md:text-3xl text-sixteen-orange">QUALIDADE</p>
                <p className="font-body text-[10px] md:text-xs uppercase tracking-wider text-gray-600 mt-1">PROFISSIONAL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Carbon Fiber Background */}
      <div className="absolute inset-0 bg-carbon-fiber opacity-10"></div>

      {/* Animated Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-sixteen-orange/15 rounded-full blur-3xl animate-gloss"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Tagline */}
        <p className="font-body text-sixteen-orange font-bold uppercase tracking-[0.3em] mb-6 text-sm md:text-base">
          Performance • Estilo • Exclusividade
        </p>

        {/* Main Logo */}
        <div className="mb-8">
          <img
            src="/SIXTEEN LG 2K26 PNG.png"
            alt="XVI DESIGN - A Arte da Velocidade"
            className="max-w-[280px] md:max-w-[400px] lg:max-w-[500px] mx-auto"
          />
        </div>

        {/* Subtitle */}
        <p className="font-body text-xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-wider text-black mb-12">
          A ARTE DA VELOCIDADE
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-16 md:w-32 h-1 bg-sixteen-orange"></div>
          <div className="w-2 md:w-4 h-2 md:h-4 bg-black rotate-45"></div>
          <div className="w-16 md:w-32 h-1 bg-sixteen-orange"></div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#servicos"
            className="bg-sixteen-orange px-8 py-4 font-body font-bold text-base uppercase tracking-widest border-4 border-black neo-border hover:bg-black hover:text-sixteen-orange hover:shadow-[12px_12px_0px_#FF5500] transition-all"
          >
            Ver Trabalhos
          </a>
          <a
            href="https://wa.me/5531988262640?text=Ol%C3%A1%20Luiz%2C%20quero%20um%20or%C3%A7amento%20da%20Sixteen%20Design!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent px-8 py-4 font-body font-bold text-base uppercase tracking-widest border-4 border-black neo-border hover:bg-sixteen-orange hover:border-sixteen-orange hover:text-white transition-all"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sixteen-orange rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-sixteen-orange rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

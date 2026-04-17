function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-black">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="hover:opacity-80 transition-opacity">
          <img src="/SIXTEEN LG 2K26 PNG 2.png" alt="Sixteen Design Logo" className="h-10 md:h-12" />
        </a>
        <nav className="hidden md:flex gap-8">
          <a href="#servicos" className="font-body font-semibold text-sm uppercase tracking-widest hover:text-sixteen-orange transition-colors">
            Serviços
          </a>
          <a href="#sobre" className="font-body font-semibold text-sm uppercase tracking-widest hover:text-sixteen-orange transition-colors">
            Sobre
          </a>
          <a href="#contato" className="font-body font-semibold text-sm uppercase tracking-widest hover:text-sixteen-orange transition-colors">
            Contato
          </a>
        </nav>
        <a
          href="https://wa.me/5531988262640?text=Ol%C3%A1%20Luiz%2C%20quero%20um%20or%C3%A7amento%20da%20Sixteen%20Design!"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sixteen-orange px-6 py-2 font-body font-bold text-sm uppercase tracking-widest border-2 border-black neo-border-sm hover:bg-black hover:text-white transition-all"
        >
          Orçamento
        </a>
      </div>
    </header>
  )
}

export default Header

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const galleries = {
  capacetes: [
    '/IMG_0508.JPEG',
    '/IMG_0510.JPEG',
    '/IMG_0519.JPEG',
    '/IMG_0547.JPEG',
    '/IMG_0725.JPEG',
    '/IMG_0726.JPEG',
    '/IMG_0728.JPEG',
    '/IMG_0727.JPEG',
    '/IMG_0734.JPEG',
    '/IMG_0735.JPEG',
    '/IMG_0736.JPEG',
    '/IMG_0737.JPEG',
    '/IMG_1646.JPEG',
    '/IMG_1647.JPEG',
    '/IMG_1648.JPEG',
    '/IMG_1649.JPEG',
    '/IMG_1650.JPEG',
    '/IMG_8488.JPEG',
    '/IMG_8491.JPEG',
    '/IMG_8492.JPEG',
    '/IMG_8495.JPEG',
    '/IMG_8502.JPEG',
    '/IMG_8318.JPEG',
    '/IMG_8323.JPEG',
    '/IMG_8325.JPEG',
    '/IMG_3548.PNG',
    '/IMG_3546.PNG',
    '/IMG_3545.PNG',
    '/IMG_3479.JPEG',
    '/IMG_3480.JPEG',
    '/IMG_3481.JPEG',
    '/IMG_3483.JPEG',
    '/IMG_3485.JPEG'
  ],
  bikes: [
    '/IMG_6746.JPEG',
    '/IMG_6744.JPEG',
    '/IMG_6741.JPEG',
    '/IMG_6740.JPEG',
    '/IMG_6737.JPEG',
    '/IMG_6734.JPEG',
    '/IMG_6731.JPEG',
    '/IMG_6725.JPEG',
    '/IMG_6720.JPEG',
    '/IMG_2783.JPEG',
    '/IMG_2784.JPEG',
    '/IMG_2786.JPEG',
    '/IMG_2627.JPEG'
  ],
  componentes: [
    '/IMG_2881.JPEG',
    '/IMG_2882.JPEG',
    '/IMG_2883.JPEG',
    '/IMG_2884.JPEG',
    '/IMG_8505.JPEG',
    '/IMG_8520.JPEG',
    '/IMG_8525.JPEG',
    '/IMG_8528.JPEG',
    '/IMG_8532.JPEG'
  ]
}

const services = [
  {
    title: "Capacetes",
    description: "Pintura customizada para capacetes de motocross e downhill com acabamento em verniz alto brilho.",
    image: "/IMG_3479.JPEG",
    galleryKey: "capacetes"
  },
  {
    title: "Bikes",
    description: "Personalização completa de quadros e componentes com designs exclusivos e alta durabilidade.",
    image: "/IMG_2785.JPEG",
    galleryKey: "bikes"
  },
  {
    title: "Componentes",
    description: "Detalhes que fazem a diferença. Pintura de peças e acessórios com precisão e acabamento premium.",
    image: "/IMG_2911.JPEG",
    galleryKey: "componentes"
  }
]

function Services() {
  const [openGallery, setOpenGallery] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (galleryKey) => {
    setOpenGallery(galleryKey)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setOpenGallery(null)
  }

  const nextImage = (e) => {
    e.stopPropagation()
    const images = galleries[openGallery]
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = (e) => {
    e.stopPropagation()
    const images = galleries[openGallery]
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

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
              onClick={() => openModal(service.galleryKey)}
              className="group bg-white border-4 border-black neo-border overflow-hidden cursor-pointer hover:scale-105 hover:-translate-y-2 transition-all duration-300"
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

      {/* Modal Gallery */}
      <AnimatePresence>
        {openGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl mx-4"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 w-12 h-12 bg-sixteen-orange border-4 border-black flex items-center justify-center font-display text-2xl font-bold text-black hover:bg-black hover:text-sixteen-orange transition-all z-50"
              >
                X
              </button>

              {/* Main Image */}
              <div className="relative border-4 border-black bg-black/90">
                <img
                  src={galleries[openGallery][currentImageIndex]}
                  alt={`Gallery image ${currentImageIndex + 1}`}
                  className="w-full h-[70vh] object-contain"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-sixteen-orange border-4 border-black flex items-center justify-center font-display text-2xl font-bold text-black hover:bg-black hover:text-sixteen-orange transition-all"
                >
                  ‹
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-sixteen-orange border-4 border-black flex items-center justify-center font-display text-2xl font-bold text-black hover:bg-black hover:text-sixteen-orange transition-all"
                >
                  ›
                </button>
              </div>

              {/* Image Counter */}
              <div className="flex justify-center mt-4 gap-2">
                {galleries[openGallery].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 border-2 border-black transition-all ${
                      index === currentImageIndex
                        ? 'bg-sixteen-orange'
                        : 'bg-white hover:bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Category Title */}
              <p className="text-center font-body text-sixteen-orange font-bold uppercase tracking-[0.2em] mt-4">
                {services.find(s => s.galleryKey === openGallery)?.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Services

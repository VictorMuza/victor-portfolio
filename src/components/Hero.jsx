import { motion } from 'framer-motion';
import { ArrowDown, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
          Disponível para projetos
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="text-white">Olá, sou </span>
          <span className="gradient-text">Victor Hugo</span>
          <br />
          <span className="text-gray-400">Desenvolvedor </span>
          <span className="text-white">Frontend</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Transformo ideias em experiências digitais incríveis.
          Especialista em <span className="text-primary-400 font-medium">React</span>,
          <span className="text-primary-400 font-medium"> TypeScript</span> e interfaces modernas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a href="#projects" className="btn-primary flex items-center gap-2 text-lg">
            Ver Projetos
            <ArrowDown className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/VictorMuza"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center gap-2 text-lg"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { number: '10+', label: 'Projetos' },
            { number: '3+', label: 'Anos de Estudo' },
            { number: '5+', label: 'Tecnologias' },
            { number: '100%', label: 'Dedicação' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{stat.number}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-primary-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
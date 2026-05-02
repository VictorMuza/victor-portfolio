import { motion } from 'framer-motion';
import { techStack } from '../data/projects';
import { MapPin, Mail, Code2, Sparkles, Zap, Target } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Código Limpo',
    description: 'Escrevo código organizado, documentado e seguindo as melhores práticas do mercado.'
  },
  {
    icon: Sparkles,
    title: 'Design Moderno',
    description: 'Interfaces bonitas, responsivas e com foco na experiência do usuário.'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Aplicações otimizadas, rápidas e com carregamento eficiente.'
  },
  {
    icon: Target,
    title: 'Foco em Resultados',
    description: 'Soluções que resolvem problemas reais e entregam valor.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Sobre <span className="gradient-text">Mim</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Sou um desenvolvedor frontend apaixonado por criar experiências digitais incríveis.
              Moro em <span className="text-primary-400 font-medium">São Paulo</span> e estou sempre
              buscando aprender novas tecnologias e aprimorar minhas habilidades.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Meu foco é desenvolver interfaces modernas, responsivas e performáticas usando
              React, TypeScript e as melhores ferramentas do ecossistema frontend.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span>São Paulo, Brasil</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-5 h-5 text-primary-400" />
                <span>victor@email.com</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Tecnologias que uso</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-800 border border-white/10 hover:border-primary-500/30 transition-all"
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: tech.color }}
                    />
                    <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
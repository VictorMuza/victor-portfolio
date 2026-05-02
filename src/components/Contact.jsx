import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/VictorMuza',
    color: 'hover:bg-gray-800',
    description: 'Veja meus projetos'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: '#',
    color: 'hover:bg-blue-600/20',
    description: 'Conecte-se comigo'
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:victor@email.com',
    color: 'hover:bg-red-600/20',
    description: 'Envie uma mensagem'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Vamos <span className="gradient-text">Conversar</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tem um projeto em mente ou quer colaborar? Estou sempre aberto a novas oportunidades e desafios.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`glass-card p-6 flex flex-col items-center text-center group hover:border-primary-500/30 transition-all duration-300 ${link.color}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-dark-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <link.icon className="w-7 h-7 text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{link.name}</h3>
              <p className="text-gray-400 text-sm mb-3">{link.description}</p>
              <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-primary-400 transition-colors" />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Pronto para começar um projeto?
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Estou disponível para freelas, colaborações e oportunidades de trabalho.
            Vamos criar algo incrível juntos!
          </p>
          <a
            href="mailto:victor@email.com"
            className="btn-primary inline-flex items-center gap-2 text-lg"
          >
            <Send className="w-5 h-5" />
            Enviar Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
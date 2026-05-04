import { FaEnvelope, FaGithub, FaWhatsapp, FaInstagram, FaFileAlt, FaDownload, FaEye } from 'react-icons/fa';
import '../styles/Contact.css';

const contacts = [
  {
    id: 1,
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'amayaanderson108@gmail.com',
    link: 'mailto:amayaanderson108@gmail.com',
  },
  {
    id: 2,
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'CLEV769',
    link: 'https://github.com/CLEV769/Perfil-propio',
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    value: '+57 316 258 2645',
    link: 'https://wa.me/573162582645',
  },
  {
    id: 4,
    icon: <FaInstagram />,
    label: 'Instagram',
    value: '@clever_amaya.06',
    link: 'https://www.instagram.com/clever_amaya.06/',
  },
];

function Contact() {
  return (
    <section className="contact">
      <div className="contact__header">
        <h1 className="contact__title">Contacto</h1>
        <p className="contact__subtitle">
          ¿Tienes una oportunidad o quieres saber más sobre mí? Escríbeme por cualquiera de estos medios.
        </p>
      </div>

      <div className="contact__cards">
        {contacts.map(contact => (
          <a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noreferrer"
            className="contact__card"
>
            <div className="contact__icon">{contact.icon}</div>
            <div className="contact__info">
              <span className="contact__label">{contact.label}</span>
              <span className="contact__value">{contact.value}</span>
            </div>
          </a>
        ))}
      </div>

      <div className="cv__section">
        <div className="cv__header">
          <FaFileAlt className="cv__icon" />
          <div>
            <h2 className="cv__title">Hoja de Vida</h2>
            <p className="cv__subtitle">Puedes verla o descargarla directamente</p>
          </div>
        </div>
        <div className="cv__buttons">
          <a
            href="/Hoja_de_vida_Clever_Amaya.pdf"
            target="_blank"
            rel="noreferrer"
            className="cv__btn cv__btn--view"
          >
            <FaEye /> Ver PDF
          </a>
          <a
            href="/Hoja_de_vida_Clever_Amaya.pdf"
            download="Hoja_de_vida_Clever_Amaya.pdf"
            className="cv__btn cv__btn--download"
          >
            <FaDownload /> Descargar
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
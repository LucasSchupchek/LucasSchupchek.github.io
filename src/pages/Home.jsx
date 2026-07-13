import { company, services } from '../company.js'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero__inner">
          <span className="badge">Apoio administrativo profissional</span>
          <h1>
            Organização e eficiência para a rotina<br />
            administrativa da sua empresa
          </h1>
          <p className="hero__sub">
            {company.brand} oferece serviços especializados de preparação de
            documentos e apoio administrativo, com atendimento próximo,
            confidencial e feito sob medida para o seu negócio.
          </p>
          <div className="hero__cta">
            <a href="#contato" className="btn btn--primary">Fale conosco</a>
            <a href="#servicos" className="btn btn--ghost">Ver serviços</a>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="section">
        <div className="container">
          <h2 className="section__title">Nossos serviços</h2>
          <p className="section__lead">
            Soluções administrativas para que você foque no que realmente importa.
          </p>
          <div className="cards">
            {services.map((s) => (
              <div className="card" key={s.title}>
                <div className="card__icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="section section--alt">
        <div className="container about">
          <div>
            <h2 className="section__title">Sobre a empresa</h2>
            <p>
              A <strong>{company.brand}</strong> é uma empresa sediada em{' '}
              {company.city}/{company.state}, especializada em{' '}
              {company.cnae.toLowerCase()}.
            </p>
            <p>
              Atuamos com compromisso, sigilo e atenção aos detalhes, entregando
              suporte administrativo de qualidade para empreendedores, micro e
              pequenas empresas e profissionais autônomos.
            </p>
            <p>
              Nosso objetivo é simplificar sua rotina, garantindo processos
              organizados e documentos sempre em ordem.
            </p>
          </div>
          <div className="about__facts">
            <div className="fact">
              <span className="fact__label">Razão Social</span>
              <span className="fact__value">{company.legalName}</span>
            </div>
            <div className="fact">
              <span className="fact__label">CNPJ</span>
              <span className="fact__value">{company.cnpj}</span>
            </div>
            <div className="fact">
              <span className="fact__label">Localização</span>
              <span className="fact__value">{company.city}/{company.state}</span>
            </div>
            <div className="fact">
              <span className="fact__label">Atuação desde</span>
              <span className="fact__value">{company.since}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO CTA */}
      <section className="section cta-band">
        <div className="container cta-band__inner">
          <h2>Precisa de apoio administrativo?</h2>
          <p>Entre em contato e conte com um atendimento próximo e profissional.</p>
          <div className="hero__cta">
            <a href={`mailto:${company.email}`} className="btn btn--primary">
              {company.email}
            </a>
            {company.whatsapp && (
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                WhatsApp
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

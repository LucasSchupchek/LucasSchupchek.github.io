import { Link } from 'react-router-dom'
import { company } from '../company.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer" id="contato">
      <div className="container footer__grid">
        <div>
          <div className="footer__brand">{company.brand}</div>
          <p className="footer__muted">{company.legalName}</p>
          <p className="footer__muted">CNPJ: {company.cnpj}</p>
          <p className="footer__muted">
            {company.neighborhood} — {company.city}/{company.state}, CEP {company.cep}
          </p>
        </div>

        <div>
          <h4>Contato</h4>
          <p className="footer__muted">
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
          {company.whatsapp && (
            <p className="footer__muted">
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </p>
          )}
        </div>

        <div>
          <h4>Legal</h4>
          <p><Link to="/termos">Termos de Uso</Link></p>
          <p><Link to="/privacidade">Política de Privacidade</Link></p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          © {year} {company.legalName} — CNPJ {company.cnpj}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

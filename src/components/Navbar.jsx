import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { company } from '../company.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const go = (hash) => {
    setOpen(false)
    navigate('/')
    setTimeout(() => {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__logo">S</span>
          <span>{company.brand}</span>
        </Link>

        <button
          className="nav__toggle"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          <button onClick={() => go('#servicos')}>Serviços</button>
          <button onClick={() => go('#sobre')}>Sobre</button>
          <button onClick={() => go('#contato')}>Contato</button>
          <Link to="/termos" onClick={() => setOpen(false)}>Termos</Link>
          <Link to="/privacidade" onClick={() => setOpen(false)}>Privacidade</Link>
        </nav>
      </div>
    </header>
  )
}

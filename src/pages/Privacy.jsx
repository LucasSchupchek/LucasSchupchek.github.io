import { company } from '../company.js'

export default function Privacy() {
  return (
    <section className="section legal">
      <div className="container legal__box">
        <h1>Política de Privacidade</h1>
        <p className="legal__updated">Última atualização: {company.since}</p>

        <p>
          A <strong>{company.brand}</strong> ({company.legalName}, CNPJ {company.cnpj})
          respeita a sua privacidade e está comprometida com a proteção dos dados
          pessoais tratados por meio deste site, em conformidade com a Lei nº
          13.709/2018 (Lei Geral de Proteção de Dados — LGPD).
        </p>

        <h2>1. Dados que coletamos</h2>
        <p>
          Este site é predominantemente institucional. Podemos coletar dados que você
          nos fornece voluntariamente ao entrar em contato conosco, como nome, e-mail,
          telefone e o conteúdo da sua mensagem. Também podemos coletar dados de
          navegação, como endereço IP e informações do dispositivo, para fins de
          segurança e melhoria da experiência.
        </p>

        <h2>2. Finalidade do tratamento</h2>
        <p>Utilizamos seus dados para:</p>
        <ul>
          <li>Responder às suas solicitações e mensagens de contato;</li>
          <li>Prestar e aprimorar nossos serviços;</li>
          <li>Cumprir obrigações legais e regulatórias;</li>
          <li>Garantir a segurança e o bom funcionamento do site.</li>
        </ul>

        <h2>3. Compartilhamento de dados</h2>
        <p>
          Não vendemos seus dados pessoais. Poderemos compartilhar dados apenas quando
          necessário para a prestação dos serviços (por exemplo, provedores de
          hospedagem e ferramentas de comunicação) ou por exigência legal, sempre
          respeitando as garantias da LGPD.
        </p>

        <h2>4. Cookies</h2>
        <p>
          Este site pode utilizar cookies e tecnologias semelhantes para melhorar a
          navegação. Você pode gerenciar ou desativar os cookies nas configurações do
          seu navegador.
        </p>

        <h2>5. Segurança</h2>
        <p>
          Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados
          pessoais contra acessos não autorizados, perda, alteração ou divulgação
          indevida.
        </p>

        <h2>6. Seus direitos</h2>
        <p>
          Nos termos da LGPD, você pode solicitar a confirmação da existência de
          tratamento, o acesso, a correção, a anonimização, a portabilidade ou a
          exclusão dos seus dados, bem como revogar consentimentos. Para exercer esses
          direitos, entre em contato conosco.
        </p>

        <h2>7. Retenção</h2>
        <p>
          Os dados pessoais são mantidos apenas pelo tempo necessário para cumprir as
          finalidades descritas nesta política ou conforme exigido por lei.
        </p>

        <h2>8. Alterações desta política</h2>
        <p>
          Esta Política de Privacidade poderá ser atualizada periodicamente. A versão
          vigente será sempre a publicada nesta página.
        </p>

        <h2>9. Encarregado / Contato</h2>
        <p>
          Para dúvidas ou solicitações relacionadas aos seus dados pessoais e a esta
          política, entre em contato pelo e-mail{' '}
          <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      </div>
    </section>
  )
}

import { company } from '../company.js'

export default function Terms() {
  return (
    <section className="section legal">
      <div className="container legal__box">
        <h1>Termos de Uso</h1>
        <p className="legal__updated">Última atualização: {company.since}</p>

        <p>
          Bem-vindo ao site da <strong>{company.brand}</strong> ({company.legalName},
          inscrita no CNPJ {company.cnpj}). Ao acessar e utilizar este site, você
          concorda com os termos e condições descritos abaixo. Caso não concorde,
          pedimos que não utilize este site.
        </p>

        <h2>1. Objeto</h2>
        <p>
          Este site tem caráter institucional e informativo, destinado a apresentar
          os serviços de preparação de documentos e apoio administrativo oferecidos
          pela {company.brand}.
        </p>

        <h2>2. Uso do site</h2>
        <p>
          O usuário compromete-se a utilizar este site de forma lícita, não
          praticando qualquer ato que possa danificar, sobrecarregar ou comprometer
          o funcionamento do site ou de seus sistemas.
        </p>

        <h2>3. Propriedade intelectual</h2>
        <p>
          Todo o conteúdo presente neste site — incluindo textos, marcas, logotipos,
          imagens e layout — é de propriedade da {company.legalName} ou de terceiros
          licenciantes, sendo protegido pela legislação aplicável. É vedada a
          reprodução total ou parcial sem autorização prévia por escrito.
        </p>

        <h2>4. Serviços</h2>
        <p>
          As informações sobre serviços apresentadas neste site não constituem
          proposta contratual vinculante. A contratação de qualquer serviço será
          formalizada de maneira específica entre as partes.
        </p>

        <h2>5. Limitação de responsabilidade</h2>
        <p>
          A {company.brand} envida esforços para manter as informações do site
          atualizadas e corretas, mas não garante a ausência de eventuais erros ou
          interrupções. O uso do site é feito por conta e risco do usuário.
        </p>

        <h2>6. Links de terceiros</h2>
        <p>
          Este site pode conter links para sites de terceiros. A {company.brand} não
          se responsabiliza pelo conteúdo, políticas ou práticas desses sites.
        </p>

        <h2>7. Alterações</h2>
        <p>
          Estes Termos de Uso podem ser alterados a qualquer momento, sem aviso
          prévio. A versão vigente será sempre a publicada nesta página.
        </p>

        <h2>8. Legislação aplicável e foro</h2>
        <p>
          Estes Termos são regidos pela legislação brasileira. Fica eleito o foro da
          comarca de {company.city}/{company.state} para dirimir eventuais
          controvérsias.
        </p>

        <h2>9. Contato</h2>
        <p>
          Em caso de dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail{' '}
          <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      </div>
    </section>
  )
}

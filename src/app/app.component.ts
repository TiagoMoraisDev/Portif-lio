import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <main class="page-shell">
      <header class="topbar">
        <a class="wordmark" href="#inicio" aria-label="Tiago Morais, início"
          >TM<span>.</span></a
        >
        <nav class="nav-links" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#experiencia">Experiência</a>
          <a href="#especialidades">Especialidades</a>
        </nav>
        <a class="top-contact" href="mailto:tiagomoraispro@gmail.com"
          >Vamos conversar <span>↗</span></a
        >
      </header>

      <section class="hero panel" id="inicio">
        <div class="hero-content">
          <div class="portrait" aria-label="Foto de Tiago Morais">
            <img src="/assets/perfil1.jpg" alt="Tiago Morais" />
          </div>
          <div style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">
            Tiago Morais
          </div>
          <p class="eyebrow">DESENVOLVEDOR FRONTEND · URUÇUCA, BA</p>
          <h1>Construindo produtos<br />digitais <em>bem pensados.</em></h1>
          <div class="hero-actions">
            <a class="button button-dark" href="#experiencia"
              >Conheça meu trabalho <span>↘</span></a
            >
            <a
              class="text-link"
              href="https://github.com/TiagoMoraisDev"
              target="_blank"
              rel="noreferrer"
              >GitHub ↗</a
            >
          </div>
        </div>
        <div class="hero-index">01 / 04</div>
        <span class="hero-orbit orbit-one"></span
        ><span class="hero-orbit orbit-two"></span>
      </section>

      <section class="trust-strip" aria-label="Experiência profissional">
        <span class="strip-label">TRAJETÓRIA</span>
        <div class="company-name">Aplopes<span> Consultoria</span></div>
        <div class="company-name daten">DATEN</div>
        <div class="company-name equiplano">
          equiplano<span> sistemas</span>
        </div>
        <div class="strip-note">4+ anos criando<br />soluções para web</div>
      </section>

      <section class="intro-section" id="sobre">
        <p class="eyebrow">O QUE EU FAÇO</p>
        <h2>Desenvolvimento com<br /><em>intenção e consistência.</em></h2>
        <p class="section-lead">
          Sou desenvolvedor frontend com mais de 4 anos de experiência em
          Angular e TypeScript. Gosto de participar de todo o processo: entender
          o problema, propor uma solução, construir e acompanhar em produção.
        </p>
        <div class="service-grid" id="especialidades">
          <article class="service">
            <span class="service-icon">⌘</span>
            <h3>Frontend & UI</h3>
            <p>
              Interfaces responsivas, componentização, formulários reativos e
              experiências acessíveis.
            </p>
            <span class="service-stack">Angular · TypeScript · RxJS</span>
          </article>
          <article class="service">
            <span class="service-icon">◇</span>
            <h3>Arquitetura</h3>
            <p>
              Aplicações modulares, Design Systems e padrões que facilitam a
              evolução do produto.
            </p>
            <span class="service-stack">NgRx · Atomic Design · OnPush</span>
          </article>
          <article class="service">
            <span class="service-icon">↗</span>
            <h3>Performance</h3>
            <p>
              Otimização de carregamento, gerenciamento de estado e diagnóstico
              de gargalos.
            </p>
            <span class="service-stack">Lazy Loading · Web Vitals</span>
          </article>
          <article class="service">
            <span class="service-icon">⌁</span>
            <h3>Base em Backend</h3>
            <p>
              Integrações e construção de APIs para conectar a interface às
              regras de negócio.
            </p>
            <span class="service-stack">Node.js · NestJS · Prisma · MySQL</span>
          </article>
        </div>
      </section>

      <section class="experience-section panel" id="experiencia">
        <div class="section-heading">
          <div>
            <p class="eyebrow">EXPERIÊNCIA SELECIONADA</p>
            <h2>Projetos e <em>impacto.</em></h2>
          </div>
          <span class="heading-note">02 / 04</span>
        </div>

        <article class="project-card featured">
          <div class="project-topline">
            <span>2025 — ATUAL</span><span>FULLSTACK · PRODUTO DIGITAL</span>
          </div>
          <div class="project-main">
            <div>
              <p class="project-company">APLOPES CONSULTORIA</p>
              <h3>Plataforma de<br />autoexame guiado</h3>
              <p class="project-description">
                Arquitetura e desenvolvimento de uma plataforma que conecta
                pacientes e dentistas por meio de uma jornada de autoexame
                guiado.
              </p>
              <div class="tags">
                <span>Angular</span><span>NestJS</span><span>Prisma</span
                ><span>MySQL</span>
              </div>
            </div>
            <div class="project-result">
              <strong>+40%</strong>
              <span
                >melhoria no tempo de resposta das consultas geoespaciais</span
              >
            </div>
          </div>
          <div class="project-footer">
            <span>Arquitetura modular · API REST · Geolocalização</span
            ><span>01 ↗</span>
          </div>
        </article>

        <div class="project-grid">
          <article class="project-card small-card">
            <div class="project-topline">
              <span>2024 — 2025</span><span>DATEN</span>
            </div>
            <p class="project-company">DATEN TECNOLOGIA</p>
            <h3>Controle de acesso<br />e aplicações reativas</h3>
            <p class="project-description">
              Implementação de RBAC com Keycloak e OAuth 2.0, além de melhorias
              no ciclo de vida de subscriptions RxJS.
            </p>
            <div class="metric-line">
              <strong>−50%</strong
              ><span>consumo de memória em sessões longas</span>
            </div>
            <div class="tags">
              <span>Angular</span><span>RxJS</span><span>Keycloak</span>
            </div>
          </article>
          <article class="project-card small-card">
            <div class="project-topline">
              <span>2022 — 2024</span><span>EQUIPLANO</span>
            </div>
            <p class="project-company">EQUIPLANO SISTEMAS</p>
            <h3>Gestão pública<br />em escala</h3>
            <p class="project-description">
              Desenvolvimento dos módulos de Compras e Licitação e consolidação
              de um Design System reutilizável.
            </p>
            <div class="metric-line">
              <strong>8s → 2,5s</strong
              ><span>redução no carregamento inicial</span>
            </div>
            <div class="tags">
              <span>Angular</span><span>Atomic Design</span><span>Jasmine</span>
            </div>
          </article>
        </div>
        <p class="footnote">
          Resultados apresentados conforme experiência descrita no currículo.
        </p>
      </section>

      <section class="toolkit-section">
        <div class="toolkit-heading">
          <p class="eyebrow">FERRAMENTAS DO DIA A DIA</p>
          <h2>Uma base sólida para<br /><em>construir e evoluir.</em></h2>
        </div>
        <div class="toolkit-list">
          <div>
            <span>01</span><strong>Frontend</strong>
            <p>
              Angular 10–20, TypeScript, RxJS, NgRx, HTML, SCSS, PrimeNG,
              Tailwind CSS
            </p>
          </div>
          <div>
            <span>02</span><strong>Arquitetura</strong>
            <p>
              Design Systems, Atomic Design, Micro-frontends, Lazy Loading,
              Change Detection OnPush
            </p>
          </div>
          <div>
            <span>03</span><strong>Backend & dados</strong>
            <p>Node.js, NestJS, Express, REST APIs, Prisma ORM, MySQL</p>
          </div>
          <div>
            <span>04</span><strong>Qualidade & entrega</strong>
            <p>
              Jasmine, Karma, TDD, Git, GitLab, GitHub, CI/CD, Jenkins, Docker
              básico
            </p>
          </div>
        </div>
      </section>

      <section class="contact-panel panel" id="contato">
        <div class="contact-mark">↗</div>
        <p class="eyebrow">03 / 04 · CONTATO</p>
        <h2>Tem um projeto<br />em mente?</h2>
        <p>
          Estou aberto a conversar sobre oportunidades, produtos digitais e
          desafios de desenvolvimento.
        </p>
        <div class="contact-actions">
          <a class="button button-dark" href="mailto:tiagomoraispro@gmail.com"
            >Enviar um e-mail ↗</a
          >
          <a
            class="button button-light"
            href="https://wa.me/5573999219449"
            target="_blank"
            rel="noreferrer"
            >WhatsApp ↗</a
          >
        </div>
      </section>

      <footer class="footer">
        <span>© 2026 Tiago Morais. Feito com cuidado.</span>
        <div>
          <a
            href="https://www.linkedin.com/in/devtiagomorais"
            target="_blank"
            rel="noreferrer"
            >LinkedIn ↗</a
          ><a
            href="https://github.com/TiagoMoraisDev"
            target="_blank"
            rel="noreferrer"
            >GitHub ↗</a
          ><a href="mailto:tiagomoraispro@gmail.com">E-mail ↗</a>
        </div>
        <a href="#inicio" class="back-top">Voltar ao topo ↑</a>
      </footer>
    </main>
  `,
})
export class AppComponent {}

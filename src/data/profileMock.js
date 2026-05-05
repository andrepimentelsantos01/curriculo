export const profile = {
  professional: {
    firstName: 'André Pimentel',
    lastName: 'Santos',
    email: 'andrepimentelsantos01@gmail.com',
    linkedin: 'https://www.linkedin.com/in/andrepimentelsantos01/',
    role: 'Análise & Infraestrutura de Dados',
    summary:
      'Construo soluções de dados que conectam banco, regra de negócio, API e interface para apoiar decisões operacionais.',
    stack: ['SQL & Modelagem', 'Python & APIs', 'Power BI & DAX', 'Javascript & Dataviz'],
    quote:
      'Análise boa não nasce no gráfico. Nasce na estrutura que sustenta o dado.',
    executive:
      'Atuo em Dados e BI com uma base técnica que passa por banco, APIs, automações e interfaces analíticas. Meu trabalho costuma começar antes do dashboard: organizo a estrutura da informação, entendo a regra de negócio, preparo a camada de acesso e entrego uma experiência analítica que seja confiável, acessível e útil para a operação.',
  },
  socialLinks: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andrepimentelsantos01/', icon: 'Linkedin' },
    { label: 'E-mail', href: 'mailto:andrepimentelsantos01@gmail.com', icon: 'Mail' },
    { label: 'GitHub', href: 'https://github.com/andrepimentelsantos01/', icon: 'Github' },
  ],
  technologies: ['Python', 'SQL', 'Power BI', 'DAX', 'React', 'FastAPI', 'Docker'],
  flow: [
    { title: 'Dados', icon: 'Database', tone: 'blue' },
    { title: 'Estrutura', icon: 'Code2', tone: 'cyan' },
    { title: 'BI', icon: 'BarChart3', tone: 'cyan' },
    { title: 'Decisão', icon: 'Target', tone: 'lime' },
  ],
  actingCards: [
    {
      title: 'Dados',
      icon: 'Database',
      description: 'Organizo bases, consultas, métricas e indicadores para sustentar análises com mais confiança.',
      technologies: ['PostgreSQL', 'MySQL', 'Power Query'],
      tone: 'blue',
    },
    {
      title: 'Integração',
      icon: 'Settings2',
      description: 'Conecto fontes e aplicações com APIs, pipelines e automações que reduzem trabalho manual.',
      technologies: ['Python', 'FastAPI', 'APIs REST'],
      tone: 'cyan',
    },
    {
      title: 'Visualização',
      icon: 'MonitorCog',
      description: 'Transformo dados em dashboards, módulos de BI e interfaces que fazem sentido no uso corporativo.',
      technologies: ['Power BI', 'DAX', 'React', 'Vite', 'eCharts', 'JavaScript'],
      tone: 'cyan',
    },
    {
      title: 'Operação',
      icon: 'ShieldCheck',
      description: 'Uso dados para apoiar decisões em logística, compras, estoque, consumo e suporte técnico.',
      technologies: ['Dashboards', 'Produto de Dados', 'QA', 'Plataforma de BI'],
      tone: 'lime',
    },
  ],
  valueAreas: [
    {
      title: 'Saúde & Inteligência Farmacêutica',
      icon: 'HeartPulse',
      context: 'Consumo, abastecimento, estoque e demanda.',
      delivery: 'Dashboards, análises e modelos preditivos.',
      impact: 'Ajudo a dar mais previsibilidade para a gestão de abastecimento.',
      tags: ['Forecasting', 'Power BI', 'Python', 'Consumo', 'Séries temporais'],
      details: [
        'Trabalhei em projetos de inteligência de dados aplicados ao setor farmacêutico, sempre com foco em transformar bases operacionais em análises úteis para decisão.',
        'Desenvolvi pipelines analíticos e modelos de previsão de demanda para produtos farmacêuticos, usando Python, séries temporais, validação estatística, backtesting e análise de erro por MAPE.',
        'Também estruturei indicadores de consumo, abastecimento e disponibilidade, conectando dados corporativos, planilhas, APIs e relatórios para dar uma visão mais clara da operação.',
      ],
      deliverables: [
        'Modelei forecasting segmentado por produto e classificação.',
        'Criei dashboards para acompanhar consumo e indicadores operacionais.',
        'Fiz análises exploratórias para identificar padrões de demanda.',
        'Apoiei a gestão de abastecimento com dados mais organizados e acionáveis.',
      ],
      technologies: 'Python, Power BI, Power Query, DAX, SQL, APIs REST e Prophet.',
      tone: 'blue',
    },
    {
      title: 'Logística & Performance Operacional',
      icon: 'Truck',
      context: 'Compras, transporte, SLA e qualidade.',
      delivery: 'Dashboards executivos e monitoramento de KPIs.',
      impact: 'Ajudo a dar mais controle operacional e suporte real à decisão.',
      tags: ['KPIs', 'Logística', 'SLA', 'Power BI', 'Análise operacional'],
      details: [
        'Construí análises e indicadores voltados à gestão logística, compras, performance operacional e acompanhamento de processos internos.',
        'Desenvolvi dashboards e relatórios para monitoramento de KPIs, apoiando áreas internas na leitura de dados operacionais, identificação de desvios e priorização de ações.',
        'Minha experiência como Líder Técnico também me deu uma visão prática de operação, qualidade, SLA, treinamento de equipes e melhoria contínua de processos.',
      ],
      deliverables: [
        'Modelei indicadores operacionais, logísticos e financeiros.',
        'Criei dashboards para acompanhar performance e apoiar tomada de decisão.',
        'Analisei compras, transporte, consumo e eficiência operacional.',
        'Monitorei qualidade, SLA e produtividade em operação com grande volume de atendimento.',
      ],
      technologies: 'Power BI, Excel, Salesforce, SQL, Power Query, DAX e Python.',
      tone: 'cyan',
    },
    {
      title: 'Estoques & Classificação Analítica',
      icon: 'PackageCheck',
      context: 'Disponibilidade, consumo, giro e classificação.',
      delivery: 'Pipelines, consolidação e modelos ABC/XYZ.',
      impact: 'Organizo a base para melhorar reposição, priorização e planejamento.',
      tags: ['ABC/XYZ', 'MAPE', 'Estoque', 'Pipelines', 'BI'],
      details: [
        'Desenvolvi análises voltadas à gestão de estoque, combinando dados de consumo, disponibilidade, classificação de produtos e previsão de demanda.',
        'Estruturei pipelines para consolidar informações de múltiplas fontes e apoiar análises segmentadas por grupo de produtos, permitindo uma leitura mais estratégica sobre comportamento de consumo, criticidade e previsibilidade.',
        'Uso modelos de classificação ABC/XYZ e forecasting para separar produtos por relevância, variabilidade e potencial de planejamento, criando uma base mais sólida para decisões operacionais.',
      ],
      deliverables: [
        'Consolidei dados de estoque, consumo e demanda.',
        'Classifiquei produtos por critérios ABC/XYZ.',
        'Modelei previsão de demanda com validação por erro percentual.',
        'Organizei bases para análises recorrentes e dashboards interativos.',
      ],
      technologies: 'Python, SQL, Power BI, Power Query, DAX, APIs REST e modelos de séries temporais.',
      tone: 'lime',
    },
    {
      title: 'Produto de Dados & BI para SaaS',
      icon: 'MonitorCog',
      context: 'Aplicação corporativa com módulo analítico integrado.',
      delivery: 'BI com filtros, KPIs, gráficos e drill-down.',
      impact: 'Levo a análise para dentro do produto, com uma experiência mais fluida e consistente.',
      tags: ['SaaS', 'JavaScript', 'APIs', 'Cross-filter', 'BI integrado'],
      details: [
        'Atuei no desenvolvimento de um módulo de Business Intelligence integrado a uma aplicação corporativa, conectando front-end, back-end e camada analítica.',
        'Implementei componentes reutilizáveis em JavaScript, filtros globais, cross-filter bidirecional e integração com APIs REST, garantindo consistência entre KPIs, gráficos, tabelas e análises detalhadas.',
        'Também participei da documentação técnica e do desenho arquitetural do módulo, pensando em manutenção, expansão, performance e organização dos estados analíticos.',
      ],
      deliverables: [
        'Desenvolvi um módulo BI integrado ao SaaS.',
        'Implementei cross-filter bidirecional entre visualizações.',
        'Integrei front-end e back-end via APIs REST.',
        'Estruturei blueprint técnico para evolução do produto.',
        'Otimizei performance e organização de estados analíticos.',
      ],
      technologies: 'JavaScript, React, Node.js, APIs REST, Power BI, SQL e arquitetura de dados.',
      tone: 'lime',
    },
  ],
  projects: [
    {
      badge: 'Produto SaaS',
      title: 'Plataforma operacional para estúdios',
      description:
        'Aplicação SaaS para centralizar clientes, agenda, orçamentos, inventário, marketplace, notificações e indicadores.',
      technologies: ['React', 'FastAPI', 'Supabase', 'PostgreSQL', 'APIs REST'],
      details: [
        'Construí uma plataforma SaaS voltada à organização operacional de tatuadores autônomos e pequenos estúdios.',
        'A proposta é reduzir a dependência de WhatsApp, Instagram, anotações soltas e memória, conectando lead, pré-atendimento, orçamento, atendimento, portfólio e análise em uma experiência simples e profissional.',
      ],
      deliverables: [
        'Criei gestão de clientes, agenda, atendimentos e orçamentos.',
        'Estruturei fluxo de pré-atendimento e links públicos.',
        'Desenvolvi marketplace, portfólio e área profissional do artista.',
        'Incluí inventário com controle de materiais e itens críticos.',
        'Montei dashboard operacional, notificações e assistente por e-mail.',
        'Criei cockpit de observabilidade para saúde do sistema, funil, automações, segurança e qualidade dos dados.',
      ],
      impact:
        'Transformei uma operação fragmentada em um fluxo centralizado, rastreável e mais profissional, com mais clareza, controle e previsibilidade.',
      tags: ['SaaS', 'Produto próprio', 'Full-stack', 'Operação', 'Observabilidade'],
      mockup: 'chart',
      tone: 'cyan',
    },
    {
      badge: 'BI',
      title: 'Módulo de BI para aplicação corporativa',
      description:
        'Módulo analítico integrado a uma aplicação web, com KPIs, gráficos, tabelas, filtros globais, drill-down e cross-filter bidirecional.',
      technologies: ['JavaScript', 'React', 'Node.js', 'APIs REST', 'BI'],
      details: [
        'Desenvolvi um módulo de Business Intelligence integrado a uma aplicação corporativa, com foco em transformar dados operacionais em visualizações interativas e reutilizáveis.',
        'A solução incluiu filtros globais, cross-filter bidirecional, integração com backend via APIs REST e organização de estados analíticos para manter consistência entre KPIs, gráficos, tabelas e visões detalhadas.',
      ],
      deliverables: [
        'Criei uma interface analítica integrada ao produto.',
        'Desenvolvi componentes reutilizáveis em JavaScript.',
        'Implementei filtros globais e navegação por drill-down.',
        'Integrei front-end e back-end via APIs.',
        'Estruturei blueprint técnico para manutenção e evolução.',
        'Otimizei a performance da experiência analítica.',
      ],
      impact:
        'Tornei a análise de dados parte da aplicação, reduzindo a dependência de relatórios externos e melhorando a tomada de decisão dentro do fluxo do usuário.',
      tags: ['BI integrado', 'Cross-filter', 'APIs', 'React', 'Produto de dados'],
      mockup: 'chart',
      tone: 'cyan',
    },
    {
      badge: 'Data',
      title: 'Data Lakehouse modular',
      description:
        'Ambiente modular para ingestão, versionamento, governança e análise de dados corporativos com foco em escalabilidade e interoperabilidade.',
      technologies: ['Spark', 'Docker', 'SQL', 'Dremio', 'MinIO'],
      details: [
        'Desenvolvi uma plataforma de dados modular para ingestão, organização, versionamento e análise de dados corporativos.',
        'A arquitetura foi pensada para lidar com dados estruturados, semiestruturados e não estruturados, oferecendo uma base mais confiável para consultas SQL, análises operacionais e visualizações em ferramentas de BI.',
      ],
      deliverables: [
        'Estruturei um ambiente analítico escalável.',
        'Organizei ingestão de dados de múltiplas fontes.',
        'Criei camadas para análise e consumo.',
        'Preparei suporte a consultas SQL e exploração de dados.',
        'Disponibilizei bases para Power BI e DBeaver.',
        'Mantive foco em governança, rastreabilidade e automação.',
      ],
      impact:
        'Criei uma base mais organizada para análise corporativa, reduzindo dispersão de dados e facilitando a construção de indicadores, relatórios e modelos analíticos.',
      tags: ['Lakehouse', 'Spark', 'SQL', 'Governança', 'Data Platform'],
      mockup: 'pipeline',
      tone: 'blue',
    },
    {
      badge: 'Forecasting',
      title: 'Previsão de demanda farmacêutica',
      description:
        'Pipeline de forecasting para produtos farmacêuticos, com séries temporais, backtesting, validação automática, MAPE e segmentação ABC/XYZ.',
      technologies: ['Python', 'Prophet', 'Pandas', 'MAPE', 'ABC/XYZ'],
      details: [
        'Implementei um pipeline de previsão de demanda para apoiar decisões relacionadas a consumo, abastecimento e planejamento de produtos farmacêuticos.',
        'O modelo utilizou técnicas de séries temporais, validação automática, backtesting e análise de erro, permitindo avaliar a previsibilidade por produto e por grupos de classificação ABC/XYZ.',
      ],
      deliverables: [
        'Criei pipeline de forecasting com Python.',
        'Modelei séries temporais.',
        'Implementei validação automática dos resultados.',
        'Usei backtesting para comparar previsto e realizado.',
        'Calculei erro por MAPE.',
        'Segmentei produtos por grupos ABC/XYZ.',
      ],
      impact:
        'Aumentei a capacidade de antecipar comportamento de demanda, apoiar decisões de reposição e organizar análises de consumo com maior precisão.',
      tags: ['Forecasting', 'Python', 'Séries temporais', 'MAPE', 'Demanda'],
      mockup: 'dashboard',
      tone: 'lime',
    },
    {
      badge: 'BI',
      title: 'Dashboards operacionais e executivos',
      description:
        'Relatórios e indicadores para logística, compras, estoque, consumo, qualidade, SLA e performance operacional.',
      technologies: ['Power BI', 'DAX', 'Power Query', 'SQL', 'Excel'],
      details: [
        'Construí dashboards e relatórios analíticos para acompanhamento de indicadores operacionais, logísticos, financeiros e de qualidade.',
        'Essas entregas apoiaram áreas internas na leitura de dados, no monitoramento de performance e na identificação de desvios em processos de compras, transporte, estoque, consumo, SLA e atendimento.',
      ],
      deliverables: [
        'Criei dashboards interativos em Power BI.',
        'Modelei indicadores operacionais e logísticos.',
        'Fiz análises exploratórias para suporte à gestão.',
        'Desenvolvi relatórios para acompanhamento de qualidade e SLA.',
        'Integrei dados de planilhas, APIs e relatórios.',
        'Apoiei diretamente áreas internas em temas de dados e BI.',
      ],
      impact:
        'Melhorei a visibilidade da operação e dei mais clareza para decisões táticas e estratégicas baseadas em indicadores.',
      tags: ['Power BI', 'KPIs', 'DAX', 'Operação', 'SLA'],
      mockup: 'dashboard',
      tone: 'lime',
    },
    {
      badge: 'Observabilidade',
      title: 'Cockpit de observabilidade operacional',
      description:
        'Painel de gestão para acompanhar saúde do sistema, banco, automações, segurança, funil, e-mails, tráfego e qualidade dos dados.',
      technologies: ['FastAPI', 'PostgreSQL', 'Supabase', 'Logs', 'Dashboards'],
      details: [
        'Criei um cockpit executivo para acompanhar a operação do TATU além da interface do usuário final.',
        'A tela mostra riscos ativos, saúde do sistema, disponibilidade do banco, sinais de acesso, jobs automáticos, funil do produto, qualidade dos dados, e-mails operacionais e tráfego da aplicação.',
      ],
      deliverables: [
        'Monitorei riscos ativos.',
        'Organizei indicadores de saúde do sistema e banco.',
        'Acompanhei jobs e rotinas automáticas.',
        'Estruturei leitura de funil do produto.',
        'Criei detecção de dados inconsistentes.',
        'Montei visão executiva para priorizar estabilização.',
      ],
      impact:
        'Transformei o produto em um sistema que não apenas funciona, mas explica sua própria operação e ajuda a identificar o que merece atenção.',
      tags: ['Observabilidade', 'Operação', 'Saúde do sistema', 'Dados', 'Confiabilidade'],
      mockup: 'api',
      tone: 'blue',
    },
  ],
  differentiators: [
    {
      title: 'Dados com fundamento',
      description: 'Organizo modelo, origem e regra de negócio antes de pensar na visualização.',
      icon: 'PanelTop',
    },
    {
      title: 'Integração útil para a operação',
      description: 'Conecto APIs e bases para alimentar fluxos, análises e decisões recorrentes.',
      icon: 'Hexagon',
    },
    {
      title: 'Interface que vira ferramenta',
      description: 'Desenho telas e análises para serem usadas no processo, não só apresentadas.',
      icon: 'Eye',
    },
  ],
};

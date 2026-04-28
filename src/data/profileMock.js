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
      'Profissional com atuação em Business Intelligence, visualização e análise de dados, desenvolvimento de módulos analíticos para aplicações corporativas, integração via APIs e construção de pipelines para suporte à tomada de decisão. Atua na estruturação de ambientes de dados, modelagem de indicadores operacionais, logísticos e financeiros, automação de fluxos analíticos e criação de interfaces que tornam a informação mais confiável, acessível e útil para a operação.',
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
      description: 'Organização de bases, consultas, métricas e indicadores para análise.',
      technologies: ['PostgreSQL', 'MySQL', 'Power Query'],
      tone: 'blue',
    },
    {
      title: 'Integração',
      icon: 'Settings2',
      description: 'APIs, pipelines e automações para conectar fontes e aplicações.',
      technologies: ['Python', 'FastAPI', 'APIs REST'],
      tone: 'cyan',
    },
    {
      title: 'Visualização',
      icon: 'MonitorCog',
      description: 'Dashboards, módulos de BI e interfaces analíticas para uso corporativo.',
      technologies: ['Power BI', 'DAX', 'React', 'Vite', 'eCharts', 'JavaScript'],
      tone: 'cyan',
    },
    {
      title: 'Operação',
      icon: 'ShieldCheck',
      description: 'Apoio a decisões em logística, compras, estoque, consumo e suporte técnico.',
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
      impact: 'Mais previsibilidade e apoio à gestão de abastecimento.',
      tags: ['Forecasting', 'Power BI', 'Python', 'Consumo', 'Séries temporais'],
      details: [
        'Atuação em projetos de inteligência de dados aplicados ao setor farmacêutico, com foco em transformar bases operacionais em análises úteis para decisão.',
        'Desenvolvi pipelines analíticos e modelos de previsão de demanda para produtos farmacêuticos, utilizando Python, séries temporais, validação estatística, backtesting e análise de erro por MAPE.',
        'Também atuei na estruturação de indicadores de consumo, abastecimento e disponibilidade, conectando dados corporativos, planilhas, APIs e relatórios para gerar uma visão mais clara da operação.',
      ],
      deliverables: [
        'Modelos de forecasting segmentados por produto e classificação.',
        'Dashboards para acompanhamento de consumo e indicadores operacionais.',
        'Análises exploratórias para identificar padrões de demanda.',
        'Apoio à gestão de abastecimento com dados mais organizados e acionáveis.',
      ],
      technologies: 'Python, Power BI, Power Query, DAX, SQL, APIs REST e Prophet.',
      tone: 'blue',
    },
    {
      title: 'Logística & Performance Operacional',
      icon: 'Truck',
      context: 'Compras, transporte, SLA e qualidade.',
      delivery: 'Dashboards executivos e monitoramento de KPIs.',
      impact: 'Mais controle operacional e suporte à decisão.',
      tags: ['KPIs', 'Logística', 'SLA', 'Power BI', 'Análise operacional'],
      details: [
        'Experiência na construção de análises e indicadores voltados à gestão logística, compras, performance operacional e acompanhamento de processos internos.',
        'Atuei no desenvolvimento de dashboards e relatórios para monitoramento de KPIs, apoiando áreas internas na leitura de dados operacionais, identificação de desvios e priorização de ações.',
        'Minha experiência anterior como Líder Técnico também contribuiu para uma visão prática de operação, qualidade, SLA, treinamento de equipes e melhoria contínua de processos.',
      ],
      deliverables: [
        'Modelagem de indicadores operacionais, logísticos e financeiros.',
        'Dashboards para acompanhamento de performance e tomada de decisão.',
        'Análises de compras, transporte, consumo e eficiência operacional.',
        'Monitoramento de qualidade, SLA e produtividade em operação com grande volume de atendimento.',
      ],
      technologies: 'Power BI, Excel, Salesforce, SQL, Power Query, DAX e Python.',
      tone: 'cyan',
    },
    {
      title: 'Estoques & Classificação Analítica',
      icon: 'PackageCheck',
      context: 'Disponibilidade, consumo, giro e classificação.',
      delivery: 'Pipelines, consolidação e modelos ABC/XYZ.',
      impact: 'Base mais estruturada para reposição e priorização.',
      tags: ['ABC/XYZ', 'MAPE', 'Estoque', 'Pipelines', 'BI'],
      details: [
        'Desenvolvimento de análises voltadas à gestão de estoque, combinando dados de consumo, disponibilidade, classificação de produtos e previsão de demanda.',
        'Estruturei pipelines para consolidar informações de múltiplas fontes e apoiar análises segmentadas por grupo de produtos, permitindo uma leitura mais estratégica sobre comportamento de consumo, criticidade e previsibilidade.',
        'Os modelos de classificação ABC/XYZ e forecasting ajudam a separar produtos por relevância, variabilidade e potencial de planejamento, oferecendo uma base mais sólida para decisões operacionais.',
      ],
      deliverables: [
        'Consolidação de dados de estoque, consumo e demanda.',
        'Classificação analítica de produtos por critérios ABC/XYZ.',
        'Previsão de demanda com validação por erro percentual.',
        'Organização de bases para análises recorrentes e dashboards interativos.',
      ],
      technologies: 'Python, SQL, Power BI, Power Query, DAX, APIs REST e modelos de séries temporais.',
      tone: 'lime',
    },
    {
      title: 'Produto de Dados & BI para SaaS',
      icon: 'MonitorCog',
      context: 'Aplicação corporativa com módulo analítico integrado.',
      delivery: 'BI com filtros, KPIs, gráficos e drill-down.',
      impact: 'Experiência analítica mais fluida e consistente.',
      tags: ['SaaS', 'JavaScript', 'APIs', 'Cross-filter', 'BI integrado'],
      details: [
        'Atuação no desenvolvimento de um módulo de Business Intelligence integrado a uma aplicação corporativa, conectando front-end, back-end e camada analítica.',
        'Implementei componentes reutilizáveis em JavaScript, filtros globais, cross-filter bidirecional e integração com APIs REST, garantindo consistência entre KPIs, gráficos, tabelas e análises detalhadas.',
        'Também participei da documentação técnica e do desenho arquitetural do módulo, pensando em manutenção, expansão, performance e organização dos estados analíticos.',
      ],
      deliverables: [
        'Desenvolvimento de módulo BI integrado ao SaaS.',
        'Cross-filter bidirecional entre visualizações.',
        'Integração front-end e back-end via APIs REST.',
        'Estruturação de blueprint técnico para evolução do produto.',
        'Otimização de performance e organização de estados analíticos.',
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
        'Desenvolvimento de uma plataforma SaaS voltada à organização operacional de tatuadores autônomos e pequenos estúdios.',
        'O produto reduz a dependência de WhatsApp, Instagram, anotações soltas e memória, conectando a jornada lead, pré-atendimento, orçamento, atendimento, portfólio e análise em uma experiência simples e profissional.',
      ],
      deliverables: [
        'Gestão de clientes, agenda, atendimentos e orçamentos.',
        'Fluxo de pré-atendimento e links públicos.',
        'Marketplace, portfólio e área profissional do artista.',
        'Inventário com controle de materiais e itens críticos.',
        'Dashboard operacional, notificações e assistente por e-mail.',
        'Cockpit de observabilidade para saúde do sistema, funil, automações, segurança e qualidade dos dados.',
      ],
      impact:
        'Transforma uma operação fragmentada em um fluxo centralizado, rastreável e mais profissional, com mais clareza, controle e previsibilidade.',
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
        'Desenvolvimento de um módulo de Business Intelligence integrado a uma aplicação corporativa, com foco em transformar dados operacionais em visualizações interativas e reutilizáveis.',
        'A solução incluiu filtros globais, cross-filter bidirecional, integração com backend via APIs REST e organização de estados analíticos para manter consistência entre KPIs, gráficos, tabelas e visões detalhadas.',
      ],
      deliverables: [
        'Interface analítica integrada ao produto.',
        'Componentes reutilizáveis em JavaScript.',
        'Filtros globais e navegação por drill-down.',
        'Integração front-end e back-end via APIs.',
        'Blueprint técnico para manutenção e evolução.',
        'Otimização de performance na experiência analítica.',
      ],
      impact:
        'Tornou a análise de dados parte da aplicação, reduzindo a dependência de relatórios externos e melhorando a tomada de decisão dentro do fluxo do usuário.',
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
        'Desenvolvimento de uma plataforma de dados modular para ingestão, organização, versionamento e análise de dados corporativos.',
        'A arquitetura foi pensada para lidar com dados estruturados, semiestruturados e não estruturados, oferecendo uma base mais confiável para consultas SQL, análises operacionais e visualizações em ferramentas de BI.',
      ],
      deliverables: [
        'Estruturação de ambiente analítico escalável.',
        'Ingestão de dados de múltiplas fontes.',
        'Organização de camadas para análise e consumo.',
        'Suporte a consultas SQL e exploração de dados.',
        'Preparação de bases para Power BI e DBeaver.',
        'Foco em governança, rastreabilidade e automação.',
      ],
      impact:
        'Criou uma base mais organizada para análise corporativa, reduzindo dispersão de dados e facilitando a construção de indicadores, relatórios e modelos analíticos.',
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
        'Implementação de pipeline de previsão de demanda para apoiar decisões relacionadas a consumo, abastecimento e planejamento de produtos farmacêuticos.',
        'O modelo utilizou técnicas de séries temporais, validação automática, backtesting e análise de erro, permitindo avaliar a previsibilidade por produto e por grupos de classificação ABC/XYZ.',
      ],
      deliverables: [
        'Pipeline de forecasting com Python.',
        'Modelagem de séries temporais.',
        'Validação automática dos resultados.',
        'Backtesting para comparação entre previsto e realizado.',
        'Cálculo de erro por MAPE.',
        'Segmentação por grupos ABC/XYZ.',
      ],
      impact:
        'Aumentou a capacidade de antecipar comportamento de demanda, apoiar decisões de reposição e organizar análises de consumo com maior precisão.',
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
        'Construção de dashboards e relatórios analíticos para acompanhamento de indicadores operacionais, logísticos, financeiros e de qualidade.',
        'As entregas apoiaram áreas internas na leitura de dados, no monitoramento de performance e na identificação de desvios em processos de compras, transporte, estoque, consumo, SLA e atendimento.',
      ],
      deliverables: [
        'Dashboards interativos em Power BI.',
        'Modelagem de indicadores operacionais e logísticos.',
        'Análises exploratórias para suporte à gestão.',
        'Relatórios para acompanhamento de qualidade e SLA.',
        'Integração de dados de planilhas, APIs e relatórios.',
        'Apoio direto a áreas internas em temas de dados e BI.',
      ],
      impact:
        'Melhorou a visibilidade da operação e deu mais clareza para decisões táticas e estratégicas baseadas em indicadores.',
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
        'Criação de um cockpit executivo para acompanhar a operação do TATU além da interface do usuário final.',
        'A tela mostra riscos ativos, saúde do sistema, disponibilidade do banco, sinais de acesso, jobs automáticos, funil do produto, qualidade dos dados, e-mails operacionais e tráfego da aplicação.',
      ],
      deliverables: [
        'Monitoramento de riscos ativos.',
        'Indicadores de saúde do sistema e banco.',
        'Acompanhamento de jobs e rotinas automáticas.',
        'Leitura de funil do produto.',
        'Detecção de dados inconsistentes.',
        'Visão executiva para priorizar estabilização.',
      ],
      impact:
        'Transforma o produto em um sistema que não apenas funciona, mas explica sua própria operação e ajuda a identificar o que merece atenção.',
      tags: ['Observabilidade', 'Operação', 'Saúde do sistema', 'Dados', 'Confiabilidade'],
      mockup: 'api',
      tone: 'blue',
    },
  ],
  differentiators: [
    {
      title: 'Dados com fundamento',
      description: 'Modelo, origem e regra de negócio documentados antes da visualização.',
      icon: 'PanelTop',
    },
    {
      title: 'Integração útil para a operação',
      description: 'APIs e bases conectadas para alimentar fluxos, análises e decisões recorrentes.',
      icon: 'Hexagon',
    },
    {
      title: 'Interface que vira ferramenta',
      description: 'Telas e análises desenhadas para serem usadas no processo, não só apresentadas.',
      icon: 'Eye',
    },
  ],
};

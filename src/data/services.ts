export interface Service {
  slug: string; title: string; short: string; icon: string; summary: string;
  metaDescription: string; intro: string;
  build: string[]; needs: { title: string; body: string }[];
  capabilities: string[]; deliverables: string[];
  considerations: { q: string; a: string }[]; cta: string;
}

export const services: Service[] = [
  {
    slug: 'blockchain-development', title: 'Blockchain Development', short: 'Blockchain', icon: 'chain',
    summary: 'Chain integrations, indexers and on-chain/off-chain architecture for products that need verifiable state.',
    metaDescription: 'Blockchain development by Khedar: network selection, node and indexer infrastructure, token systems and on-chain/off-chain architecture.',
    intro: 'Most blockchain products are 20% chain and 80% conventional engineering: indexers, APIs, key management, monitoring and user flows. We design both halves together so the ledger does what it is good at and nothing more.',
    build: ['EVM-based applications and protocol back ends', 'Token issuance and transfer systems with role-controlled administration', 'Event indexers, data pipelines and query APIs over chain data', 'Node, RPC and relayer infrastructure with failover', 'Bridges to existing business systems: ERP, CRM, payment and identity'],
    needs: [
      { title: 'Shared, auditable records', body: 'Several parties need to trust the same history without one of them operating a private database for everyone.' },
      { title: 'Programmable assets', body: 'You want ownership, transfer rules or rewards enforced by code that users can inspect.' },
      { title: 'Reliable chain data', body: 'Your product already touches a chain but reads are slow, inconsistent or break during reorganisations.' },
    ],
    capabilities: ['Architecture reviews deciding what belongs on-chain and what does not', 'Reorg-aware indexing and reconciliation', 'Gas and fee modelling for target networks', 'Key custody design using HSMs, MPC services or multisig', 'Observability: alerting on stuck transactions, balance drift and RPC health'],
    deliverables: ['Architecture document and threat model', 'Source code in your repository with CI', 'Deployment scripts and environment runbooks', 'Monitoring dashboards and alert rules', 'Handover session and written operating guide'],
    considerations: [
      { q: 'Which network should we use?', a: 'It depends on fees, finality, tooling, liquidity and where your users already are. We compare candidate networks against your requirements before writing code.' },
      { q: 'Who holds the keys in production?', a: 'Administrative and treasury keys should be held by you, ideally behind multisig or managed custody. We design the process; we do not need to hold production keys.' },
      { q: 'What happens when the chain is congested?', a: 'We plan for fee spikes, delayed confirmations and RPC outages with queueing, retries and clear user messaging.' },
    ],
    cta: 'Discuss a blockchain build',
  },
  {
    slug: 'smart-contract-development', title: 'Smart Contract Development', short: 'Smart Contracts', icon: 'contract',
    summary: 'Solidity contracts written test-first, with upgrade, access-control and audit preparation planned from day one.',
    metaDescription: 'Smart contract development by Khedar: Solidity design, test suites, upgrade strategy, access control and preparation for independent audits.',
    intro: 'A deployed contract is difficult to change and may hold real value. We keep contracts small, specify behaviour before implementing it, and test the edges where funds can move unexpectedly.',
    build: ['Tokens (ERC-20, ERC-721, ERC-1155) with custom rules', 'Vesting, staking, escrow and treasury contracts', 'Upgradeable proxies with timelocks and multisig administration', 'Payment splitting and settlement logic', 'Governance and permission modules'],
    needs: [
      { title: 'Rules that must hold', body: 'Business logic that should execute exactly as written, without relying on an operator to apply it.' },
      { title: 'Controlled change', body: 'You need the ability to fix or extend contracts without giving one person unchecked power.' },
      { title: 'Audit readiness', body: 'You plan an independent audit and want code, tests and documentation that make it efficient.' },
    ],
    capabilities: ['Formal written specification of every state transition', 'Unit, fuzz and invariant testing (Foundry / Hardhat)', 'Static analysis in CI', 'Upgrade patterns with storage-layout checks', 'Testnet rehearsal of deployment and administration'],
    deliverables: ['Specification and invariants document', 'Contract source with full test suite and coverage report', 'Deployment and verification scripts', 'Admin runbook: pausing, upgrades, role changes', 'Audit preparation pack for your chosen auditor'],
    considerations: [
      { q: 'Do you audit your own contracts?', a: 'No. Internal review and testing reduce risk, but an independent audit by a separate firm is recommended before contracts hold meaningful value. We help you prepare for one.' },
      { q: 'Can you guarantee the contract is secure?', a: 'No responsible team can. We apply disciplined engineering, testing and review, and we design pause and recovery paths in case something is found later.' },
      { q: 'Upgradeable or immutable?', a: 'Upgradeability adds flexibility and also trust assumptions. We document the trade-off and, if upgradeable, place it behind a timelock and multisig.' },
    ],
    cta: 'Discuss a smart contract project',
  },
  {
    slug: 'decentralized-exchange-development', title: 'Decentralized Exchange Development', short: 'DEX', icon: 'dex',
    summary: 'AMM, order-book and aggregator DEX front ends and contracts, with honest treatment of liquidity and risk.',
    metaDescription: 'Decentralized exchange development by Khedar: AMM and order-book designs, aggregator integration, wallet connectivity and risk controls.',
    intro: 'A DEX is a set of contracts plus a trading interface plus the operational work of keeping prices, liquidity and data correct. We build all three, and we are explicit about what code cannot solve on its own, such as liquidity and legal status.',
    build: ['Automated market maker pools and routers', 'On-chain or hybrid order-book integrations', 'Swap interfaces with routing across existing liquidity sources', 'Liquidity provider dashboards and position management', 'Analytics: volume, fees and pool health from indexed events'],
    needs: [
      { title: 'Self-custodial trading', body: 'Users trade from their own wallets, and your platform never takes custody of their funds.' },
      { title: 'A branded trading venue', body: 'You want your own interface and fee model on top of existing or new liquidity.' },
      { title: 'Ecosystem liquidity', body: 'Your token or network needs a native place to trade.' },
    ],
    capabilities: ['Pricing curve and fee design with simulation', 'Slippage, price-impact and MEV-aware UX', 'Oracle integration with stale-price protection', 'Wallet connection across major wallets', 'Pause controls and parameter governance'],
    deliverables: ['Protocol design and economic assumptions document', 'Contracts with tests and audit preparation pack', 'Trading web application', 'Indexer and analytics API', 'Launch checklist and incident runbook'],
    considerations: [
      { q: 'Does a DEX need a licence?', a: 'Rules differ by jurisdiction and depend on how the platform is operated, marketed and governed. Building the software does not settle that question; you should obtain legal advice before launch.' },
      { q: 'Where does liquidity come from?', a: 'Liquidity is a business problem, not a code feature. We can integrate existing sources and build incentive tooling, but we do not supply liquidity.' },
      { q: 'What about front-running?', a: 'We design for it with slippage limits, private transaction routes where available and clear user warnings, while recognising it cannot be removed entirely on public chains.' },
    ],
    cta: 'Discuss a DEX build',
  },
  {
    slug: 'centralized-exchange-development', title: 'Centralized Exchange Development', short: 'CEX', icon: 'cex',
    summary: 'Matching engines, account ledgers, wallets and admin tooling for operators who hold the required authorisations.',
    metaDescription: 'Centralized exchange software development by Khedar: matching engine, ledger, custody integration, KYC/AML provider integration and operations tooling.',
    intro: 'A centralized exchange holds customer assets and records every balance change. The software must be precise, the custody arrangements robust, and the compliance processes real. We build the software; you, as operator, hold the licences and responsibility.',
    build: ['Order matching engines with price-time priority', 'Double-entry account ledgers with reconciliation', 'Deposit and withdrawal pipelines connected to custody providers', 'Trading web and mobile interfaces, REST and WebSocket APIs', 'Back-office: user support, risk, limits, reporting'],
    needs: [
      { title: 'A licensed operator building its venue', body: 'You hold or are pursuing the authorisations your markets require and need trading infrastructure.' },
      { title: 'Replacing a white-label platform', body: 'You need control of the code, data and roadmap.' },
      { title: 'Brokerage or OTC desks', body: 'You need internal matching, quoting and settlement tooling.' },
    ],
    capabilities: ['Deterministic matching with replay from event logs', 'Ledger invariants checked continuously', 'Hot/warm/cold wallet flows with withdrawal approvals', 'Integration points for KYC, AML screening and travel-rule providers', 'Rate limiting, audit logs and role-based admin access'],
    deliverables: ['System architecture and data-flow documentation', 'Matching, ledger and API services with tests', 'Trading and admin front ends', 'Load-test results from your target environment', 'Operational runbooks for incidents, reconciliation and releases'],
    considerations: [
      { q: 'Does Khedar provide a licence or regulatory approval?', a: 'No. Operating an exchange typically requires authorisation in each jurisdiction you serve. Software development does not include or imply regulatory approval; your legal and compliance advisers lead that work.' },
      { q: 'Who holds customer funds?', a: 'Custody is your responsibility as operator, normally through a qualified custodian or an in-house setup with HSM/MPC controls. We integrate with your chosen arrangement and design approval workflows around it.' },
      { q: 'How are KYC and AML handled?', a: 'Through specialist providers you contract with. We integrate their APIs and build the review queues, but your compliance team defines the policies.' },
    ],
    cta: 'Discuss exchange infrastructure',
  },
  {
    slug: 'crypto-wallet-development', title: 'Crypto Wallet Development', short: 'Wallets', icon: 'wallet',
    summary: 'Self-custodial and embedded wallets with careful key handling, transaction clarity and recovery paths.',
    metaDescription: 'Crypto wallet development by Khedar: self-custodial mobile and web wallets, embedded wallets, MPC and smart-account options, and transaction safety UX.',
    intro: 'A wallet is a security product disguised as a consumer app. Users must understand what they are signing, and keys must never leak. We design the key model first, then the experience around it.',
    build: ['Self-custodial mobile and browser wallets', 'Embedded wallets inside existing apps', 'Smart-account (account abstraction) wallets with sponsored fees', 'Multi-chain balance and history views', 'Enterprise wallets with approval policies'],
    needs: [
      { title: 'Onboarding without friction', body: 'Your users are not crypto natives and need a wallet that feels like a normal app.' },
      { title: 'Treasury control', body: 'Your organisation needs multiple approvers for outgoing transactions.' },
      { title: 'Your own branded wallet', body: 'You want a wallet tailored to your token, network or community.' },
    ],
    capabilities: ['Key storage using secure enclaves and OS keystores', 'MPC or multisig options via established providers', 'Human-readable transaction previews and simulation', 'Recovery design: social, cloud-backup or guardian based', 'WalletConnect and dApp browser integration'],
    deliverables: ['Key-management design and threat model', 'iOS, Android and/or web wallet source', 'Backend for notifications, pricing and indexing', 'Security review preparation pack', 'App store submission support'],
    considerations: [
      { q: 'Custodial or self-custodial?', a: 'Holding keys for users can make you a custodian with regulatory obligations. Self-custodial or MPC designs change that picture; obtain legal advice for your model.' },
      { q: 'What if a user loses their phone?', a: 'Recovery is designed up front. Each method trades convenience against security, and we document those trade-offs for your users.' },
      { q: 'Will app stores accept it?', a: 'Store policies on crypto apps vary by region and change over time. We plan for review requirements, but approval rests with the store.' },
    ],
    cta: 'Discuss a wallet project',
  },
  {
    slug: 'saas-development', title: 'SaaS Development', short: 'SaaS', icon: 'saas',
    summary: 'Multi-tenant products with billing, roles and observability, built to ship early and scale steadily.',
    metaDescription: 'SaaS development by Khedar: multi-tenant architecture, subscription billing, role-based access, integrations and production operations.',
    intro: 'Good SaaS products start narrow and grow without rewrites. We build a focused first release on foundations that already handle tenants, permissions, billing and monitoring properly.',
    build: ['Multi-tenant web applications and admin consoles', 'Subscription and usage-based billing', 'Role-based access control and SSO', 'Public APIs, webhooks and integrations', 'Internal tools that later become products'],
    needs: [
      { title: 'From idea to first customers', body: 'You need a production-quality MVP, not a prototype you will throw away.' },
      { title: 'Outgrown spreadsheets', body: 'A manual process is now critical enough to deserve proper software.' },
      { title: 'Modernising legacy software', body: 'An existing product needs a cloud-native, multi-tenant rebuild.' },
    ],
    capabilities: ['Tenant isolation strategies matched to your data sensitivity', 'Billing via Stripe or regional payment providers', 'Background jobs, queues and scheduled work', 'Feature flags and staged rollouts', 'Logging, tracing, uptime and cost monitoring'],
    deliverables: ['Product scope and architecture plan', 'Application source with automated tests and CI/CD', 'Infrastructure as code for your cloud account', 'Admin and support tooling', 'Operations runbook and handover'],
    considerations: [
      { q: 'Which cloud do you use?', a: 'Yours. We deploy into accounts you own so you keep control of data, billing and access.' },
      { q: 'How do you handle data protection?', a: 'We design for the regulations relevant to your users, such as GDPR or India\'s DPDP Act, with encryption, access logs and retention policies. Compliance itself is owned by your organisation.' },
      { q: 'Can the first version be small?', a: 'It should be. We help cut scope to what proves the product while keeping the foundations sound.' },
    ],
    cta: 'Discuss a SaaS product',
  },
  {
    slug: 'shopping-portals-and-marketplaces', title: 'Shopping Portals & Marketplaces', short: 'Marketplaces', icon: 'market',
    summary: 'Storefronts and multi-vendor marketplaces with catalogue, checkout, payouts and fulfilment integrations.',
    metaDescription: 'Shopping portal and marketplace development by Khedar: multi-vendor catalogues, checkout, payments, seller payouts, search and logistics integration.',
    intro: 'Commerce platforms succeed on speed, trust and operations. We build fast storefronts and the less visible systems behind them: catalogue management, payments, seller payouts, returns and logistics.',
    build: ['Single-brand online stores with custom checkout', 'Multi-vendor marketplaces with seller onboarding', 'B2B ordering portals with price lists and approvals', 'Search, filtering and recommendations', 'Order management connected to warehouses and couriers'],
    needs: [
      { title: 'Beyond template limits', body: 'Your catalogue, pricing or fulfilment rules no longer fit an off-the-shelf store.' },
      { title: 'Launching a marketplace', body: 'You need to onboard sellers, split payments and manage disputes.' },
      { title: 'Mobile-first buyers', body: 'Your customers shop on budget phones and slow networks.' },
    ],
    capabilities: ['Performance budgets for mobile storefronts', 'Payment gateway and split-payment integration', 'Seller KYC and payout scheduling via payment providers', 'Inventory sync with ERP and warehouse systems', 'Promotions, coupons and tax configuration'],
    deliverables: ['Commerce architecture and integration map', 'Storefront, seller and admin applications', 'Payment and logistics integrations', 'Analytics and conversion tracking setup', 'Launch support and operations guide'],
    considerations: [
      { q: 'Who processes payments?', a: 'A licensed payment provider you contract with. We integrate it so card and bank data never touches your servers unnecessarily.' },
      { q: 'Build custom or extend a platform?', a: 'Sometimes extending Shopify, Medusa or a similar platform is the better choice. We recommend whichever costs you less over time.' },
      { q: 'How do seller payouts work?', a: 'Through marketplace features of payment providers, which handle onboarding checks and settlement rules in each region.' },
    ],
    cta: 'Discuss a commerce platform',
  },
  {
    slug: 'ai-agency-and-business-automation', title: 'AI Agency & Business Automation', short: 'AI Automation', icon: 'ai',
    summary: 'Practical AI assistants, document workflows and process automation measured against real business outcomes.',
    metaDescription: 'AI agency and business automation by Khedar: LLM assistants, retrieval over company data, document processing and workflow automation with human review.',
    intro: 'AI is useful when it removes a specific bottleneck and is measured against it. We start with a process map, prototype quickly on your real data, and add human review wherever an error would be costly.',
    build: ['Assistants grounded in your documents and systems (retrieval-augmented generation)', 'Document extraction for invoices, contracts and forms', 'Support triage and draft-reply workflows', 'Agentic workflows that call your internal APIs with guardrails', 'Automation across CRM, email, spreadsheets and ticketing tools'],
    needs: [
      { title: 'Repetitive knowledge work', body: 'Teams spend hours reading, sorting and re-typing information.' },
      { title: 'Scattered knowledge', body: 'Answers exist in documents and tools but are slow to find.' },
      { title: 'Scaling without overload', body: 'Volume is growing faster than headcount.' },
    ],
    capabilities: ['Model selection across hosted and open-weight models', 'Evaluation sets built from your real cases', 'Prompt, retrieval and tool design with access controls', 'Human-in-the-loop review queues', 'Cost, latency and quality monitoring'],
    deliverables: ['Process assessment and automation shortlist', 'Working pilot measured against an agreed baseline', 'Production integration with logging and fallbacks', 'Evaluation suite for future model changes', 'Team training and usage guidelines'],
    considerations: [
      { q: 'Will AI make mistakes?', a: 'Yes, sometimes. We measure error rates on your data, route uncertain cases to people, and avoid fully automating decisions where mistakes are costly.' },
      { q: 'Is our data used to train models?', a: 'We configure providers and contracts so your data is not used for training where that option exists, and can use self-hosted models when required.' },
      { q: 'How quickly can we see results?', a: 'A focused pilot is often possible within weeks, but timelines depend on data access and process complexity. We agree on a measurable target before starting.' },
    ],
    cta: 'Discuss an AI automation project',
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

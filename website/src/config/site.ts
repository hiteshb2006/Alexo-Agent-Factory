/**
 * Site-wide content. Edit this file to change copy, links, plans and products
 * without touching the page components.
 */

export const company = {
    name: 'AlexoCloudAI',
    tagline: 'AI products that put agents to work.',
    website: 'https://alexocloudai.com',
    email: {
        sales: 'sales@alexocloudai.com',
        support: 'support@alexocloudai.com',
        hello: 'hello@alexocloudai.com'
    },
    social: {
        x: 'https://twitter.com/AlexoCloudAI',
        github: 'https://github.com/hiteshb2006/Alexo-Agent-Factory'
    },
    location: 'San Francisco, CA'
}

export const links = {
    docs: 'https://docs.alexocloudai.com',
    // Where "Start free trial" / "Get started" buttons go (license portal sign-up).
    signup: 'https://app.alexocloudai.com/signup',
    login: 'https://app.alexocloudai.com/login',
    bookDemo: '/contact?topic=demo'
}

export type Product = {
    slug: string
    name: string
    status: 'available' | 'coming-soon'
    summary: string
    href?: string
    logoLight?: string
    logoDark?: string
}

/** Products shown on the AlexoCloudAI home page. Add new products here. */
export const products: Product[] = [
    {
        slug: 'agentfactory',
        name: 'AgentFactory',
        status: 'available',
        summary: 'Build, orchestrate, and scale AI agents. A visual studio for multi-agent workflows that runs on your own infrastructure.',
        href: '/agentfactory',
        logoLight: '/brand/agentfactory_white.svg',
        logoDark: '/brand/agentfactory_dark.svg'
    },
    {
        slug: 'next',
        name: 'Next from AlexoCloudAI',
        status: 'coming-soon',
        summary: 'A new product is in the works. Join the list to hear about it first.'
    }
]

export type Plan = {
    name: string
    price: string
    period?: string
    blurb: string
    cta: string
    href: string
    highlighted?: boolean
    features: string[]
}

/**
 * AgentFactory plans. Prices below are placeholders: set your real pricing
 * before going live.
 */
export const plans: Plan[] = [
    {
        name: 'Starter',
        price: '$49',
        period: '/month',
        blurb: 'For builders shipping their first production agents.',
        cta: 'Start 14-day free trial',
        href: links.signup,
        features: [
            '1 self-hosted instance',
            'Up to 3 users',
            'Visual agent & workflow builder',
            '300+ nodes and integrations',
            'Community support'
        ]
    },
    {
        name: 'Pro',
        price: '$199',
        period: '/month',
        blurb: 'For teams running agents across the business.',
        cta: 'Start 14-day free trial',
        href: links.signup,
        highlighted: true,
        features: [
            'Up to 3 self-hosted instances',
            'Up to 20 users',
            'Queue mode for scale (workers + Redis)',
            'Executions & observability',
            'Priority email support'
        ]
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        blurb: 'For organizations with security, scale and compliance needs.',
        cta: 'Talk to sales',
        href: '/contact?topic=enterprise',
        features: [
            'Unlimited instances & users',
            'Offline / air-gapped licensing',
            'Deployment assistance',
            'Dedicated success manager',
            'SLA-backed support'
        ]
    }
]

export const faqs = [
    {
        q: 'Is AgentFactory self-hosted?',
        a: 'Yes. You download AgentFactory and run it on your own servers or cloud account with Docker. Your flows, credentials and data stay in your infrastructure.'
    },
    {
        q: 'How does licensing work?',
        a: 'Create an account, pick a plan and you get a license key. Add the key to your AgentFactory instance and you are up and running. When you renew, your instance keeps working without reinstalling.'
    },
    {
        q: 'Which AI models can I use?',
        a: 'Bring your own: OpenAI, Anthropic, Google, Azure OpenAI, AWS Bedrock, Mistral, Groq, Ollama and more. 29 chat-model providers are built in, including local models.'
    },
    {
        q: 'Can agents use my company data?',
        a: 'Yes. Load documents from 39 sources, chunk and embed them, and store them in any of 25 vector stores to build retrieval-augmented agents.'
    },
    {
        q: 'Can I keep a human in the loop?',
        a: 'Yes. Add human-input steps so an agent pauses for approval or feedback before it takes an action, then resumes.'
    },
    {
        q: 'How do I put an agent in front of customers?',
        a: 'Every flow gets an API endpoint, and you can embed a chat widget on any website or share a full-page chatbot link.'
    }
]

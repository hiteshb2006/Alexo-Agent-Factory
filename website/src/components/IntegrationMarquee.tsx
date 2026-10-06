const row1 = ['OpenAI', 'Anthropic', 'Google Gemini', 'Azure OpenAI', 'AWS Bedrock', 'Mistral', 'Groq', 'Ollama', 'Cohere', 'Hugging Face', 'DeepSeek', 'xAI']
const row2 = ['Pinecone', 'Qdrant', 'Postgres pgvector', 'Weaviate', 'Chroma', 'Milvus', 'Redis', 'MongoDB Atlas', 'Elasticsearch', 'Supabase', 'Zep', 'Upstash']
const row3 = ['Slack', 'Gmail', 'Google Drive', 'Google Sheets', 'Microsoft Teams', 'Outlook', 'Notion', 'GitHub', 'Jira', 'Confluence', 'Stripe', 'MCP servers']

const Row = ({ items, reverse }: { items: string[]; reverse?: boolean }) => (
    <div className='relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]'>
        <div className={`flex w-max shrink-0 animate-marquee gap-3 pr-3 ${reverse ? '[animation-direction:reverse]' : ''}`}>
            {[...items, ...items].map((name, i) => (
                <span
                    key={`${name}-${i}`}
                    className='whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-ink-muted'
                >
                    {name}
                </span>
            ))}
        </div>
    </div>
)

/** Scrolling rows of the model providers, vector stores and apps AgentFactory connects to. */
const IntegrationMarquee = () => (
    <div className='space-y-3'>
        <Row items={row1} />
        <Row items={row2} reverse />
        <Row items={row3} />
    </div>
)

export default IntegrationMarquee

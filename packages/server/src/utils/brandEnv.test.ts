import { applyLegacyEnvAliases } from './brandEnv'

describe('applyLegacyEnvAliases', () => {
    it('copies a legacy variable to its AgentFactory name when the new name is unset', () => {
        const env: NodeJS.ProcessEnv = { FLOWISE_FILE_SIZE_LIMIT: '10mb' }
        applyLegacyEnvAliases(env)
        expect(env.AGENTFACTORY_FILE_SIZE_LIMIT).toBe('10mb')
    })

    it('keeps the AgentFactory value when both names are set', () => {
        const env: NodeJS.ProcessEnv = { FLOWISE_SECRETKEY_OVERWRITE: 'legacy', AGENTFACTORY_SECRETKEY_OVERWRITE: 'current' }
        applyLegacyEnvAliases(env)
        expect(env.AGENTFACTORY_SECRETKEY_OVERWRITE).toBe('current')
    })

    it('fills an empty AgentFactory value from the legacy name', () => {
        const env: NodeJS.ProcessEnv = { FLOWISE_EE_LICENSE_KEY: 'key', AGENTFACTORY_EE_LICENSE_KEY: '' }
        applyLegacyEnvAliases(env)
        expect(env.AGENTFACTORY_EE_LICENSE_KEY).toBe('key')
    })

    it('does nothing when neither name is set', () => {
        const env: NodeJS.ProcessEnv = {}
        applyLegacyEnvAliases(env)
        expect(env).toEqual({})
    })
})

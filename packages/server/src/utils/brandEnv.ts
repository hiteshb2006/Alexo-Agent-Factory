/**
 * AgentFactory environment variable aliases.
 *
 * AgentFactory reads the `AGENTFACTORY_*` names. Deployments configured with the
 * legacy upstream names keep working: when only the legacy name is set, its value
 * is copied to the AgentFactory name before the rest of the app reads it.
 */
export const LEGACY_ENV_ALIASES: Readonly<Record<string, string>> = {
    FLOWISE_FILE_SIZE_LIMIT: 'AGENTFACTORY_FILE_SIZE_LIMIT',
    FLOWISE_SECRETKEY_OVERWRITE: 'AGENTFACTORY_SECRETKEY_OVERWRITE',
    FLOWISE_EE_LICENSE_KEY: 'AGENTFACTORY_EE_LICENSE_KEY',
    DISABLE_FLOWISE_TELEMETRY: 'DISABLE_AGENTFACTORY_TELEMETRY'
}

export const applyLegacyEnvAliases = (env: NodeJS.ProcessEnv = process.env): void => {
    for (const [legacyName, brandName] of Object.entries(LEGACY_ENV_ALIASES)) {
        const legacyValue = env[legacyName]
        if ((env[brandName] === undefined || env[brandName] === '') && legacyValue !== undefined && legacyValue !== '') {
            env[brandName] = legacyValue
        }
    }
}

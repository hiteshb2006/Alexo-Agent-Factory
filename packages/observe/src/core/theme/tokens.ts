/**
 * Design Tokens for @alexocloudai/observe (AgentFactory brand palette).
 *
 * Base palette and node type colors below are duplicated in
 * packages/agentflow/src/core/theme/tokens.ts — keep in sync until
 * extracted to packages/shared-ui in a follow-up. Each package
 * extends the shared base with its own specifics (agentflow: ReactFlow,
 * syntax highlight; observe: observe-specific semantics).
 */

// Raw palette: each entry is named after the COLOR it represents, not the
// function it serves. Functional mappings live in the `tokens.colors.*`
// groups below (semantic, palette, nodes, metrics, jsonViewer, ...).
const baseColors = {
    amber: '#ffd166',
    aqua: '#4DDBBB',
    black: '#000',
    brightGreen: '#10b981',
    brightYellow: '#fee440',
    coral: '#FF7F7F',
    coralAccent: '#ff6b6b',
    cornflowerBlue: '#569cd6',
    cream: '#fefcbf',
    cyan: '#4DD0E1',
    darkBrown: '#744210',
    darkGray100: '#0b1220',
    darkGray200: '#111a2c',
    darkGray300: '#121b2e',
    darkGray400: '#172033',
    darkGray500: '#26324a',
    darkGray600: '#3a4660',
    darkGray700: '#555',
    darkGray800: '#aaa',
    darkGreen: '#008000',
    darkOrange: '#ff8c00',
    deepCoral: '#e03e3e',
    deepTeal: '#0c9f91',
    deepViolet: '#6d28d9',
    electricTeal: '#14d8c4',
    gold: '#c49331',
    goldAmber: '#f5a524',
    goldenYellow: '#FFB938',
    gray100: '#f5f7fb',
    gray200: '#e2e2e2',
    gray300: '#d3d9e4',
    gray400: '#bdbdbd',
    gray50: '#f5f7fb',
    gray500: '#9e9e9e',
    gray600: '#757575',
    gray700: '#666',
    gray75: '#eef1f7',
    gray800: '#0b1220',
    green: '#4caf50',
    iceBlue: '#9cdcfe',
    keyOrange: '#ff5733',
    lavender: '#E4B7FF',
    lightSalmon: '#FFA07A',
    lilac: '#b8bedd',
    magenta: '#ff00ff',
    mauve: '#9C89B8',
    mintGreen: '#7EE787',
    mistGray: '#d4d4d4',
    mossGreen: '#b5cea8',
    orange: '#ff9800',
    paleAmber: '#fff7e0',
    paleCoral: '#ffe3e3',
    paleGreen: '#d5f8e6',
    paleTeal: '#e2fbf8',
    paleViolet: '#f1eafe',
    periwinkle: '#6E6EFD',
    pink: '#ff8fab',
    sage: '#a3b18a',
    skyBlue: '#64B5F6',
    tan: '#d4a373',
    vividBlue: '#0000ff',
    vividGreen: '#059669',
    vividViolet: '#7c3aed',
    white: '#fff'
} as const

export const tokens = {
    borderRadius: { lg: 12, md: 8, round: '50%', sm: 4 },
    colors: {
        background: {
            canvas: { dark: baseColors.darkGray100, light: baseColors.gray100 },
            card: { dark: baseColors.darkGray400, light: baseColors.white },
            cardHover: { dark: baseColors.darkGray500, light: baseColors.gray75 },
            sidebar: { dark: baseColors.darkGray300, light: baseColors.gray50 }
        },
        border: {
            default: { dark: baseColors.darkGray500, light: baseColors.gray300 },
            hover: { dark: baseColors.darkGray600, light: baseColors.gray400 }
        },
        // Light = CSS named colors, dark = VS Code Dark+.
        jsonViewer: {
            boolean: { dark: baseColors.cornflowerBlue, light: baseColors.vividBlue },
            key: { dark: baseColors.keyOrange, light: baseColors.keyOrange },
            null: { dark: baseColors.mistGray, light: baseColors.magenta },
            number: { dark: baseColors.mossGreen, light: baseColors.darkOrange },
            string: { dark: baseColors.iceBlue, light: baseColors.darkGreen }
        },
        // Cost chip background. Time + tokens chips use MUI's secondary/primary
        // palette directly via `color='secondary'` / `color='primary'`, no token
        // needed. Cost gold isn't in the standard MUI palette so it lives here.
        metrics: {
            cost: baseColors.gold
        },
        nodes: {
            agent: baseColors.cyan,
            condition: baseColors.goldenYellow,
            conditionAgent: baseColors.pink,
            customFunction: baseColors.lavender,
            directReply: baseColors.aqua,
            executeFlow: baseColors.sage,
            http: baseColors.coral,
            humanInput: baseColors.periwinkle,
            iteration: baseColors.mauve,
            llm: baseColors.skyBlue,
            loop: baseColors.lightSalmon,
            retriever: baseColors.lilac,
            start: baseColors.mintGreen,
            stickyNote: baseColors.brightYellow,
            tool: baseColors.tan
        },
        palette: {
            error: { dark: baseColors.deepCoral, light: baseColors.paleCoral, main: baseColors.coralAccent },
            primary: { dark: baseColors.deepViolet, light: baseColors.paleViolet, main: baseColors.vividViolet },
            secondary: { dark: baseColors.deepTeal, light: baseColors.paleTeal, main: baseColors.electricTeal },
            success: { dark: baseColors.vividGreen, light: baseColors.paleGreen, main: baseColors.brightGreen },
            warning: { dark: baseColors.goldAmber, light: baseColors.paleAmber, main: baseColors.amber }
        },
        semantic: {
            error: baseColors.coralAccent,
            info: baseColors.vividViolet,
            success: baseColors.green,
            warning: baseColors.orange,
            warningBg: baseColors.cream,
            warningText: baseColors.darkBrown
        },
        text: {
            // Light-mode greys match legacy Berry — pure #333 reads too heavy
            // next to Inter's lower x-height.
            primary: { dark: baseColors.white, light: baseColors.gray700 },
            secondary: { dark: baseColors.gray500, light: baseColors.gray500 },
            tertiary: { dark: baseColors.gray500, light: baseColors.gray600 }
        }
    },
    shadows: {
        card: '0 2px 8px rgba(0, 0, 0, 0.1)',
        toolbar: {
            dark: '0 2px 14px 0 rgb(0 0 0 / 20%)',
            light: '0 2px 14px 0 rgb(32 40 45 / 8%)'
        }
    },
    spacing: { lg: 16, md: 12, sm: 8, xl: 20, xs: 4, xxl: 24 }
} as const

export type Tokens = typeof tokens

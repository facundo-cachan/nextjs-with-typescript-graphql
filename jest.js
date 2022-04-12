const nextJest = require('next/jest');
const { defaults } = require('jest-config');

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
    verbose: true,
    rootDir: './',
    roots: ['<rootDir>'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
        '^@/(.*)$': '<rootDir>/$1',
        '^components/(.*)$': '<rootDir>/components/$1',
        '^pages/(.*)$': '<rootDir>/pages/$1',
        '^mocks/(.*)$': '<rootDir>/mocks/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    transformIgnorePatterns: ['<rootDir>/[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
    transform: {
        '^.+\\.(ts|tsx)$': '@swc/jest',
        '\\.graphql$': [
            'graphql-let/jestTransformer',
            { subsequentTransformer: '@swc/jest' },
        ],
        /*
        '^.+\\.(ts|tsx)$': 'babel-jest',
        '\\.graphql$': [
          'graphql-let/jestTransformer',
          { subsequentTransformer: 'babel-jest' },
        ],
        */
    },
    collectCoverageFrom: [
        '**/*.{ts,tsx}',
        '!**/node_modules/**',
        '!**/cypress/**'
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -10,
        },
        './pages/': {
            branches: 40,
            statements: 40,
        },
    },
}

module.exports = createJestConfig(customJestConfig)
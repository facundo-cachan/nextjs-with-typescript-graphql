module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: [
    '<rootDir>[/\\\\](node_modules|.next|coverage)[/\\\\]',
  ],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
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
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
  },
  collectCoverageFrom: ['./pages/**/*.{ts,tsx}'],
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

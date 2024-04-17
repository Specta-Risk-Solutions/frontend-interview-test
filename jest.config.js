export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    setupFiles: ['<rootDir>/jest.polyfills.js'],
    testEnvironmentOptions: {
        customExportConditions: [''],
    },
    transform: {
        "^.+\\.tsx?$": "ts-jest"
        // process `*.tsx` files with `ts-jest`
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png|jpg)$': '<rootDir>/src/__test__/__mocks__/fileMock.js',
        '^@local/components/(.*)$': '<rootDir>/src/components/$1',
        '^@local/utils/(.*)$': '<rootDir>/src/utils/$1',
        '^@local/services/(.*)$': '<rootDir>/src/services/$1',
        '^@local/layouts/(.*)$': '<rootDir>/src/layouts/$1',
        '^@local/assets/(.*)$': '<rootDir>/src/assets/$1',
    },
}
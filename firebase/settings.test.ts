import { readFileSync } from 'fs'
import {
    initializeTestEnvironment,
    RulesTestEnvironment
} from '@firebase/rules-unit-testing'

const PROJECT_ID = '1:70518221336:web:304445727b25ff7bfcf16d'
export const getTestEnv = async (): Promise<any> => {
    const testEnv = await initializeTestEnvironment({
        projectId: PROJECT_ID,
        firestore: { rules: readFileSync('./_rules/firestore.rules', 'utf8') }
    })
    return testEnv
}

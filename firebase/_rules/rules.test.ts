import { setDoc } from 'firebase/firestore'
import { getTestEnv } from '../settings.test'
import { assertFails, assertSucceeds } from '@firebase/rules-unit-testing'

describe('firebase/_rules/firestore.rules', () => {
    describe('allow read/write if it is author', () => {
        it('match /doing/', async () => {
            const testEnv = await getTestEnv()
            const jhon = testEnv.authenticatedContext('Jhon')
            const data = { test: 'test' }
            await assertSucceeds(setDoc(jhon.firestore(), '/doing/jhon'))
        })
    })
})

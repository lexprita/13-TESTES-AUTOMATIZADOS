// import soma from './soma.js'

// const { it } = require('node:test')
// const soma = require('./soma')

import soma from './soma'

describe('Testes de soma', () => {
    test('deve verificar o resultado de uma soma', () => {
        expect(soma(3, 8)).toBeCloseTo(11)
    })

    test('deve verificar o resultado incorreto de uma soma', () => {
        expect(soma(3, 8)).not.toBeCloseTo(12)
    })
})





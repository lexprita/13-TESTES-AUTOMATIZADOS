// import soma from './soma.js'

const { it } = require('node:test')
const soma = require('./soma')

describe('Testes de soma', () => {
    test('deve verificar o resultado de uma soma', () => {
        expect(soma(3, 8)).toBe(11)
    })

    test('deve verificar o resultado incorreto de uma soma', () => {
        expect(soma(3, 8)).not.toBe(12)
    })
})





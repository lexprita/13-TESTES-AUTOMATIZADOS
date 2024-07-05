// import soma from './soma.js'

const soma = require('./soma')

test('deve verificar o resultado de uma soma', () => {
    expect(soma(3, 8)).toBe(11)
})
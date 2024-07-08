import multiplicacao from "./multiplicacao"

describe('Testes de multiplicação', () => {
    test('Deve verificar o resultado de uma multiplicação', () => {
        expect(multiplicacao(6.5, 2)).toBeCloseTo(13.0)
        expect(multiplicacao(2, 8)).toBeCloseTo(16)
        expect(multiplicacao(60, 2)).toBeCloseTo(120)
    })

    test('Deve verificar o resultado incorreto de uma multiplicação', () => {
        expect(multiplicacao(6, 2)).not.toBeCloseTo(20)

    })
})
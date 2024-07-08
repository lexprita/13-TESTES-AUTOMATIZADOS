import divisao from "./divisao"

describe('Testes de divisão', () => {
    test('Deve verificar o resultado de uma divisão', () => {
        expect(divisao(6.6, 2)).toBeCloseTo(3.3)
        expect(divisao(2, 8)).toBeCloseTo(0.25)
        expect(divisao(60, 2)).toBeCloseTo(30)
    })

    test('Deve verificar o resultado incorreto de uma divisão', () => {
        expect(divisao(6, 2)).not.toBeCloseTo(20)

    })
})
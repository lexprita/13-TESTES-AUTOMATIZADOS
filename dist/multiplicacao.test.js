"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multiplicacao_1 = __importDefault(require("./multiplicacao"));
describe('Testes de multiplicação', () => {
    test('Deve verificar o resultado de uma multiplicação', () => {
        expect((0, multiplicacao_1.default)(6.5, 2)).toBeCloseTo(13.0);
        expect((0, multiplicacao_1.default)(2, 8)).toBeCloseTo(16);
        expect((0, multiplicacao_1.default)(60, 2)).toBeCloseTo(120);
    });
    test('Deve verificar o resultado incorreto de uma multiplicação', () => {
        expect((0, multiplicacao_1.default)(6, 2)).not.toBeCloseTo(20);
    });
});

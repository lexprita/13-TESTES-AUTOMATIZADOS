"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const subtracao_1 = __importDefault(require("./subtracao"));
describe('Testes de subtração', () => {
    test('Deve verificar o resultado de uma subtração', () => {
        expect((0, subtracao_1.default)(6.7, 2.5)).toBeCloseTo(4.2);
        expect((0, subtracao_1.default)(6, 8)).toBeCloseTo(-2);
        expect((0, subtracao_1.default)(60, 2)).toBeCloseTo(58);
    });
    test('Deve verificar o resultado incorreto de uma subtração', () => {
        expect((0, subtracao_1.default)(6, 2)).not.toBeCloseTo(5);
    });
});

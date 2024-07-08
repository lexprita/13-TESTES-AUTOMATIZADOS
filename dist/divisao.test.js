"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const divisao_1 = __importDefault(require("./divisao"));
describe('Testes de divisão', () => {
    test('Deve verificar o resultado de uma divisão', () => {
        expect((0, divisao_1.default)(6.6, 2)).toBeCloseTo(3.3);
        expect((0, divisao_1.default)(2, 8)).toBeCloseTo(0.25);
        expect((0, divisao_1.default)(60, 2)).toBeCloseTo(30);
    });
    test('Deve verificar o resultado incorreto de uma divisão', () => {
        expect((0, divisao_1.default)(6, 2)).not.toBeCloseTo(20);
    });
});

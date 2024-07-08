"use strict";
// import soma from './soma.js'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const { it } = require('node:test')
// const soma = require('./soma')
const soma_1 = __importDefault(require("./soma"));
describe('Testes de soma', () => {
    test('deve verificar o resultado de uma soma', () => {
        expect((0, soma_1.default)(3, 8)).toBeCloseTo(11);
    });
    test('deve verificar o resultado incorreto de uma soma', () => {
        expect((0, soma_1.default)(3, 8)).not.toBeCloseTo(12);
    });
});

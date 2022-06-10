import {sumar} from "./app";

describe('app', () => {

    test("debe retornar [20] cuando la function #suma tiene [10],[10] como argumentos", () => {

        let result = sumar(10, 10)
        const expected = 20

        expect(
            result
        ).toBe(expected)
    })

    test("debe retornar un valor numerico cuando se usa la function #suma", () => {

        const expected = expect.any(Number)
        const result = sumar(10, 10)

        expect(
            result
        ).toStrictEqual(expected)
    })

})

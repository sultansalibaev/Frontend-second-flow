import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', () => {
    test('test', () => {
        expect(classNames({}, ['someClass'])).toBe('someClass')
    })

    test('with mods', () => {
        const expected = 'someClass node-js'
        expect(classNames({ 'node-js': true, typescript: false }, ['someClass'])).toBe(expected)
    })
})

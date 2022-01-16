import classnames from 'Utils/classnames';

describe('classnames', () => {
    it('should handle an empty array', () => {
        expect(classnames([])).toBe('');
    });

    it('should replicate constants in CSS classes', () => {
        expect(classnames(['one', 'two'])).toBe('one two');
    });

    it('should include true conditionals', () => {
        expect(classnames(
            ['one', 'two'], {
                three: true
            }
        )).toBe('one two three');
    });

    it('should exclude false conditionals', () => {
        expect(classnames(
            ['one', 'two'], {
                three: true,
                four: false,
                five: true
            }
        )).toBe('one two three five');
    });
});

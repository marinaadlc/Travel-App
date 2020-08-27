import {getApi} from '../client/js/asyncs'

describe('Check The function', () => {
    it('True if getApi is defined', () => {
        expect(getApi).toBeDefined();
    });

    it('True if checkInput is a function', () => {
        expect(typeof getApi).toBe('function');
    });
})

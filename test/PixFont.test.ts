/**
 * @jest-environment jsdom
 */

import * as fs from 'fs';
import Jagfile from '../src/js/jagex2/io/Jagfile';
import Bzip from '../src/js/vendor/bzip';
import PixFont from '../src/js/jagex2/graphics/PixFont';

beforeAll(async (): Promise<void> => {
    await Bzip.load(fs.readFileSync('./test/resources/bz2.wasm'));
});

describe('PixFont', (): void => {
    it('p11', (): void => {
        const title: Jagfile = new Jagfile(Int8Array.from(fs.readFileSync('./test/resources/title')));
        const fontPlain11: PixFont = PixFont.fromArchive(title, 'p11');

        expect(fontPlain11.height).toBe(9);

        expect(fontPlain11.charMaskHeight).toStrictEqual(
            Int32Array.from([
                8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 5, 8, 5, 9, 5, 9, 8, 8, 6, 9, 8, 8, 5, 5, 5, 8, 8, 5, 5, 7, 5, 5, 5, 5, 8, 5, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3, 8, 8, 7, 4, 8, 4, 9, 9, 1, 1, 3, 5, 9, 9,
                9, 9, 5, 4, 2, 8, 8, 2, 3, 5, 1, 5, 8, 8, 8, 9
            ])
        );
        expect(fontPlain11.charMaskWidth).toStrictEqual(
            Int32Array.from([
                5, 5, 5, 5, 4, 4, 5, 5, 1, 5, 5, 4, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7, 5, 5, 5, 4, 4, 3, 4, 4, 4, 4, 4, 1, 3, 4, 1, 5, 4, 4, 4, 4, 3, 4, 2, 4, 5, 5, 5, 4, 4, 5, 3, 5, 4, 4, 4, 5, 4, 5, 5, 1, 3, 5, 5, 9, 5, 7, 5, 2, 2, 3, 5, 4, 5, 3, 3,
                3, 3, 2, 1, 1, 8, 7, 6, 1, 4, 1, 4, 3, 5, 3, 1
            ])
        );
        expect(fontPlain11.charAdvance).toStrictEqual(
            Int32Array.from([
                7, 7, 7, 7, 5, 5, 7, 7, 3, 6, 6, 5, 8, 7, 7, 7, 7, 7, 7, 5, 7, 7, 9, 7, 5, 7, 6, 6, 5, 6, 6, 5, 6, 6, 3, 5, 5, 3, 7, 6, 6, 6, 6, 5, 6, 4, 6, 7, 7, 7, 6, 6, 7, 4, 7, 6, 5, 6, 7, 5, 7, 7, 3, 5, 7, 7, 11, 7, 7, 7, 3, 3, 5, 7, 6, 7, 4, 3,
                4, 3, 4, 3, 3, 10, 9, 8, 3, 6, 3, 6, 4, 6, 4, 3, 3
            ])
        );
        expect(fontPlain11.charOffsetX).toStrictEqual(
            Int32Array.from([
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0,
                0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1
            ])
        );
        expect(fontPlain11.charOffsetY).toStrictEqual(
            Int32Array.from([
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 0, 4, 3, 4, 1, 3, 3, 1, 1, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 5, 8, 4, 3, 1, 1,
                1, 1, 5, 5, 2, 1, 1, 4, 6, 2, 8, 2, 1, 1, 1, 1
            ])
        );
        expect(fontPlain11.drawWidth).toStrictEqual(
            Int32Array.from([
                6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 3, 5, 9, 7, 11, 7, 3, 3, 3, 7, 7, 3, 5, 3, 4, 7, 4, 7, 6, 5, 6, 7, 5, 7, 7, 3, 4, 6, 6, 6, 6, 10, 7, 7, 7, 7, 5, 5, 7, 7, 3, 6, 6, 5,
                8, 7, 7, 7, 7, 7, 7, 5, 7, 7, 9, 7, 5, 7, 4, 4, 4, 7, 7, 6, 6, 6, 5, 6, 6, 5, 6, 6, 3, 5, 5, 3, 7, 6, 6, 6, 6, 5, 6, 4, 6, 7, 7, 7, 6, 6, 3, 3, 3, 8, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
                6, 6, 6, 6, 6, 6, 6, 6, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
                6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6
            ])
        );
    });
});

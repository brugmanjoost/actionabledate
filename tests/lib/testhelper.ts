import * as actionabledate from '../../src';

interface TestHelperOptions {
    now:                /**/ Date;
    newDate:            /**/ Date | null;
    oldDate:            /**/ Date | null;
    oldDone:            /**/ boolean | null;
    expectDateChange:   /**/ undefined | Date | null;
    expectDone:         /**/ undefined | boolean;
    expectAnnounce:     /**/ boolean;
    expectMove:         /**/ boolean;
    expectCancel:       /**/ boolean;
}

export function testHelper(opts: TestHelperOptions) {

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Execute track, gather results
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let didAnnounce:    /**/ boolean = false;
    let didMove:        /**/ boolean = false;
    let didCancel:      /**/ boolean = false;

    let resultDate:     /**/ Date | null | undefined
    let resultDone:     /**/ boolean | undefined;

    actionabledate.track({
        now:            /**/ opts.now,
        newDate:        /**/ opts.newDate,
        oldDate:        /**/ opts.oldDate,
        oldDone:        /**/ opts.oldDone,
        onSaveDate:     /**/ (newDate: Date | null) => {
            resultDate = newDate;
        },
        onSaveDone:     /**/ (done: boolean) => {
            resultDone = done;
        },
        onAnnounce:     /**/ () => {
            didAnnounce = true;
        },
        onMove:         /**/ () => {
            didMove = true;
        },
        onCancel:         /**/ () => {
            didCancel = true;
        },
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Test outcomes
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (opts.expectDateChange === undefined) it(`should not detect a date change.`, () => {
        expect(resultDate).toStrictEqual(undefined);
    });
    if (opts.expectDateChange !== undefined) it(`should detect a date change to ${opts.expectDateChange?.toISOString().substr(0, 10) ?? null}.`, () => {
        expect(resultDate).toStrictEqual(opts.expectDateChange);
    });
    it(`should ${opts.expectAnnounce ? '' : 'not '}announce.`, () => {
        expect(didAnnounce).toStrictEqual(opts.expectAnnounce);
    });
    it(`should ${opts.expectMove ? '' : 'not '}move.`, () => {
        expect(didMove).toStrictEqual(opts.expectMove);
    });
    it(`should ${opts.expectCancel ? '' : 'not '}cancel.`, () => {
        expect(didCancel).toStrictEqual(opts.expectCancel);
    });
    if (opts.expectDone === undefined) it(`should not call onDone.`, () => {
        expect(resultDone).toStrictEqual(undefined);
    });
    if (opts.expectDone !== undefined) it(`should call onDone with ${opts.expectDone}.`, () => {
        expect(resultDone).toStrictEqual(opts.expectDone);
    });
}
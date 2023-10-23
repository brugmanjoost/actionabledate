import { testHelper } from './lib/testhelper';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Tests: Cancellations
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('If a past date moves forward but stays in the past it...', () => {
    testHelper({
        now:                /**/ new Date('2020-10-01'),
        oldDone:            /**/ true,
        oldDate:            /**/ new Date('2020-09-01'),
        newDate:            /**/ new Date('2020-09-15'),
        expectDateChange:   /**/ new Date('2020-09-15'),
        expectDone:         /**/ true,
        expectAnnounce:     /**/ false,
        expectMove:         /**/ true,
        expectCancel:       /**/ false,
    });
});

describe('If past date moves forward to the future it...', () => {
    testHelper({
        now:                /**/ new Date('2020-10-01'),
        oldDone:            /**/ true,
        oldDate:            /**/ new Date('2020-09-01'),
        newDate:            /**/ new Date('2020-10-15'),
        expectDateChange:   /**/ new Date('2020-10-15'),
        expectDone:         /**/ false,
        expectAnnounce:     /**/ false,
        expectMove:         /**/ false,
        expectCancel:       /**/ true,
    });
});

describe('If future date moves further into the future it...', () => {
    testHelper({
        now:                /**/ new Date('2020-10-01'),
        oldDone:            /**/ false,
        oldDate:            /**/ new Date('2020-10-15'),
        newDate:            /**/ new Date('2020-11-01'),
        expectDateChange:   /**/ new Date('2020-11-01'),
        expectDone:         /**/ undefined,
        expectAnnounce:     /**/ false,
        expectMove:         /**/ false,
        expectCancel:       /**/ false,
    });
});

import { testHelper } from './lib/testhelper';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Tests: Cancellations
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('If a future date moves backwards but stays in the future it...', () => {
    testHelper({
        now:                /**/ new Date('2020-10-01'),
        oldDone:            /**/ false,
        oldDate:            /**/ new Date('2020-12-01'),
        newDate:            /**/ new Date('2020-11-01'),
        expectDateChange:   /**/ new Date('2020-11-01'),
        expectDone:         /**/ undefined,
        expectAnnounce:     /**/ false,
        expectMove:         /**/ false,
        expectCancel:       /**/ false,
    });
});

describe('If a future date moves backwards and enters the past it...', () => {
    testHelper({
        now:                /**/ new Date('2020-10-01'),
        oldDone:            /**/ false,
        oldDate:            /**/ new Date('2020-12-01'),
        newDate:            /**/ new Date('2020-09-01'),
        expectDateChange:   /**/ new Date('2020-09-01'),
        expectDone:         /**/ true,
        expectAnnounce:     /**/ true,
        expectMove:         /**/ false,
        expectCancel:       /**/ false,
    });
});

describe('If a past date moves further into the past it...', () => {
    testHelper({
        now:                /**/ new Date('2020-10-01'),
        oldDone:            /**/ true,
        oldDate:            /**/ new Date('2020-09-01'),
        newDate:            /**/ new Date('2020-08-01'),
        expectDateChange:   /**/ new Date('2020-08-01'),
        expectDone:         /**/ true,
        expectAnnounce:     /**/ false,
        expectMove:         /**/ true,
        expectCancel:       /**/ false,
    });
});

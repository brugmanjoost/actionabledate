import { testHelper } from './lib/testhelper';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Tests: Cancellations
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('If a date in the past is cancelled it...', () => {
    testHelper({
        now:                /**/ new Date('2020-10-01'),
        oldDone:            /**/ true,
        oldDate:            /**/ new Date('2020-10-01'),
        newDate:            /**/ null,
        expectDateChange:   /**/ null,
        expectDone:         /**/ false,
        expectAnnounce:     /**/ false,
        expectMove:         /**/ false,
        expectCancel:       /**/ true,
    });
});

describe('If a date in the future is cancelled it...', () => {
    testHelper({
        now:                /**/ new Date('2020-10-01'),
        oldDone:            /**/ false,
        oldDate:            /**/ new Date('2020-10-02'),
        newDate:            /**/ null,
        expectDateChange:   /**/ null,
        expectDone:         /**/ undefined,
        expectAnnounce:     /**/ false,
        expectMove:         /**/ false,
        expectCancel:       /**/ false,
    });
});

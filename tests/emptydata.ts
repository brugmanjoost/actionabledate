import { testHelper } from './lib/testhelper';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Tests: If there is no data we will not act
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('If passing null values only it...', () => {
    testHelper({
        now:                /**/ new Date('2020-10-01'),
        oldDone:            /**/ null,
        oldDate:            /**/ null,
        newDate:            /**/ null,
        expectDateChange:   /**/ undefined,
        expectDone:         /**/ false,
        expectAnnounce:     /**/ false,
        expectMove:         /**/ false,
        expectCancel:       /**/ false,
    });
});

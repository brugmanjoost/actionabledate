import { testHelper } from './lib/testhelper';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Tests: If there is no preceeding history
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('If initial date is set in the future (with done=null) it...', () => {
    testHelper({
        now:                /**/ new Date('2020-10-01'),
        oldDone:            /**/ null,
        oldDate:            /**/ null,
        newDate:            /**/ new Date('2020-10-02'),
        expectDateChange:   /**/ new Date('2020-10-02'),
        expectDone:         /**/ false,
        expectAnnounce:     /**/ false,
        expectMove:         /**/ false,
        expectCancel:       /**/ false,
    });
});

describe('If initial date is set in the future (with done=false) it...', () => {
    testHelper({
        now:                /**/ new Date('2020-10-01'),
        newDate:            /**/ new Date('2020-10-02'),
        oldDate:            /**/ null,
        oldDone:            /**/ false,
        expectDateChange:   /**/ new Date('2020-10-02'),
        expectDone:         /**/ undefined,
        expectAnnounce:     /**/ false,
        expectMove:         /**/ false,
        expectCancel:       /**/ false,
    });
});

describe('If initial date is set in the past (with done=null) it...', () => {
    testHelper({
        now:                /**/ new Date('2020-10-01'),
        oldDone:            /**/ null,
        oldDate:            /**/ null,
        newDate:            /**/ new Date('2020-10-01'),
        expectDateChange:   /**/ new Date('2020-10-01'),
        expectDone:         /**/ true,
        expectAnnounce:     /**/ true,
        expectMove:         /**/ false,
        expectCancel:       /**/ false,
    });
});

describe('If initial date is set in the past (with done=false) it...', () => {
    testHelper({
        now:                /**/ new Date('2020-10-01'),
        oldDone:            /**/ false,
        oldDate:            /**/ null,
        newDate:            /**/ new Date('2020-10-01'),
        expectDateChange:   /**/ new Date('2020-10-01'),
        expectDone:         /**/ true,
        expectAnnounce:     /**/ true,
        expectMove:         /**/ false,
        expectCancel:       /**/ false,
    });
});

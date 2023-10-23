![Node.js CI](https://github.com/brugmanjoost/settings/actions/workflows/nodejs-ci.yml/badge.svg) [![install size](https://packagephobia.com/badge?p=actionabledate)](https://packagephobia.com/result?p=actionabledate) ![License](https://img.shields.io/github/license/brugmanjoost/actionabledate) ![node version](https://img.shields.io/node/v/actionabledate.svg)


# ActionableDate

Get triggerred when a date passes.  This NodeJS module allows you to track changes in dates and get triggered when a specified date has passed. If subsequent observations of the specified date yield different values, then it will trigger accordingly.

### Example usecase
You may want to send an e-mail to support staff to prepare for an employee's departure from the company. You observe an employeeLastDay Date field in HR. You calculate employeeLastDay-10 days as the day when you send the e-mail. You run a repeat batch to make this observation and decide when to act.
While you make repeat observations, e.g. daily, the employeeLastDay field may change. On the last working day an employee may decide to stay on longer. They may decide to stop earlier than previously announced.
By feeding the calculated employeeLastDay-10 days into `ActionableDevice` it will trigger three types of events:

 - **Announce**: There is no prior history and the specified date has passed. This is when you would send the e-mail.
 - **Cancel**: The specified date changed to null or changed to a future date, which renders an earlier Announce obsolete. At this point in time there is no need to act. Use this event to alert support staff no action is needed at this time.
 - **Move**: The specified date changed, but is still in the past. Inform support staff of the updated timestamp.
 
## Installation

    npm install actionabledate --save

Using CommonJS:

    const ActionableDate = require('actionabledate');
    
Using TypeScript:

    import * as ActionableDate from 'actionabledate';
    
## Usage
The `actionabledate` module exports the `track` function which takes `newDate` als the most recent observation of the timestamp under consideration. It takes `oldDate` as the most recent prior observation of that date and `oldDone` as the most recent prior observation of wether the passing of newDate has already lead to an Announce.

    `ActionableDate.track({
        newDate: new Date('2020-01-01'), 
        oldDate: null,
        oldDone: null,
        onSaveDate: (date: Date | null) => {
            // save the new date value
        },
        onSaveDone: (done: boolean) => {
            // save the done state
        },
        onAnnounce: () => {
            // take action when the date is met and hasn't been announced before
        },
        onMove: () => {
            // take action when the date is met but has been moved from a previously announced date
        },
        onCancel: () => {
            // take action to cancel if previously announced action is no longer valid
        }
    });

If `newDate` differs from `oldDate` then `onSaveDate` is called and you are required to persist the updated date until the next iteration of the batch. Similarly `onSaveDone` is called to indicate wether an Announce or Move has been made. ActionableDate sets done to true after calling onAnnounce and onMove. It sets done to false after calling onCancel.


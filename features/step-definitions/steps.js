import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import PersonalInfo from '../pageobjects/personalinfo.page.js';
import EventInfo from '../pageobjects/eventinfo.page.js';
import EventConf from '../pageobjects/eventconfirmation.page.js'

const pages = {
    personalinfo: PersonalInfo,
    eventinfo: EventInfo,
    eventconf:EventConf
}

Given(/^I am on the registration page$/, async () => {
    await PersonalInfo.open()
});

Given(/^I click on the Next button$/, async () => {
    await PersonalInfo.clickOnNextButton()
});

Given(/^I enter the name$/, async () => {
    await PersonalInfo.enterTheName()
});

When(/^I select (.*) as Gender Type$/, async (gender) => {
   await PersonalInfo.selectGenderType(gender);
});

When(/^I input (.*) as DOB$/, async (dob) => {
    await PersonalInfo.inputDob(dob);
 });

 When(/^I enter (.*) email address$/, async (email) => {
    await PersonalInfo.enterEmail(email);
 });

 When(/^I enter organization name$/, async () => {
    await PersonalInfo.enterOrganizationName();
 });

 




 Given(/^I select (.*) as day to attend$/, async (day) => {
    await EventInfo.selectDaysToAttend(day);
  });

When('I enter {int} hour and {int} minute in Available from', async (hour, minute) => {
   await EventInfo.enterTimeInAvailableFrom(hour,minute);
})

When('I enter {int} hour and {int} minute in Available to', async(hour, minute) => {
    await EventInfo.enterTimeInAvailableTo(hour,minute);
})

When('I select {string} as Dietary restrictions', async (diet) => {
  await EventInfo.selectDietFromOptions(diet);
})

When('I check yes', async () => {
  await EventInfo.selectYes();
})

Given(/^I click on the Submit button$/, async () => {
    await EventInfo.clickOnSubmitButton()
});

Then('I should see the text {string}', async (s) => {
  await EventConf.verifyTextOnPage(s)
})

Then('I should see an error message for {string} field', async (s) => {
   await PersonalInfo.verifyErrorMessageForField(s);
})

Then('I should see {string} error message', async (s) => {
   await PersonalInfo.verifyErrorMessage(s);
})











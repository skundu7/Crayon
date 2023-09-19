import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import Page from './page.js';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class EventInfo extends Page {

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get hourAvailableFrom(){
        return $('//span[text()="Available from:"]/../../../following-sibling::div//input[@aria-label="Uur"]')
    }

    get minutesAvailableFrom(){
        return $('//span[text()="Available from:"]/../../../following-sibling::div//input[@aria-label="Minuut"]')
    }

    get hourAvailableTo(){
        return $('//span[text()="Available to:"]/../../../following-sibling::div//input[@aria-label="Uur"]')
    }

    get minutesAvailableTo(){
        return $('//span[text()="Available to:"]/../../../following-sibling::div//input[@aria-label="Minuut"]')
    }

    dayToAttend(day){
        return $('//div[@data-value="'+day+'"]')
    }

    get dietOptions(){
        return $('//div[@role="option"]//span[text()="Kiezen"]')
    }

    selectDiet(){
        return $('//div[@jsname="V68bde"]//div[@data-value="Vegan"]')
    }

    get yesCheckBox(){
        return $('//div[@data-answer-value="Yes"]')
    }

    get submitButton(){
        return $('//div/span/span[text()="Verzenden"]')
    }

    async clickOnNextButton(){
        await this.nextButton.click();
   }

   async selectDaysToAttend(day){
    await this.dayToAttend(day).click();
   }

   async enterTimeInAvailableFrom(hour,minute){
    await this.hourAvailableFrom.setValue(hour)
    await this.minutesAvailableFrom.setValue(minute)
   }

   async enterTimeInAvailableTo(hour,minute){
    await this.hourAvailableTo.setValue(hour)
    await this.minutesAvailableTo.setValue(minute)
   }

   async selectDietFromOptions(diet){
    await this.dietOptions.click();
    await browser.pause(2000)
    await this.selectDiet().click();
   }

   async selectYes(){
    await browser.waitUntil(() => this.yesCheckBox.isClickable())
    await this.yesCheckBox.click();
   }

   async clickOnSubmitButton(){
    await browser.waitUntil(() => this.submitButton.isClickable())
    await this.submitButton.click();
   }
   
}

export default new EventInfo();

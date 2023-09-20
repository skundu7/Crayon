import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import Page from './page.js';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class PersonalInfo extends Page {
    /**
     * define selectors using getter methods
     */

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get nextButton(){
        return $('//div/span/span[text()="Volgende"]')
    }

    get enterName(){
        return $('//span[text()="Name"]/../../parent::div/following-sibling::div//input')
    }
   
    selectGender(gender){
        return $('//div[@data-value="'+gender+'"]')
    }
    
    get enterDob(){
        return $('//input[@type="date"]')
    }

    get email(){
        return $('//input[@type="email"]')
    }

    get orgName(){
        return $('//div/span[text()="Organization"]/../../../following-sibling::div//textarea')
    }

    get errorMessage(){
        return $('//span[text()="Dit is een vereiste vraag"]')
    }


   async clickOnNextButton(){
         await this.nextButton.click();
    }

    async enterTheName(){
        await this.enterName.waitForEnabled({ timeout: 8000 });
        await this.enterName.setValue("Sunil");
    }

    async selectGenderType(gender){
    
        await this.selectGender(gender).click();
    }

    async inputDob(dob){
        await this.enterDob.setValue(dob);
    }

    async enterEmail(email){
        await this.email.setValue(email);
    }

    async enterOrganizationName(){
        await this.orgName.setValue("Crayon")
    }

    async verifyErrorMessageForField(field){
        await expect(this.errorMessage).toBeExisting()
    }

    async verifyErrorMessage(string){
        const ele = $('//span[text()="'+string+'"]')
        await expect(ele).toBePresent()
    }



    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new PersonalInfo();

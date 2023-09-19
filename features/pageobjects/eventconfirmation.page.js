import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import Page from './page.js';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class EventConf extends Page {

    async verifyTextOnPage(text){
       const elem = await $('//div[text()="'+text+'"]');
       await expect(elem).toBeDisplayed()
    }
   
}

export default new EventConf();

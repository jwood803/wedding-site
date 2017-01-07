import { browser, element, by } from 'protractor';

export class WeddingSitePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h2')).getText();
  }
}

import {NightwatchTests} from 'nightwatch';

const home: NightwatchTests = {
  'iFrame test': async () => {
    const iFrame = browser.page.IFrame();
    iFrame.navigate();
    browser.frame('#mce_0_ifr');
    iFrame.expect.element('@textbox').text.to.equal('Your content goes here.');

    browser.end();
  }
};

export default home;

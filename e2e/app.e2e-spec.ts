import { HeyAlexaPage } from './app.po';

describe('hey-alexa App', function() {
  let page: HeyAlexaPage;

  beforeEach(() => {
    page = new HeyAlexaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

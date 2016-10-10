import { RohubNg2CLIPage } from './app.po';

describe('rohub-ng2-cli App', function() {
  let page: RohubNg2CLIPage;

  beforeEach(() => {
    page = new RohubNg2CLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

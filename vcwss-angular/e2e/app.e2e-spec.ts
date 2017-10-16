import { VCWSSAngluarPage } from './app.po';

describe('vcwss-angluar App', () => {
  let page: VCWSSAngluarPage;

  beforeEach(() => {
    page = new VCWSSAngluarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

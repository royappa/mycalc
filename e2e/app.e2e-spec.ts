import { MycalcPage } from './app.po';

describe('mycalc App', function() {
  let page: MycalcPage;

  beforeEach(() => {
    page = new MycalcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

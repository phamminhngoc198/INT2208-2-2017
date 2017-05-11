import { DethivatlyPage } from './app.po';

describe('dethivatly App', () => {
  let page: DethivatlyPage;

  beforeEach(() => {
    page = new DethivatlyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

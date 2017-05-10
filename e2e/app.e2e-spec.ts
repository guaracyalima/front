import { Elejase.FrontEndPage } from './app.po';

describe('elejase.front-end App', () => {
  let page: Elejase.FrontEndPage;

  beforeEach(() => {
    page = new Elejase.FrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

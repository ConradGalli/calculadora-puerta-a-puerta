import { CppPage } from './app.po';

describe('cpp App', () => {
  let page: CppPage;

  beforeEach(() => {
    page = new CppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

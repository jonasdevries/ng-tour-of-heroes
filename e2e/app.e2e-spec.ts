import { NgTourOfHeroesPage } from './app.po';

describe('ng-tour-of-heroes App', () => {
  let page: NgTourOfHeroesPage;

  beforeEach(() => {
    page = new NgTourOfHeroesPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

import { PathfinderArenaPage } from './app.po';

describe('pathfinder-arena App', () => {
  let page: PathfinderArenaPage;

  beforeEach(() => {
    page = new PathfinderArenaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

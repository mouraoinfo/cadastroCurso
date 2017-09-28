import { CadastroCursoPage } from './app.po';

describe('cadastro-curso App', () => {
  let page: CadastroCursoPage;

  beforeEach(() => {
    page = new CadastroCursoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

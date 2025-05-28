import { Page, Locator } from '@playwright/test';
export class Top250MoviesPage {
    private page: Page;
    pageHeader: Locator;
    movies: Locator;


    constructor(page: Page) {
    this.page = page;
    this.pageHeader = this.page.getByRole('heading', { name: 'Open Navigation Drawer' });
    this.movies = this.page.locator('//*[contains(@class, "ipc-title")]/a');
  }
    async waitForHeaderVisibility() {
    await this.pageHeader.waitFor({ state: "visible" });
  }
    async navigateToMovieByRank(rank: number): Promise<void> {
    this.movies.nth(rank - 1).click();
    await this.page.waitForLoadState('networkidle');
  }

}
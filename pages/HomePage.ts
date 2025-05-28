import { Page, Locator } from '@playwright/test';
import { NavigationMenuModal } from '../modals/navigationMenuModal';
export class HomePage {
    private page: Page;
    searchInput: Locator;
    searchResults: Locator;
    navigationMenu: Locator;
    navigationModal: NavigationMenuModal;

    constructor(page: Page) {
    this.page = page;
    this.searchInput = this.page.getByPlaceholder('Search IMDb');
    this.searchResults = this.page.getByRole('listbox');
    this.navigationMenu = this.page.locator('//label[@aria-label="Open Navigation Drawer"]');
    this.navigationModal = new NavigationMenuModal(this.page.locator('//*[@data-testid="panel" and @aria-hidden="false"]'));
  }
    async navigateToHomePage() {
    await this.page.goto("/", {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
  }
  async navigateToMoviePageFromSearch(movieTitle: string) {
    await this.searchInput.fill(movieTitle);
    await this.page.waitForLoadState('domcontentloaded');
    await this.searchResults.getByText(movieTitle, {exact:true}).click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async navigateToTop250MoviesPage() {
    await this.navigationMenu.click();
    await this.navigationModal.waitForModalVisibility();
    await this.navigationModal.navigateToTop250Movies();
    await this.page.waitForLoadState('domcontentloaded');
  }
    
}
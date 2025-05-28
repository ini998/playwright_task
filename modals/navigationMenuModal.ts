import { Locator, Page } from "@playwright/test";
export class NavigationMenuModal {
  rootLocator: Locator;
  modalHeader: Locator;
  top250MoviesLink: Locator;

  constructor(rootLocator: Locator) {
    this.rootLocator = rootLocator;
    this.modalHeader = this.rootLocator.getByTestId('panel-header'
    );
    this.top250MoviesLink = this.rootLocator.locator('//*[@class="ipc-list-item__text" and text()="Top 250 Movies"]');
  }

  async waitForModalVisibility() {
    await this.modalHeader.waitFor({ state: "visible" });
  }

  async navigateToTop250Movies() {
    await this.top250MoviesLink.click();
  }
}
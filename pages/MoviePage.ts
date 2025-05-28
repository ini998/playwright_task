import { Page, Locator } from '@playwright/test';
export class MoviePage {
    private page: Page;
    title: Locator;
    rating: Locator;
    releaseDate: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = this.page.getByTestId('hero__primary-text');
        this.rating = this.page.getByRole('link', { name: 'View User Ratings' });
        this.releaseDate = this.page.locator('//a[contains(@href,"releaseinfo") and contains(@class,"ipc-link")]')
    }

    async getMovieTitle(): Promise<string> {
        return (await this.title.textContent()) ?? 'title not found';
    }
    async getMovieRating(): Promise<string> {
        const ratingText = await this.rating.textContent();
        if (!ratingText) {
            return 'rating not found';
        }
        const cleanedUpRating = ratingText.split('/')[0];
        return cleanedUpRating;
    }
    async getMovieReleaseDate(): Promise<string> {
       return (await this.releaseDate.textContent()) ?? 'release date not found';
    }
}
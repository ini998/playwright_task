import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { MoviePage } from '../pages/MoviePage';
import { Top250MoviesPage } from '../pages/Top250MoviesPage';

type Fixture = {
  homePage: HomePage;
  moviePage: MoviePage;
  top250MoviesPage: Top250MoviesPage;
};

export const test = base.extend<Fixture>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.navigateToHomePage();
    await use(homePage);
  },
  moviePage: async ({ page }, use) => {
    const moviePage = new MoviePage(page);
    await use(moviePage);
  },
  top250MoviesPage: async ({ page }, use) => {
    const top250MoviesPage = new Top250MoviesPage(page);
    await use(top250MoviesPage);
  },
  });
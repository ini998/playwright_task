import { expect } from "@playwright/test";
import { test } from "../fixtures/baseFixture";
import { MoviePage } from "../pages/MoviePage";

test(`Search and Validate Movie Interstellar`, async ({ homePage, moviePage }) => {
    await homePage.navigateToMoviePageFromSearch('Interstellar');
    const title = await moviePage.getMovieTitle();
    expect(title).toBe('Interstellar');
  })

test(`Navigate to highest ranked movie`, async ({ homePage, moviePage, top250MoviesPage }) => {
    await homePage.navigateToTop250MoviesPage();
    await top250MoviesPage.navigateToMovieByRank(1);
    await moviePage.title.waitFor({ state: "visible" });
    await moviePage.rating.waitFor({ state: "visible" });
    await moviePage.releaseDate.waitFor({ state: "visible" });
  })
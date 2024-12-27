// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST = 'http://localhost:5173/'

const PREFIX_DOG_URL = 'https://dog.ceo/api/breed/'

test('get fact and request image', async ({ page }) => {
  await page.goto(LOCALHOST)

  const image = await page.getByRole('img')

  const imageUrl = await image.getAttribute('src')

  const buttons = await page.locator('.button button')

  const buttonCount = await buttons.count()

  await expect(buttonCount).toBeGreaterThan(0)
  await expect(imageUrl?.startsWith(PREFIX_DOG_URL)).toBeTruthy()
})

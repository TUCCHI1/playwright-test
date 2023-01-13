
import {test, expect }from "@playwright/experimental-ct-react"
import Counter from "./Counter"

test("increments the counter", async ({ mount }) => {
  const component = await mount(<Counter />);

  const button = component.locator('role=button[name="Click me"]')
  await button.click();

  const paragraph = component.locator("role=paragraph");
  expect(await paragraph.textContent()).toBe("You clicked 1 times")
})
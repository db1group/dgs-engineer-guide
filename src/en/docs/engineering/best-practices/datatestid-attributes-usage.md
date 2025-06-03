---
outline: deep
---

# Guide to Adding the `data-testid` Attribute to HTML Elements

The `data-testid` attribute is used to select elements during automated application testing. By adding this attribute to relevant elements, you make your tests more robust and independent of changes in the application’s structure.

We usually use `ids` on elements to map components and make it easier to create automated tests, but building tests based on tags, classes, or `id` is very volatile and highly subject to change (e.g., due to JavaScript or CSS modifications). Therefore, using `data-testid` is a better approach since it serves a single purpose.

For existing pages, you can simply set the `data-testid` to the same value as the `id` attribute. Just be careful if any styles or JavaScript rely on that `id` before removing it and leaving only the `data-testid`.

Here are some guidelines for adding the `data-testid` attribute to HTML elements:

## 1. Choose descriptive names

Choose meaningful and descriptive names for the `data-testid` attribute. The name should reflect the element’s purpose or behavior in the testing context. For example, if you're testing a login form, you could add the `data-testid="login-form"` to the `form` element.

## 2. Be consistent

Maintain a consistent naming convention when adding the `data-testid` attribute. This makes it easier to read and maintain tests, especially when multiple people are working on the same project. Define clear guidelines for its usage in your codebase.

## 3. Avoid implementation details

Avoid depending on internal implementation details when adding the `data-testid` attribute. Do not use auto-generated IDs or tightly coupled HTML structures. This ensures that your tests remain functional even if the app’s structure changes.

## 4. Prioritize unique elements

Whenever possible, choose selectors that uniquely identify elements. This improves test reliability and reduces the chance of incorrect selections. Ensure each `data-testid` value is unique on the page.

## 5. Combine with other selectors

In some cases, you might need to combine the `data-testid` with other selectors like classes or HTML identifiers for more precise selection. This allows you to test based on additional criteria and improve accuracy.

For more information and best practices, see the [Cypress Best Practices documentation](https://docs.cypress.io/guides/references/best-practices)  
or the [Playwright Locators documentation](https://playwright.dev/docs/other-locators#id-data-testid-data-test-id-data-test-selectors).

## Usage Example

Here’s an example of how to add the `data-testid` attribute to an HTML element:

```html
<button data-testid="login-button">Login</button>
```

Comparing selectors with and without `data-testid`:

- **Without `data-testid`**: the element is selected by tag, class, or `id`, which is not isolated and can compromise test stability over time.
- **With `data-testid`**: the selector is testing-specific, making identification more reliable and stable.

# Accessibility

ModuMate is designed with WCAG 2.1 AA accessibility principles in mind. This is a design goal, not a certification or guarantee of conformance.

## Current considerations

The current interface includes:

- semantic HTML landmarks and headings on key pages;
- labelled form controls and descriptive button labels;
- visible keyboard focus styles;
- skip links on primary pages;
- keyboard handling for menus and modal controls;
- light and dark themes; and
- responsive layouts for smaller screens.

These features are implementation details rather than evidence that every page or workflow meets every WCAG 2.1 AA success criterion.

## Verification status

The repository does not currently contain a comprehensive automated accessibility test suite or documented results from formal assistive-technology testing. Accessibility should therefore be checked as part of each change, especially for keyboard use, focus order, labels, error messages, contrast and zoom behaviour.

Before relying on ModuMate in a production setting, test the relevant workflows with representative users and the browsers and assistive technologies used by your organisation.

## Reporting an accessibility issue

Open a [GitHub issue](https://github.com/smcnab1/modu-mate/issues) with:

- the page and task affected;
- what you expected and what happened;
- your browser and operating system;
- any assistive technology used; and
- steps that reproduce the problem.

Do not include confidential module, staff or student data in a public issue.

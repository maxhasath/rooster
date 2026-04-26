## Development environment

- install nvm to manage node versions
- setup latest node version for development
- use npm for package management
- install node modules with `npm install`

## Runs a specific test in a specific environment (qa)

    npm run qa register.spec.ts

## Runs tests in a specific folder in a specific environment (qa)

    npm run qa register

## Runs all the tests on qa environment

    npm run qa

## Runs all the tests on staging environment

    npm run stage

## Runs all the tests on prod environment

    npm run prod

## Auto generate tests with Codegen.

    npx playwright codegen

## Runs the tests in debug mode.

    npx playwright test --debug

## Auto generate tests with Codegen.

    npx playwright codegen

## Run a set of test files

    npx playwright test tests/todo-page/ tests/landing-page/

## Run files that have my-spec or my-spec-2 in the file name

    npx playwright test my-spec my-spec-2

## Run tests that are in line 42 in my-spec.ts

    npx playwright test my-spec.ts:42

## Run the test with the title

    npx playwright test -g "add a todo item"

## Run tests in headed browsers

    npx playwright test --headed

## Run all the tests against a specific project

    npx playwright test --project=chromium

## Disable parallelization

    npx playwright test --workers=1

## Choose a reporter

    npx playwright test --reporter=dot

## Run in debug mode with Playwright Inspector

    npx playwright test --debug

## Ask for help

    npx playwright test --help

## Gmail authentication refer this link
https://visioncraft.ee/blog/playwright-testing-introduction-workshop
node node_modules/gmail-tester/init.js credentials.json token.json chathura.br2@gmail.com

## Generate reports

```sh
npm run allure
```

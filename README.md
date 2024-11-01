# aerokube-moon-playwright-typescript-example

## Description

This project demonstrates how to connect to an [Aerokube Moon](https://aerokube.com/moon/) instance using Playwright and Typescript for end-to-end testing. It includes basic sample example where you can create and extend script and can connect to your local instance.

This project was inspired by the lack of good and easily explained examples when I started using Moon with Playwright. :)

## Installation

1. Clone the repository.
2. Navigate to the project directory:
    ```bash
    cd your-repository
    ```
3. Install the dependencies:
    ```bash
    npm i
    ```

## Usage

1. Update the `playwright.config.js` file with your Aerokube Moon instance URL:
    ```javascript
    // Set Moon Host here
    const moonHost = 'moon.dataout.in.example.com';
    ```
    And Configure projects for major browsers, currently the chromium is set with the complete URL. The Playwright version is extracted from the package.json file and appended in the URL as playwright browser image works with the version dependency.

    ```javascript
     /* UPdate here for other browsers like chrome or firefox.*/
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        connectOptions: {
          wsEndpoint: `wss://${moonHost}/playwright/chromium/playwright-${playwrightVersion()}?headless=false&arg=--ignore-certificate-errors`,
        },
      },
    }
    ]
    ```

2. Update the `environment.config.js` file with your aplication URL,Currenly its pointing to saucedemo website for example.:
    ```javascript
    export const environmentConfig = {
    baseUrl: 'https://www.saucedemo.com/',
    };
    ```

3. Demo Test Example is present in `tests` directory and Run your tests:
    ```bash
    npx playwright test
    ```

To show Playwright traffic add an environment variable:

```
$ DEBUG="pw:*" npm test
```    

## Contact

Your Name - pawangaria@gmail.com

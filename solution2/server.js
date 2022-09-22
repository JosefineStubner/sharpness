import { Builder, By } from "selenium-webdriver";
import prompt from "prompt";

prompt.start();

const findLinksTest = async () => {
  const askForUrl = await prompt.get("enter url");

  //Nice to have: validate askForUrl["enter url"] is a url. Validate string is url. (if not url throw error).

  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get(askForUrl["enter url"]);
    const linkElements = await driver.findElements(By.css("a"));
    await getLinks(linkElements);
  } catch (error) {
    throw error;
  } finally {
    await driver.quit();
  }
};

const getLinks = async (linkElements) => {
  for (let linkElement of linkElements) {
    console.log(await linkElement.getAttribute("href"));
  }
};

await findLinksTest();

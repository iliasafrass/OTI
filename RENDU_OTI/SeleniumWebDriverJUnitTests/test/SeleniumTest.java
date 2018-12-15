import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;

import org.apache.commons.io.FileUtils;

import static org.junit.Assert.*;

import org.junit.*;
import org.junit.Test;


public class SeleniumTest {

    private WebDriver driver;

    @Before
    public void createDriver() {
        System.setProperty("webdriver.gecko.driver", "/home/afrass/Bureau/SeleniumWebDriverJUnitTests/geckodriver");
        driver = new FirefoxDriver();
        driver.manage().window().maximize();
    }

    @After
    public void freeDriver() {
        driver.quit();
    }

    @Test
    public void test() throws java.io.IOException {

        driver.get("http://localhost:8080/src/index.html");

        WebElement element = driver.findElement(By.name("v1"));
        element.sendKeys("12");

        element = driver.findElement(By.name("c1"));
        element.sendKeys("EUR");

        element = driver.findElement(By.name("v2"));
        element.sendKeys("22");

        element = driver.findElement(By.name("c2"));
        element.sendKeys("EUR");

        element = driver.findElement(By.id("btn"));
        element.click();


        // Wait for the page to load, timeout after 10 seconds, stop when results present
        new WebDriverWait(driver, 10).until(new ExpectedCondition<Boolean>() {
            public Boolean apply(WebDriver d) {
                return d.findElement(By.id("res")).isDisplayed();
            }
        });

        File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(scrFile, new File("/tmp/screenshot_test.png"));

        assertEquals(driver.findElement(By.id("res")).getText(), "Result : Result : 34 (EUR)");
//        new File("/tmp/screenshot_test.png").delete();
    }

    @Test
    public void testNOK() throws java.io.IOException {

        driver.get("http://localhost:8080/src/index.html");

        WebElement element = driver.findElement(By.name("v1"));
        element.sendKeys("12");

        element = driver.findElement(By.name("c1"));
        element.sendKeys("EUR");

        element = driver.findElement(By.name("v2"));
        element.sendKeys("22");

        element = driver.findElement(By.name("c2"));
        element.sendKeys("EUR");

        element = driver.findElement(By.id("btn"));
        element.click();

        // Wait for the page to load, timeout after 10 seconds, stop when results present
        new WebDriverWait(driver, 10).until((ExpectedCondition<Boolean>) d -> d.findElement(By.id("res")) != null);

        File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(scrFile, new File("/tmp/screenshot_testnok.png"));

        assertEquals(driver.findElement(By.id("res")).getText(), "Result : Result : 34 (EUR)");
        new File("/tmp/screenshot_testnok.png").delete();
    }

    @Test
    public void testOK2() throws java.io.IOException {
        driver.get("http://localhost:8080/src/index.html");

        WebElement element = driver.findElement(By.name("v1"));
        element.sendKeys("12");

        element = driver.findElement(By.name("c1"));
        element.sendKeys("EUR");

        element = driver.findElement(By.name("v2"));
        element.sendKeys("22");

        element = driver.findElement(By.name("c2"));
        element.sendKeys("eUR");

        element = driver.findElement(By.id("btn"));
        element.click();

        // Wait for the page to load, timeout after 10 seconds, stop when results present
        new WebDriverWait(driver, 10).until(ExpectedConditions.presenceOfElementLocated(By.id("res")));
        File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(scrFile, new File("/tmp/screenshot_testok2.png"));

        assertEquals(driver.findElement(By.id("res")).getText(), "Result : Devises incompatibles : 12 (EUR) vs 22 (eUR)");
        new File("/tmp/screenshot_testok2.png").delete();
    }


    @Test
    public void moneyAddTest() throws java.io.IOException {
        driver.get("http://localhost:8080/src/index.html");

        WebElement element = driver.findElement(By.name("v1"));
        element.sendKeys("2");

        element = driver.findElement(By.name("c1"));
        element.sendKeys("EUR");

        element = driver.findElement(By.name("v2"));
        element.sendKeys("2");

        element = driver.findElement(By.name("c2"));
        element.sendKeys("EUR");

        Select dropdown = new Select(driver.findElement(By.name("ops")));
        dropdown.selectByValue("ADD");

        element = driver.findElement(By.id("btn"));
        element.click();

        // Wait for the page to load, timeout after 10 seconds, stop when results present
        new WebDriverWait(driver, 10).until(ExpectedConditions.presenceOfElementLocated(By.id("res")));
        File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(scrFile, new File("/tmp/screenshot_money_add_test.png"));

        assertEquals(driver.findElement(By.id("res")).getText(), "Result : Result : 4 (EUR)");
        new File("/tmp/screenshot_money_add_test.png").delete();
    }

    @Test
    public void moneySubTest() throws java.io.IOException {
        driver.get("http://localhost:8080/src/index.html");

        WebElement element = driver.findElement(By.name("v1"));
        element.sendKeys("2");

        element = driver.findElement(By.name("c1"));
        element.sendKeys("EUR");

        element = driver.findElement(By.name("v2"));
        element.sendKeys("2");

        element = driver.findElement(By.name("c2"));
        element.sendKeys("EUR");

        Select dropdown = new Select(driver.findElement(By.name("ops")));
        dropdown.selectByValue("SUB");

        element = driver.findElement(By.id("btn"));
        element.click();

        // Wait for the page to load, timeout after 10 seconds, stop when results present
        new WebDriverWait(driver, 10).until(ExpectedConditions.presenceOfElementLocated(By.id("res")));
        File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(scrFile, new File("/tmp/screenshot_money_sub_test.png"));

        assertEquals(driver.findElement(By.id("res")).getText(), "Result : Result : 0 (EUR)");
        new File("/tmp/screenshot_money_sub_test.png").delete();
    }

    @Test
    public void moneyIncompatibleTest() throws java.io.IOException {
        driver.get("http://localhost:8080/src/index.html");

        WebElement element = driver.findElement(By.name("v1"));
        element.sendKeys("2");

        element = driver.findElement(By.name("c1"));
        element.sendKeys("CHF");

        element = driver.findElement(By.name("v2"));
        element.sendKeys("2");

        element = driver.findElement(By.name("c2"));
        element.sendKeys("EUR");

        Select dropdown = new Select(driver.findElement(By.name("ops")));
        dropdown.selectByValue("SUB");

        element = driver.findElement(By.id("btn"));
        element.click();

        // Wait for the page to load, timeout after 10 seconds, stop when results present
        new WebDriverWait(driver, 10).until(ExpectedConditions.presenceOfElementLocated(By.id("res")));
        File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(scrFile, new File("/tmp/screenshot_money_incompatible_test.png"));

        assertEquals(driver.findElement(By.id("res")).getText(), "Result : Devises incompatibles : 2 (CHF) vs 2 (EUR)");
        new File("/tmp/screenshot_money_incompatible_test.png").delete();
    }

    @Test
    public void moneyNegativevalueTest() throws java.io.IOException {
        driver.get("http://localhost:8080/src/index.html");

        WebElement element = driver.findElement(By.name("v1"));
        element.sendKeys("-1");

        element = driver.findElement(By.name("c1"));
        element.sendKeys("EUR");

        element = driver.findElement(By.name("v2"));
        element.sendKeys("2");

        element = driver.findElement(By.name("c2"));
        element.sendKeys("EUR");


        element = driver.findElement(By.id("btn"));
        element.click();

        // Wait for the page to load, timeout after 10 seconds, stop when results present
        new WebDriverWait(driver, 10).until(ExpectedConditions.presenceOfElementLocated(By.id("res")));
        File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(scrFile, new File("/tmp/screenshot_money_negative_value_test.png"));

        assertEquals(driver.findElement(By.id("res")).getText(), "Result : Money inférieur à Zéro");
        new File("/tmp/screenshot_money_negative_value_test.png").delete();
    }


    @Test
    public void moneyNegativeResultTest() throws java.io.IOException {
        driver.get("http://localhost:8080/src/index.html");

        WebElement element = driver.findElement(By.name("v1"));
        element.sendKeys("1");

        element = driver.findElement(By.name("c1"));
        element.sendKeys("EUR");

        element = driver.findElement(By.name("v2"));
        element.sendKeys("2");

        element = driver.findElement(By.name("c2"));
        element.sendKeys("EUR");

        Select dropdown = new Select(driver.findElement(By.name("ops")));
        dropdown.selectByValue("SUB");

        element = driver.findElement(By.id("btn"));
        element.click();

        // Wait for the page to load, timeout after 10 seconds, stop when results present
        new WebDriverWait(driver, 10).until(ExpectedConditions.presenceOfElementLocated(By.id("res")));
        File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(scrFile, new File("/tmp/screenshot_money_negative_result_test.png"));

        assertEquals(driver.findElement(By.id("res")).getText(), "Result : ErrorValue : m1 < m2");
        new File("/tmp/screenshot_money_negative_result_test.png").delete();
    }


    @Test
    public void moneyUnknownCurrencyTest() throws java.io.IOException {
        driver.get("http://localhost:8080/src/index.html");

        WebElement element = driver.findElement(By.name("v1"));
        element.sendKeys("1");

        element = driver.findElement(By.name("c1"));
        element.sendKeys("DZD");

        element = driver.findElement(By.name("v2"));
        element.sendKeys("2");

        element = driver.findElement(By.name("c2"));
        element.sendKeys("eur");

        Select dropdown = new Select(driver.findElement(By.name("ops")));
        dropdown.selectByValue("SUB");

        element = driver.findElement(By.id("btn"));
        element.click();

        // Wait for the page to load, timeout after 10 seconds, stop when results present
        new WebDriverWait(driver, 10).until(ExpectedConditions.presenceOfElementLocated(By.id("res")));
        File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(scrFile, new File("/tmp/screenshot_money_unknown_currency_test.png"));
        assertEquals(driver.findElement(By.id("res")).getText(), "Result : ErrorValue : m1 < m2");
        new File("/tmp/screenshot_money_unknown_currency_test.png").delete();
    }


    @Test
    public void moneyUnknownOperationTest() throws java.io.IOException {
        driver.get("http://localhost:8080/src/index.html");
        WebElement element = driver.findElement(By.name("v1"));
        element.sendKeys("1");

        element = driver.findElement(By.name("c1"));
        element.sendKeys("EUR");

        element = driver.findElement(By.name("v2"));
        element.sendKeys("2");

        element = driver.findElement(By.name("c2"));
        element.sendKeys("eur");

        Select dropdown = new Select(driver.findElement(By.name("ops")));
        dropdown.selectByValue("MUL");

        element = driver.findElement(By.id("btn"));
        element.click();

        // Wait for the page to load, timeout after 10 seconds, stop when results present
        new WebDriverWait(driver, 10).until(ExpectedConditions.alertIsPresent());

        Alert alert = driver.switchTo().alert();
        String message = alert.getText();
        alert.accept();
        assertEquals(message, "Unsupported operation MUL");
    }

}
package stepDefinitions;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class MyAccountLoginStepDefinitions {
	
	public WebDriver driver=null;

	@Given("^Open Browser$")
	public void open_Browser() throws Throwable {
		System.setProperty("webdriver.chrome.driver","F:\\Work\\Selenium\\softwares\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
        driver.manage().window().maximize();
	}

	@When("^Enter the url \"([^\"]*)\"$")
	public void enter_the_url(String arg1) throws Throwable {
		driver.get(arg1);
	}

	@And("^Click on My Account Menu$")
	public void click_on_My_Account_Menu() throws Throwable {
		driver.findElement(By.linkText("My Account")).click();
		Thread.sleep(5000);

	}

/*	@And("^Enter registered Username and Password$")
	public void enter_registered_Username_and_Password() throws Throwable {
		driver.findElement(By.name("username")).sendKeys("rkiran33@yahoo.co.in");
		driver.findElement(By.name("password")).sendKeys("Jsm@3343");
	}*/
	
/*	@When("^Enter registered Username \"([^\"]*)\" and Password \"([^\"]*)\"$")
	public void enter_registered_Username_and_Password(String usr, String pwd) throws Throwable {
		driver.findElement(By.name("username")).sendKeys(usr);
		driver.findElement(By.name("password")).sendKeys(pwd);
	}*/

/*	@When("^Enter registered Username and Password$")
	public void enter_registered_Username_and_Password(DataTable credentials) throws Throwable {
		List <List <String>> data=credentials.raw();
		driver.findElement(By.name("username")).sendKeys(data.get(0).get(0));
		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
	}*/
	
	@When("^Enter registered Username and Password$")
	public void enter_registered_Username_and_Password(DataTable credentials) throws Throwable {
		List <Map <String,String>> data=credentials.asMaps(String.class, String.class);
		driver.findElement(By.xpath("//input[@id='username']")).sendKeys(data.get(0).get("username"));
		driver.findElement(By.xpath("//input[@id='password']")).sendKeys(data.get(0).get("password"));
	}
	
	@And("^Click on Login button$")
	public void click_on_Login_button() throws Throwable {
		driver.findElement(By.name("login")).click();
	}

	@Then("^User must be logged in successfully$")
	public void user_must_be_logged_in_successfully() throws Throwable {
		String captText=driver.findElement(By.xpath("//strong[contains(text(),'rkiran33')]")).getText();
		Assert.assertEquals(true, captText.contains("rkiran33"));
		driver.quit();
	}
	
	@Then("^Verify Login$")
	public void verify_Login() throws Throwable {
		String captText=driver.findElement(By.xpath("//*[@id='page-36']/div/div[1]/ul/li/strong")).getText();
		if(captText.contains("Error")){
			Assert.assertTrue("Invalid input - Error Page", true);
	
		}
		else{
			Assert.assertTrue(false);
		}
	
	}
	
}

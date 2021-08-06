const { Given, When, Then, setDefaultTimeout } = require('cucumber');
const chromedriver = require('chromedriver');
const webdriver = require('selenium-webdriver');
const { By, Key } = require('selenium-webdriver');
const { assert } = require('chai');
setDefaultTimeout(60000);
var driver;

Given('Abro el navegador en la pagina de Trello', async function () {
        driver = await new webdriver.Builder()
                .forBrowser('chrome')
                .build();
        await driver.manage().window().maximize();
        await driver.get("http://www.trello.com");

        await driver.sleep(4000);

})

When(/^Me logueo con mi usuario "(.*)" y contraseña "(.*)"$/, async function ( usuario  ,  contraseña   ) {
        var botonIniciarSesion = await driver.findElement(By.xpath('//a[text()= "Iniciar sesión"]'));
        await botonIniciarSesion.click();
        await driver.sleep(3500);
        await driver.findElement(By.id('user')).sendKeys(usuario);
        await driver.findElement(By.id('password')).sendKeys(contraseña);
        await driver.findElement(By.id('login')).click();
        await driver.sleep(3500);
});



Then('verifico que el login haya sido fallido', async function () {
        var cartelError = await driver.findElement(By.className('error-message'))
        var textoCartelError = await cartelError.getAttribute('textContent');
        assert.isTrue( textoCartelError== 'Dirección de correo electrónico o contraseña incorrectos. ¿Necesitas ayuda para ',
        'Se esperaba que textoCartelError sea igual a Direccion de correo electrónico o bla bla bla. Se encontró: ' + textoCartelError);
});

Then('verifico que el login haya sido exitoso', async function () {
        var textoCirculitoLogin = await driver.findElement(By.xpath('//span[contains(@title,"Francisco")]')).getText();
        assert.isTrue(textoCirculitoLogin == 'FT', 'Se esperaba que textoCirculitoLogin sea igual a FT. Se encontró: ' + textoCirculitoLogin);
});

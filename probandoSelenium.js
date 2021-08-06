const chromedriver = require('chromedriver');
const webdriver = require('selenium-webdriver');
const { By, Key } = require('selenium-webdriver');

corriendoLaPrueba();

async function corriendoLaPrueba(){
    
    var driver = await new webdriver.Builder()
      .forBrowser('chrome')
      .build();
    await driver.manage().window().maximize();
     await driver.get("http://www.google.com.ar");

await driver.sleep(4000);

    var buscarConGoogle = await driver.findElement(By.xpath('//body/div[1]/div[3]/form[1]/div[1]/div[1]/div[3]/center[1]/input[1]'));
    var valorDelNodeName = await buscarConGoogle.getAttribute('nodeName');
    await console.log('el valor del nodeName es ...'+ valorDelNodeName);
    await driver.sleep(10000000);
     var tituloDeLaPestaña = await driver.getTitle();
     await console.log("El titulo de la pestaña es... " + await driver.getTitle());
     await console.log("El titulo de la pestaña es..." + tituloDeLaPestaña);
     await driver.sleep(3000);
     var barritaBusqueda  = await driver.findElement(By.xpath("//input[@title='Buscar']"));
     await driver.findElement(By.xpath('/html/body/div[1]/div[1]/div/div/div/div[1]/div/div[2]/a'));
     await barritaBusqueda.sendKeys("hola mundo");
     await driver.actions().sendKeys(Key.ENTER).perform();
     await driver.sleep(5000);
     var todosLosLinks  = await driver.findElements(By.xpath('//h3'));
     for (var i = 0 ; i < todosLosLinks.length; i++){
        var textoDelLink = await todosLosLinks[i].getText();
        await console.log(textoDelLink)
    }
    // await console.log(todosLosLinks);
     //var textoBarritaBusqueda = await barritaBusqueda.getText();
     //await console.log("El texto que tiene la barra de busqueda es..." + textoBarritaBusqueda) ;
     //var botonGmail = await driver.findElement(By.xpath("//a[contains(text(),'Gmail')]"));
     //var textoDelBoton = await botonGmail.getText();
     //if (textoDelBoton == "Gmail"){
      //  await botonGmail.click()
     //} else {
       // await console.log('el texto no era Gmail');
     //}


     //await driver.sleep(3000);
     //await barritaBusqueda.clear();
     //var botonGmail = await driver.findElement(By.xpath("//a[contains(text(),'Gmail')]"));
     //await botonGmail.click();
     //await driver.close();
}
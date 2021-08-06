@Login
Feature: Pruebas sobre el login

    Vamos a hacer pruebas sobre el login de Trello

    Background: Pasos comunes
    Given Abro el navegador en la pagina de Trello


    Scenario: Login exitoso
    When Me logueo con mi usuario "franciscodotitexeira@gmail.com" y contraseña "Yosoyyo123!"
    Then verifico que el login haya sido exitoso

    @LoginFallido
    Scenario: Login Fallido
    When Me logueo con mi usuario "franciscodotitexeira@gmail.com" y contraseña "ContraseñaTrucha"
    Then verifico que el login haya sido fallido

    @LoginFallido
    Scenario: Login usando todo en mayusculas
    When Me logueo con mi usuario "FRANCISCODOTTIEXEIRA@GMAIL.COM" y contraseña "YOSOYYO123!"
    Then verifico que el login haya sido fallido
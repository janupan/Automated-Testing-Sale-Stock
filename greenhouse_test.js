
Feature('Application To do List');

Scenario('Test Case ID 1.1.1', (I) => {
  I.amOnPage('/index.php');
  I.wait(5);
  I.click('//*[@id="header"]/div[2]/div/div/nav/div[1]/a');
  I.wait(5);
  I.fillField('//*[@id="email_create"]','rikky02061996@gmail.com')
  I.wait(3);
  I.click('//*[@id="SubmitCreate"]/span')
  I.wait(5);
  I.click('//*[@id="id_gender1"]')
  I.fillField('//*[@id="customer_firstname"]', 'Rikky')
  I.wait(3)
  I.fillField('//*[@id="customer_lastname"]', 'Salo')
  I.wait(3)
  I.fillField('//*[@id="passwd"]', 'test1234')
  I.wait(3)
  I.fillField('//*[@id="company"]', 'PT Test')
  I.wait(3)
  I.fillField('//*[@id="address1"]', 'Jl. Balige, 22312')
  I.wait(3)
  I.fillField('//*[@id="city"]', 'Balige')
  I.wait(3)
  I.selectOption('//*[@id="id_state"]', 'Alaska')
  I.wait(3)
  I.fillField('//*[@id="postcode"]', '22312')
  I.wait(3)
  I.selectOption('//*[@id="id_country"]', 'United States')
  I.wait(3)
  I.fillField('//*[@id="phone_mobile"]', '0813758546763')
  I.wait(3)
  I.click('//*[@id="submitAccount"]/span')
  I.wait(5)

  //I.pressKey('\n');
});

Scenario('Test Case ID 1.1.2', (I) => {
  I.amOnPage('/index.php');
  I.wait(5);
  I.click('//*[@id="header"]/div[2]/div/div/nav/div[1]/a');
  I.wait(5);
  I.fillField('//*[@id="email_create"]','')
  I.wait(3);
  I.click('//*[@id="SubmitCreate"]/span')
  I.wait(5);

  //I.pressKey('\n');
 
});

Scenario('Test Case ID 1.1.3', (I) => {
  I.amOnPage('/index.php');
  I.wait(5);
  I.click('//*[@id="header"]/div[2]/div/div/nav/div[1]/a');
  I.wait(5);
  I.fillField('//*[@id="email_create"]','rikky02061996@gmail.com')
  I.wait(3);
  I.click('//*[@id="SubmitCreate"]/span')
  I.wait(5);
  I.click('//*[@id="submitAccount"]/span')
  I.wait(5)

  //I.pressKey('\n');
});

Scenario('Test Case ID 2.1.1', (I) => {
  I.amOnPage('/index.php');
  I.wait(5);
  I.click('//*[@id="header"]/div[2]/div/div/nav/div[1]/a')
  I.wait(5);
  I.fillField('//*[@id="email"]','salo02061996@gmail.com')
  I.wait(3);
  I.fillField('//*[@id="passwd"]','kurtu24rw4n4')
  I.wait(3)
  I.click('//*[@id="SubmitLogin"]/span')
  I.wait(5);

  //I.pressKey('\n');
});

Scenario('Test Case ID 2.1.2', (I) => {
  I.amOnPage('/index.php');
  I.wait(5);
  I.click('//*[@id="header"]/div[2]/div/div/nav/div[1]/a')
  I.wait(5);
  I.fillField('//*[@id="email"]','salo02061996@gmail.com')
  I.wait(3);
  I.fillField('//*[@id="passwd"]','test1234')
  I.wait(3)
  I.click('//*[@id="SubmitLogin"]/span')
  I.wait(5);

  //I.pressKey('\n');
});

Scenario('Test Case ID 2.1.3', (I) => {
  I.amOnPage('/index.php');
  I.wait(5);
  I.click('//*[@id="header"]/div[2]/div/div/nav/div[1]/a')
  I.wait(5);
  I.fillField('//*[@id="email"]','test@gmail.com')
  I.wait(3);
  I.fillField('//*[@id="passwd"]','test1234')
  I.wait(3)
  I.click('//*[@id="SubmitLogin"]/span')
  I.wait(5);

  //I.pressKey('\n');
});

Scenario('Test Case ID 2.1.4', (I) => {
  I.amOnPage('/index.php');
  I.wait(5);
  I.click('//*[@id="header"]/div[2]/div/div/nav/div[1]/a')
  I.wait(5);
  I.fillField('//*[@id="email"]','test@gmail.com')
  I.wait(3);
  I.fillField('//*[@id="passwd"]','test1234')
  I.wait(3)
  I.click('//*[@id="SubmitLogin"]/span')
  I.wait(5);

  //I.pressKey('\n');
});

Scenario('Test Case ID 2.2.1', (I) => {
  I.amOnPage('/index.php');
  I.wait(5);
  I.click('//*[@id="header"]/div[2]/div/div/nav/div[1]/a')
  I.wait(5);
  I.click('//*[@id="login_form"]/div/p[1]/a')
  I.wait(5);
  I.fillField('//*[@id="email"]', 'salo02061996@gmail.com')
  I.wait(5);
  I.click('//*[@id="form_forgotpassword"]/fieldset/p/button/span')
  I.wait(5);

  //I.pressKey('\n');
});

Scenario('Test Case ID 2.2.2', (I) => {
  I.amOnPage('/index.php');
  I.wait(5);
  I.click('//*[@id="header"]/div[2]/div/div/nav/div[1]/a')
  I.wait(5);
  I.click('//*[@id="login_form"]/div/p[1]/a')
  I.wait(5);
  I.fillField('//*[@id="email"]', '')
  I.wait(5);
  I.click('//*[@id="form_forgotpassword"]/fieldset/p/button/span')
  I.wait(5);

  //I.pressKey('\n');
});

Scenario('Test Case ID 2.2.3', (I) => {
  I.amOnPage('/index.php');
  I.wait(5);
  I.click('//*[@id="header"]/div[2]/div/div/nav/div[1]/a')
  I.wait(5);
  I.click('//*[@id="login_form"]/div/p[1]/a')
  I.wait(5);
  I.fillField('//*[@id="email"]', 'test@gmail.com')
  I.wait(5);
  I.click('//*[@id="form_forgotpassword"]/fieldset/p/button/span')
  I.wait(5);

  //I.pressKey('\n');
});

Scenario('Test Case ID 3.1.1', (I) => {
  I.amOnPage('/index.php');
  I.wait(5);
  I.click('//*[@id="header"]/div[2]/div/div/nav/div[1]/a')
  I.wait(5);
  I.fillField('//*[@id="email"]','salo02061996@gmail.com')
  I.wait(3);
  I.fillField('//*[@id="passwd"]','kurtu24rw4n4')
  I.wait(3)
  I.click('//*[@id="SubmitLogin"]/span')
  I.wait(5);
  I.click('//*[@id="header_logo"]/a/img')
  I.wait(5);
  I.doubleClick('//*[@id="homefeatured"]/li[1]/div/div[1]/div/a[1]/img')
  I.wait(5);
  I.click('//*[@id="add_to_cart"]/button/span')
  I.wait(5);
  I.click('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a/span')
  I.wait(5);
  I.click('//*[@id="center_column"]/p[2]/a[1]/span')
  I.wait(5);
  I.click('//*[@id="center_column"]/form/p/button/span')
  I.wait(5);
  I.click('//*[@id="cgv"]')
  I.click('//*[@id="form"]/p/button/span')
  I.wait(5);
  I.click('//*[@id="HOOK_PAYMENT"]/div[1]/div/p/a')
  I.wait(5);
  I.click('//*[@id="cart_navigation"]/button/span')
  I.wait(5);
  //I.pressKey('\n');
});

Scenario('Test Case ID 3.1.2', (I) => {
  I.amOnPage('/index.php');
  I.wait(5);
  I.click('//*[@id="header"]/div[2]/div/div/nav/div[1]/a')
  I.wait(5);
  I.fillField('//*[@id="email"]','salo02061996@gmail.com')
  I.wait(3);
  I.fillField('//*[@id="passwd"]','kurtu24rw4n4')
  I.wait(3)
  I.click('//*[@id="SubmitLogin"]/span')
  I.wait(5);
  I.click('//*[@id="header_logo"]/a/img')
  I.wait(5);
  I.doubleClick('//*[@id="homefeatured"]/li[1]/div/div[1]/div/a[1]/img')
  I.wait(5);
  I.click('//*[@id="add_to_cart"]/button/span')
  I.wait(5);
  I.click('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a/span')
  I.wait(5);
  I.click('//*[@id="center_column"]/p[2]/a[1]/span')
  I.wait(5);
  I.click('//*[@id="center_column"]/form/p/button/span')
  I.wait(5);
  I.click('//*[@id="cgv"]')
  I.click('//*[@id="form"]/p/button/span')
  I.wait(5);
  I.click('//*[@id="HOOK_PAYMENT"]/div[2]/div/p/a')
  I.wait(5);
  I.click('//*[@id="cart_navigation"]/button/span')
  I.wait(5);
  //I.pressKey('\n');
});

Scenario('Test Case ID 3.1.3', (I) => {
  I.amOnPage('/index.php');
  I.wait(5);
  I.click('//*[@id="header"]/div[2]/div/div/nav/div[1]/a')
  I.wait(5);
  I.fillField('//*[@id="email"]','salo02061996@gmail.com')
  I.wait(3);
  I.fillField('//*[@id="passwd"]','kurtu24rw4n4')
  I.wait(3)
  I.click('//*[@id="SubmitLogin"]/span')
  I.wait(5);
  I.click('//*[@id="header_logo"]/a/img')
  I.wait(5);
  I.click('//*[@id="homefeatured"]/li[1]/div/div[2]/div[2]/a[1]/span')
  I.wait(5);
  I.click('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/span/span')
  I.wait(5);
  I.doubleClick('//*[@id="homefeatured"]/li[1]/div/div[1]/div/a[1]/img')
  I.wait(5);
  I.click('//*[@id="add_to_cart"]/button/span')
  I.wait(5);
  I.click('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a/span')
  I.wait(5);
  I.click('//*[@id="center_column"]/p[2]/a[1]/span')
  I.wait(5);
  I.click('//*[@id="center_column"]/form/p/button/span')
  I.wait(5);
  I.click('//*[@id="cgv"]')
  I.click('//*[@id="form"]/p/button/span')
  I.wait(5);
  I.click('//*[@id="HOOK_PAYMENT"]/div[2]/div/p/a')
  I.wait(5);
  I.click('//*[@id="cart_navigation"]/button/span')
  I.wait(5);

  //I.pressKey('\n');
});

Scenario('Test Case ID 3.2.1', (I) => {
  I.amOnPage('/index.php');
  I.wait(5);
  I.click('//*[@id="header"]/div[2]/div/div/nav/div[1]/a')
  I.wait(5);
  I.fillField('//*[@id="email"]','salo02061996@gmail.com')
  I.wait(3);
  I.fillField('//*[@id="passwd"]','kurtu24rw4n4')
  I.wait(3)
  I.click('//*[@id="SubmitLogin"]/span')
  I.wait(5);
  I.click('//*[@id="header_logo"]/a/img')
  I.wait(5);
  I.click('//*[@id="block_top_menu"]/ul/li[1]/a')
  I.wait(5);
  I.doubleClick('//*[@id="center_column"]/ul/li[1]/div/div[1]/div/a[1]/img')
  I.wait(5)
  I.click('//*[@id="add_to_cart"]/button/span')
  I.wait(5);
  I.click('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a/span')
  I.wait(5);
  I.click('//*[@id="center_column"]/p[2]/a[1]/span')
  I.wait(5);
  I.click('//*[@id="center_column"]/form/p/button/span')
  I.wait(5);
  I.click('//*[@id="cgv"]')
  I.click('//*[@id="form"]/p/button/span')
  I.wait(5);
  I.click('//*[@id="HOOK_PAYMENT"]/div[1]/div/p/a')
  I.wait(5);
  I.click('//*[@id="cart_navigation"]/button/span')
  I.wait(5);

  //I.pressKey('\n');
});

Feature('Stop me', {timeout:5000});

1.Node Installa�on:

Step1:
To get this version, you can use the apt packagemanager. Refresh your local package index ﬁrst:
$ sudo apt update

Step2:
Then install Node.js:
$ sudo apt install nodejs

Step3:
Check that the install was successful by querying node for its version number:
   $ node -v

Step4:
If the package in the repositories suits your needs, this intsall you need to do to get set up with Node.js. In most cases,you’ll also want to also install npm, the Node.js package manager. You can do this by installing the npm package with apt:
$ sudo apt install npm

Step5:
Using the command :
$ npm use version_number 

To usethe convenient versions for your project.


2.Angular Installa�on:

Step1:
Verify that the node is already installed.
$ node -v

Step2:
Install angular CLI using the command:
$ sudo npm install -g @angular/cli

Step3:
Check the version:
$ ng –version
Then show the exact version which is installed in system.


3.Angular Project:

Step 1:
Now we can Start the angular project.by using the command :
$ ng new project_name

Then using the command to go to the project
$ cd project_name

Step2:
You may create the certain component ﬁle for your convenient by using the command:
$ ng generate component ﬁle_name
         Or
$ ng g c ﬁle_name
   Then the component ﬁle may created.

  example:
      $ng g c data-display
   
Step3:
   Open the data-display.component.html   and write the code what do you want to display in the UI.
   
Step4:
   Open the data-display.component.css    and write the code what do you want to style your page.
   
Step5:
   Open the data-display.component.ts and write the angular content which do you want to for the tasks.

Step6:
  Now you can add the services file in the project. by using the comment :
     $ng generate service service_name

     example:
         $ng generate service data-service
Step7:
  Now you can open the data-services.ts file to declare the API link for the get and post process
  API link:
         http://voicebank.sagasoft.io/api/method/voicebank.www.voicebank.search?language=tamil&slang=&gender=male&age=
         http://voicebank.sagasoft.io/api/method/voicebank.www.enquery.search?cust_name=kathir&email_id=senkathirsmart%40gmail.com&phone_number=9080903380&member_id_list=123

Step8:
    Now you can open the app.component.html file should display the data-display file should call the file in the app.component file. 

Step9:
    Now you can open the app.component.ts file should call the HTTP client module for the methods.

Step10:
    Now run the server by using the command:
       $ng serve

       And the display a local host link follow the link they  should contain our website.
       
     

         


  var title,t1,t2,t3;
  var obj1,obj2,obj3,obj4,obj5 , obj6;
  var cb1 = 0 , cb2 = 0 , cb3 = 0, cb4 = 0,cb5 = 0,cb6 = 0;
  var b1, b1,b3,b4;
  var h1, h2 ,h3;
  var i1, i2,i3,i4,i5,i6;
  var l1, l2, l3 ,l4,l5,l6;
var array = [];



function setup() {
  createCanvas(window.innerWidth - 100 , window.innerHeight - 100);
  title = createElement("h1");
  title.html("THE FAMOUS BAKERY")
  title.position( 550 , 50);  


  t1 = createElement("h1");
  t1.html("Since 1992")
  t1.position( 1000, 50);

  t2 = createElement("h2");
  t2.html("The best CAKES of Hyderabad");
  t2.position( 550, 120);

  t3 = createElement("h2");
  t3.html("Click on menu to explore and order tasty food now......")
  t3.position( 350, 300);
  
  h1= createButton();
  h1.html("MENU");
  h1.style( "backgroundColor" , "yellow");
  h1.style( "borderRadius", "10px");
  h1.style("width", "80px");
  h1.style("height", "30px");
  h1.position( 200,180);

  h2= createButton();
  h2.html("ORDER");
  h2.style( "backgroundColor" , "yellow");
  h2.style( "borderRadius", "10px");
  h2.style("width", "80px");
  h2.style("height", "30px");
  h2.position( 425,600);

  
  
   
  
  
  h1.mousePressed(function(){
    t3.hide();
    obj1 = createElement("h2");
  obj1.html("Samosa  :  rs 20")
  obj1.position( 300, 250);  
  cb1 =createCheckbox();
  cb1.position(275,275);
   
  obj2 = createElement("h2");
  obj2.html("Veg Puff:  rs 30")
  obj2.position( 300,300 );  
  cb2 =createCheckbox();
  cb2.position(275,325);
  
  obj3 = createElement("h2");
  obj3.html("Cake :  rs 300")
  obj3.position( 300,350 ); 
  cb3 =createCheckbox();
  cb3.position(275,375); 

  obj4 = createElement("h2");
  obj4.html("Ice cream (single scoop):  rs 60" );
  obj4.position( 300,400 );  
  cb4 =createCheckbox();
  cb4.position(275,425); 
 
  obj5 = createElement("h2");
  obj5.html("Indian spicy pizza (6pieces):  rs 100")
  obj5.position( 300,450 ); 
  cb5 =createCheckbox();
  cb5.position(275,475);  
  
  
  obj6 = createElement("h2");
  obj6.html("Pani puri(8 per plate):  rs 20" );
  obj6.position( 300,500 );
  cb6 =createCheckbox();
  cb6.position(275,525); 

  })



  h2.mousePressed(function(){
    obj1.hide();
    obj2.hide();
    obj3.hide();
    obj4.hide();
    obj5.hide();
    obj6.hide();
    cb1.hide();
    cb2.hide()
    cb3.hide()
    cb4.hide()
    cb5.hide()
    cb6.hide()

    order();
  })


 // h3.mousePressed(alert("Do you want to place the order??"));
  //h4.mousePressed(alert("Do you really want to cancel the order?? yout cart will be cleared.."));
 

}

function draw() {
 background("lightblue");
 
   

}

function order(){

  i1 = createInput();
  i1.style("textAlign", "center");
  i1.style("width", "300px");
  i1.style("height", "20px");
  i1.position(450,270);
  l1 = createElement("h2");
  l1.html("Name  : " )
  l1.position( 300, 250);
    
  i2 = createInput();
  i2.style("textAlign", "center");
  i2.style("width", "300px");
  i2.style("height", "20px");
  i2.position(450,310);
  l2 = createElement("h2");
  l2.html("Mobile.No  : " )
  l2.position( 300, 290);  

  i3 = createInput();
  i3.style("textAlign", "center");
  i3.style("width", "300px");
  i3.style("height", "20px");
  i3.position(450,350);
  l3 = createElement("h2");
  l3.html("Address  : " )
  l3.position( 300,330 ); 

  i4 = createInput();
  i4.style("textAlign", "center");
  i4.style("width", "300px");
  i4.style("height", "20px");
  i4.position(450,390);
  l4 = createElement("h2");
  l4.html("Pincode  : " )
  l4.position( 300, 370); 

  i5 = createInput();
  i5.style("textAlign", "center");
  i5.style("width", "300px");
  i5.style("height", "20px");
  i5.position(450,430);
  l5 = createElement("h2");
  l5.html("Time of del. :"  )
  l5.position( 300, 410);  

  i6 = createInput();
  i6.style("textAlign", "center");
  i6.style("width", "300px");
  i6.style("height", "20px");
  i6.position(450,470);
  l6 = createElement("h2");
  l6.html("Pay Mode  : ")
  l6.position( 300, 450);  


  h3= createButton();
  h3.html("PLACE ORDER");
  h3.style( "backgroundColor" , "yellow");
  h3.style( "borderRadius", "10px");
  h3.style("width", "80px");
  h3.style("height", "50px");
  h3.position( 600,530);

  h4= createButton();
  h4.html("CANCEL ORDER");
  h4.style( "backgroundColor" , "yellow");
  h4.style( "borderRadius", "10px");
  h4.style("width", "80px");
  h4.style("height", "50px");
  h4.position( 400,530);
}

function xyz(){
 if(this.checked()){
   this.value = 10;
 } else{
  this.value = 0;
 }
   
}

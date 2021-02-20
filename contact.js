function formValidation()
{	
 	var x=document.forms["contactUsForm"]["firstname"].value;
	var y=document.forms["contactUsForm"]["lastname"].value;
	var z=document.forms["contactUsForm"]["emailaddress"].value;
	var c=document.forms["contactUsForm"]["contactcomment"].value;
	var atpos=z.indexOf("@");
	var dotpos=z.lastIndexOf(".");

	if (x==null || x=="")
	{
	  alert("First name must be filled out");
	  return false;
	}
	 else if (y==null || y=="")
	{
	  alert("Last name must be filled out");
	  return false;
	}
	else if(atpos<1 || dotpos<atpos+2 || dotpos+2>=z.length)
	{
		alert("Not a valid e-mail address");
		return false;
	}
	else
	{
		var outline1 = "Thank you! You have just entered the following: <br>";
		var outline2 = "<br> First Name:  " + x;
		var outline3 = "<br> Last Name :  " + y;
		var outline4 = "<br> Email Address: " + z;
		var outline5 = "<br> <br> Comment:  " + c;

		document.getElementById("contact_form").innerHTML=(outline1 + outline2 + outline3 + outline4 + outline5);
		return true;
	}
}
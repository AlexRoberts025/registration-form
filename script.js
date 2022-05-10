function validation()
{
	var firstname=document.registration.fn;
	var lastname=document.registration.ln;
	var gendername=document.registration.gen;
	var mobilenumber=document.registration.phone;

	if(allLettername(fn))
	{
		if(allLetterlast(ln))
		{
			if(genderselect(gen))
			{
				if(Mobile(phone))
					{
					}
			}
		}
	}
	return false;
}	

function allLettername(firstname)
{ 
	var letters = /^[A-Za-z]+$/;
	if(firstname.value.length==0)
	{
		alert('Please enter first name');
		firstname.focus();
		return false;
	}

	else if(firstname.value.match(letters))
	{
		return true;
		
	}
	else
	{
		alert('First name must have alphabet characters only');
		firstname.focus();
		return false;
	}
}

function allLetterlast(lastname)
{ 
	var letters = /^[A-Za-z]+$/;
	if(lastname.value.length==0)
	{
		alert('Please enter last name');
		lastname.focus();
		return false;
	}
	else if(lastname.value.match(letters))
	{
		return true;
		
	}
	else
	{
		alert('last name must have alphabet characters only');
		lastname.focus();
		return false;
		
	}
}

function genderselect(gendername)
{
	if(gendername.value == "Default")
	{
		alert('Select your gender');
		gendername.focus();
		return false;
	}
	else
	{
		return true;
	}
}

function Mobile(number)
{ 
	var numbers = /^[0-9]+$/;
	if(number.value.length==0 )
	{
		alert('Please enter contact number');
		number.focus();
		return false;
	}
	else if(number.value.length>10)
	{
		alert('Please enter a valid contact number');
		number.focus();
		return false;

	}
	else if(number.value.match(numbers))
	{
		alert('Form Successfully Submitted');
		window.location.reload();
		return true;
	}
	else
	{
		alert('Please check your contact number');
		return false;
	}
}
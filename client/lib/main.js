const AppRoutes = {
	CHECK_COMPANY: '/checkcompany',
	GET_ALL_COMPANIES: '/getallcompany',
};

function checkAndRegisterCompany(fName,lName,eMail,cName,lStartDate,lEndDate) {
	$.get(AppRoutes.CHECK_COMPANY, { firstName: fName , lastName: lName, email:eMail,company:cName,licensestart:lStartDate, licenseend:lEndDate}).done((data) => {
    console.log(data);
		if(data==='Company Already Exists'){
			alert("Company Already Exists");
		} else {
			alert("Company Added Successfully");
		}
	});
}

function getAllCompanies() {
	$.get(AppRoutes.GET_ALL_COMPANIES).done((data) => {
    console.log(data);
		
	});
}

$(document).ready(() => {
	var pathName = window.location.pathname;
	$('#btnAdd').click(() => {
    const fName =$('#fName').val();
    const lName =$('#lName').val();
		const eMail =$('#eMail').val();
    const cName =$('#cName').val();
		const lStartDate =$('#lStartDate').val();
    const lEndDate =$('#lEndDate').val();
		if(fName && lName && eMail && cName && lStartDate && lEndDate){
			checkAndRegisterCompany(fName,lName,eMail,cName,lStartDate,lEndDate);
		} else {
			alert("Please enter all values");
		}
	});
	if(pathName === 'admin'){
		getAllCompanies();
	}
});

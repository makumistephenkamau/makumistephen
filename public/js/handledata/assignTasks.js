
function formOneYellow() {
	document.getElementById('f1yellow').disabled=true;
	$(document).on("submit", "form", function(event)
{
event.preventDefault();
$.ajax({
    url: $(this).attr("action"),
    type: $(this).attr("method"),
    dataType: "JSON",
    data: new FormData(this),
    processData: false,
    contentType: false,
    success: function (data, status)
    {
    	if(data.success==1){
    		
    	}
    },
    error: function (xhr, desc, err)
    {


    }
});
});
}
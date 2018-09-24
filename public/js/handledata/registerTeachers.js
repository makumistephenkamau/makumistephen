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
      
      if(data.email_exists==1){
        alert('User with similar email exists');
        document.getElementById('loader').style.display='none';
        document.getElementById('teachersBio').style.opacity='0.9';
        document.getElementById('submitBtn').disabled=false;
    
      }
      if(data.identity_exists==1){
        alert('User with similar identity exists');
        document.getElementById('loader').style.display='none';
        document.getElementById('teachersBio').style.opacity='0.9';
        document.getElementById('submitBtn').disabled=false;
       
      }
      //document.getElementById('success_alert').style.display="block";
      if(data.success==1){
        var email=data.email;
/*
$.ajax({
             type:'GET',
            url:'http://localhost/texts/text.php?id='+email,
            data:'_token = <?php echo csrf_token() ?>',
            success:function(data){

            }
         });*/
      document.getElementById('loader').style.display='none';
    document.getElementById('teachersBio').style.display='none';
    $('#success_alert2').fadeIn(1000);


  }




    //form two stff
    },
    error: function (xhr, desc, err)
    {


    }
});
});

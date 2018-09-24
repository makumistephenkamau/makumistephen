$("#parentsForm").submit(function(event)
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

        if(data.succ=="1"){
          var email=data.mail;
          alert("Parent record created successfully");
            document.getElementById('loader2').style.display='none';
          $('#success_alert2').fadeIn(1000);
          $('#parentsBio').hide();
          $.ajax({
                      type:'GET',
                     url:'http://localhost/texts/text.php?id='+email,
                     data:'_token = <?php echo csrf_token() ?>',
                     success:function(data){

                     }
                  });

        }

        document.getElementById('loader2').style.display='none';
      $('#success_alert').hide();
      if(data.does_not_exist=='1'){
        alert('Parent record and child record do not match');
        document.getElementById('parentsBio').style.opacity='0.9';
      }
      if(data.email_exists=='1'){
        alert('User with similar email already exists');
        document.getElementById('parentsBio').style.opacity='0.9';
      }
      if(data.id_exists=="1"){
        alert('User with similar national identity card exists');
        document.getElementById('parentsBio').style.opacity='0.9';
      }




    },
    error: function (xhr, desc, err)
    {


    }
});
});

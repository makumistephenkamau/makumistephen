@extends('layouts.main')
@section('content')
<!--register/login panel-->
<style type="text/css">
body{
	background-color:rgb(5, 10, 20,.79);
}
	#lrPanel{
		max-width:600px;
		margin-top:50px;
	}

	h6{
  color:#7f8ea2;
}
	
</style>

<div class="w3-content" id="lrPanel">
<div class="panel panel-default" id="panel">
	<div class="panel-heading w3-white">
		<h6 class="text-primary"><img src="{{asset('images/logo/smsp (2).png')}}" width="40px" height="40px" style="margin-top:-6px;"><b>Welcome to Makumi blog</b></h6>
	</div>
	<div class="panel-body">
		<h6 class="text-center">Choose an option to proceed</h6>
		<center>
			<a href="{{url('/register')}}"><button class="btn btn-sm btn-primary"><img src="{{asset('images/form_icons/form.png')}}" width="15px" height="15px" style="margin-top: -8px;">&nbspRegister</button></a>&nbsp<a href="{{url('/login')}}"><button class="btn btn-sm btn-primary"><img src="{{asset('images/form_icons/login.png')}}" width="15px" height="15px" style="margin-top: -8px;">&nbspLogin</button></a>
		</center>
	</div>

	<div class="panel-footer w3-white">
		<h6 class="text-center">
		&copy2018-Developed by stephen kamau makumi
	</h6>
	</div>
</div>
</div>
@endsection
@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header text-primary">Welcome to Makumiblog</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif
                    <h6 style=" color:#7f8ea2;"><u>Registration information</u></h6>
                    <span style=" color:#7f8ea2;" id="credentials">Firstname: {{ Auth::user()->firstname }}</span><br>
                    <span style=" color:#7f8ea2;" id="credentials">Lastname: {{ Auth::user()->lastname }}</span><br>
                    <span style=" color:#7f8ea2;" id="credentials">Username: {{ Auth::user()->username }}</span><br>
                    <span style=" color:#7f8ea2;" id="credentials">Email address: {{ Auth::user()->email }}</span>

                </div>

            </div>
        </div>
    </div>
</div>
@endsection

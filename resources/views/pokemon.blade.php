@extends('layouts.nav')

@section('title','Home')

@section('content')
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Pokemon</title>

    <!-- Custom fonts for this template-->
    <link href="/plantilla/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="/plantilla/css/sb-admin-2.min.css" rel="stylesheet">

</head>

<body class="">

    <div class="container">

        <div id="index"></div>

    </div>
    <script src="/js/app.js"></script>

    <!-- Bootstrap core JavaScript-->
    <script src="/plantilla/vendor/jquery/jquery.min.js"></script>
    <script src="/plantilla/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="/plantilla/vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="/plantilla/js/sb-admin-2.min.js"></script>

</body>
<style>

*{
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
}
body{
    background: #485563;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #29323c, #485563);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #29323c, #485563); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


}
.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    list-style: none;
}
.left-content,.right-content{
    flex-basis: 70%;
}
.left-content{
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    grid-gap: 2rem;

}
.right-content{
    width: 50%;
    position: fixed;
    right: 30px;
}

.right-content .card{
    text-align: center;
    position: fixed;
    margin: 10%;
    margin-top: 10px;

}
.card img{
    height: 140px;
    padding: 0px;
}
.card{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.right-content h1{
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
}
.abilities{
    display: flex;
    justify-content: center;
    margin: 5px;
}
.abilities p{
    margin: 3px;
    text-transform: uppercase;
    color: #ffffff;
    font-size: 20px;
    border-radius: 5px;
}
.group{
    background-color:#999999;
}

.stats{
    display: flex;
}
.stats p{
    text-transform: uppercase;
    margin: 1px;
}

/* Solid border */
hr.solid {
  border-top: 3px solid #bbb;
}

.list-group-flush{
    border-radius: 15px;

}

.btn-group{
    width: 10px;
    height: 50px;
}
</style>
</html>

@endsection

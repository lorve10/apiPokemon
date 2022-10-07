<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Pokemon</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      </li>
    </ul>
    <div class="form-inline justify-content-start">
       <div class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Perfil
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Editar perfil</a>
          <a class="dropdown-item" href="{{ asset('/logout')}}">cerrar sessión</a>
        </div>
        </div>

</div>
  </div>
</nav>


<div class="container">
<section >
    <main>
        @yield('content')
    </main>
<!-- /.container-fluid -->
</section>


</div>
<style>
    .nav-item{
        text-decoration: none;
    }
    .form-inline{
        margin-right: 30px;
    }
</style>
</body>

</html>

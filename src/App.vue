<template>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <a class="nav-item nav-link" href="/">Вход</a>
            <a class="nav-item nav-link" href="/register">Регистрация</a>
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5 mt-5">
          <div id="app">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
<style>
body,html {
    font-family: "Times New Roman", Georgia, Serif !important;
}
</style>

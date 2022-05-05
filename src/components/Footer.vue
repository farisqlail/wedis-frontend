<template>
  <footer class="page-footer font-small blue">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
      crossorigin="anonymous"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      rel="stylesheet"
      type="text/css"
    />

    <div class="container text-md-left">
      <div class="row">
        <div class="col-md-6 mt-md-0 mt-3 address">
          <div class="logo font-red-hat-display">
            <a class="modal-title" id="targetModalLabel">
              <img
                style="margin-top: 0.5rem"
                src="@/assets/images/logo-putih.png"
                width="120px"
              />
            </a>
          </div>
          <div class="social-media">
            <a href="https://www.facebook.com/wedisdotco" target="blank">
              <img
                src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content10/dark/bi_facebook.svg"
                alt="facebook"
                class="img-fluid mr-4"
              />
            </a>
            <a href="https://www.facebook.com/wedisdotco" target="blank">
              <img
                src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content10/dark/bi_instagram.svg"
                alt="instagram"
                class="img-fluid mr-4"
              />
            </a>
          </div>
          <div class="copyright font-red-hat-display">
            2022 All rights reserved.
          </div>
        </div>
        <hr class="clearfix w-100 d-md-none pb-3" style="background-color: #2c3e57;" />
        <div class="row col-md-6 nav-footer">
          <div class="col-md-6 mb-md-0 mb-3">
            <p>Fitur</p>
            <ul class="list-unstyled">
              <li>
                <a href="#!">Portfolio</a>
              </li>
              <li>
                <a href="#!">Artikel</a>
              </li>
              <li>
                <a href="#!">Tentang Kami</a>
              </li>
            </ul>
          </div>
          <div class="col-md-6 mb-md-0 mb-3">
            <p>Kontak</p>
            <ul class="list-unstyled">
              <li>
                <span class="text-white">
                  <img
                    src="@/assets/images/logo-wa.png"
                    alt="wa"
                    class="img-fluid "
                    width="50px"
                  />
                  : +62 878-7850-8854</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;600;700;800;900&display=swap");

* {
  font-family: "Inter", sans-serif !important;
}

body .font-red-hat-display {
  font-family: "Red Hat Display", sans-serif !important;
}
body footer {
  background: #2c3e57;
  padding-top: 50px;
  padding-bottom: 70px;
}

body footer {
  background: #2c3e57;
  padding-top: 50px;
  padding-bottom: 70px;
}

body footer .logo {
  font-family: "Red Hat Display", sans-serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 38px;
  color: #fafafd;
}

body footer .social-media {
  margin-top: 55px;
}

body footer .copyright {
  font-family: "Red Hat Display", sans-serif !important;
  font-weight: 400;
  font-size: 16px;
  line-height: 135%;
  color: #fafafd;
  margin-top: 20px;
}

body footer .nav-footer p {
  font-weight: 700 !important;
  font-family: "Red Hat Display", sans-serif !important;
  font-size: 20px;
  line-height: 135%;
  color: #fafafd;
}

body footer .nav-footer a {
  font-weight: 400 !important;
  font-family: "Red Hat Display", sans-serif !important;
  font-size: 20px;
  line-height: 135%;
  color: #fafafd;
}

body footer li {
  margin-bottom: 16px;
}
</style>
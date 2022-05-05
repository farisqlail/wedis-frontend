<template>
  <header id="header" class="fixed-top">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="container">
            <router-link :to="{ name: 'Home' }">
              <img
                style="margin-right: 0.75rem; width: 100px"
                src="@/assets/images/Logo-Font.png"
              />
            </router-link>
            <button
              class="navbar-toggler border-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#targetModal-item"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="modal-item modal fade"
              id="targetModal-item"
              tabindex="-1"
              role="dialog"
              aria-labelledby="targetModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div
                  class="modal-content border-0"
                  style="background-color: #f9f7f7"
                >
                  <div
                    class="modal-header border-0"
                    style="padding: 2rem; padding-bottom: 0"
                  >
                    <a class="modal-title" id="targetModalLabel">
                      <img
                        style="margin-right: 0.75rem; width: 100px"
                        src="@/assets/images/Logo-Font.png"
                      />
                    </a>
                    <button
                      type="button"
                      class="close btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      style="color: #141432"
                    ></button>
                  </div>
                  <div
                    class="modal-footer border-0 gap-3"
                    style="padding: 2rem; padding-top: 0.75rem"
                  >
                    <!-- <div class="collapse navbar-collapse" id="navbarTogglerDemo"> -->
                    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                      <li class="nav-item active">
                        <a class="nav-link" href="#" style="color: #525298"
                          >Beranda</a
                        >
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Portfolio</a>
                      </li>
                      <li class="nav-item">
                         <router-link :to="{ name: 'Artikel' }" class="nav-link">Artikel</router-link>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Tentang Kami</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Kontak</a>
                      </li>
                    </ul>
                    <!-- </div> -->
                  </div>
                </div>
              </div>
            </div>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo">
              <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                  <a class="nav-link" href="#" style="color: #525298"
                    >Beranda</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Portfolio</a>
                </li>
                <li class="nav-item">
                  <router-link :to="{ name: 'Artikel' }" class="nav-link">Artikel</router-link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Tentang Kami</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Kontak</a>
                </li>
              </ul>
              <!-- <div class="gap-3">
            <button class="btn btn-default btn-no-fill">Log In</button>
            <button class="btn btn-fill text-white border-0">Consultation Now</button>
          </div> -->
            </div>
          </div>
        </nav>
      </header>
</template>
<script>
import css from "@/assets/base.css";
export default {}
</script>
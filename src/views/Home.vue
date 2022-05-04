<template>
<!-- Section Hero -->
  <section
    class="h-100 w-100"
    style="box-sizing: border-box; background-color: #f9f7f7"
  >
    <div
      class="header-4-3 container-xxl mx-auto p-0 position-relative"
      style="font-family: 'Poppins', sans-serif; color: #525298"
    >
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a href="#">
          <img
            style="margin-right: 0.75rem; width: 100px"
            src="@/assets/images/logo-Font.png"
          />
        </a>
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
              style="background-color: #141432"
            >
              <div
                class="modal-header border-0"
                style="padding: 2rem; padding-bottom: 0"
              >
                <a class="modal-title" id="targetModalLabel">
                  <img
                    style="margin-top: 0.5rem"
                    src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header2/Header-2-3.png"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  class="close btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div
                class="modal-footer border-0 gap-3"
                style="padding: 2rem; padding-top: 0.75rem"
              >
                <button class="btn btn-fill border-0 text-white">
                  Chat Us
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" style="color: #525298">Beranda</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Artikel</a>
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
      </nav>

      <div>
        <div class="mx-auto d-flex flex-lg-row flex-column hero">
          <!-- Left Column -->
          <div
            class="
              left-column
              d-flex
              flex-lg-grow-1 flex-column
              align-items-lg-start
              text-lg-start
              align-items-center
              text-center
            "
          >
            <!-- <p class="text-caption">FREE 30 DAY TRIAL</p> -->
            <h1 class="title-text-big mt-5" style="font-size: 40px; color: #2c3e57;">
              Wedis adalah <br class="d-lg-block d-none" />
              penyedia layanan untuk membantu menyelesaikan proyek
            </h1>
            <div
              class="
                d-flex
                flex-sm-row flex-column
                align-items-center
                mx-lg-0 mx-auto
                justify-content-center
                gap-3
              "
            >
              <button
                class="btn d-inline-flex mb-md-0 btn-try text-white border-0"
                style="background-color: #2c3e57;"
              >
                Konsultasi Sekarang
              </button>
              <!-- <button class="btn btn-outline">
                <div class="d-flex align-items-center">
                  <svg
                    class="me-2"
                    width="13"
                    height="12"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9293 8L6.66668 5.158V10.842L10.9293 8ZM12.9173 8.27734L5.85134 12.988C5.80115 13.0214 5.74283 13.0406 5.6826 13.0435C5.62238 13.0463 5.5625 13.0328 5.50934 13.0044C5.45619 12.9759 5.41175 12.9336 5.38075 12.8818C5.34976 12.8301 5.33337 12.771 5.33334 12.7107V3.28934C5.33337 3.22904 5.34976 3.16989 5.38075 3.11817C5.41175 3.06645 5.45619 3.0241 5.50934 2.99564C5.5625 2.96719 5.62238 2.95368 5.6826 2.95656C5.74283 2.95944 5.80115 2.9786 5.85134 3.012L12.9173 7.72267C12.963 7.75311 13.0004 7.79435 13.0263 7.84273C13.0522 7.89111 13.0658 7.94513 13.0658 8C13.0658 8.05488 13.0522 8.1089 13.0263 8.15728C13.0004 8.20566 12.963 8.2469 12.9173 8.27734Z"
                      fill="#707092"
                    />
                  </svg>
                  Watch the video
                </div>
              </button> -->
            </div>
          </div>
          <!-- Right Column -->
          <div
            class="
              right-column
              text-center
              d-flex
              justify-content-lg-end justify-content-center
              pe-0
            "
          >
            <img
              id="img-fluid"
              class="h-auto mw-100"
              src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header4/Header-4-3.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Section Hero -->

<!-- Section Konsultasi -->
  <section
    class="h-100 w-100"
    style="box-sizing: border-box; background-color: #f9f7f7"
  >
    <div
      class="content-2-3 container-xxl mx-auto p-0 position-relative"
      style="font-family: 'Poppins', sans-serif"
    >
      <div class="text-center title-text">
        <h1 class="text-title" style="margin-top: 50px; color: #2c3e57;">
          Kenapa Wedis ?
        </h1>
        <p class="text-caption" style="margin-left: 3rem; margin-right: 3rem">
          Solusi permasalahan IT Anda dan bergerak di bidang jasa dan desain IT
        </p>
      </div>

      <div class="grid-padding text-center">
        <div class="row">
          <div class="col-lg-4 column">
            <div class="icon">
              <img
                src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-8.png"
                alt=""
              />
            </div>
            <h3 class="icon-title" style="color: #2c3e57;">Teknologi</h3>
            <p class="icon-caption">
              Kami mengembangkan Android, aplikasi web, <br />
              dan e-commerce.
            </p>
          </div>
          <div class="col-lg-4 column">
            <div class="icon">
              <img
                src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-9.png"
                alt=""
              />
            </div>
            <h3 class="icon-title" style="color: #2c3e57;">Strategi</h3>
            <p class="icon-caption">
              Kami membantu Anda memahami pelanggan dan membuat <br />
              cetak biru untuk memecahkan masalah
            </p>
          </div>
          <div class="col-lg-4 column">
            <div class="icon">
              <img
                src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-10.png"
                alt=""
              />
            </div>
            <h3 class="icon-title" style="color: #2c3e57;">Komunikasi</h3>
            <p class="icon-caption">
              Kami memberikan pelayanan dengan Komunikasi <br />
              yang interaktif melalui segala sosial media kami.
            </p>
          </div>
        </div>
      </div>

      <div class="card-block">
        <div class="card" style="background-color: #2c3e57;">
          <div class="d-flex flex-lg-row flex-column align-items-center">
            <div class="me-lg-3">
              <img
                src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-1%20(1).png"
                alt=""
              />
            </div>
            <div class="flex-grow-1 text-lg-start text-center card-text">
              <h3 class="card-title text-white">
                Konsultasikan bisnis atau proyek anda sekarang
              </h3>
              <p class="card-caption">
                Kami bantu untuk analisis bisnis membantu organisasi memahami
                pengembangan pasar atau bisnis.
              </p>
            </div>
            <div class="card-btn-space">
              <button class="btn btn-card text-white" style="background-color: #bbaf8d;">Konsultasi</button>
              <button class="btn btn-outline">Portfolio</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Section Konsultasi -->
  
  <!-- Section Pricing -->
  <section
    class="h-100 w-100"
    style="box-sizing: border-box; background-color: #2c3e57"
  >
    <div
      class="
        content-3-7
        overflow-hidden
        container-xxl
        mx-auto
        position-relative
      "
      style="font-family: 'Poppins', sans-serif"
    >
      <div class="container mx-auto">
        <div
          class="d-flex flex-column text-center w-100"
          style="margin-bottom: 2.25rem"
        >
          <h2 class="title-text" style="color: #f9f7f7;">Pricing That Everyone Works</h2>
          <p class="caption-text mx-auto">
            Choose one of our friendly pricing that suitable<br />
            for your business to grow bigger
          </p>
        </div>
        <div class="d-flex flex-wrap">
          <div class="mx-auto card-item position-relative">
            <div
              class="
                card-item-outline
                d-flex
                flex-column
                position-relative
                overflow-hidden
                h-100
              "
              style="background-color: #f9f7f7"
            >
              <h2 class="price-title">Startup</h2>
              <h2 class="price-value d-flex align-items-center">
                <span>$29</span>
                <span class="price-duration">/Month</span>
              </h2>
              <p class="price-caption">
                Suitable for those of you<br />
                who are beginners
              </p>
              <div class="price-list">
                <p class="d-flex align-items-center check">
                  <span
                    class="
                      span-icon
                      d-inline-flex
                      align-items-center
                      justify-content-center
                      flex-shrink-0
                    "
                  >
                    <img
                      class="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-4.png"
                      alt=""
                    /> </span
                  >Chat Support
                </p>
                <p class="d-flex align-items-center check">
                  <span
                    class="
                      span-icon
                      d-inline-flex
                      align-items-center
                      justify-content-center
                      flex-shrink-0
                    "
                  >
                    <img
                      class="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-4.png"
                      alt=""
                    /> </span
                  >Optimize Projects
                </p>
                <p class="d-flex align-items-center no-check">
                  <span
                    class="
                      span-icon
                      d-inline-flex
                      align-items-center
                      justify-content-center
                      flex-shrink-0
                    "
                  >
                    <img
                      class="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-3.png"
                      alt=""
                    /> </span
                  >300+ Unique Project
                </p>
                <p class="d-flex align-items-center no-check">
                  <span
                    class="
                      span-icon
                      d-inline-flex
                      align-items-center
                      justify-content-center
                      flex-shrink-0
                    "
                  >
                    <img
                      class="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-3.png"
                      alt=""
                    /> </span
                  >Own Analytics Platform
                </p>
                <p class="d-flex align-items-center no-check">
                  <span
                    class="
                      span-icon
                      d-inline-flex
                      align-items-center
                      justify-content-center
                      flex-shrink-0
                    "
                  >
                    <img
                      class="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-3.png"
                      alt=""
                    /> </span
                  >Unlimited User
                </p>
              </div>
              <button
                class="
                  btn btn-outline
                  d-flex
                  justify-content-center
                  align-items-center
                  w-100
                "
              >
                Choose Plan
              </button>
            </div>
          </div>
          <div class="mx-auto card-item position-relative">
            <div
              class="
                card-item-outline
                bg-white
                d-flex
                flex-column
                position-relative
                overflow-hidden
                h-100
              "
            >
              <h2 class="price-title">Steady</h2>
              <h2 class="price-value d-flex align-items-center">
                <span>$49</span>
                <span class="price-duration">/Month</span>
              </h2>
              <p class="price-caption">
                Suitable for those of you<br />
                who want to grow
              </p>
              <div class="price-list">
                <p class="d-flex align-items-center check">
                  <span
                    class="
                      span-icon
                      d-inline-flex
                      align-items-center
                      justify-content-center
                      flex-shrink-0
                    "
                  >
                    <img
                      class="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-4.png"
                      alt=""
                    /> </span
                  >Chat Support
                </p>
                <p class="d-flex align-items-center check">
                  <span
                    class="
                      span-icon
                      d-inline-flex
                      align-items-center
                      justify-content-center
                      flex-shrink-0
                    "
                  >
                    <img
                      class="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-4.png"
                      alt=""
                    /> </span
                  >Optimize Projects
                </p>
                <p class="d-flex align-items-center check">
                  <span
                    class="
                      span-icon
                      d-inline-flex
                      align-items-center
                      justify-content-center
                      flex-shrink-0
                    "
                  >
                    <img
                      class="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-4.png"
                      alt=""
                    /> </span
                  >300+ Unique Project
                </p>
                <p class="d-flex align-items-center no-check">
                  <span
                    class="
                      span-icon
                      d-inline-flex
                      align-items-center
                      justify-content-center
                      flex-shrink-0
                    "
                  >
                    <img
                      class="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-3.png"
                      alt=""
                    /> </span
                  >Own Analytics Platform
                </p>
                <p class="d-flex align-items-center no-check">
                  <span
                    class="
                      span-icon
                      d-inline-flex
                      align-items-center
                      justify-content-center
                      flex-shrink-0
                    "
                  >
                    <img
                      class="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-3.png"
                      alt=""
                    /> </span
                  >Unlimited User
                </p>
              </div>
              <button
                class="
                  btn btn-outline
                  d-flex
                  justify-content-center
                  align-items-center
                  w-100
                "
              >
                Choose Plan
              </button>
            </div>
          </div>
          <div class="mx-auto card-item position-relative">
            <div
              class="
                card-item-outline
                d-flex
                flex-column
                position-relative
                overflow-hidden
                h-100
              "
              style="background-color: #2e3a53"
            >
              <h2 class="price-title text-white">Enterprise</h2>
              <h2 class="price-value d-flex align-items-center text-white">
                <span>$99</span>
                <span class="price-duration" style="color: #8997b5"
                  >/Month</span
                >
              </h2>
              <p class="price-caption" style="color: #7987a6">
                Suitable to make your<br />
                company grow rapidly
              </p>
              <div class="price-list">
                <p class="d-flex align-items-center check text-white">
                  <span
                    class="
                      span-icon
                      d-inline-flex
                      align-items-center
                      justify-content-center
                      flex-shrink-0
                    "
                  >
                    <img
                      class="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-6.png"
                      alt=""
                    /> </span
                  >Chat Support
                </p>
                <p class="d-flex align-items-center check text-white">
                  <span
                    class="
                      span-icon
                      d-inline-flex
                      align-items-center
                      justify-content-center
                      flex-shrink-0
                    "
                  >
                    <img
                      class="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-6.png"
                      alt=""
                    /> </span
                  >Optimize Projects
                </p>
                <p class="d-flex align-items-center check text-white">
                  <span
                    class="
                      span-icon
                      d-inline-flex
                      align-items-center
                      justify-content-center
                      flex-shrink-0
                    "
                  >
                    <img
                      class="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-6.png"
                      alt=""
                    /> </span
                  >300+ Unique Project
                </p>
                <p class="d-flex align-items-center check text-white">
                  <span
                    class="
                      span-icon
                      d-inline-flex
                      align-items-center
                      justify-content-center
                      flex-shrink-0
                    "
                  >
                    <img
                      class="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-6.png"
                      alt=""
                    /> </span
                  >Own Analytics Platform
                </p>
                <p class="d-flex align-items-center check text-white">
                  <span
                    class="
                      span-icon
                      d-inline-flex
                      align-items-center
                      justify-content-center
                      flex-shrink-0
                    "
                  >
                    <img
                      class="img-fluid"
                      src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-6.png"
                      alt=""
                    /> </span
                  >Unlimited User
                </p>
              </div>
              <button
                class="
                  btn btn-fill
                  d-flex
                  justify-content-center
                  align-items-center
                  w-100
                "
              >
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="left-circle">
    <div class="d-flex justify-content-start">
      <img
        src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content-workly/Left-Circle.png"
        alt="circle"
      />
    </div>
  </section>

  <section class="client">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <h1 class="text-center">
            Trusted by over 400 global leading companies
          </h1>
        </div>
      </div>
      <div class="row mt-5 client-img d-flex justify-content-center mx-0">
        <img
          src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content-workly/client-1.png"
          alt="client"
          class="img-fluid mx-2 mx-md-4"
        />
        <img
          src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content-workly/client-2.png"
          alt="client"
          class="img-fluid mx-2 mx-md-4"
        />
        <img
          src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content-workly/client-3.png"
          alt="client"
          class="img-fluid mx-2 mx-md-4"
        />
        <img
          src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content-workly/client-4.png"
          alt="client"
          class="img-fluid mx-2 mx-md-4"
        />
        <img
          src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content-workly/client-5.png"
          alt="client"
          class="img-fluid mx-2 mx-md-4"
        />
        <img
          src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content-workly/client-6.png"
          alt="client"
          class="img-fluid mx-2 mx-md-4"
        />
      </div>
    </div>
    <div class="container review-section">
      <div class="row">
        <div class="col-md-5 px-5 mt-4 mt-md-0">
          <img
            src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content-workly/profile-client.png"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="col-md-7 mt-4 mt-md-0">
          <div class="text-right">
            <img
              src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content-workly/petik.png"
              alt="mark"
              class="img-fluid"
            />
          </div>
          <p class="review">
            Since I used Work.ly, now I can have a decent workflow. There are
            also some improvements that are felt by my fellow workers. I am very
            happy using this platform and I recommend Work.ly to all of you
            guys!
          </p>
          <h5 class="mt-5">John Doe</h5>
          <p class="company">Sharp Indonesia</p>
        </div>
      </div>
    </div>
  </section>
  <!-- START: PRODUCTS -->
  <section class="products">
    <section class="right-circle">
      <div class="d-flex justify-content-end">
        <img
          src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content-workly/Right-Circle.png"
          alt="circle"
        />
      </div>
    </section>

    <section class="porto">
      <div class="row d-flex align-items-center">
        <div class="col-md-10">
          <h4 class="headline">Outputs from Our Platform</h4>
        </div>
        <div class="col-md-2 text-md-right">
          <a href="#" class="link h-100 d-inline-block text-decoration-none">
            See more
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p class="sub-headline">
            Our platform specialize on helping our clients work process and
            communication. <br />
            Below are the products produced using our platform.
          </p>
        </div>
      </div>
      <div class="row porto-img">
        <div class="col-4">
          <img
            src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content-workly/porto-1.png"
            class="img-fluid"
          />
        </div>
        <div class="col-4 d-flex align-items-end flex-column">
          <img
            src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content-workly/porto-2.png"
            class="img-fluid"
          />
          <img
            src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content-workly/porto-3.png"
            class="img-fluid mt-auto"
          />
        </div>
        <div class="col-4">
          <img
            src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content-workly/porto-4.png"
            class="img-fluid"
          />
        </div>
      </div>
    </section>
  </section>
  <Footer />
</template>

<script>
import css from "@/assets/base.css";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Footer,
  },
};
</script>
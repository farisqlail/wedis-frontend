
<template>
  <!-- Section Hero -->
  <section
    class="h-100 w-100"
    style="
      box-sizing: border-box;
      background-color: #f9f7f7;
      padding-top: 110px;
    "
    >
    <Navbar />
    
    <div class="container pb-5">
      <div class="card rounded shadow" style="border: none">
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <l-map style="height: 300px" :zoom="zoom" :center="center">
                <l-tile-layer
                  :url="url"
                  :attribution="attribution"
                ></l-tile-layer>
                <l-marker :lat-lng="markerLatLng"></l-marker>
              </l-map>
            </div>
            <div class="col-md-6"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script>
import Footer from "../../components/Footer.vue";
import Navbar from "../../components/Navbar.vue";
import "leaflet/dist/leaflet.css";
import { LMap, LGeoJson } from "@vue-leaflet/vue-leaflet";

export default {
  name: "Kontak",
  components: {
    Footer,
    Navbar,
    LMap,
    LGeoJson,
  },
  mounted() {
    document.title = "Kontak Kami | Wedis";
  },
  data() {
    return {
      url: ""
    };
  },
};
</script>
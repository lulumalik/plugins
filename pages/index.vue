<template>
  <div class="container">
    <div>
      <client-only>
        <div ref="map" id="map" class="map h-screen w-screen z-0"></div>
        <div v-if="map">
          <div v-for="(data, i) in listPlugins" :key="i">
            <component :is="data.name" :opt="opt" />
          </div>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
export default {
  data: function () {
    return {
      url: null,
      map: null,
      showComponent: false,
      opt: {
        zoomControl: false,
        minZoom: 2,
        zoom: 2,
        
        editable: true,
        center: [0, 115],
        // maxBoundsViscosity: 1.0,
        zoomSnap: 0.1,
        smoothWheelZoom: true,
        smoothSensitivity: 1.9,
      },
      // list array plugins yang terinstall
      listPlugins: [
        {
          // rule untuk penulisan nama component itu disesuaikan dengan Vue seperti biasa
          // camelcase lebih baik.
          name: "dataComponent", // nama component
          path: "http://localhost:3020/", // path request axios.
        }
      ],
    };
  },
  mounted() {
    // server + client
    // import dari server side, Vue component dan axios

    // import dalam client side
    process.nextTick(() => {
      this.map = L.map(this.$refs.map, this.opt);
      window.$parent = this.$parent.$children[0]
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        this.map
      );
      this.listPlugins.forEach((el) => {
        // import component
        Vue.component(el.name, function (resolve, reject) {
          // ambil html
          axios.get(el.path).then((response) => {
            // return template
            // response.data.json --> us state
            resolve({
              template: response.data.html,
            });
          });
        });
      });

      this.showComponent = true;
    });
    // this.loadFile();
  },
  destroyed() {
    delete window.$parent.map;
  },
  // mounted() {
  //   process.nextTick(() => {
  //     Vue.component("posted", function (resolve, reject) {
  //       axios.get("/coba.html").then((response) => {
  //         console.log(response)
  //         resolve({ template: response.data });
  //       });
  //     });
  //   });
  // },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

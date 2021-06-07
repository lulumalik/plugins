# testhtml

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


## Developtment plugins
```bash
# Vue in index.html
$ Segala bentuk kondisi pada DOM index.html berlaku Vue conditional rendering https://vuejs.org/v2/guide/conditional.html

$ DOM pada index.html harus dimulai tag <div></div> sepertu biasa

$ Leaflet Map sudah tersedia secara Global dengan mengakses window.globalMap

$ Untuk access data pada '$parent', bisa menggunakan mustache seperti '{{$parent.layerList}}' untuk memanggil layerList dan lain lain. ( data terdapat pada file maps.vue )

# Javascript in HTML

$ Untuk membuat tag script pada index, gunakan 

    <div>
        <script type="application/javascript">
            // code
        </script>
    </div>

$ Call api pada index.html bisa gunakan fetch sebagai pengganti Axios.

$ Import package dari luar hanya bisa di lakukan dengan cara berikut

        var script = document.createElement('script');
        script.onload = function () {

            // code
        };
        script.src = "https://d3js.org/d3.v3.min.js";
        document.getElementsByTagName('head')[0].appendChild(script);

    // Import sewajarnya saja, karena akan terjadi performance issue jika memuat terlalu banyak js / package
    
# Current Issue

$ Membuat index.html beserta javascript mengimport data melewati node_modules

```
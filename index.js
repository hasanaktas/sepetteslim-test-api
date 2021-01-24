const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Sepetteslim Test Api by Hasan Aktas!");
});

app.get("/markets", (req, res) => {
  res.send({
    categories: [
      {
        name: {
          tr: "İndirimdekiler",
          en: "Discounts",
        },
        image:
          "https://cdn-photo.pivol.com/16686/imgs/081220181112072346195.jpg",
      },
      {
        name: {
          tr: "Meyve & Sebze",
          en: "Fruits & Vegetables",
        },
        image:
          "https://i12.haber7.net//haber/haber7/photos/2020/14/mevsiminde_beslenmenin_onemi_ve_nisan_ayinda_tuketilmesi_gereken_sebze_ve_meyveler_nelerdir_1585810736_2142.jpg",
      },
      {
        name: {
          tr: "Fırından",
          en: "From the oven",
        },
        image:
          "https://besthqwallpapers.com/Uploads/10-9-2017/20206/thumb2-bread-wheat-bakery-products-wheat-grains-autumn.jpg",
      },
      {
        name: {
          tr: "Et & Şarküteri",
          en: "Meat",
        },
        image:
          "https://www.fethiyerehberi.com/wp-content/uploads/dogal-et-sarkuteri.cropped.702x460.jpg",
      },
      {
        name: {
          tr: "Temel Gıda",
          en: "Basic Food",
        },
        image:
          "https://www.domatessuyu.com/wp-content/uploads/2020/12/temel-gidalar.jpeg",
      },
    ],
    shops: [
      {
        logo:
          "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062012/untitled-1_73.png?itok=FEiUk9ek",
        name: {
          tr: "Panora Market",
          en: "Panora Market",
        },
        minimumOrder: 20,
        star: 4.6,
        deliveryTime: "20-30",
      },
      {
        logo: "https://www.kanyon.com.tr/assets/img/kanyon-logo@2x.png",
        name: {
          tr: "Kanyon Market",
          en: "Kanyon Market",
        },
        minimumOrder: 25,
        star: 4.6,
        deliveryTime: "30-45",
      },
      {
        logo:
          "https://cdn.freelogovectors.net/wp-content/uploads/2020/02/neo-logo-coin.png",
        name: {
          tr: "Neo Market",
          en: "Neo Market",
        },
        minimumOrder: 35,
        star: 4.5,
        deliveryTime: "20-30",
      },
      {
        logo:
          "https://png.pngtree.com/template/20191111/ourmid/pngtree-mv-vm-letter-vector-logo-image_332121.jpg",
        name: {
          tr: "Merinos Market",
          en: "Merinos Market",
        },
        minimumOrder: 35,
        star: 4.5,
        deliveryTime: "20-30",
      },
      {
        logo:
          "https://www.logolynx.com/images/logolynx/e5/e505c075eef59083f1129059e1c34791.jpeg",
        name: {
          tr: "Cinar Market",
          en: "Cinar Market",
        },
        minimumOrder: 35,
        star: 4.5,
        deliveryTime: "20-30",
      },
    ],
  });
});

app.get("/restaurants", (req, res) => {
  res.send({
    categories: [
      {
        name: {
          tr: "Pide",
          en: "Discounts",
        },
        image:
          "https://im.haberturk.com/2019/10/30/ver1572512151/acik-pide_2535762_1200x627.jpg",
      },
      {
        name: {
          tr: "Kebap",
          en: "Fruits & Vegetables",
        },
        image:
          "https://cdn.yemek.com/mnresize/940/940/uploads/2014/08/kasibeyaz-bosphorus-subat-2020.jpg",
      },
      {
        name: {
          tr: "Pizza",
          en: "From the oven",
        },
        image:
          "https://i4.hurimg.com/i/hurriyet/75/750x422/5d25cdf967b0a90c800e1e4d.jpg",
      },
      {
        name: {
          tr: "Çiğ Köfte",
          en: "Meat",
        },
        image:
          "https://www.noktabursa.com.tr/wp-content/uploads/2020/03/cig-kofte-tarifi-6.jpg",
      },
      {
        name: {
          tr: "Tatlı",
          en: "Basic Food",
        },
        image:
          "https://www.pakmayaprofesyonellerdunyasi.com/uploads/Tarif/baklava.jpg",
      },
    ],
    shops: [
      {
        logo:
          "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062012/untitled-1_73.png?itok=FEiUk9ek",
        name: {
          tr: "Panora Market",
          en: "Panora Market",
        },
        minimumOrder: 20,
        star: 4.6,
        deliveryTime: "20-30",
      },
      {
        logo: "https://www.kanyon.com.tr/assets/img/kanyon-logo@2x.png",
        name: {
          tr: "Kanyon Market",
          en: "Kanyon Market",
        },
        minimumOrder: 25,
        star: 4.6,
        deliveryTime: "30-45",
      },
      {
        logo:
          "https://cdn.freelogovectors.net/wp-content/uploads/2020/02/neo-logo-coin.png",
        name: {
          tr: "Neo Market",
          en: "Neo Market",
        },
        minimumOrder: 35,
        star: 4.5,
        deliveryTime: "20-30",
      },
      {
        logo:
          "https://png.pngtree.com/template/20191111/ourmid/pngtree-mv-vm-letter-vector-logo-image_332121.jpg",
        name: {
          tr: "Merinos Market",
          en: "Merinos Market",
        },
        minimumOrder: 35,
        star: 4.5,
        deliveryTime: "20-30",
      },
      {
        logo:
          "https://www.logolynx.com/images/logolynx/e5/e505c075eef59083f1129059e1c34791.jpeg",
        name: {
          tr: "Cinar Market",
          en: "Cinar Market",
        },
        minimumOrder: 35,
        star: 4.5,
        deliveryTime: "20-30",
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

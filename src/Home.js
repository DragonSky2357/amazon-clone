import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1"
          title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)"
          price={164.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51IIMW6-TbL.jpg"
        />

        <Product
          id="2"
          title="
          Samsung (MZ-V7E1T0BW) 970 EVO SSD 1TB - M.2 NVMe Interface Internal Solid State Drive with V-NAND Technology, Black/Red"
          price={139.15}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41ztP8vgdwL.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
          price={164.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41C4JkSnyzL.jpg"
        />

        <Product
          id="4"
          title="TP-Link AC1750 Smart WiFi Router (Archer A7) -Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server, Parental Control, QoS"
          price={56.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/51R2a9p-vNL._AC_UL320_.jpg"
        />

        <Product
          id="5"
          title="Corsair Vengeance LPX 16GB (2x8GB) DDR4 DRAM 3200MHz C16 Desktop Memory Kit - Black (CMK16GX4M2B3200C16)"
          price={83.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/51kHiPeTSmL._AC_UL320_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="6"
          title="iBUYPOWER Gaming PC Computer Desktop Element MR 9320 (Intel i7-10700F 2.9GHz, NVIDIA GTX 1660 Ti 6GB, 16GB DDR4 RAM, 240GB SSD, 1TB HDD, Wi-Fi Ready, Windows 10 Home)"
          price={1290.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/715zrA5cmLL._AC_UL320_.jpg"
        />
        <Product
          id="7"
          title="CHUWI HeroBook Pro 14.1 inch Windows 10 Laptop Computer, 8G RAM / 256GB SSD with Intel Gmini Lake N4000 Notebook, Thin and Light"
          price={349.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/71jDooDQHpL._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;

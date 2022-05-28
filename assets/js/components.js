// alert('test')

class Header extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <header>
            <div class="header-top">
                <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-md-12 left-item">
                    <ul>
                        <li><i class="fas fa-envelope-square"></i><a href="mailto:sinematoofficial@gmail.com"> sinematoofficial@gmail.com</a></li>
                        <li><i class="fas fa-phone-square"></i> 085816081685</li>
                    </ul>
                    </div>
                    <div class="col-lg-5 d-none d-lg-block right-item">
                    <ul>
                        <li>
                        <a href="https://github.com/shuyshuys/it-consultant"><i class="fab fa-github"></i></a>
                        </li>
                        <li>
                        <a href="https://www.youtube.com/channel/UCMisGziFICwcAioGATl0kSQ"><i class="fab fa-youtube"></i></a>
                        </li>
                        <li>
                        <a href="https://backend.shuyshuys.repl.co/pages/authentication/signup/illustration.html" class="btn btn-primary btn-sm">Register</a>
                        <a href="https://backend.shuyshuys.repl.co/pages/authentication/signin/basic.html" class="btn btn-primary btn-sm">Login</a>
                      </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <nav class="menu">
                <ol>
                    <li class="menu-item"><a href="index.html">Beranda</a></li>
                    <li class="menu-item">
                    <a href="solusi.html">Solusi</a>
                    <ol class="sub-menu">
                        <li class="menu-item"><a href="pages/solusi/sistem-integrasi.html">Sistem Integrasi</a></li>
                        <li class="menu-item"><a href="pages/solusi/data-center.html">Data Center</a></li>
                        <li class="menu-item"><a href="pages/solusi/portofolio-proyek-sistem-integtasi.html">Portofolio Proyek Sistem Integrasi</a></li>
                    </ol>
                    </li>
                    <li class="menu-item">
                    <a href="konsultasi.html">Konsultasi & Audit</a>
                    <ol class="sub-menu">
                        <li class="menu-item"><a href="pages/konsultasi/desain-infrastruktur-ti.html">Desain Infrastruktur Teknologi Informasi</a></li>
                        <li class="menu-item"><a href="pages/konsultasi/keamanan-informasi.html">Keamanan Informasi</a></li>
                        <li class="menu-item"><a href="pages/konsultasi/tata-kelola-ti.html">Tata Kelola Teknologi Informasi</a></li>
                        <li class="menu-item"><a href="pages/konsultasi/master-plan.html">Master Plan</a></li>
                        <li class="menu-item"><a href="pages/konsultasi/pelatihan-ti.html">Pelatihan IT</a></li>
                        <li class="menu-item"><a href="pages/konsultasi/portofolio.html">Portofolio Konsultasi dan Audit</a></li>
                    </ol>
                    </li>
                    <li class="menu-item">
                    <a href="artikel.html">Artikel</a>
                    <ol class="sub-menu">
                        <li class="menu-item"><a href="pages/artikel/tata-kelola-ti.html">Tata Kelola TI</a></li>
                        <li class="menu-item"><a href="pages/artikel/isms-smki.html">Keamanan Informasi</a></li>
                        <li class="menu-item"><a href="pages/konsultasi/it-master-plan.html">IT Master Plan</a></li>
                        <li class="menu-item"><a href="pages/artikel/sistem-integrasi.html">Sistem Integrasi</a></li>
                        <li class="menu-item"><a href="pages/artikel/portofolio-proyek.html">Portofolio Proyek</a></li>
                    </ol>
                    </li>
                    <li class="menu-item"><a href="kontak.html">Kontak</a></li>
                        <li class="menu-item"><a href="pages/teams.html">Our Teams</a>
                    </li>
                </ol>
            </nav>
        </header>
        `
    }
}

class Footer extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <footer class="footer">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-sm-12">
                <h2>Tentang Kami</h2>
                <p>
                  Kelompok 2 basis data adalah kelompok Teknologi Informasi yang berdiri
                  sejak bangun dan sahamnya dimiliki 100% oleh anak bangsa.
                  kelompok ini di dedikasikan agar menjadi kelompok yang mampu
                  memberikan solusi dan layanan TI terbaik kepada klien-kliennya.
                  Kami juga secara serius mengembangkan produk dan layanan TI untuk
                  memenuhi kebutuhan industri TI sehingga diharapkan dapat
                  berkontribusi dalam meningkatkan kemajuan teknologi TI di
                  UPNVJT.
                </p>
                <p>
                  Fokus pencapaian kami adalah pada hasil yang berkualitas dan
                  kepuasan dosen. Oleh karenanya, kami melakukan perbaikan
                  secara terus-menerus untuk meningkatkan kualitas SDM, proses
                  bisnis, serta mutu layanan dan produk yang kami hasilkan.
                </p>
              </div>
              <div class="col-md-4 col-sm-12">
                <h2>Useful Links</h2>
                <ul class="list-unstyled link-list">
                  <li>
                    <a ui-sref="about" href="#/about">Tentang Kami</a
                    ><i class="fa fa-angle-right"></i>
                  </li>
                  <li>
                    <a ui-sref="portfolio" href="#/portfolio">Portofolio</a
                    ><i class="fa fa-angle-right"></i>
                  </li>
                  <li>
                    <a ui-sref="products" href="#/products">Latest jobs</a
                    ><i class="fa fa-angle-right"></i>
                  </li>
                  <li>
                    <a ui-sref="gallery" href="#/gallery">Pricing</a
                    ><i class="fa fa-angle-right"></i>
                  </li>
                  <li>
                    <a ui-sref="contact" href="#/contact">Hubungi Kami</a
                    ><i class="fa fa-angle-right"></i>
                  </li>
                </ul>
              </div>
              <div class="col-md-4 col-sm-12 map-img">
                <h2>Contact Us</h2>
                <address class="md-margin-bottom-40">
                  Kelompok 2 Basis Data<br />
                  Hosting in <a href="https://replit.com">replit.com</a><br />
                  Jl. Rungkut Madya No.1, <br />
                  Kec. Gn. Anyar, Kota SBY <br />
                  Phone Biro Admik: 031 - 8706369 <br />
                  Email <a href="mailto:sinematoofficial@gmail.com" class="akun">sinematoofficial@gmail.com</a><br />
                  Web: <a href="https://it-consultant.muhdnurr.repl.co" class="web">it-consultant.muhdnurr.repl.co</a><br />
                </address>
              </div>
            </div>
          </div>
        </footer>
        <div class="copy">
          <div class="container">
            <a href="https://it-consultant.muhdnurr.repl.co"
              >2022 &copy; All Rights Reserved | Designed and Developed by Kelompok
              2 Basis Data</a
            >
            <span>
              <a href="https://github.com/shuyshuys/it-consultant"
                ><i class="fab fa-github"></i
              ></a>
                  <a href="https://www.youtube.com/channel/UCMisGziFICwcAioGATl0kSQ"><i class="fab fa-youtube"></i></a>
            </span>
          </div>
        </div>
        `
    }
}

customElements.define('header-component', Header);
customElements.define('footer-component', Footer);

// alert("test")
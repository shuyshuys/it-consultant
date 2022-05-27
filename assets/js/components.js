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
                        <li><i class="fas fa-envelope-square"></i>sinematoofficial@gmail.com</li>
                        <li><i class="fas fa-phone-square"></i> 085816081685</li>
                    </ul>
                    </div>
                    <div class="col-lg-5 d-none d-lg-block right-item">
                    <ul>
                        <li>
                        <a href="https://github.com/shuyshuys/it-consultant"><i class="fab fa-github"></i></a>
                        </li>
                        <li>
                        <a><i class="fab fa-google-plus-g"></i></a>
                        </li>
                        <li>
                        <a><i class="fab fa-pinterest-p"></i></a>
                        </li>
                        <li>
                        <a><i class="fab fa-twitter"></i></a>
                        </li>
                        <li>
                        <a><i class="fab fa-facebook-f"></i></a>
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
                        <li class="menu-item"><a href="sistem-integrasi.html">Sistem Integrasi</a></li>
                        <li class="menu-item"><a href="data-center.html">Data Center</a></li>
                        <li class="menu-item"><a href="portofolio-proyek-sistem-integtasi.html">Portofolio Proyek Sistem Integrasi</a></li>
                    </ol>
                    </li>
                    <li class="menu-item">
                    <a href="konsultasi.html">Konsultasi & Audit</a>
                    <ol class="sub-menu">
                        <li class="menu-item"><a href="desain-infrastruktur-ti.html">Desain Infrastruktur Teknologi Informasi</a></li>
                        <li class="menu-item"><a href="keamanan-informasi.html">Keamanan Informasi</a></li>
                        <li class="menu-item"><a href="tata-kelola-ti.html">Tata Kelola Teknologi Informasi</a></li>
                        <li class="menu-item"><a href="master-plan.html">Master Plan</a></li>
                        <li class="menu-item"><a href="pelatihan-ti.html">Pelatihan IT</a></li>
                        <li class="menu-item"><a href="portofolio.html">Portofolio Konsultasi dan Audit</a></li>
                    </ol>
                    </li>
                    <li class="menu-item">
                    <a href="artikel.html">Artikel</a>
                    <ol class="sub-menu">
                        <li class="menu-item"><a href="tata-kelola-ti.html">Tata Kelola TI</a></li>
                        <li class="menu-item"><a href="keamanan-informasi.html">Keamanan Informasi</a></li>
                        <li class="menu-item"><a href="it-master-plan.html">IT Master Plan</a></li>
                        <li class="menu-item"><a href="sistem-ntegrasi.html">Sistem Integrasi</a></li>
                        <li class="menu-item"><a href="portofolio-proyek.html">Portofolio Proyek</a></li>
                    </ol>
                    </li>
                    <li class="menu-item"><a href="kontak.html">Kontak</a></li>
                        <li class="menu-item"><a href="https://backend-it-consultant.shuyshuys.repl.co">Admin</a></li>
                </ol>
            </nav>
        </header>
        `
    }
}

customElements.define('header-component', Header);

// alert("test")
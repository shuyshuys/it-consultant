class Header extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <header>
            <div class="header-top">
                <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-12 left-item">
                    <ul>
                        <li>
                        <i class="fas fa-envelope-square"></i> sinematoofficial@gmail.com</li>
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
                    </ol>
                    </li>
                    <li class="menu-item">
                    <a href="konsultasi.html">Konsultasi & Audit</a>
                    <ol class="sub-menu">
                        <li class="menu-item"><a href="desain-infrastruktur-ti.html">Desain Infrastruktur Teknologi Informasi</a></li>
                        <li class="menu-item"><a href="#0">Keamanan Informasi</a></li>
                        <li class="menu-item"><a href="#0">Tata Kelola Teknologi Informasi</a></li>
                        <li class="menu-item"><a href="#0">Master Plan</a></li>
                        <li class="menu-item"><a href="#0">Pelatihan IT</a></li>
                    </ol>
                    </li>
                    <li class="menu-item"><a href="kontak.html">Kontak</a></li>
                </ol>
            </nav>
        </header>
        `
    }
}

customElements.define('header-component', Header);
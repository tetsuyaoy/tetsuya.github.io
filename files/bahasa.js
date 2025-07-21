$(document).ready(function() {
    home('eng');
    about('eng');
    resume('eng');
    projek('eng');
    const checkbox = document.getElementById('bahasa')

    checkbox.addEventListener('change', (event) => {
      if (event.currentTarget.checked) {
          home('ind');
          about('ind');
          resume('ind');
          projek('ind');
      } else {
          home('eng');
          about('eng');
          resume('eng');
          projek('eng');
      }
    })
});

async function translateGoogleScrape(text) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=id&tl=en&dt=t&q=${encodeURIComponent(text)}`;

    const response = await fetch(url);
    const data = await response.json();
    return data[0][0][0]; // Mengambil hasil terjemahan
}

function home(el) {
    if (el =='ind'){
        var text = `<h3>Hai, Saya</h3>
                    <h1>Rama</h1>
                    <h4 style="--i:6">Saya Seorang</h4> `;
    }else{
        var text = `<h3>Hello, It's Me</h3>
                    <h1>Rama</h1>
                    <h4 style="--i:6">I'm a</h4>`;
    }
    
    $('#hailo').html(text);
}

function about(el) {
    if (el =='ind'){
        var text = `
                    <h2>Tentang <span> Saya</span></span></h2>
                    <br>
                    <p>Nama lengkap saya Mochamad Rama Ramdhani. Saya merupakan lulusan D3 Manajemen Informatika dengan minat yang besar pada teknologi dan pemrograman. Saat ini, saya bekerja sebagai Fullstack Web Developer dengan pengalaman dalam membangun aplikasi web modern dan responsif.</p>
                    <p>Saya berkomitmen untuk terus mengembangkan keterampilan saya dengan mengikuti berbagai kelas pemrograman dan pelatihan. Tujuan saya adalah memperluas keahlian tidak hanya dalam pengembangan web tetapi juga di bidang Pengembangan Perangkat Lunak (Software Development) dan Pengembangan Game (Game Development).</p>
                    <p>Saya percaya bahwa belajar adalah perjalanan seumur hidup, dan saya selalu antusias menghadapi tantangan baru di dunia teknologi. Saya siap berkontribusi lebih banyak dan terus berkembang sebagai profesional di industri ini.</p>`;
    }else{
        var text = `
                    <h2>About <span>Me</span></h2>
                    <br>
                    <p>My full name is Mochamad Rama Ramdhani. I am a D3 Management Informatics graduate with a strong passion for technology and programming. Currently, I work as a Fullstack Web Developer with experience in building modern and responsive web applications.</p>
                    <p>I am committed to continuously developing my skills by participating in various programming classes and training sessions. My goal is to expand my expertise not only in web development but also in Software Development and Game Development.</p>
                    <p>I believe that learning is a lifelong journey, and I am always enthusiastic about taking on new challenges in the tech world. I am eager to contribute more and grow as a professional in this industry.</p>`;
    }
    
    $('#aboute').html(text);
}

async function resume(el) {
    try {
        let response = await fetch('https://apps.codepolitan.com/api/user/profile/detail/oyy');
        let data = await response.json();

        let serti_ind = "";
        let serti_eng = "";

        const translations = await Promise.all(data.certificates.map(sertifikat => translateGoogleScrape(sertifikat.cert_title.replace("Belajar",""))));

        data.certificates.forEach((sertifikat, index) => {
            serti_ind += `<li><a href="https://codepolitan.com/c/${sertifikat.code}" target="_blank" style="padding: 5px;"> ${sertifikat.cert_title.replace("Belajar","")} </a></li>`;
            serti_eng += `<li><a href="https://codepolitan.com/c/${sertifikat.code}" target="_blank" style="padding: 5px;"> ${translations[index]} </a></li>`;
        });
        if (el =='ind'){
            var edu = `
                        <i class='bx ' style="color: #00eeff;"><u>Pendidikan</u></i>
                        <div>
                            <h3>Politeknik Praktisi Bandung | 2019-2022</h3>
                            <br>
                            <ul style="margin-left: 30px;">
                                <li>D3 - Manajemen Informatika</li>
                                <li>IPK 3.60</li>
                                <li>Presiden Mahasiswa 2020 - 2021</li>
                                <li>Ketua Dvisi IT di Himpunan</li>
                            </ul>
                        </div>
                        <br>
                        <div>
                            <h3>Codepolitan | 2024 - Sekarang</h3>
                            <br>
                            <ul style="margin-left: 30px;">
                                <li>
                                    Fullstack Web Developer <br> Sertifikat :
                                    <ul style="margin-left: 30px;" class="borderin">
                                        ${serti_ind}
                                    </ul>
                                </li>
                            </ul>
                        </div>`;
            var exper =`
                        <i class='bx ' style="color: #00eeff;"><u>Pengalaman</u></i>
                        <div>
                            <h3>2022 - 2025 | Programmer<br> PT. Murfa Surya Mahardika (CV Solusi Komputer) <br> Pontianak <br>Kontrak</h3><br>
                            <ul style="margin-left: 30px;">
                                <li>Mengembangkan Aplikasi Web Codeigniter 2 “Sistem Manajemen Keuangan Daerah (SIMAKDA 2022) Pemprov Kalimantan Barat”.</li>
                                <li>Membuat Aplikasi Web Laravel 8 “Laporan Anggaran Realisasi Keuangan Pemprov Kalimantan Barat (Lapis Belacan) ”.</li>
                                <li>Membuat Aplikasi Web Laravel 8 “Sistem Manajemen Keuangan Daerah Akuntansi (SIMAKDA AKUNTANSI) Pemprov Kalimantan Barat”.</li>
                                <li>Membuat Aplikasi Web Codeigniter 3 “Sistem Informasi Manajemen Pengawasan Inspektorat (SIMWASIAT) Kab. Bengkayang”.</li>
                                <li>Membuat API Sistem Pajak Daerah (SI PADAH) Android untuk Kab. Sanggau</li>
                                <li>Memberikan konsultasi dan pendampingan teknis sebagai IT Consultant di BKAD Provinsi Kalimantan Barat terkait implementasi aplikasi.</li>
                            </ul>
                        </div>
                        <br>
                        <div>
                            <h3>2022 | Junior Programmer<br> PT. Murfa Surya Mahardika <br> Jakarta <br>Kontrak</h3><br>
                            <ul style="margin-left: 30px;">
                                <li>Merancang dan membuat Aplikasi Web Codeigniter 3 “Aplikasi Tambahan Penghasilan Pegawai (e-TPP)”.</li>
                                <li>Membuat 10+ Vidio Tutorial Penggunaan Aplikasi.</li>
                                <li>Menjadi pembimbing bagi 4 pemagang tingkat SMK dalam pelatihan operasional jaringan dan database.</li>
                            </ul>
                        </div>
                        <br>
                        <div>
                            <h3>2021 - 2022 | Junior Programmer<br> PT. Murfa Surya Mahardika<br> Jakarta <br>Magang</h3><br>
                            <ul style="margin-left: 30px;">
                                <li>Ikut Serta dalam pembuatan dan pengembangan Aplikasi Web Codeigniter 3 “Sistem Informasi Pengawasan (SIP)”, untuk pemerintahan:
                                    <ul style="margin-left: 30px;">
                                        <li>Prov. Papua Barat</li>
                                        <li>Kab. Wondama</li>
                                        <li>Kab. Fakfak</li>
                                        <li>Kab. Sorong Selatan</li>
                                        <li>Kab. Mimika</li>
                                    </ul>
                                </li>
                                <li>Menjadi pembimbing sekaligus pengawas bagi 3 siswa magang SMK dalam proses pembuatan video promosi aplikasi.</li>
                            </ul>
                        </div>`;
        }else{
            var edu = `
                        <i class='bx ' style="color: #00eeff;"><u> Education</u></i>
                        <div>
                            <h3>Politeknik Praktisi Bandung | 2019-2022</h3>
                            <br>
                            <ul style="margin-left: 30px;">
                                <li>Associate Degree - Management Informatika</li>
                                <li>IPK 3.60</li>
                                <li>Student President 2020 - 2021</li>
                                <li>Head of the Association's IT Division</li>
                            </ul>
                        </div>
                        <br>
                        <div>
                            <h3>Codepolitan | 2024 - Present</h3>
                            <br>
                            <ul style="margin-left: 30px;">
                                <li>
                                    Fullstack Web Developer <br> Sertifikat :
                                    <ul style="margin-left: 30px;"class="borderin">
                                        ${serti_eng}
                                    </ul>
                                </li>
                            </ul>
                        </div>`;
            var exper =`
                        <i class='bx ' style="color: #00eeff;"><u>Experience</u></i>
                        <div>
                            <h3>2022 - 2025 | Programmer<br> PT. Murfa Surya Mahardika (CV Solusi Komputer) <br> Pontianak <br>Contract</h3><br>
                            <ul style="margin-left: 30px;">
                                <li>Developed a CodeIgniter 2 Web Application “Regional Financial Management System (SIMAKDA 2022)” for the West Kalimantan Provincial Government.</li>
                                <li>Created a Laravel 8 Web Application “Realization Report of Financial Budget (Lapis Belacan)” for the West Kalimantan Provincial Government.</li>
                                <li>Built a Laravel 8 Web Application “Regional Financial Management System for Accounting (SIMAKDA ACCOUNTING)” for the West Kalimantan Provincial Government.</li>
                                <li>Developed a CodeIgniter 3 Web Application “Inspectorate Monitoring Information System (SIMWASISAT)” for Bengkayang Regency.</li>
                                <li>Built an API for the “Regional Tax System (SI PADAH)” Android application for Sanggau Regency.</li>
                                <li>Provided technical consultation and assistance as an IT Consultant for application implementation at BKAD of West Kalimantan Province.</li>
                            </ul>
                        </div>
                        <br>
                        <div>
                            <h3>2022 | Junior Programmer<br> PT. Murfa Surya Mahardika <br> Jakarta <br>Contract</h3><br>
                            <ul style="margin-left: 30px;">
                                <li>Designed and developed a CodeIgniter 3 Web Application “Additional Employee Income Application (e-TPP)”.</li>
                                <li>Created 10+ video tutorials for application usage.</li>
                                <li>Acted as mentor and supervisor for 4 vocational high school (SMK) interns in network and database operation training.</li>
                            </ul>
                        </div>
                        <br>
                        <div>
                            <h3>2021 - 2022 | Junior Programmer<br> PT. Murfa Surya Mahardika <br> Jakarta <br>Internship</h3><br>
                            <ul style="margin-left: 30px;">
                                <li>Participated in the development of a CodeIgniter 3 Web Application “Supervisory Information System (SIP)” for the following government regions:
                                    <ul style="margin-left: 30px;">
                                        <li>Prov. Papua Barat</li>
                                        <li>Kab. Wondama</li>
                                        <li>Kab. Fakfak</li>
                                        <li>Kab. Sorong Selatan</li>
                                        <li>Kab. Mimika</li>
                                    </ul>
                                </li>
                                <li>Mentored and supervised more than 3 vocational high school (SMK) interns in creating application promotional videos.</li>
                            </ul>
                        </div>`;
        }
        
        $('#edu').html(edu);
        $('#exper').html(exper);
    } catch (error) {
        console.error('Error:', error);
    } 
}

function projek(el){
    if (el == 'ind') {
        var pm1 = `<p class="modal__text"> Aplikasi ini menampilkan data laporan keuangan secara real time dengan menggunakan Laravel Framework, serta dapat membuat laporan atau output dengan cara mengkompilasinya berdasarkan SKPD (Satuan Kerja Pemerintah Daerah) maupun secara keseluruhan. </p>`;
        var pm2 = `<p class="modal__text"> Aplikasi Web ini digunakan untuk menghitung TPP (Tambahan Penghasilan Pegawai) dan memantau kinerja. lalu terdapat laporan untuk merekap laporan secara otomatis yang telah di input seperti kehadiran, indisipliner, pembayaran tunjangan kerja, membuat sasaran kinerja pegawai dan lain-lain . lalu semua itu di kelola berdasarkan rumus dari Peraturan Pemerintah.</p>`;
        var pm3 = `<p class="modal__text"> Aplikasi Web ini merupakan Sistem Informasi Manajemen Pengawasan Inspektorat (SIMWASIAT) yang digunakan untuk report Pembinaan dan Pengawasan Penyelenggaraan Pemerintahan Daerah dalam melakukan koordinasi pengawasan penyelenggaraan pemerintaan daerah yang dilakukan oleh Aparat Pengawasan Intern Pemerintah Kementerian/Lembaga dan Aparat Pengawasan Intern Pemerintah Daerah terhadap aspek perencanaan, penganggaran, pengorganisasian, pelaksanaan, pelaporan dan evaluasi.</p>`;
        var pm4 = `<atau class="modal__text"> Aplikasi ini digunakan menyusun data laporan keuangan dengan menggunakan Laravel Framework, serta dapat membuat input laporan dengan input manual maupun by excel. lalu semua itu di kelola berdasarkan rumus dari Peraturan Pemerintah hingga menjadi output Laporan Keuangan. output berdasarkan SKPD (Satuan Kerja Pemerintah Daerah) maupun secara keseluruhan atau provinsi.</p>`;
        var pm5 = `<p class="modal__text"> Aplikasi Web ini digunakan untuk melakukan Komunikasi opsional dapat digunakan untuk chat probadi, group chat maupun Comments Chat. </p> <p class="modal__text"> Dengan menggunakan React Js dan juga dalam databasenya menggunakan Json-Server denga metode Node Js.</p>`;
    }else{
        var pm1 = `<p class="modal__text">This application displays financial report data in real time using the Laravel Framework, and can report or output by compiling it based on SKPD (Regional Government Work Unit) or as a whole.</p>`;
        var pm2 = `<p class="modal__text">This Web Application is used to calculate TPP (Employee Additional Income) and monitor performance. then there is a report to automatically summarize reports that have been inputted such as attendance, indiscipline, payment of work allowances, making employee performance targets and others. then all of that is managed based on the formula from the Government Regulation.</p>`;
        var pm3 = `<p class="modal__text"> This Web Application is an Inspectorate Supervision Management Information System (SIMWASIAT) which is used for reports on Guidance and Supervision of Regional Government Implementation in coordinating supervision of regional government implementation carried out by the Internal Supervisory Apparatus of the Ministry/Institution and the Internal Supervisory Apparatus of the Regional Government regarding aspects of planning, budgeting, organizing, implementation, reporting and evaluation.</p>`;
        var pm4 = `<p class="modal__text"> This application is used to compile financial report data using the Laravel Framework. It allows users to input reports manually or via Excel. All data is processed based on formulas from Government Regulations to generate financial report outputs. The output can be categorized by SKPD (Regional Government Work Units) or presented as a comprehensive provincial report.</p>`;
        var pm5 = `<p class="modal__text">This web application is used for optional communication, which can be utilized for private chats, group chats, or comment chats.</p> <p class="modal__text">It is built using React.js and uses JSON-Server as the database with a Node.js-based method.</p>`;
    }
    $('#pm1').html(pm1);
    $('#pm2').html(pm2);
    $('#pm3').html(pm3);
    $('#pm4').html(pm4);
    $('#pm5').html(pm5);
}

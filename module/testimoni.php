<section class="testimoni content_center">
  <span>
    <div class="section-title content_center">
      <span>
        <h3>Testimoni Nasabah</h3>
      </span>
    </div>
    <div class="testimoni-list">
      <?php for ($i=1; $i <= 6; $i++) { ?>
      <div class="testimoni-list-box">
        <div class="tlb-desc">
          <?php 
            $a=array("Aplikasi ini sangat bagus. saya suka trading menggunakan aplikasi ini. kamu dapat membuka akun dan mengaturnya di aplikasi ini.","Mantap HSB, kamu dapat mengecek setiap transaksi melalui CITRA dan tim cs 24 jam selalu siap membantu Anda.","Saya belajar bagaimana untuk trading dan bagaimana menjadi trader yang baik dari artikel yang disediakan dalam aplikasi.","Hanya membutuhkan waktu yang singkat dan bisa mendapatkan profit di all in one app ini.","Jempol untuk deposit dan penarikan dana yang sangat cepat and servis lainnya juga bagus.");
            $random_keys=array_rand($a,2);
            echo $a[$random_keys[0]];
          ?>
        </div>
        <div class="tlb-person">
          <div class="tlb-image">
            <div class="flex_lazy">
              <img alt="User" data-original="img/avatar<?php echo rand(1,5); ?>.png" />
            </div>
          </div>
          <div class="tlb-info">
            <div class="tlb-name">
			  <?php 
				$a=array("Pay Joe","Marr Juo Kye","Jumy N'Ten","Shuu Trysh Noe","U Choqq","Bham Bank","Bank Toy Yiep","Pho Nie Mann","Rhou Jya Lee","Rush  Die","Pay Joe","Marr Juo Kye","Jumy N'Ten","Shuu Trysh Noe","U Choqq","Bham Bank","Bank Toy Yiep","Pho Nie Mann","Rhou Jya Lee","Rush Die");
				$random_keys=array_rand($a,2);
				echo $a[$random_keys[0]];
			  ?>
            </div>
            <div class="tlb-job">
			  <?php 
				$a=array("Pengusaha","Dosen","Karyawan Swasta","ASN","Wiraswasta","Pelajar","Mahasiswa");
				$random_keys=array_rand($a,2);
				echo $a[$random_keys[0]];
			  ?>
            </div>
          </div>
        </div>
      </div>
      <?php } ?>
    </div>
  </span>
</section>
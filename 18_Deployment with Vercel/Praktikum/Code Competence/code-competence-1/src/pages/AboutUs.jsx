import React from "react";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <div>
      <section className="mt-24 mx-auto max-w-screen-xl px-4 sm:px-8 pb-4">
        <div className="text-center space-y-4">
          <h2 className="text-indigo-600 font-bold text-4xl md:text-5xl">
            Tentang Kami
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            ARedu adalah platform kursus online yang mengkhususkan diri dalam
            Augmented Reality. Kami bertujuan untuk membantu Anda menciptakan
            pengalaman immersive yang akan mengubah cara kita berinteraksi
            dengan dunia digital.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <img
            src="https://www.apple.com/newsroom/images/2023/07/new-immersive-ar-experience-brings-student-creativity-to-life-around-the-world-with-ipad-pro-and-apple-pencil/article/Apple-iPad-AR-artists-student-interacting-with-Deep-Field_big.jpg.large.jpg"
            alt="About ARedu"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>

        <div className="mt-8 text-gray-500 leading-relaxed space-y-8 text-center">
          <h3 className="text-2xl font-semibold text-indigo-600">Misi Kami</h3>
          <p className="max-w-2xl mx-auto">
            Kami berkomitmen untuk memberikan pendidikan berkualitas tinggi
            dalam bidang Augmented Reality, dengan materi kursus yang dirancang
            oleh para ahli industri. Dengan ARedu, Anda akan belajar
            keterampilan yang dibutuhkan untuk sukses di dunia digital yang
            terus berkembang.
          </p>

          <h3 className="text-2xl font-semibold text-indigo-600">Visi Kami</h3>
          <p className="max-w-2xl mx-auto">
            Visi kami adalah menjadi platform terdepan dalam pendidikan
            Augmented Reality, membekali setiap individu dengan pengetahuan dan
            keterampilan yang diperlukan untuk berinovasi dan beradaptasi dalam
            teknologi masa depan.
          </p>

          <h3 className="text-2xl font-semibold text-indigo-600">
            Nilai-Nilai Kami
          </h3>
          <p className="max-w-2xl mx-auto">
            Di ARedu, kami percaya pada integritas, inovasi, dan inklusivitas.
            Kami mendorong setiap peserta didik untuk berpikir kreatif dan
            berani mencoba hal baru. Kami juga berkomitmen untuk menciptakan
            lingkungan belajar yang inklusif dan mendukung bagi semua.
          </p>

          <h3 className="text-2xl font-semibold text-indigo-600">Tim Kami</h3>
          <p className="max-w-2xl mx-auto">
            Tim kami terdiri dari para profesional dan pendidik yang
            berpengalaman dalam bidang Augmented Reality dan teknologi digital.
            Kami selalu siap membantu Anda di setiap langkah perjalanan
            pembelajaran Anda.
          </p>

          <h3 className="text-2xl font-semibold text-indigo-600">
            Bergabunglah Bersama Kami
          </h3>
          <p className="max-w-2xl mx-auto">
            Bergabunglah dengan komunitas ARedu dan ambil bagian dalam
            kursus-kursus yang akan membuka peluang baru bagi karier Anda. Mari
            bersama-sama menjelajahi dunia Augmented Reality yang menarik!
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

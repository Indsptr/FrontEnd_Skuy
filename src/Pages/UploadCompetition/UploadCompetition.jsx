import React from "react";
import "../../assets/css/styles-upload.css";
import Gallery from "../../../public/assets/images/image-icon/gallery 2.png";
import { useState } from "react";

const UploadCompetition = () => {

  const [tipeBiaya, setTipeBiaya] = useState("");

  const handleImageUploadClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <>
      <div className="container">
        <div className="flex flex-wrap align-middle gap-5 justify-between">
          <h1>
            <u>Upload Lomba</u>
          </h1>
          <button className="upload-button">Kirim</button>
        </div>

        <div className="form-container">
          <div className="upload-section">
            <h2 className="subjudul text-center">1. Unggah Poster Kompetisi mu</h2>
            <div
              className="upload-box"
              onClick={handleImageUploadClick}
              style={{ cursor: "pointer" }}
            >
              <img src={Gallery} alt="Upload Poster" />
            </div>
            <input
              className="bg-white rounded"
              type="file"
              id="fileInput"
              name="image_lomba"
              style={{ display: "none" }}
              accept="image/*"
              onChange={(event) => console.log(event.target.files[0])}
            />
          </div>

          <div className="data-section">
            <h2 className="subjudul text-center">2. Isi Data Kompetisi</h2>
            <form>
              <label htmlFor="nama-kompetisi">Nama Kompetisi</label>
              <input
                className="bg-white rounded"
                type="text"
                id="nama-kompetisi"
                name="nama-kompetisi"
                placeholder="Masukan nama kompetisimu"
              />

              <label htmlFor="penyelenggara">Penyelenggara Kompetisi</label>
              <input
                className="bg-white rounded"
                type="text"
                id="penyelenggara"
                name="penyelenggara"
                placeholder="Masukan nama penyelenggara"
              />

              <label htmlFor="deadline">Deadline Kompetisi</label>
              <input
                className="bg-white rounded"
                type="date"
                id="deadline"
                name="deadline"
                placeholder="Masukan Tanggal"
              />

              <label htmlFor="link-pendaftaran">Link pendaftaran Kompetisi</label>
              <input
                className="bg-white rounded"
                type="url"
                id="link-pendaftaran"
                name="link-pendaftaran"
                placeholder="Masukan Link"
              />

              <label htmlFor="link-narahubung">Link narahubung</label>
              <input
                className="bg-white rounded"
                type="url"
                id="link-narahubung"
                name="link-narahubung"
                placeholder="Masukan kontak"
              />

              <label htmlFor="kategori">Kategori Kompetisi</label>
              <select
                className="form-control bg-white rounded"
                id="kategori"
                name="kategori"
              >
                <option value="">Pilih Kategori</option>
                <option value="sains">Sains</option>
                <option value="teknologi">Teknologi</option>
                <option value="seni">Seni</option>
                <option value="olahraga">Olahraga</option>
              </select>

              <label>Tingkat Perlombaan</label>
              <div className="radio-group">
                <input
                  className="bg-white w-25"
                  type="radio"
                  id="nasional"
                  name="tingkat"
                  value="nasional"
                />
                <label htmlFor="nasional">Nasional</label>
                <input
                  className="bg-white w-25"
                  type="radio"
                  id="umum"
                  name="tingkat"
                  value="umum"
                />
                <label htmlFor="umum">Umum</label>
              </div>

              <label>Biaya pendaftaran kompetisi</label>
              <div className="radio-group">
                <input
                  className="bg-white w-25"
                  type="radio"
                  id="bayar"
                  name="biaya"
                  value="bayar"
                  onClick={(e) => setTipeBiaya(e.target.value)}
                />
                <label htmlFor="bayar">Bayar</label>
                <input
                  className="bg-white w-25"
                  type="radio"
                  id="gratis"
                  name="biaya"
                  value="gratis"
                  onClick={(e) => setTipeBiaya(e.target.value)}
                />
                <label htmlFor="gratis">Gratis</label>
              </div>

              {tipeBiaya === "bayar" &&
                (
                  <div>
                    <label htmlFor="biaya-pendaftaran">Biaya Pendaftaran</label>
                    <input
                      className="bg-white rounded"
                      type="number"
                      id="biaya-pendaftaran"
                      name="biaya-pendaftaran"
                      placeholder="Masukan biaya pendaftaran"
                    />
                  </div>
                )}

            </form>
          </div>

          <div className="survey-section">
            <h2 className="subjudul text-center">3. Skuy SURVEY</h2>
            <form className="survey-form">
              <label htmlFor="survey">
                Dari manakah kalian mendapatkan informasi tentang kami?
              </label>
              <textarea
                id="survey"
                className="border border-black h-[550px] rounded mt-2 bg-white"
                name="survey"
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadCompetition;

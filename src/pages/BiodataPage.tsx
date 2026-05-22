import { Github, Instagram, Linkedin, Mail, MapPin, Phone, BookOpen, Code2, GraduationCap } from 'lucide-react';

const BiodataPage = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div><h1>Biodata Pembuat Website</h1></div>
      </div>

      <div className="biodata-container">
        <div className="biodata-card profile-card">
          <h2 className="profile-name">Muhammad Satria Prayoga</h2>
          <p className="profile-nim">(24090108)</p>
          <p className="profile-prodi">D-4 Teknik Informatika</p>
          <p className="profile-kampus">Universitas Harkat Negeri</p>
        </div>
      </div>
    </div>
  );
};

export default BiodataPage;

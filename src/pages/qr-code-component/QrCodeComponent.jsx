import qrImage from "../../assets/qr-code/image-qr-code.png";
import "./QrCodeComponent.css";
export default function QrCodeComponent() {
  return (
    <main>
      <section className="content">
        <figure className="qr_image">
          <img src={qrImage} alt="qr code picture" />
        </figure>
        <div className="text">
          <h1>Improve your front-end skills by building projects</h1>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </section>
    </main>
  );
}

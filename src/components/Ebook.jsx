import React, { useRef } from "react";

const ebooks = [
  { img: "https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/Symptoms+of+Alzheimer-s+disease+-+PACE+Hospitals-640w.jpg", title: "Alzheimer's Disease" },
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Qq0I9JcAEo9DCACK2ufd1ySwhcNXGV0LWg&s", title: "Pharmaceutical Chemistry" },
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qlkuBDtKzgbo6SiI142JtfLucU6rc4Ibvg&s", title: "Vascular Diseases" },
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8-T8cepJHneUCfmyihJ-_lgQgkJjdTihVFA&s", title: "Nanotechnology" },
  { img: "https://cdn11.bigcommerce.com/s-trgkgbzyx9/products/8342/images/22534/9780544844896__86993.1655749640.500.750.jpg?c=2", title: "Modern Chemistry" },
  { img: "https://www.bio.org/sites/default/files/styles/bio_media_side_card_auto/public/2019-09/About-Page-health_Image.jpg?itok=RiQaIqjV", title: "Biotechnology" }
];

function Ebook() {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <section className="ebook-section" id="ebook">
      <div className="ebook-header">
        <div>
          <span className="brand">MEDDOCS</span>
          <h2>E-BOOKS</h2>
        </div>

        <div className="controls">
          <button onClick={scrollLeft}>❮</button>
          <button onClick={scrollRight}>❯</button>
        </div>
      </div>
      <div className="ebook-container" ref={scrollRef}>
        {ebooks.map((book, index) => (
          <div className="ebook-card" key={index}>
            <img src={book.img} alt={book.title} />
            <p>{book.title}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Ebook;
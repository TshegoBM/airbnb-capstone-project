// import React from "react";
// import "./QuestionsAboutHosting.css";

// const QuestionsAboutHosting= () => {
//   return (
//     <div className="hosting-section-container">
//       <h1>Questions about hosting?</h1>
//       <div className="hosting section">
//       <img
//         src="https://s3-alpha-sig.figma.com/img/5ed8/a779/efd4d7b308f8c6bdd6b801b638cc68d2?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OAAISHTvKj1vizWZn3NY2t6m715640Crb7-s-BgY0jWiJN1v9hv2JYuPJ2kD~vteCtk4Z7nZEHA7cz5DU0SlITCs9oT5fr1Qpf-DZspn5lgcoVK0w3jZGXlk34VZ5U134VAw3IFI9vUz-IMGLyU3gtXz-aez549Uf4gbOFR~Tjg4I0MHrGdidN1NPA53KQq23pBxDTXWMuCbA7RBj~wkefE9SgGP89-nfPM-BPqfxPpTjE9jDJC7h83RKL1769sdd3yo67QdwsJPlfmdO8FIQYftXDX1HRCe6Zp-2vLnQ3tqBvAnvbW2PuU~DNZUgrDgZ8fVnWBzSFtBcZYkIuN0uw__"
//         alt="Questions about hosting?"
//       />
//       <button>Ask a Superhost</button>
//       </div>
//     </div>
//   );
// };

// export default QuestionsAboutHosting;
import React from "react";
import "./QuestionsAboutHosting.css";

const QuestionsAboutHosting = () => {
  return (
    <div className="hosting-container">
      <img
        src="https://s3-alpha-sig.figma.com/img/5ed8/a779/efd4d7b308f8c6bdd6b801b638cc68d2?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OAAISHTvKj1vizWZn3NY2t6m715640Crb7-s-BgY0jWiJN1v9hv2JYuPJ2kD~vteCtk4Z7nZEHA7cz5DU0SlITCs9oT5fr1Qpf-DZspn5lgcoVK0w3jZGXlk34VZ5U134VAw3IFI9vUz-IMGLyU3gtXz-aez549Uf4gbOFR~Tjg4I0MHrGdidN1NPA53KQq23pBxDTXWMuCbA7RBj~wkefE9SgGP89-nfPM-BPqfxPpTjE9jDJC7h83RKL1769sdd3yo67QdwsJPlfmdO8FIQYftXDX1HRCe6Zp-2vLnQ3tqBvAnvbW2PuU~DNZUgrDgZ8fVnWBzSFtBcZYkIuN0uw__"
        alt="Questions about hosting?"
        className="background-image"
      />
      <div className="hosting-content">
        <h1>Questions about hosting?</h1>
        <button>Ask a Superhost</button>
      </div>
    </div>
  );
};

export default QuestionsAboutHosting;

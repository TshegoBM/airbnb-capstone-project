import React from "react";
import "./Inspiration.css";

const Inspiration = () => {
  return (
    <div className="inspiration-container">
      {/* Cards Section */}
      <div className="cards-section">
        <h2>Inspiration for your next trip</h2>
        <div className="cards-row">
          <div className="city-card north-west">
            <img
              src="https://s3-alpha-sig.figma.com/img/d5c1/6cba/8bc1958720a3d767d19d62a93cd1ff30?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C0Lyb4aos8pjrvvRGGzlY~MCbvauii1fp4jtdKLH~WH8FmLZlVs25us7d9AzOnVtaxmGTDAkXmCx1fS-CQzn5sXFBw~EdWDjp6J61G9gkurNMqM5LjhqKdPjB6wmkDscfp-5H8MHCrhnFV68I61IZWGSAP1a27H62nl291wSgxkgzIKAVhI5xBYdkmRnNTIHqQ13zRYoldV-87pPmetQQtRG6NeWO3KfURxRlbWrfLsqYyzb4CC7DGDcVR-qJveugU4oiYgZIRtFCqDClhBddzElphLgTgY1hqW3sWbhzxcJ~HChStJr4VIX4YKlYIHybnwAqw9GVza-mzFlTp0yzw__"
              alt="Sandton City Hotel"
            />
            <div className="card-info">
              <h3>North West</h3>
              <p>53 km away</p>
            </div>
          </div>
          <div className="city-card johannesburg">
            <img
              src="https://s3-alpha-sig.figma.com/img/d5c1/6cba/8bc1958720a3d767d19d62a93cd1ff30?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C0Lyb4aos8pjrvvRGGzlY~MCbvauii1fp4jtdKLH~WH8FmLZlVs25us7d9AzOnVtaxmGTDAkXmCx1fS-CQzn5sXFBw~EdWDjp6J61G9gkurNMqM5LjhqKdPjB6wmkDscfp-5H8MHCrhnFV68I61IZWGSAP1a27H62nl291wSgxkgzIKAVhI5xBYdkmRnNTIHqQ13zRYoldV-87pPmetQQtRG6NeWO3KfURxRlbWrfLsqYyzb4CC7DGDcVR-qJveugU4oiYgZIRtFCqDClhBddzElphLgTgY1hqW3sWbhzxcJ~HChStJr4VIX4YKlYIHybnwAqw9GVza-mzFlTp0yzw__"
              alt="Joburg City Hotel"
            />
            <div className="card-info">
              <h3>Johannesburg</h3>
              <p>168 km away</p>
            </div>
          </div>
          <div className="city-card mpumalanga">
            <img
              src="https://s3-alpha-sig.figma.com/img/d5c1/6cba/8bc1958720a3d767d19d62a93cd1ff30?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C0Lyb4aos8pjrvvRGGzlY~MCbvauii1fp4jtdKLH~WH8FmLZlVs25us7d9AzOnVtaxmGTDAkXmCx1fS-CQzn5sXFBw~EdWDjp6J61G9gkurNMqM5LjhqKdPjB6wmkDscfp-5H8MHCrhnFV68I61IZWGSAP1a27H62nl291wSgxkgzIKAVhI5xBYdkmRnNTIHqQ13zRYoldV-87pPmetQQtRG6NeWO3KfURxRlbWrfLsqYyzb4CC7DGDcVR-qJveugU4oiYgZIRtFCqDClhBddzElphLgTgY1hqW3sWbhzxcJ~HChStJr4VIX4YKlYIHybnwAqw9GVza-mzFlTp0yzw__"
              alt="Woodmead Hotel"
            />
            <div className="card-info">
              <h3>Mpumalanga</h3>
              <p>30 miles away</p>
            </div>
          </div>
          <div className="city-card cape-town">
            <img
              src="https://s3-alpha-sig.figma.com/img/d5c1/6cba/8bc1958720a3d767d19d62a93cd1ff30?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C0Lyb4aos8pjrvvRGGzlY~MCbvauii1fp4jtdKLH~WH8FmLZlVs25us7d9AzOnVtaxmGTDAkXmCx1fS-CQzn5sXFBw~EdWDjp6J61G9gkurNMqM5LjhqKdPjB6wmkDscfp-5H8MHCrhnFV68I61IZWGSAP1a27H62nl291wSgxkgzIKAVhI5xBYdkmRnNTIHqQ13zRYoldV-87pPmetQQtRG6NeWO3KfURxRlbWrfLsqYyzb4CC7DGDcVR-qJveugU4oiYgZIRtFCqDClhBddzElphLgTgY1hqW3sWbhzxcJ~HChStJr4VIX4YKlYIHybnwAqw9GVza-mzFlTp0yzw__"
              alt="Hyde Park Hotel"
            />
            <div className="card-info">
              <h3>Cape Town</h3>
              <p>34 km away</p>
            </div>
          </div>
          <div className="city-card cape-town">
            <img
              src="https://s3-alpha-sig.figma.com/img/d5c1/6cba/8bc1958720a3d767d19d62a93cd1ff30?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C0Lyb4aos8pjrvvRGGzlY~MCbvauii1fp4jtdKLH~WH8FmLZlVs25us7d9AzOnVtaxmGTDAkXmCx1fS-CQzn5sXFBw~EdWDjp6J61G9gkurNMqM5LjhqKdPjB6wmkDscfp-5H8MHCrhnFV68I61IZWGSAP1a27H62nl291wSgxkgzIKAVhI5xBYdkmRnNTIHqQ13zRYoldV-87pPmetQQtRG6NeWO3KfURxRlbWrfLsqYyzb4CC7DGDcVR-qJveugU4oiYgZIRtFCqDClhBddzElphLgTgY1hqW3sWbhzxcJ~HChStJr4VIX4YKlYIHybnwAqw9GVza-mzFlTp0yzw__"
              alt="Hyde Park Hotel"
            />
            <div className="card-info">
              <h3>Cape Town</h3>
              <p>34 km away</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;

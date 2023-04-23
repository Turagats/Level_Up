import React from "react";
import "./SideComponent.scss";

export default function SideComponent() {
  return (
    <div className="tournaments-container">
      <div className="tournaments-orange-line"></div>
      <div className="tournaments-big-text">
        დამატებით შედგება, ქეშგეიმის, ტურნირების და სპინ პოკერის 12 Side
        ლიდერბორდი
      </div>
      <div className="tournaments-small-text">
        * Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის ლობიში.
      </div>
    </div>
  );
}

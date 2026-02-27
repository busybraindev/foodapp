import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets/frontend_assets/assets";

export const sc = createContext(null);
const Sp = ({ children }) => {
  const [ct, sct] = useState({});
  const ac = (id) => {
    if (!ct[id]) {
      sct((pv) => ({ ...pv, [id]: 1 }));
    } else {
      sct((pv) => ({ ...pv, [id]: pv[id] + 1 }));
    }
    console.log(ct);
  };
  const rv = (id) => {
    sct((pv) => ({ ...pv, [id]: pv[id] - 1 }));
  };
  const gtc = () => {
    let tm = 0;
    for (const cm in ct) {
      if (ct[cm] > 0) {
        let it = food_list.find((pd) => pd._id === cm);
        tm += it.price * ct[cm];
      }
    }
    return tm;
  };
  const cv = {
    food_list,
    ct,
    sct,
    ac,
    rv,
    gtc,
  };

  return <sc.Provider value={cv}>{children}</sc.Provider>;
};
export default Sp;

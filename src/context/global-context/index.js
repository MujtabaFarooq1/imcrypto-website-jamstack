import React, { useEffect } from "react";
import { isJsonParsable } from "../../utils/helper";

export const default_state = {
  merch: {
    data: {
      sort: null,
      cart: [],
    },
    method: {
      setSort: () => {},
      setCart: () => {}
    },
  },
  resources: {
    data: {
      tab: "Videos",
    },
    method: {
      setTab: () => {},
    },
  },
  global: {
    data: {
      navOpen: false,
      location: { pathname: "/" },
    },
    method: {
      setNavOpen: () => {},
      setLocation: () => {},
    },
  },
};

export const GlobalContext = React.createContext(default_state);
const GlobalProvider = ({ children }) => {

  const handleClick = () => {
    // 👇️ toggle class on the body element
    document.body.classList.add('bg-salmon-100');
  };
  const handleRemove= () => {
    // 👇️ toggle class on the body element
    document.body.classList.remove('bg-salmon-100');
  };

  const bodyClass={
    handleClick:handleClick,
    handleRemove:handleRemove
  };
  const [state, setState] = React.useState(default_state);
  const setSort = (val) => {
    setState((s) => {
      return {
        ...s,
        merch: {
          ...s.merch,
          data: {
            ...s.merch.data,
            sort: val,
          },
        },
      };
    });
  };
  const setNavOpen = (val) => {
    setState((s) => {
      return {
        ...s,
        global: {
          ...s.global,
          data: {
            ...s.global.data,
            navOpen: val,
          },
        },
      };
    });
  };
  const setLocation = (val) => {
    setState((s) => {
      return {
        ...s,
        global: {
          ...s.global,
          data: {
            ...s.global.data,
            location: val ?? null,
          },
        },
      };
    });
  };
  const setCart = (val) => {
    const curtime = new Date().getMilliseconds();
    const updated_val = val.map((i) => ({
      ...i,
      ttl: curtime + 60 * 60 * 24 * 7,
    }));
    localStorage.setItem("cart", JSON.stringify(updated_val));
    setState((s) => {
      return {
        ...s,
        merch: {
          ...s.merch,
          data: {
            ...s.merch.data,
            cart: updated_val ?? [],
          },
        },
      };
    });
  };
  const setTab = (val) => {
    setState((s) => ({
      ...s,
      resources: {
        ...s.resources,
        data: {
          ...s.resources.data,
          tab: val,
        },
      },
    }));
  };
  const merch = {
    data: state.merch.data,
    method: {
      setSort: setSort,
      setCart: setCart,
    },
  };
  const resources = {
    data: state.resources.data,
    method: {
      setTab: setTab,
    },
  };
  const global = {
    data: state.global.data,
    method: {
      setNavOpen: setNavOpen,
      setLocation: setLocation,
    },
  };
  const value = {
    merch: merch,
    global: global,
    resources: resources,
    bodyClass:bodyClass
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export { GlobalProvider };

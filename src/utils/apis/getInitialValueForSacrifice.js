import { APICONFIG } from "../config/apiConfigs";
import { v1setup } from "./staticApiData/v1setup";

export default async (version = "v2") => {
  try {
    if (version === "v1") {
      return v1setup;
    }

    const initialSacrificeDataSnap = await fetch(
      `${APICONFIG.baseUrl.PRODUCTION_PROD}${
        version === "v1" ? "" : "/" + version
      }/setup`
    );

    const initialSacrificeData = await initialSacrificeDataSnap.json();

    return initialSacrificeData;
  } catch (error) {
    console.log("something went wrong :(", error.message);
    return { error: error.message };
  }
};

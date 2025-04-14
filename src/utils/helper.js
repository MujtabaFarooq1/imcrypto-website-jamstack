import { navigate } from "gatsby";

/** checks for any parsing errors **/
export const isJsonParsable = (str) => {
  try {
    JSON.parse(str)
    return true
  } catch (err) {
    return false
  }
}
/** returns the location path according to language **/
export const getPathName = ({ code, pathname }) => {
  switch (code) {
    case 'en':
      if (pathname?.startsWith('/en')) {
        return pathname
      } else {
        return '/en' + pathname
      }
    default:
      if (pathname?.startsWith('/en')) {
        return "/" + pathname.split('/').slice(2)?.join('/')
      } else {
        return pathname
      }
  }

}

/** special function to find out subitems for navigation menu **/
export const getSubitems = (data) => {
  const keys = ['Sub_Services', "Sub_Solutions"]
  let result = {}
  keys.forEach(key => {
    result[key] = data[key]
  })
  return result
}

/** returns a valid link **/
export const getLink = (url) => {
  return url?.startsWith("/") ? url : "/" + url
}

/** returns true if any subnav_item is active **/
export const isSubItemActive = (sub_items, location) => {
  return sub_items?.find(data => {
    if (isJsonParsable(data?.node?.content)) {
      var found = true
      getLink(JSON.parse(data?.node?.content)?.Link?.cached_url)?.split('/')?.map(item => {
        if (!location?.pathname?.split('/')?.includes(item)) {
          found = false
        }
        return item
      })
    }
    return found
  }) ? true : false
}

/** returns true if any subnav_item has images for preview **/
export const hasImages = (sub_items) => {
  return sub_items?.filter(data => {
    if (isJsonParsable(data?.node?.content)) {
      return JSON.parse(data?.node?.content)?.Image?.filename?.trim()?.length > 0
    }
    return false
  })?.length > 0
}


/** returns gatsbyImageData from Image object */

export const getGatsbyImageData = (img) => {
  const { asset } = img || {}
  const { gatsbyImageData } = asset || {}
  return null
}


/** get url with search params */
export const getURL = (url, params) => {
  if (params?.trim().length > 0) {
    return `${url}?${params}`
  }
  return url
}
/** get search params */
export const getParam = (location, key) => {
  const params = new URLSearchParams(location?.search || '')
  return params.get(key)
}
/** clear search params */
export const clearParams = (location) => {
  navigate(getURL(location?.pathname), {
    force: true,
  })
  return
}
/** clear search params */
export const clearParam = (location, param) => {
  const params = new URLSearchParams(location?.search || '')
  params.delete(param)
  navigate(getURL(location?.pathname, params.toString()), {
    force: true,
  })
  return
}
/** set search params */
export const setParam = (location, param_array, replace = false) => {
  const params = new URLSearchParams(replace ? "" : location.search || "");
  if (param_array?.key && param_array?.value) {
    params.set(param_array?.key, param_array?.value)
    navigate(getURL(location?.pathname, params.toString()), {
      force: true,
    })
    return
  }
  if (Array.isArray(param_array) && param_array?.length > 0) {
    param_array?.forEach(param => {
      
      params.set(param?.key, param?.value)
    })
    navigate(getURL(location?.pathname, params.toString()), {
      force: true,
    })
  }

  return params
}

/** returns asset url from asset object */
export const getAssetURL = (props) => (props?.asset?.url ?? null)
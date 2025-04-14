function rewriteSlug(slug) {
    // const defaultLanguage = 'uk/'
    let newSlug = slug
    // replaces /de/home with /de
    newSlug = newSlug?.split('/').includes('home')?newSlug.replace('home', '') : newSlug
    // replaces /en/blog/first-post with /blog/first-post
    // newSlug = newSlug.replace(defaultLanguage, '')
    return newSlug
}

// es5 export because of import into gatsby-node.js
module.exports = rewriteSlug
module.exports = eleventyConfig => {
  return {
    pathPrefix: BASEURL,

    dir: {
        input: 'site',
        output: 'dist',
        includes: 'includes',
        data: 'globals',
    }
  }
}

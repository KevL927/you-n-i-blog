module.exports = eleventyConfig => {
  return {
    pathPrefix: "/subfolder/",

    dir: {
        input: 'site',
        output: 'dist',
        includes: 'includes',
        data: 'globals',
    }
  }
}

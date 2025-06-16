/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    quietDeps: true, // This will silence deprecation warnings
    silenceDeprecations: [
      "mixed-decls",
      "legacy-js-api",
      "import",
      "slash-div",
      "global-builtin",
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ["az", "en", "ru"],
    defaultLocale: 'en',
    localeDetection: false,
    prefix: '',
    directory: './locales'
  }
}

module.exports = nextConfig

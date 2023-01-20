import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Taking Payments IRL with Solana Pay</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  docsRepositoryBase: 'https://github.com/mcintyre94/nextra-pay-tutorial',
  footer: {
    text: 'Nextra Docs Template',
  },
  search: {
    placeholder: "Search tutorial...",
  }
}

export default config

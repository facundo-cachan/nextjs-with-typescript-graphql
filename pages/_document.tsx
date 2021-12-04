import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  name: 'Desarrollador de Software',
  datePosted: '2020/01/01',
  title: 'Ingeniero de Software',
  industry: 'Desarrollo de Software',
  description: '',
  employmentType: 'Part-time',
  baseSalary: '1000',
  validThrough: '2020/01/07',
  jobLocation: {
    '@type': 'Place',
    name: 'Ungga Inmobiliaria',
    email: 'info@ungga.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Chacabuco 1565',
      addressLocality: 'Buenos Aires',
      addressRegion: 'CABA',
      postalCode: 'B1066',
    },
  },
  hiringOrganization: {
    '@type': 'Organization',
    name: 'Ungga Inmobiliaria',
    email: 'info@ungga.com',
  },
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }
  render() {
    return (
      <Html lang="es" className="dark">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

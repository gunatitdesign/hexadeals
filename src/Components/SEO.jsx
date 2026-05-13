import { Helmet } from 'react-helmet-async';

export default function SEO({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  structuredData,
  breadcrumbs
}) {
  const siteName = 'HexaDeals';
  const defaultDescription = 'Discover authentic clay cookware and wellness services at HexaDeals. Premium quality products for healthy living.';
  const defaultImage = '/hexadeals-logo.png';
  const baseUrl = 'https://gunatitdesign.github.io/hexadeals';

  const fullTitle = title ? `${title} - ${siteName}` : siteName;
  const fullDescription = description || defaultDescription;
  const fullImage = image ? `${baseUrl}${image}` : `${baseUrl}${defaultImage}`;
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;

  // Default structured data for organization and website
  const defaultStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "HexaDeals",
      "url": baseUrl,
      "logo": `${baseUrl}/hexadeals-logo.png`,
      "description": "Premium clay cookware and wellness services for healthy living",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "customer service"
      },
      "sameAs": [
        "https://www.facebook.com/hexadeals",
        "https://www.instagram.com/hexadeals"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "HexaDeals",
      "url": baseUrl,
      "description": "Authentic clay cookware and wellness services",
      "publisher": {
        "@type": "Organization",
        "name": "HexaDeals"
      }
    }
  ];

  const allStructuredData = structuredData ? [...defaultStructuredData, ...structuredData] : defaultStructuredData;

  if (breadcrumbs) {
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl
        },
        ...breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 2,
          "name": crumb.label,
          "item": crumb.link ? `${baseUrl}${crumb.link}` : fullUrl
        }))
      ]
    };
    allStructuredData.push(breadcrumbData);
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullImage} />

      {/* Additional SEO */}
      <meta name="author" content="HexaDeals" />
      <meta name="language" content="en" />
      <meta httpEquiv="content-language" content="en" />

      {/* Structured Data */}
      {allStructuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}

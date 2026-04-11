import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SeoProps {
  title: string;
  description: string;
}

export default function Seo({ title, description }: SeoProps) {
  const location = useLocation();
  const baseUrl = "https://alazharpharmacy.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <Helmet
      prioritizeSeoTags
      titleTemplate="%s | Faculty of Pharmacy - Alazhar University of Gaza"
      defaultTitle="Faculty of Pharmacy - Alazhar University of Gaza"
    >
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
}

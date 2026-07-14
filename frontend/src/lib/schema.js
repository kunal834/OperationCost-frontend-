import { imageSrc } from "./image.js";

const SITE_NAME = "OperationCost";
const SITE_PHONE = "+91 98765 43210";

export function organizationSchema(siteUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: siteUrl,
    logo: new URL("/logo.png", siteUrl).toString(),
    telephone: SITE_PHONE,
    priceRange: "₹600–₹900",
  };
}

export function breadcrumbListSchema(siteUrl, items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteUrl).toString(),
    })),
  };
}

export function faqPageSchema(faq) {
  if (!faq?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// MedicalWebPage wrapping a nested MedicalCondition/MedicalProcedure — kept
// deliberately partial (no procedureType/preparation/followup, no cost/price
// markup) since the current data doesn't cleanly support those fields and
// Google tolerates omitted-but-valid partial markup over fabricated fields.
export function treatmentSchema({ slug, treatment, siteUrl }) {
  const url = new URL(`/treatments/${slug}`, siteUrl).toString();

  const about = {
    "@type": treatment.surgicalTreatment ? "MedicalProcedure" : "MedicalCondition",
    name: treatment.title,
    description: treatment.overview,
    ...(treatment.symptoms?.length && { signOrSymptom: treatment.symptoms }),
    ...(treatment.complications?.length && {
      possibleComplication: treatment.complications,
    }),
    ...(treatment.riskFactors?.length && { riskFactor: treatment.riskFactors }),
    ...(treatment.surgicalTreatment && {
      howPerformed: treatment.surgicalTreatment,
    }),
  };

  const page = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: treatment.title,
    url,
    about,
  };

  const video = treatment.youtube
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: `${treatment.title} — Treatment Video`,
        description: treatment.heroDescription,
        embedUrl: treatment.youtube,
        thumbnailUrl: new URL(imageSrc(treatment.image), siteUrl).toString(),
      }
    : null;

  return [page, video, faqPageSchema(treatment.faq)].filter(Boolean);
}

// Deliberately omits AggregateRating/review schema — see project notes:
// doctor rating/review counts look like placeholder data, and Google treats
// fabricated review markup as a manual-action-eligible violation.
export function physicianSchema({ doctor, siteUrl }) {
  const url = new URL(`/doctors/${doctor.id}`, siteUrl).toString();
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    url,
    medicalSpecialty: doctor.speciality,
    ...(doctor.image && { image: new URL(imageSrc(doctor.image), siteUrl).toString() }),
    ...(doctor.education?.length && { alumniOf: doctor.education }),
    ...(doctor.location && {
      address: {
        "@type": "PostalAddress",
        name: doctor.location.clinic,
        streetAddress: doctor.location.address,
      },
    }),
    ...(doctor.phone && { telephone: doctor.phone }),
  };
}

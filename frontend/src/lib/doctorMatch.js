// Matches doctors to a treatment by keyword overlap between the treatment's
// title/treatedBy field and each doctor's speciality/services. The two
// datasets aren't linked by a shared id/taxonomy, only loosely by free text,
// so this is a pragmatic approximation rather than an exact join.
const STOP_WORDS = new Set([
  "surgery",
  "treatment",
  "syndrome",
  "repair",
  "replacement",
  "of",
  "the",
  "and",
  // Generic words nearly every orthopedic doctor's title/services contains —
  // matching on these would link every doctor to every treatment.
  "orthopedic",
  "orthopaedics",
  "surgeon",
  "specialist",
  "joint",
  "care",
  "management",
  "disorders",
  "expert",
]);

function keywords(text) {
  return text
    .toLowerCase()
    .split(/[^a-z]+/)
    .filter((word) => word.length > 2 && !STOP_WORDS.has(word));
}

export function findDoctorsForTreatment(treatment, doctors, limit = 3) {
  const treatmentKeywords = new Set([
    ...keywords(treatment.title),
    ...(treatment.treatmentInfo?.treatedBy
      ? keywords(treatment.treatmentInfo.treatedBy)
      : []),
  ]);

  const scored = doctors
    .map((doctor) => {
      const doctorText = [doctor.speciality, ...(doctor.services ?? [])].join(
        " ",
      );
      const doctorKeywords = keywords(doctorText);
      const score = doctorKeywords.filter((word) =>
        treatmentKeywords.has(word),
      ).length;
      return { doctor, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map(({ doctor }) => doctor);
}

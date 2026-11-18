export const DEFAULT_CASE_STUDY_LEDE =
  "Max led product design through three major scope changes. The Default.com team reported trial-to-paid conversion moving from 18% to 24% over 90 days.";

export const DEFAULT_CASE_STUDY_PERIOD = "January 2023 to January 2026";

export const DEFAULT_RESULTS_CONTEXT =
  "Max led product design through three scope changes, including workflow design, pricing, guided setup, and design-system foundations. These are product or company outcomes, not isolated causal estimates of design impact. For trial-to-paid conversion, the published case gives a change from 18% to 24% over 90 days, a 6 percentage-point increase published as +34% relative; it does not identify a control group. The other figures do not include a published baseline, measurement window, or calculation method.";

type MetricLike = {
  label?: string;
  detail?: string;
};

export function caseStudyMetricDetail(
  slug: string,
  sectionId: string,
  metric: MetricLike,
): string | undefined {
  if (slug !== "default" || sectionId !== "results") return metric.detail;

  const label = metric.label?.toLowerCase() ?? "";
  if (/trial.*paid/.test(label)) {
    return "Trial-to-paid moved from 18% to 24% over 90 days (+6 percentage points; reported as +34% relative). No control group is documented.";
  }
  if (label.includes("velocity")) {
    return "Company-reported engineering throughput after design-system work. Baseline, observation window, calculation method, and design-specific attribution are not documented.";
  }
  if (label.includes("arr")) {
    return "Company-reported ARR impact attributed to UX improvements. The measurement window and attribution method are not documented.";
  }
  if (label.includes("support")) {
    return "Reported support-ticket volume reduction. Baseline count, observation window, and measurement method are not documented.";
  }

  return metric.detail;
}

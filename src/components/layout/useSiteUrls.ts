import { useSiteSettings } from "../../sanity/CmsProvider";
import { BOOK_CALL_URL, CONTACT_EMAIL } from "../../seo/site";

const CONTACT_EMAIL_URL = `mailto:${CONTACT_EMAIL}`;
const LINKEDIN_URL = "https://www.linkedin.com/in/maxburlak/";
const DRIBBBLE_URL = "https://dribbble.com/maxburlak";

export function useSiteUrls() {
  const site = useSiteSettings();
  const contactEmail = site?.contactEmail || CONTACT_EMAIL;

  return {
    bookCallUrl: site?.bookCallUrl || BOOK_CALL_URL,
    contactEmailUrl: `mailto:${contactEmail}`,
    contactEmail,
    linkedinUrl: site?.linkedinUrl || LINKEDIN_URL,
    dribbbleUrl: site?.dribbbleUrl || DRIBBBLE_URL,
  };
}

export { CONTACT_EMAIL_URL, LINKEDIN_URL, DRIBBBLE_URL };

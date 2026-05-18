const siteStatus = process.env.NEXT_PUBLIC_SITE_STATUS;
const showComingSoon = process.env.NEXT_PUBLIC_SHOW_COMING_SOON;

export function shouldShowComingSoon() {
  if (siteStatus === "live" || showComingSoon === "false") {
    return false;
  }

  if (siteStatus === "coming_soon" || showComingSoon === "true") {
    return true;
  }

  return process.env.NODE_ENV === "production";
}

export function canShowDevPreview() {
  return process.env.NODE_ENV !== "production";
}

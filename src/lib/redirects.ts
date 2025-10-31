type RedirectMap = Map<string, string>;

// Permanent redirects (301)
export const PERMANENT_REDIRECTS: RedirectMap = new Map<string, string>([
    // Handle common misspellings and old URLs
    ["/service", "/services"],
    ["/about-us", "/about"],
    ["/project", "/projects"],
    ["/contact", "/about"],
    ["/home", "/"],



    // Handle Arabic URL variations
    ["/خدماتنا", "/services"],
    ["/عن-الشركة", "/about"],
    ["/مشاريعنا", "/projects"],
    ["/اتصل-بنا", "/about"],
    ["/الرئيسية", "/"],

    // Handle old blog URLs if any exist
    ["/blog", "/"],
    ["/news", "/"],
    ["/articles", "/"],

    // Handle common trailing slashes
    ["/about/", "/about"],
    ["/services/", "/services"],
    ["/projects/", "/projects"],
]);

// Temporary redirects (302)
export const TEMPORARY_REDIRECTS: RedirectMap = new Map<string, string>([
    // Add any temporary redirects here (e.g., for maintenance pages or temporary changes)
    ['/temp-page', '/new-page'], // Example redirect, can be removed if not needed
]);

/**
 * Get the redirect path for a given URL path
 * @param path The current URL path
 * @param locale Optional locale for internationalized redirects
 * @returns The redirect path or null if no redirect is needed
 */
export function getRedirectPath(path: string, locale?: string): string | null {
    // Remove trailing slash for checking (except for root path)
    const pathWithoutTrailingSlash = path === "/" ? path : path.replace(/\/$/, "");

    // Check permanent redirects first
    const permanentRedirect = PERMANENT_REDIRECTS.get(pathWithoutTrailingSlash);
    if (permanentRedirect) {
        return locale ? `/${locale}${permanentRedirect}` : permanentRedirect;
    }

    // Check temporary redirects
    const temporaryRedirect = TEMPORARY_REDIRECTS.get(pathWithoutTrailingSlash);
    if (temporaryRedirect) {
        return locale ? `/${locale}${temporaryRedirect}` : temporaryRedirect;
    }

    return null;
}

/**
 * Get the HTTP status code for a redirect
 * @param path The current URL path
 * @returns 301 for permanent redirects, 302 for temporary redirects
 */
export function getRedirectStatus(path: string): 301 | 302 {
    // Remove trailing slash for checking
    const pathWithoutTrailingSlash = path.replace(/\/$/, "");

    return PERMANENT_REDIRECTS.has(pathWithoutTrailingSlash) ? 301 : 302;
}

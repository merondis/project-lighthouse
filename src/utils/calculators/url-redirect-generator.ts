export interface RedirectSnippets {
  apacheHtaccess: string;
  nginxConfig: string;
  htmlMetaRefresh: string;
  javascriptRedirect: string;
}

// Generates redirect code snippets (Apache, Nginx, HTML meta-refresh,
// JavaScript) for an old-URL-to-new-URL mapping. This generates redirect
// code only, it does not check or follow a live redirect (browsers can't
// read cross-origin redirect chains/headers without a server-side proxy).
export function generateRedirectSnippets(oldPath: string, newUrl: string, statusCode: "301" | "302"): RedirectSnippets {
  const trimmedOld = oldPath.trim();
  const trimmedNew = newUrl.trim();
  if (!trimmedOld) throw new Error("Please enter the old path or URL to redirect from.");
  if (!trimmedNew) throw new Error("Please enter the new destination URL.");

  const oldForApache = trimmedOld.startsWith("/") ? trimmedOld : `/${trimmedOld}`;

  const apacheHtaccess = `Redirect ${statusCode} ${oldForApache} ${trimmedNew}`;

  const nginxReturnCode = statusCode === "301" ? "301" : "302";
  const nginxConfig = `location = ${oldForApache} {\n  return ${nginxReturnCode} ${trimmedNew};\n}`;

  const htmlMetaRefresh = `<meta http-equiv="refresh" content="0; url=${trimmedNew}">`;

  const javascriptRedirect = `window.location.href = "${trimmedNew}";`;

  return { apacheHtaccess, nginxConfig, htmlMetaRefresh, javascriptRedirect };
}

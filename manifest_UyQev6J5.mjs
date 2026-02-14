import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import { N as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_DgUwLs34.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/01_%E5%B7%A5%E4%BD%9C%E9%A1%B9%E7%9B%AE/Git%E9%A1%B9%E7%9B%AE/JiaoHuaSong-magazine/","cacheDir":"file:///D:/01_%E5%B7%A5%E4%BD%9C%E9%A1%B9%E7%9B%AE/Git%E9%A1%B9%E7%9B%AE/JiaoHuaSong-magazine/node_modules/.astro/","outDir":"file:///D:/01_%E5%B7%A5%E4%BD%9C%E9%A1%B9%E7%9B%AE/Git%E9%A1%B9%E7%9B%AE/JiaoHuaSong-magazine/dist/","srcDir":"file:///D:/01_%E5%B7%A5%E4%BD%9C%E9%A1%B9%E7%9B%AE/Git%E9%A1%B9%E7%9B%AE/JiaoHuaSong-magazine/src/","publicDir":"file:///D:/01_%E5%B7%A5%E4%BD%9C%E9%A1%B9%E7%9B%AE/Git%E9%A1%B9%E7%9B%AE/JiaoHuaSong-magazine/public/","buildClientDir":"file:///D:/01_%E5%B7%A5%E4%BD%9C%E9%A1%B9%E7%9B%AE/Git%E9%A1%B9%E7%9B%AE/JiaoHuaSong-magazine/dist/client/","buildServerDir":"file:///D:/01_%E5%B7%A5%E4%BD%9C%E9%A1%B9%E7%9B%AE/Git%E9%A1%B9%E7%9B%AE/JiaoHuaSong-magazine/dist/server/","adapterName":"","routes":[{"file":"file:///D:/01_%E5%B7%A5%E4%BD%9C%E9%A1%B9%E7%9B%AE/Git%E9%A1%B9%E7%9B%AE/JiaoHuaSong-magazine/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/01_%E5%B7%A5%E4%BD%9C%E9%A1%B9%E7%9B%AE/Git%E9%A1%B9%E7%9B%AE/JiaoHuaSong-magazine/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.md","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/01_%E5%B7%A5%E4%BD%9C%E9%A1%B9%E7%9B%AE/Git%E9%A1%B9%E7%9B%AE/JiaoHuaSong-magazine/dist/archives/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/archives","isIndex":true,"type":"page","pattern":"^\\/archives\\/?$","segments":[[{"content":"archives","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/archives/index.astro","pathname":"/archives","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/01_%E5%B7%A5%E4%BD%9C%E9%A1%B9%E7%9B%AE/Git%E9%A1%B9%E7%9B%AE/JiaoHuaSong-magazine/dist/og.png","links":[],"scripts":[],"styles":[],"routeData":{"route":"/og.png","isIndex":false,"type":"endpoint","pattern":"^\\/og\\.png\\/?$","segments":[[{"content":"og.png","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/og.png.ts","pathname":"/og.png","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/01_%E5%B7%A5%E4%BD%9C%E9%A1%B9%E7%9B%AE/Git%E9%A1%B9%E7%9B%AE/JiaoHuaSong-magazine/dist/robots.txt","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/01_%E5%B7%A5%E4%BD%9C%E9%A1%B9%E7%9B%AE/Git%E9%A1%B9%E7%9B%AE/JiaoHuaSong-magazine/dist/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/01_%E5%B7%A5%E4%BD%9C%E9%A1%B9%E7%9B%AE/Git%E9%A1%B9%E7%9B%AE/JiaoHuaSong-magazine/dist/search/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/search","isIndex":false,"type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search.astro","pathname":"/search","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/01_%E5%B7%A5%E4%BD%9C%E9%A1%B9%E7%9B%AE/Git%E9%A1%B9%E7%9B%AE/JiaoHuaSong-magazine/dist/tags/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/01_%E5%B7%A5%E4%BD%9C%E9%A1%B9%E7%9B%AE/Git%E9%A1%B9%E7%9B%AE/JiaoHuaSong-magazine/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://JIAOHUASONG.github.io","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/layouts/PostDetails.astro",{"propagation":"in-tree","containsHead":false}],["D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/pages/posts/[...slug]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/posts/[...slug]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/pages/search.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/search@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/pages/tags/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/components/Tag.astro",{"propagation":"in-tree","containsHead":false}],["D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/layouts/Main.astro",{"propagation":"in-tree","containsHead":false}],["D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/pages/archives/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/archives/index@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/pages/posts/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/posts/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/content.config.ts",{"propagation":"in-tree","containsHead":false}],["D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/utils/getPath.ts",{"propagation":"in-tree","containsHead":false}],["D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/components/Card.astro",{"propagation":"in-tree","containsHead":false}],["D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/pages/posts/[...slug]/index.png.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/posts/[...slug]/index.png@_@ts",{"propagation":"in-tree","containsHead":false}],["D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/utils/generateOgImages.ts",{"propagation":"in-tree","containsHead":false}],["D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/pages/og.png.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/og.png@_@ts",{"propagation":"in-tree","containsHead":false}],["D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/pages/about.md",{"propagation":"none","containsHead":true}],["D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/pages/404.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@md":"pages/about.astro.mjs","\u0000@astro-page:src/pages/archives/index@_@astro":"pages/archives.astro.mjs","\u0000@astro-page:src/pages/og.png@_@ts":"pages/og.png.astro.mjs","\u0000@astro-page:src/pages/posts/[...slug]/index.png@_@ts":"pages/posts/_---slug_/index.png.astro.mjs","\u0000@astro-page:src/pages/posts/[...page]@_@astro":"pages/posts/_---page_.astro.mjs","\u0000@astro-page:src/pages/posts/[...slug]/index@_@astro":"pages/posts/_---slug_.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/search@_@astro":"pages/search.astro.mjs","\u0000@astro-page:src/pages/tags/[tag]/[...page]@_@astro":"pages/tags/_tag_/_---page_.astro.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"pages/tags.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_UyQev6J5.mjs","D:/01_工作项目/Git项目/JiaoHuaSong-magazine/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_R0COK8oR.mjs","D:\\01_工作项目\\Git项目\\JiaoHuaSong-magazine\\.astro\\content-assets.mjs":"chunks/content-assets_BRaItJmP.mjs","D:\\01_工作项目\\Git项目\\JiaoHuaSong-magazine\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_DHQP7Ccf.mjs","D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/pages/search.astro?astro&type=script&index=0&lang.ts":"_astro/search.astro_astro_type_script_index_0_lang.DEH4dGTD.js","D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.CMNmTAiG.js","D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.DGYwhuyp.js","D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.Mdz3KX3V.js","D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/layouts/Main.astro?astro&type=script&index=0&lang.ts":"_astro/Main.astro_astro_type_script_index_0_lang.DmwrTf24.js","D:/01_工作项目/Git项目/JiaoHuaSong-magazine/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CDGfc0hd.js","D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/components/BackButton.astro?astro&type=script&index=0&lang.ts":"_astro/BackButton.astro_astro_type_script_index_0_lang.CWLqCqN9.js","D:/01_工作项目/Git项目/JiaoHuaSong-magazine/node_modules/@pagefind/default-ui/npm_dist/mjs/ui-core.mjs":"_astro/ui-core.NRtbsJWD.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/pages/index.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{document.querySelector(\"#main-content\")?.dataset?.layout&&sessionStorage.setItem(\"backUrl\",\"/\")});"],["D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","const d=\"theme\",r=\"light\",m=\"dark\";function i(){const e=localStorage.getItem(d);return e||(window.matchMedia(\"(prefers-color-scheme: dark)\").matches?m:r)}let t=window.theme?.themeValue??i();function c(){localStorage.setItem(d,t),o()}function o(){document.firstElementChild?.setAttribute(\"data-theme\",t),document.querySelector(\"#theme-btn\")?.setAttribute(\"aria-label\",t);const e=document.body;if(e){const n=window.getComputedStyle(e).backgroundColor;document.querySelector(\"meta[name='theme-color']\")?.setAttribute(\"content\",n)}}window.theme?(window.theme.setPreference=c,window.theme.reflectPreference=o):window.theme={themeValue:t,setPreference:c,reflectPreference:o,getTheme:()=>t,setTheme:e=>{t=e}};o();function s(){o(),document.querySelector(\"#theme-btn\")?.addEventListener(\"click\",()=>{t=t===r?m:r,window.theme?.setTheme(t),c()})}s();document.addEventListener(\"astro:after-swap\",s);document.addEventListener(\"astro:before-swap\",e=>{const a=e,n=document.querySelector(\"meta[name='theme-color']\")?.getAttribute(\"content\");n&&a.newDocument.querySelector(\"meta[name='theme-color']\")?.setAttribute(\"content\",n)});window.matchMedia(\"(prefers-color-scheme: dark)\").addEventListener(\"change\",({matches:e})=>{t=e?m:r,window.theme?.setTheme(t),c()});"],["D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/components/Header.astro?astro&type=script&index=0&lang.ts","function s(){const e=document.querySelector(\"#menu-btn\"),t=document.querySelector(\"#menu-items\"),n=document.querySelector(\"#menu-icon\"),o=document.querySelector(\"#close-icon\");!e||!t||!n||!o||e.addEventListener(\"click\",()=>{const c=e.getAttribute(\"aria-expanded\")===\"true\";e.setAttribute(\"aria-expanded\",c?\"false\":\"true\"),e.setAttribute(\"aria-label\",c?\"Open Menu\":\"Close Menu\"),t.classList.toggle(\"hidden\"),n.classList.toggle(\"hidden\"),o.classList.toggle(\"hidden\")})}s();document.addEventListener(\"astro:after-swap\",s);"],["D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/layouts/Main.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{const t=document.querySelector(\"#main-content\")?.dataset?.backurl;t&&sessionStorage.setItem(\"backUrl\",t)});"],["D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/components/BackButton.astro?astro&type=script&index=0&lang.ts","function o(){const t=document.querySelector(\"#back-button\"),e=sessionStorage.getItem(\"backUrl\");e&&t&&(t.href=e)}document.addEventListener(\"astro:page-load\",o);o();"]],"assets":["/file:///D:/01_%E5%B7%A5%E4%BD%9C%E9%A1%B9%E7%9B%AE/Git%E9%A1%B9%E7%9B%AE/JiaoHuaSong-magazine/dist/404.html","/file:///D:/01_%E5%B7%A5%E4%BD%9C%E9%A1%B9%E7%9B%AE/Git%E9%A1%B9%E7%9B%AE/JiaoHuaSong-magazine/dist/about/index.html","/file:///D:/01_%E5%B7%A5%E4%BD%9C%E9%A1%B9%E7%9B%AE/Git%E9%A1%B9%E7%9B%AE/JiaoHuaSong-magazine/dist/archives/index.html","/file:///D:/01_%E5%B7%A5%E4%BD%9C%E9%A1%B9%E7%9B%AE/Git%E9%A1%B9%E7%9B%AE/JiaoHuaSong-magazine/dist/og.png","/file:///D:/01_%E5%B7%A5%E4%BD%9C%E9%A1%B9%E7%9B%AE/Git%E9%A1%B9%E7%9B%AE/JiaoHuaSong-magazine/dist/robots.txt","/file:///D:/01_%E5%B7%A5%E4%BD%9C%E9%A1%B9%E7%9B%AE/Git%E9%A1%B9%E7%9B%AE/JiaoHuaSong-magazine/dist/rss.xml","/file:///D:/01_%E5%B7%A5%E4%BD%9C%E9%A1%B9%E7%9B%AE/Git%E9%A1%B9%E7%9B%AE/JiaoHuaSong-magazine/dist/search/index.html","/file:///D:/01_%E5%B7%A5%E4%BD%9C%E9%A1%B9%E7%9B%AE/Git%E9%A1%B9%E7%9B%AE/JiaoHuaSong-magazine/dist/tags/index.html","/file:///D:/01_%E5%B7%A5%E4%BD%9C%E9%A1%B9%E7%9B%AE/Git%E9%A1%B9%E7%9B%AE/JiaoHuaSong-magazine/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"serverIslandNameMap":[],"key":"ost4uracNXE+clm/214HWsciRNWEkE3/ch2DNgxp1uM="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };

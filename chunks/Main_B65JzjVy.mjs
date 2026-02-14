import { b as createAstro, c as createComponent, r as renderComponent, m as maybeRenderHead, e as addAttribute, g as renderTransition, a as renderTemplate, d as renderSlot, f as renderScript } from './astro/server_DgUwLs34.mjs';
import 'piccolore';
import { $ as $$Breadcrumb } from './Breadcrumb_xFsomW-D.mjs';
/* empty css                         */

const $$Astro = createAstro("https://JIAOHUASONG.github.io");
const $$Main = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Main;
  const { props } = Astro2;
  const backUrl = Astro2.url.pathname ;
  return renderTemplate`${renderComponent($$result, "Breadcrumb", $$Breadcrumb, {})} ${maybeRenderHead()}<main${addAttribute(backUrl, "data-backUrl")} id="main-content" class="app-layout pb-4"> ${"titleTransition" in props ? renderTemplate`<h1 class="text-2xl font-semibold sm:text-3xl"> ${props.pageTitle[0]} <span${addAttribute(renderTransition($$result, "hn2qarie", "", props.titleTransition), "data-astro-transition-scope")}> ${props.pageTitle[1]} </span> </h1>` : renderTemplate`<h1 class="text-2xl font-semibold sm:text-3xl">${props.pageTitle}</h1>`} <p class="mt-2 mb-6 italic">${props.pageDesc}</p> ${renderSlot($$result, $$slots["default"])} </main> ${renderScript($$result, "D:/01_\u5DE5\u4F5C\u9879\u76EE/Git\u9879\u76EE/JiaoHuaSong-magazine/src/layouts/Main.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/01_\u5DE5\u4F5C\u9879\u76EE/Git\u9879\u76EE/JiaoHuaSong-magazine/src/layouts/Main.astro", "self");

export { $$Main as $ };

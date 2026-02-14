import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_DgUwLs34.mjs';
import 'piccolore';
import { s as slugifyStr } from './slugify_BANPlBp3.mjs';
import { g as getPath } from './getPath_DT_Banwd.mjs';
import { $ as $$Datetime } from './Datetime_DS7_mSRc.mjs';

const $$Astro = createAstro("https://JIAOHUASONG.github.io");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { variant: Heading = "h2", id, data, filePath } = Astro2.props;
  const { title, description, ...props } = data;
  return renderTemplate`${maybeRenderHead()}<li class="my-6"> <a${addAttribute(getPath(id, filePath), "href")}${addAttribute([
    "inline-block text-lg font-medium text-accent",
    "decoration-dashed underline-offset-4 hover:underline",
    "focus-visible:no-underline focus-visible:underline-offset-0"
  ], "class:list")}> ${renderComponent($$result, "Heading", Heading, { "style": { viewTransitionName: slugifyStr(title.replaceAll(".", "-")) } }, { "default": ($$result2) => renderTemplate`${title}` })} </a> ${renderComponent($$result, "Datetime", $$Datetime, { ...props })} <p>${description}</p> </li>`;
}, "D:/01_\u5DE5\u4F5C\u9879\u76EE/Git\u9879\u76EE/JiaoHuaSong-magazine/src/components/Card.astro", void 0);

export { $$Card as $ };

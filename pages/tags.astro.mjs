import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DgUwLs34.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_DgyK90qT.mjs';
import { $ as $$Main } from '../chunks/Main_B65JzjVy.mjs';
import { $ as $$Layout, a as $$Header, c as $$Footer } from '../chunks/Footer_BZNPgTpS.mjs';
import { $ as $$Tag } from '../chunks/Tag_BvAfib5F.mjs';
import { g as getUniqueTags } from '../chunks/getUniqueTags_DBxu0GdV.mjs';
import { S as SITE } from '../chunks/config_f57_clwN.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  let tags = getUniqueTags(posts);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Tags | ${SITE.title}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Tags", "pageDesc": "All the tags used in posts." }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<ul class="flex flex-wrap gap-6"> ${tags.map(({ tag, tagName }) => renderTemplate`${renderComponent($$result3, "Tag", $$Tag, { "tag": tag, "tagName": tagName })}`)} </ul> ` })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/01_\u5DE5\u4F5C\u9879\u76EE/Git\u9879\u76EE/JiaoHuaSong-magazine/src/pages/tags/index.astro", void 0);

const $$file = "D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/pages/tags/index.astro";
const $$url = "/tags.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

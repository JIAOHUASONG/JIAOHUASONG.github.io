import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DgUwLs34.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_DgyK90qT.mjs';
import { $ as $$Main } from '../../chunks/Main_B65JzjVy.mjs';
import { $ as $$Layout, a as $$Header, c as $$Footer } from '../../chunks/Footer_BZNPgTpS.mjs';
import { $ as $$Card } from '../../chunks/Card_gDBbKQ3A.mjs';
import { $ as $$Pagination } from '../../chunks/Pagination_COmgfhfd.mjs';
import { g as getSortedPosts } from '../../chunks/getSortedPosts_CC66wOYg.mjs';
import { S as SITE } from '../../chunks/config_f57_clwN.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://JIAOHUASONG.github.io");
const getStaticPaths = (async ({ paginate }) => {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return paginate(getSortedPosts(posts), { pageSize: SITE.postPerPage });
});
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Posts | ${SITE.title}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Posts", "pageDesc": "All the articles I've posted." }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<ul> ${page.data.map((data) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { ...data })}`)} </ul> ` })} ${renderComponent($$result2, "Pagination", $$Pagination, { "page": page })} ${renderComponent($$result2, "Footer", $$Footer, { "noMarginTop": page.lastPage > 1 })} ` })}`;
}, "D:/01_\u5DE5\u4F5C\u9879\u76EE/Git\u9879\u76EE/JiaoHuaSong-magazine/src/pages/posts/[...page].astro", void 0);

const $$file = "D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/pages/posts/[...page].astro";
const $$url = "/posts/[...page].html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

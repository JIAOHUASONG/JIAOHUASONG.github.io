import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as renderSlot, s as spreadAttributes, u as unescapeHTML } from '../chunks/astro/server_DgUwLs34.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Header, c as $$Footer } from '../chunks/Footer_DDNCrdRH.mjs';
import { $ as $$Breadcrumb } from '../chunks/Breadcrumb_xFsomW-D.mjs';
import { S as SITE } from '../chunks/config_BsBIztAW.mjs';
import { g as getImage } from '../chunks/_astro_assets_sswGCxDV.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://JIAOHUASONG.github.io");
const $$AboutLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${frontmatter.title} | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {})} ${maybeRenderHead()}<main id="main-content" class="app-layout"> <section id="about" class="app-prose mb-28 max-w-app prose-img:border-0"> <h1 class="text-2xl tracking-wider sm:text-3xl">${frontmatter.title}</h1> ${renderSlot($$result2, $$slots["default"])} </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/01_\u5DE5\u4F5C\u9879\u76EE/Git\u9879\u76EE/JiaoHuaSong-magazine/src/layouts/AboutLayout.astro", void 0);

const Astro__Z1AC246 = new Proxy({"src":"/_astro/astropaper-og.jWlOTf-L.jpg","width":2455,"height":1381,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/01_工作项目/Git项目/JiaoHuaSong-magazine/public/astropaper-og.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/01_工作项目/Git项目/JiaoHuaSong-magazine/public/astropaper-og.jpg");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "public/astropaper-og\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "public/astropaper-og.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"').replace(/&#x27;/g, "'"));
													const { src, ...props } = imageProps;
													imageSources[matchKey] = await getImage({src: Astro__Z1AC246, ...props});
													occurrenceCounter++;
											}
									}
					
					return imageSources;
			};

		async function updateImageReferences(html) {
			const imageSources = await images(html);

			return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
				const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));

				// Use the 'index' property for each image occurrence
				const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;

				if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
					imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
				}

				const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;

				return spreadAttributes({
					src: imageSources[srcKey].src,
					...attributesWithoutIndex,
				});
			});
		}

		const html = async () => await updateImageReferences("<p>AstroPaper is a minimal, accessible and SEO-friendly blog theme built with <a href=\"https://astro.build/\">Astro</a> and <a href=\"https://tailwindcss.com/\">Tailwind CSS</a>.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;public/astropaper-og.jpg&#x22;,&#x22;alt&#x22;:&#x22;Astro Paper&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>AstroPaper provides a solid foundation for blogs, or even portfolios_ with full markdown support, built-in dark mode, and a clean layout that works out-of-the-box.</p>\n<p>The blog posts in this theme also serve as guides, docs or example articles_ making AstroPaper a flexible starting point for your next content-driven site.</p>\n<h2 id=\"features\">Features</h2>\n<p>AstroPaper comes with a set of useful features that make content publishing easy and effective:</p>\n<ul>\n<li>SEO-friendly</li>\n<li>Fast performance</li>\n<li>Light &#x26; dark mode</li>\n<li>Highly customizable</li>\n<li>Organizable blog posts</li>\n<li>Responsive &#x26; accessible</li>\n<li>Static search with <a href=\"https://pagefind.app/\">PageFind</a></li>\n<li>Automatic social image generation</li>\n</ul>\n<p>and so much more.</p>\n<h2 id=\"show-your-support\">Show your support</h2>\n<p>If you like <a href=\"https://github.com/satnaing/astro-paper\">AstroPaper</a>, consider giving it a star ⭐️.</p>\n<p>Found a bug 🐛 or have an improvement ✨ in mind? Feel free to open an <a href=\"https://github.com/satnaing/astro-paper/issues\">issue</a>, submit a <a href=\"https://github.com/satnaing/astro-paper/pulls\">pull request</a> or start a <a href=\"https://github.com/satnaing/astro-paper/discussions\">discussion</a>.</p>\n<p>If you find this theme helpful, you can also <a href=\"https://github.com/sponsors/satnaing\">sponsor me on GitHub</a> or <a href=\"https://buymeacoffee.com/satnaing\">buy me a coffee</a> to show your support — every penny counts.</p>\n<p>Kyay zuu! 🙏🏼</p>");
	

				const frontmatter = {"layout":"../layouts/AboutLayout.astro","title":"About"};
				const file = "D:/01_工作项目/Git项目/JiaoHuaSong-magazine/src/pages/about.md";
				const url = "/about";
				function rawContent() {
					return "   \n                                    \n              \n   \n\nAstroPaper is a minimal, accessible and SEO-friendly blog theme built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).\n\n![Astro Paper](public/astropaper-og.jpg)\n\nAstroPaper provides a solid foundation for blogs, or even portfolios\\_ with full markdown support, built-in dark mode, and a clean layout that works out-of-the-box.\n\nThe blog posts in this theme also serve as guides, docs or example articles\\_ making AstroPaper a flexible starting point for your next content-driven site.\n\n## Features\n\nAstroPaper comes with a set of useful features that make content publishing easy and effective:\n\n- SEO-friendly\n- Fast performance\n- Light & dark mode\n- Highly customizable\n- Organizable blog posts\n- Responsive & accessible\n- Static search with [PageFind](https://pagefind.app/)\n- Automatic social image generation\n\nand so much more.\n\n## Show your support\n\nIf you like [AstroPaper](https://github.com/satnaing/astro-paper), consider giving it a star ⭐️.\n\nFound a bug 🐛 or have an improvement ✨ in mind? Feel free to open an [issue](https://github.com/satnaing/astro-paper/issues), submit a [pull request](https://github.com/satnaing/astro-paper/pulls) or start a [discussion](https://github.com/satnaing/astro-paper/discussions).\n\nIf you find this theme helpful, you can also [sponsor me on GitHub](https://github.com/sponsors/satnaing) or [buy me a coffee](https://buymeacoffee.com/satnaing) to show your support — every penny counts.\n\nKyay zuu! 🙏🏼\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"features","text":"Features"},{"depth":2,"slug":"show-your-support","text":"Show your support"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$AboutLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

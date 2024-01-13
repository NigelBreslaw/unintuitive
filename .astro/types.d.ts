declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';

	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>,
				import('astro/zod').ZodLiteral<'avif'>,
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<[BaseSchemaWithoutEffects, ...BaseSchemaWithoutEffects[]]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<BaseSchemaWithoutEffects, BaseSchemaWithoutEffects>;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"activate-newsletter.mdx": {
	id: "activate-newsletter.mdx";
  slug: "activate-newsletter";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"astro-3-snipcart-starter-template-nebulix-start-your-online-store-in-minutes.mdx": {
	id: "astro-3-snipcart-starter-template-nebulix-start-your-online-store-in-minutes.mdx";
  slug: "astro-3-snipcart-starter-template-nebulix-start-your-online-store-in-minutes";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"contact-form.mdx": {
	id: "contact-form.mdx";
  slug: "contact-form";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"how-to-customize-the-theme.mdx": {
	id: "how-to-customize-the-theme.mdx";
  slug: "how-to-customize-the-theme";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"page-builder-blocks.mdx": {
	id: "page-builder-blocks.mdx";
  slug: "page-builder-blocks";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"readme.mdx": {
	id: "readme.mdx";
  slug: "readme";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"roadmap.mdx": {
	id: "roadmap.mdx";
  slug: "roadmap";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"templates-and-page-styles.mdx": {
	id: "templates-and-page-styles.mdx";
  slug: "templates-and-page-styles";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
};
"config": {
"about.mdx": {
	id: "about.mdx";
  slug: "about";
  body: string;
  collection: "config";
  data: InferEntrySchema<"config">
} & { render(): Render[".mdx"] };
"blog.mdx": {
	id: "blog.mdx";
  slug: "blog";
  body: string;
  collection: "config";
  data: InferEntrySchema<"config">
} & { render(): Render[".mdx"] };
"contact.mdx": {
	id: "contact.mdx";
  slug: "contact";
  body: string;
  collection: "config";
  data: InferEntrySchema<"config">
} & { render(): Render[".mdx"] };
"icons.mdx": {
	id: "icons.mdx";
  slug: "icons";
  body: string;
  collection: "config";
  data: InferEntrySchema<"config">
} & { render(): Render[".mdx"] };
"navigation.mdx": {
	id: "navigation.mdx";
  slug: "navigation";
  body: string;
  collection: "config";
  data: InferEntrySchema<"config">
} & { render(): Render[".mdx"] };
"project.mdx": {
	id: "project.mdx";
  slug: "project";
  body: string;
  collection: "config";
  data: InferEntrySchema<"config">
} & { render(): Render[".mdx"] };
"shop.mdx": {
	id: "shop.mdx";
  slug: "shop";
  body: string;
  collection: "config";
  data: InferEntrySchema<"config">
} & { render(): Render[".mdx"] };
"style.mdx": {
	id: "style.mdx";
  slug: "style";
  body: string;
  collection: "config";
  data: InferEntrySchema<"config">
} & { render(): Render[".mdx"] };
};
"menu": {
"coctails.mdx": {
	id: "coctails.mdx";
  slug: "coctails";
  body: string;
  collection: "menu";
  data: InferEntrySchema<"menu">
} & { render(): Render[".mdx"] };
"drinks.mdx": {
	id: "drinks.mdx";
  slug: "drinks";
  body: string;
  collection: "menu";
  data: InferEntrySchema<"menu">
} & { render(): Render[".mdx"] };
"virgin-coctails.mdx": {
	id: "virgin-coctails.mdx";
  slug: "virgin-coctails";
  body: string;
  collection: "menu";
  data: InferEntrySchema<"menu">
} & { render(): Render[".mdx"] };
};
"page": {
"about-nebulix.mdx": {
	id: "about-nebulix.mdx";
  slug: "about-nebulix";
  body: string;
  collection: "page";
  data: InferEntrySchema<"page">
} & { render(): Render[".mdx"] };
"index.mdx": {
	id: "index.mdx";
  slug: "index";
  body: string;
  collection: "page";
  data: InferEntrySchema<"page">
} & { render(): Render[".mdx"] };
"kickstart-your-project.mdx": {
	id: "kickstart-your-project.mdx";
  slug: "kickstart-your-project";
  body: string;
  collection: "page";
  data: InferEntrySchema<"page">
} & { render(): Render[".mdx"] };
"license.mdx": {
	id: "license.mdx";
  slug: "license";
  body: string;
  collection: "page";
  data: InferEntrySchema<"page">
} & { render(): Render[".mdx"] };
"pricing.mdx": {
	id: "pricing.mdx";
  slug: "pricing";
  body: string;
  collection: "page";
  data: InferEntrySchema<"page">
} & { render(): Render[".mdx"] };
"shop.mdx": {
	id: "shop.mdx";
  slug: "shop";
  body: string;
  collection: "page";
  data: InferEntrySchema<"page">
} & { render(): Render[".mdx"] };
};
"product": {
"buy-me-a-cocktail.mdx": {
	id: "buy-me-a-cocktail.mdx";
  slug: "buy-me-a-cocktail";
  body: string;
  collection: "product";
  data: InferEntrySchema<"product">
} & { render(): Render[".mdx"] };
"buy-me-a-coffee.mdx": {
	id: "buy-me-a-coffee.mdx";
  slug: "buy-me-a-coffee";
  body: string;
  collection: "product";
  data: InferEntrySchema<"product">
} & { render(): Render[".mdx"] };
"buy-me-a-lambo.mdx": {
	id: "buy-me-a-lambo.mdx";
  slug: "buy-me-a-lambo";
  body: string;
  collection: "product";
  data: InferEntrySchema<"product">
} & { render(): Render[".mdx"] };
"cosmic-bean-bag.mdx": {
	id: "cosmic-bean-bag.mdx";
  slug: "cosmic-bean-bag";
  body: string;
  collection: "product";
  data: InferEntrySchema<"product">
} & { render(): Render[".mdx"] };
"cosmic-bucket.mdx": {
	id: "cosmic-bucket.mdx";
  slug: "cosmic-bucket";
  body: string;
  collection: "product";
  data: InferEntrySchema<"product">
} & { render(): Render[".mdx"] };
"cosmic-cap.mdx": {
	id: "cosmic-cap.mdx";
  slug: "cosmic-cap";
  body: string;
  collection: "product";
  data: InferEntrySchema<"product">
} & { render(): Render[".mdx"] };
"cosmic-dino.mdx": {
	id: "cosmic-dino.mdx";
  slug: "cosmic-dino";
  body: string;
  collection: "product";
  data: InferEntrySchema<"product">
} & { render(): Render[".mdx"] };
"cosmic-drago.mdx": {
	id: "cosmic-drago.mdx";
  slug: "cosmic-drago";
  body: string;
  collection: "product";
  data: InferEntrySchema<"product">
} & { render(): Render[".mdx"] };
"cosmic-hoodie.mdx": {
	id: "cosmic-hoodie.mdx";
  slug: "cosmic-hoodie";
  body: string;
  collection: "product";
  data: InferEntrySchema<"product">
} & { render(): Render[".mdx"] };
"cosmic-kitten.mdx": {
	id: "cosmic-kitten.mdx";
  slug: "cosmic-kitten";
  body: string;
  collection: "product";
  data: InferEntrySchema<"product">
} & { render(): Render[".mdx"] };
"cosmic-nebulix.mdx": {
	id: "cosmic-nebulix.mdx";
  slug: "cosmic-nebulix";
  body: string;
  collection: "product";
  data: InferEntrySchema<"product">
} & { render(): Render[".mdx"] };
"cosmic-t-shirt.mdx": {
	id: "cosmic-t-shirt.mdx";
  slug: "cosmic-t-shirt";
  body: string;
  collection: "product";
  data: InferEntrySchema<"product">
} & { render(): Render[".mdx"] };
"cosmic-water-bottle.mdx": {
	id: "cosmic-water-bottle.mdx";
  slug: "cosmic-water-bottle";
  body: string;
  collection: "product";
  data: InferEntrySchema<"product">
} & { render(): Render[".mdx"] };
"cosmic-wizard.mdx": {
	id: "cosmic-wizard.mdx";
  slug: "cosmic-wizard";
  body: string;
  collection: "product";
  data: InferEntrySchema<"product">
} & { render(): Render[".mdx"] };
"cutie-beans.mdx": {
	id: "cutie-beans.mdx";
  slug: "cutie-beans";
  body: string;
  collection: "product";
  data: InferEntrySchema<"product">
} & { render(): Render[".mdx"] };
"i-love-nebulix-t-shirt.mdx": {
	id: "i-love-nebulix-t-shirt.mdx";
  slug: "i-love-nebulix-t-shirt";
  body: string;
  collection: "product";
  data: InferEntrySchema<"product">
} & { render(): Render[".mdx"] };
"nebulix-license.mdx": {
	id: "nebulix-license.mdx";
  slug: "nebulix-license";
  body: string;
  collection: "product";
  data: InferEntrySchema<"product">
} & { render(): Render[".mdx"] };
"sneaker.mdx": {
	id: "sneaker.mdx";
  slug: "sneaker";
  body: string;
  collection: "product";
  data: InferEntrySchema<"product">
} & { render(): Render[".mdx"] };
"starfunnel-license.mdx": {
	id: "starfunnel-license.mdx";
  slug: "starfunnel-license";
  body: string;
  collection: "product";
  data: InferEntrySchema<"product">
} & { render(): Render[".mdx"] };
};
"project": {
"crafting-the-perfect-cosmic-mojito.mdx": {
	id: "crafting-the-perfect-cosmic-mojito.mdx";
  slug: "crafting-the-perfect-cosmic-mojito";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".mdx"] };
"project-a.mdx": {
	id: "project-a.mdx";
  slug: "project-a";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".mdx"] };
"unveiling-the-galactic-pluche-collection.mdx": {
	id: "unveiling-the-galactic-pluche-collection.mdx";
  slug: "unveiling-the-galactic-pluche-collection";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = typeof import("../src/content/config");
}

# Composables

Components are the building blocks of Vue applications. They are reusable pieces of code that can be used to create different UI elements. Components can be nested to create complex layouts, and they can be combined to create new components.

The components page will contain a comprehensive list of Vue components. The components will be categorized by their functionality / category, and each component will have a detailed description. The page will also include examples of how to use the components and if possible demo within this reference. This page will be a valuable resource for anyone who wants to learn more about Vue components and build up on existing patterns for new components they will be building.

`If a components has different methods of implementation existing on the reference, subsequent methods will be explained in detail below the previous method.`

## Code Example

```example.vue

const hello = ref()
```

* Reusable Components that are mostly repeated across projects
* Project Specific Composables that might not be found on VueUse
* Package Suggestions that are useful for building Vue applications
* Global Project Setups that are useful for building Large Vue applications
* Useful Vue.js Tips
* Ultimately, this reference is a valuable resource for anyone who wants to learn more about Vue. It provides a comprehensive overview of the most common patterns used in Vue applications, I hope it helps you in building your Amazing Vue Projects.

## Every Example / Pattern covered will try to include the following:

* Vue.js / Nuxt.js version number
* Dependencies ( necessary for the feature only )
* Code snippet
* Plugins or extenstions for ease
* Use case
* Demo ( if possible )

### Code Sample

::: code-group

```ts [useCodeSample.ts]

export const useCodeSample = () => {
    return 'Code Sample One'
}
```
:::
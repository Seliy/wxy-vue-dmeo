<template>
  <div>
    <a-breadcrumb :routes="routes">
      <template slot="itemRender" slot-scope="{ route, params, routes, paths }">
        <span v-if="routes.indexOf(route) === routes.length - 1">
          {{ route.breadcrumbName }}
        </span>
        <router-link v-else :to="`${basePath}/${paths.join('/')}`">
          {{ route.breadcrumbName }}
        </router-link>
      </template>
    </a-breadcrumb>
    <br />
    {{ $route.path }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      basePath: "/components/breadcrumb",
      routes: [
        {
          path: "index",
          breadcrumbName: "home",
        },
        {
          path: "first",
          breadcrumbName: "first",
          children: [
            {
              path: "/general",
              breadcrumbName: "General",
            },
            {
              path: "/layout",
              breadcrumbName: "Layout",
            },
            {
              path: "/navigation",
              breadcrumbName: "Navigation",
            },
          ],
        },
        {
          path: "second",
          breadcrumbName: "second",
        },
      ],
    };
  },
  mounted() {
    console.log(this.$route.params);
  },
};
</script>

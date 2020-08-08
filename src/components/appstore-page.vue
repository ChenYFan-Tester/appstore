<template>
  <f7-page :class="['appstore-page', noCollapsedNavbar ? 'appstore-page-no-collapsed-navbar' : '']">
    <f7-navbar :class="['appstore-page-large-navbar',  noCollapsedNavbar ? 'appstore-page-no-collapsed-navbar' : '']" large transparent :title="title"/>   
    <AppstorePageTitle v-if="title" :title="title" :heading="navbarHeading"/>
    <slot></slot>
  </f7-page>
</template>

<script>
import AppstorePageTitle from './appstore-page-title.vue';

export default {
    components: {
        AppstorePageTitle,
    },
    props: {
        noCollapsedNavbar: Boolean,
        title: String,
        navbarHeading: String,
    }
}
</script>

<style lang="less">
.appstore-page-large-navbar {
  &:not(.router-navbar-transition-from-large) .title-large {
    opacity: 0;
    pointer-events: none;
  }
  &.appstore-page-no-collapsed-navbar {
    --f7-navbar-height: 0px;
    --f7-navbar-large-title-height: 96px;
    .title {
      display: none;
    }
  }
}
</style>
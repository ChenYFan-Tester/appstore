<template>
  <f7-app :params="f7params" >

    <f7-views tabs class="safe-areas">
      
      <f7-toolbar tabbar labels bottom>
        <f7-link @click="onTabLinkClick('today')" tab-link="#view-today" tab-link-active icon-f7="today" text="Today"></f7-link>
        <f7-link @click="onTabLinkClick('games')" tab-link="#view-games" icon-f7="rocket_fill" text="Android"></f7-link>
        <f7-link @click="onTabLinkClick('apps')" tab-link="#view-apps" icon-f7="layers_alt_fill" text="Apple"></f7-link>

        <f7-link @click="onTabLinkClick('search')" tab-link="#view-search" icon-f7="search" text="Search"></f7-link>
      </f7-toolbar>

      <f7-view id="view-today" @tab:show="setActiveTab('today')" main tab tab-active url="/today/"></f7-view>
      <f7-view id="view-games" @tab:show="setActiveTab('games')" tab url="/games/"></f7-view>
      <f7-view id="view-apps" @tab:show="setActiveTab('apps')" tab url="/apps/"></f7-view>

      <f7-view id="view-search" @tab:show="setActiveTab('search')" tab url="/search/"></f7-view>

    </f7-views>

  </f7-app>
</template>
<script>

  import routes from '../js/routes.js';
  import $ from 'dom7';

  export default {
    data() {
      return {
        // Framework7Cn Parameters
        f7params: {
          name: 'App Store',
          theme: 'ios',
          routes: routes,
          autoDarktheme: true,          
          // Register service worker
          serviceWorker: {
            path: '/service-worker.js',
          },
        },
        ativeTab: 'today',
        previousTab: {
          current: 'today',
        },
      }
    },
    methods: {
      onTabLinkClick(tab) {
        if (this.previousTab.current !== this.activeTab) return;
        if (this.activeTab === tab) {
          $(`#view-${tab}`)[0].f7View.router.back();
        }
      },
      setActiveTab(tab){
        this.activeTab = tab;
        this.previousTab.current = tab;
      }
    },
    mounted() {
      this.$f7ready((f7) => {

      });
    }
  }
</script>

<template>
    <AppstorePage title="Apps">
      <FeaturedApps backText="Apps" :apps="featuredApps" useIcon />

      <AppstoreBlockTitle title="Using Now">
        <f7-link>See All</f7-link>
      </AppstoreBlockTitle>
      <AppsTableList backText="Apps" :apps="usingNow" />

      <AppstoreBlockTitle title="Popular Apps">
        <f7-link>See All</f7-link>
      </AppstoreBlockTitle>
      <AppsTableList backText="Apps" :apps="popularApps" />

      <AppstoreBlockTitle title="New & Updated">
        <f7-link>See All</f7-link>
      </AppstoreBlockTitle>
      <AppsTableList backText="Apps" :apps="newApps" />

      <AppstoreBlockTitle title="Top Free Apps">
        <f7-link>See All</f7-link>
      </AppstoreBlockTitle>
      <AppsTableList backText="Apps" :apps="topFreeApps" />

      <AppstoreBlockTitle title="Top Categories">
        <f7-link>See All</f7-link>
      </AppstoreBlockTitle>
      <f7-list class="categories-list safe-areas-inset" no-chevron no-hairlines>
        <f7-list-item title="Apple Watch Apps" link="#">
          <span role="img" slot="media" aria-label="Apple Watch Apps">⌚</span>
        </f7-list-item>
        <f7-list-item title="Photo & Video" link="#">
          <span role="img" slot="media" aria-label="Photo & Video">📷</span>
        </f7-list-item>
        <f7-list-item title="Entertaiment" link="#">
          <span role="img" slot="media" aria-label="Entertaiment">🍿</span>
        </f7-list-item>
        <f7-list-item title="Kids" link="#">
          <span role="img" slot="media" aria-label="Kids">🎈</span>
        </f7-list-item>
        <f7-list-item title="Social Networking" link="#">
          <span role="img" slot="media" aria-label="Social Networking">💬</span>
        </f7-list-item>
        <f7-list-item title="Lifestyle" link="#">
          <span role="img" slot="media" aria-label="Lifestyle">🛋️</span>
        </f7-list-item>
      </f7-list>

      <AppstoreBlockTitle title="Editors' Choice">
        <f7-link>See All</f7-link>
      </AppstoreBlockTitle>
      <AppsTableList backText="Apps" :apps="editorsChoice" />

      <AppstoreBlockTitle title="Quick Links">
        <f7-link>See All</f7-link>
      </AppstoreBlockTitle>
      <f7-list class="quick-links-list safe-areas-inset" no-chevron no-hairlines>
        <f7-list-item title="About In-App Purchases" link="#"/>
        <f7-list-item title="Parents' Guide to the App Store" link="#"/>
        <f7-list-item title="About Apps & Games for You" link="#"/>
        <f7-list-item title="About Personalisation" link="#"/>
      </f7-list>

      <f7-block class="buttons-list">
        <f7-button large>Redeem</f7-button>
        <f7-button large>Send Gift</f7-button>
        <f7-button large>Add Funds to Apple ID</f7-button>
      </f7-block>
    </AppstorePage>  
</template>

<script>
import AppstorePage from '../components/appstore-page.vue';
import FeaturedApps from '../components/featured-apps.vue';
import AppstoreBlockTitle from '../components/appstore-block-title.vue';
import AppsTableList from '../components/apps-table-list.vue';
import { apps } from '../js/data';

export default {
    components: {
        AppstorePage,
        FeaturedApps,
        AppstoreBlockTitle,
        AppsTableList,
    },
    data(){
        const featuredApps = apps.filter((app) => !!app.featured);
        const usingNow = apps;
        const popularApps = [...apps]
            .sort((app1, app2) => app2.rating - app1.rating)
            .slice(0, 13)
            .slice(1);
        const newApps = [...apps]
            .sort((app1, app2) => new Date(app2.release_date).getTime() - new Date(app1.release_date).getTime())
            .slice(0, 12);
        const topFreeApps = [...popularApps].reverse();
        const editorsChoice = apps.slice(5);

        return {
            featuredApps,
            usingNow,
            popularApps,
            newApps,
            topFreeApps,
            editorsChoice,
        }
    }
}
</script>
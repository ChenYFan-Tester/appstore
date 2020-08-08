<template>
    <AppstorePage title="Andriod">
      <FeaturedApps backText="Games" :apps="featuredGames" />

      <AppstoreBlockTitle title="What We're Using Now">
        <f7-link>See All</f7-link>
      </AppstoreBlockTitle>
      <AppsTableList backText="Games" :apps="playingNow" />

      <AppstoreBlockTitle title="Popular Apps">
        <f7-link>See All</f7-link>
      </AppstoreBlockTitle>
      <AppsTableList backText="Games" :apps="popularGames" />

      <AppstoreBlockTitle title="New Apps We Love">
        <f7-link>See All</f7-link>
      </AppstoreBlockTitle>
      <AppsTableList backText="Games" :apps="newGames" />

      <AppstoreBlockTitle title="Top Free Apps">
        <f7-link>See All</f7-link>
      </AppstoreBlockTitle>
      <AppsTableList backText="Games" :apps="topFreeGames" />

      <AppstoreBlockTitle title="Top Categories">
        <f7-link>See All</f7-link>
      </AppstoreBlockTitle>
      <f7-list class="categories-list safe-areas-inset" no-chevron no-hairlines>
        <f7-list-item
          title="Indie"
          link="#"
        >
          <span role="img" slot="media" aria-label="Indie">💎</span>
        </f7-list-item>
        <f7-list-item
          title="Casual"
          link="#"
        >
          <span role="img" slot="media" aria-label="Casual">👾</span>
        </f7-list-item>
        <f7-list-item
          title="Strategy"
          link="#"
        >
          <span role="img" slot="media" aria-label="Strategy">🏰</span>
        </f7-list-item>
        <f7-list-item
          title="Action"
          link="#"
        >
          <span role="img" slot="media" aria-label="Action">⚔️</span>
        </f7-list-item>
        <f7-list-item
          title="Racing"
          link="#"
        >
          <span role="img" slot="media" aria-label="Racing">🏁</span>
        </f7-list-item>
      </f7-list>

      <AppstoreBlockTitle title="Editors' Choice">
        <f7-link>See All</f7-link>
      </AppstoreBlockTitle>
      <AppsTableList backText="Games" :apps="editorsChoice" />

      <AppstoreBlockTitle title="Quick Links">
        <f7-link>See All</f7-link>
      </AppstoreBlockTitle>

      <f7-list class="quick-links-list safe-areas-inset" no-chevron no-hairlines>
        <f7-list-item title="About In-App Purchases" link="#"/>
        <f7-list-item title="Parents' Guide to the App Store" link="#"/>
        <f7-list-item title="About Apps & Games for You" link="#" />
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
import { games } from '../js/data';

export default {
    components: {
        AppstorePage,
        FeaturedApps,
        AppstoreBlockTitle,
        AppsTableList,
    },
    data(){
        const featuredGames = games.filter((app) => !!app.featured);
        const playingNow = games;
        const popularGames = [...games]
          .sort((app1, app2) => app2.rating - app1.rating)
          .slice(0, 13)
          .slice(1);
        const newGames = [...games]
          .sort((app1, app2) => new Date(app2.release_date).getTime() - new Date(app1.release_date).getTime())
          .slice(0, 12);
        const topFreeGames = [...popularGames].reverse();
        const editorsChoice = games.slice(10);
      return {
        featuredGames,
        playingNow,
        popularGames,
        newGames,
        topFreeGames,
        editorsChoice,
      }
    }
}
</script>
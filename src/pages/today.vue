<template>
  <AppstorePage :noCollapsedNavbar="true">
      <AppstorePageTitle :title="todayDateTitle" :heading="todayDateHeading" :accountLink="true"/>
      <div class="appstore-card-grid">
        <AppstoreCard
          :image="arcadeCardImage"
          title="ChenYFanのAppStore"
          titleColor="#000"
          titlePosition="top"
          subtitle="News"
          subtitleColor="#000"
          closeButtonColor="#000"
        >
          <p><b>一个船新的应用商店</b> 收录了部分优秀的App，前端基于Vue，部署于GithubPage上，Cloudflare提供网页打开加速和应用下载加速</p>

          <h3>从这里开始</h3>
          <p>我们并非AppStore官方，我们只是模仿了这个界面，我们会收录ipa、apk和mobileconfig三种软件。</p>
        </AppstoreCard>

        <AppstoreCard
          image="https://cdn.jsdelivr.net/gh/ChenYFan-tester/appstore@gh-pages/static/apps-images/back1.jpg"
          title="<span>THE<br />BEST<br />TOOLS</span>"
          titleColor="#000"
          titlePosition="bottom"
          subtitleColor="#000"
          closeButtonColor="#000"
          :app="appCrossyRoad"
        >
          <p>Rule based proxy utility client for iPhone/iPad.</br>- Capture all HTTP/HTTPS/TCP traffic from any applications on your device, and redirect to the proxy server.</br> </br>- Record and display HTTP, HTTPS, DNS requests from your iOS devices.</br></br>- Configure rules using domain match, domain suffix, domain keyword, CIDR IP range, and/or GeoIP lookup.</br></br>- Measure traffic usage and network speed on WiFi, cellular, direct and proxy connections.</br></br>- Import rule files from URL or iCloud Drive.</br></br>- Block ads by domain, user agent rules.</br></br>- Local DNS Mapping.</br></br>- Work on cellular networks.</br></br>- Decrypt HTTPS traffic.- Perform URL rewrite.</br></br>- Fully IPv6 supports.</br></br>- Script filter supports.</br></br>- Multi-level forward proxy.</br></br>- Support kcptun, cloak, gost, v2ray plugins.</br></br>- Support DoH, DoT..</p>
        </AppstoreCard>
        <AppstoreCard
          image="https://cdn.jsdelivr.net/gh/ChenYFan-tester/appstore@gh-pages/static/apps-images/back2.png"
          title="<span>APP<br />OF THE<br />DAY</span>"
          titleColor="#000"
          titlePosition="bottom"
		  closeButtonColor="#000"
          titleLarge
          :app="appNetlfix"
        >
          <p>Google</br>Chrome是由Google开发的免费网页浏览器。Chrome是化学元素“铬”的英文名称，过去也用Chrome称呼浏览器的外框。Chrome相应的开放源代码计划名为Chromium，而Google Chrome本身是非自由软件，未开放全部源代码。</br>Chrome代码是基于其他开放源代码软件所编写，包括Apple WebKit和Mozilla Firefox，并开发出称为“V8”的高性能JavaScript引擎。Google </br>Chrome的整体发展目标是提升稳定性、速度和安全性，并创造出简单且有效率的用户界面。CNET旗下的Download.com网站评出的2008年6月最佳Windows应用程序，其中Google Chrome排名首位。</p>
        </AppstoreCard>
      </div>

      <AppstorePageTitle :title="yesterdayDateTitle" :heading="yesterdayDateHeading" :accountLink="false" />
      <div class="appstore-card-grid">
        <AppstoreCard
          image="https://cdn.jsdelivr.net/gh/ChenYFan-tester/appstore@gh-pages/static/apps-images/back3.jpg"
          title="<span>国区福音</span>"
          titleColor="#fff"
          titlePosition="bottom"
          titleLarge
          :app="appSevenSins"
        >
          <p>Pixiv国内版上线了！！！秒装应用等你尝试！</p>
        </AppstoreCard>
        <AppstoreCard
          image="static/img/apps-images/instagram-5.jpg"
          title="<span>Nothing</span>"
          titleColor="#000"
          titlePosition="bottom"
          titleLarge
          closeButtonColor="#000"
          :app="appInstagram"
          appColor="#000"
        >
          <p>Nothing</p>
        </AppstoreCard>
      </div>
  </AppstorePage>

</template>

<script>
import AppstorePage from '../components/appstore-page.vue';
import AppstorePageTitle from '../components/appstore-page-title.vue';
import AppstoreCard from '../components/appstore-card.vue';
import arcadeCardImage from '../assets/arcade.jpg';
import { apps, games } from '../js/data';

export default {
    components: {
        AppstorePage,
        AppstorePageTitle,
        AppstoreCard,
    },
    data() {
        const todayDate = new Date();
        const todayDateTitle = 'Today';
        const todayDateHeading = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'long', weekday: 'long' }).format(todayDate);
        const yesterdayDate = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
        const yesterdayDateTitle = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(yesterdayDate);
        const yesterdayDateHeading = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'long' }).format(yesterdayDate);

        const appCrossyRoad = apps.find((app) => app.title === 'ShadowRocket');
        const appNetlfix = games.find((app) => app.title === 'Chrome');
        const appInstagram = apps.find((app) => app.title === '');
        const appSevenSins = apps.find((app) => app.title === 'Pixiv中国版');

        return {
            todayDate,
            todayDateTitle,
            todayDateHeading,
            yesterdayDate,
            yesterdayDateTitle,
            yesterdayDateHeading,

            appCrossyRoad,
            appNetlfix,
            appInstagram,
            appSevenSins,

            arcadeCardImage,
        }
    }
}
</script>

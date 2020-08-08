<template>
    <f7-page @page:init="pageInit" @page:beforeremove="pageDestroy">
      <f7-navbar
        transparent
        :back-link="backText || 'Back'"
        class="app-navbar"
      >
        <div class="app-navbar-icon" slot="title">
          <img :src="app.icon" :alt="app.title" />
        </div>
        <div class="app-navbar-button" slot="right">
          <f7-button external target="_blank" :href="`https://drive.cyfan.top/appstore/id${app.id}.html`" round fill>GET</f7-button>
        </div>
      </f7-navbar>
      <div class="block app-header">
        <img :src="app.icon" :alt="app.title" class="app-header-icon" />
        <div class="app-header-content">
          <div class="app-header-title">{{app.title}}</div>
          <div class="app-header-subtitle">{{app.subtitle}}</div>
          <div class="app-header-actions">
            <f7-button external target="_blank" :href="`https://drive.cyfan.top/appstore/id${app.id}.html`" round fill>GET</f7-button>
            <f7-link icon-f7="square_arrow_up" />
          </div>
          <div class="app-header-ratings">
            <div class="app-header-rating">
              <div class="app-header-rating-value">{{app.rating}}</div>
              <RatingStars :rating="app.rating" />
              <div class="app-header-rating-sub">930 Ratings</div>
            </div>
          </div>
        </div>
      </div>
      <div class="block app-screenshots">
        
          <ScrenshotThumb v-for="(screenshot, index) in app.screenshotsThumbs"
            :onClick="() => openPhotoBrowser(index)"
            :src="screenshot"
            :key="index"
            alt="Screenshot"
          />
        
      </div>
      <div :class="`block app-description ${showFullDescription ? 'app-description-full' : ''}`">
        <div class="app-description-content">
          <div class="app-description-text" v-html="createAppDescription()" />
          <f7-link @click="setShowFullDescription(true)">more</f7-link>
        </div>
      </div>
      <AppstoreBlockTitle title="Ratings & Reviews">
        <f7-link>See All</f7-link>
      </AppstoreBlockTitle>
      <div class="block app-ratings">
        <div class="app-ratings-number">
          <b>{{app.rating}}</b>
          <span>out of 5</span>
        </div>
        <div class="app-ratings-votes">
          
            <div class="app-ratings-votes-row" v-for="rating in [5, 4, 3, 2, 1]" :key="rating">
              <div class="app-ratings-votes-stars">
                  <f7-icon v-for="(el, index) in Array.from({ length: rating })" :key="index" f7="star_fill" />
              </div>
              <div class="app-ratings-votes-progress">
                <span :style="{ width: `${(ratingVotes[rating] / totalVotes) * 100}%` }" />
              </div>
            </div>
          
          <div class="app-ratings-votes-total">{{totalVotes}} Ratings</div>
        </div>
      </div>
      {{/* Random reviews */}}
      <div class="block app-reviews">
 【评论暂时未开放】
      </div>
      <template v-if="app.versions && app.versions.length > 0">
          <AppstoreBlockTitle title="What's New" />
          <div class="block">
            <p class="display-flex justify-content-space-between" :style="{ opacity: 0.55 }">
              <span>Version {{app.versions[app.versions.length - 1].version}}</span>
              <span>{{formatDate(app.versions[app.versions.length - 1].release_date)}}</span>
            </p>
            <p>{{app.versions[app.versions.length - 1].release_notes || ''}}</p>
          </div>
      </template>

      <AppstoreBlockTitle title="Information" />
      <f7-list noHairlines noChevron class="safe-areas-inset app-information-list">
        <f7-list-item title="Provider" :after="app.developer.name" />
        <f7-list-item title="Size" :after="`${Math.floor(app.size / 1000000)} MB`" />
        <f7-list-item title="Compatibility" :after="app.poweron`" />
        <f7-list-item title="Languages" after="English" />
        <f7-list-item title="Age Rating" after="12+" />
        <f7-list-item title="In-App Purchases" after="Yes" />
        <f7-list-item title="Copyright" :after="`© ${app.developer.name}`" />
        <f7-list-item :link="`https://apps.apple.com/developer/id${app.developer.id}`" external target="_blank" title="Developer Website">
          <f7-icon slot="after" f7="compass" />
        </f7-list-item>
        <f7-list-item :link="'https://cyfan.top/privacy-policy/'" external target="_blank" title="Privacy Policy">
          <f7-icon slot="after" f7="hand_raised_fill" />
        </f7-list-item>
      </f7-list>
    </f7-page>    
</template>

<script>
import ScrenshotThumb from '../components/screenshot-thumb.vue';
import AppstoreBlockTitle from '../components/appstore-block-title.vue';
import RatingStars from '../components/rating-stars.vue';
import { apps, games } from '../js/data';

export default {
    components: {
        ScrenshotThumb, 
        AppstoreBlockTitle,
        RatingStars,
    },
    data(){
        const id = this.$f7route.params.id;
        const backText = this.$f7route.params.backText;
        const app = this.getAppById(id);
        const showFullDescription = false;
        const ratingVotes = {
            5: 500,
            4: 100,
            3: 80,
            2: 50,
            1: 200,
        };
        const totalVotes = Object.values(ratingVotes).reduce((acc, current) => acc + current);

        return {
            id,
            backText,
            app,
            ratingVotes,
            totalVotes,
            showFullDescription,
        }
    },
    methods: {
        pageInit() {
            this.pb = this.$f7.photoBrowser.create({
                photos: [...this.app.screenshots],
                toolbar: false,
                navbarShowCount: false,
            });
        },
        pageDestroy() {
            if (this.pb) this.pb.destroy();
        },
        openPhotoBrowser(index) {
            if (!this.pb) return;
            this.pb.open(index);
        },
        createAppDescription() {
            return (this.app.description || '').replace(/\n/g, '<br>');
        },
        setShowFullDescription(value) {
            this.showFullDescription = value
        },
        getAppById(id) {
           return [...apps, ...games].find((app) => app.id === parseInt(id, 10));
        },
        formatDate(date) {
            const formatter = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: 'numeric' });
            return formatter.format(new Date(date));
        }
    }
}
</script>

<style lang="less">
@import url("../css/_mixins.less");
.app-navbar {
  &-icon {
    img {
      width: 28px;
      height: 28px;
      border-radius: 22%;
    }
  }
  &-button {
    transition: 200ms;
    opacity: 0;
    .button {
      min-width: 72px;
    }
  }
  &.navbar-transparent-visible .app-navbar-button {
    opacity: 1;
  }
}
.app-header {
  display: flex;
  align-items: stretch;
  margin-top: 0;
  &-icon {
    width: 118px;
    height: 118px;
    border-radius: 22%;
    margin-right: var(--f7-block-padding-horizontal);
    flex-shrink: 0;
    border: 1px solid rgba(0,0,0,0.1);
    .theme-dark & {
      border: 1px solid rgba(255,255,255,0.1);
    }
    @media (min-width: 768px) {
      width: 191px;
      height: 191px;
    }
  }
  &-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-shrink: 10;
    min-width: 0;
  }
  &-title {
    font-size: 22px;
    font-weight: 600;
    @media (min-width: 768px) {
      font-size: 27px;
    }
  }
  &-subtitle {
    font-size: 16px;
    opacity: 0.55;
    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
  &-actions {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    .button {
      min-width: 72px;
    }
    @media (min-width: 768px) {
      margin-bottom: auto;
    }
  }
  &-rating {
    display: flex;
    flex-wrap: wrap;
    opacity: 0.55;
    align-items: center;
    position: relative;
    &-value {
      font-size: 22px;
      font-weight: bold;
      margin-right: 4px;
    }
    .rating-stars .f7-icons {
      font-size: 18px;
    }
    &-sub {
      position: absolute;
      left: 0;
      top: 100%;
      font-size: 12px;
      opacity: 0.75;
      @media (min-width: 768px) {
        position: static;
        margin-left: 16px;
        font-size: 14px;
        width: 100%;
        margin-left: 0;
      }
    }

  }
  @media (max-width: 767px) {
    margin-bottom: calc(var(--f7-block-margin-vertical) + 30px + 16px);
    &-ratings {
      margin-top: 16px;
      margin-bottom: -46px;
      margin-left: calc(-118px - var(--f7-block-padding-horizontal));
    }
  }
}
.app-screenshots {
  overflow: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  white-space: nowrap;
  font-size: 0;
  scroll-padding-left: calc(20px + var(--f7-safe-area-left));
  &::-webkit-scrollbar {
    display: none;
    opacity: 0;
  }
  img {
    width: 220px;
    border-radius: 22px;
    scroll-snap-align: start start;
    margin-right: 10px;
    background-color: #f1f1f1;
    .theme-dark & {
      background-color: #111;
    }
    @media (min-width: 768px) {
      margin-right: 24px;
    }
  }
  &:after {
    content: '';
    width: 1px;
    height: 1px;
    flex-shrink: 0;
  }
}
.app-description {
  font-size: 15px;
  &-content {
    position: relative;
    padding-top: 16px;
    .hairline(top, var(--f7-block-strong-border-color));
  }
  .link {
    position: absolute;
    bottom: 0;
    right: 0;
    &.active-state {
      opacity: 1;
    }
    &:before {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 200%;
      background-image: linear-gradient(to left, #fff 50%, rgba(255, 255, 255 ,0));
      z-index: -1;
      .theme-dark & {
        background-image: linear-gradient(to left, #000 50%, rgba(0, 0, 0 ,0));
      }
    }
  }
  &-text {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &-full &-text {
    display: block;
    animation: app-description-fade-in 600ms;
  }
  &-full .link {
    display: none;
  }
}

@keyframes app-description-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.app-ratings {
  display: flex;
  margin-bottom: 0;
  &-number {
    line-height: 1;
    text-align: center;
    font-weight: bold;
    flex-shrink: 0;
    b, span {
      display: block;
    }
    b {
      font-size: 60px;
      letter-spacing: -0.05em;
      font-weight: 800;
    }
    span {
      font-size: 15px;
      opacity: 0.55;
    }
  }
  &-votes {
    width: 100%;
    flex-shrink: 10;
    line-height: 10px;
    margin-top: 6px;
    i {
      font-size: 8px;
      opacity: 0.55;
    }
    &-row {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    &-progress {
      width: 70%;
      height: 2px;
      background: rgba(0,0,0,0.17);
      border-radius: 2px;
      margin-left: 10px;
      span {
        background: rgba(0,0,0,0.55);
        display: block;
        height: 2px;
        border-radius: 2px;
      }
      .theme-dark & {
        background: rgba(255,255,255,0.17);
        span {
          background: rgba(255,255,255,0.55);
        }
      }
    }
    &-total {
      text-align: right;
      opacity: 0.55;
      margin-top: 4px;
    }
  }
}
.app-reviews {
  margin-top: 16px;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  display: flex;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
    opacity: 0;
  }
  @media (min-width: 768px) {
    scroll-padding-left: calc(20px + var(--f7-safe-area-left));
  }
  &:after {
    content: '';
    flex-shrink: 0;
    width: 1px;
    height: 1px;
  }
  .app-review {
    border-radius: 10px;
    background: var(--f7-block-strong-bg-color);
    padding: 16px;
    scroll-snap-align: center center;
    width: 100%;
    max-width: 350px;
    margin-right: 10px;
    flex-shrink: 0;
    box-sizing: border-box;
    html:not(.theme-dark) & {
      background-color: #F2F2F6;
    }
    @media (min-width: 768px) {
      margin-right: 24px;
      scroll-snap-align: start start;
    }
    &-header {
      display: flex;
      justify-content: space-between;
      span:last-child {
        opacity: 0.55;
      }
      .rating-stars .f7-icons {
        font-size: 12px;
        color: var(--f7-color-orange);
      }
    }
    &-text {
      margin-top: 16px;
    }
  }
}
.app-information-list {
  --f7-list-bg-color: transparent;
  --f7-list-item-title-text-color: rgba(0,0,0,0.55);
  --f7-list-item-after-text-color: #000;
  .theme-dark & {
    --f7-list-item-after-text-color: #fff;
    --f7-list-item-title-text-color: rgba(255,255,255,0.55);
  }
  .item-link {
    --f7-list-item-title-text-color: var(--f7-theme-color);
    --f7-list-item-after-text-color: var(--f7-theme-color);
  }
}

</style>

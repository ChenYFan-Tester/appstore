<template>
    <h1 class="appstore-page-title">
        <div v-if="heading" class="appstore-page-title-heading">{{heading}}</div>
        <span>{{title}}</span>
        <f7-link href="/account/" v-if="accountLink">
          <img :src="avatarSrc" alt="Account">
        </f7-link>
    </h1>
</template>

<script>
import avatarSrc from '../assets/avatar.jpeg';

export default {
    props: {
        heading: String,
        title: String,
        accountLink: {
          type: Boolean,
          default: true,
        },
    },
    data() {
        return {
            avatarSrc,
        }
    }
}
</script>

<style lang="less">
.appstore-page-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--f7-navbar-large-title-text-color);
  letter-spacing: var(--f7-navbar-large-title-letter-spacing);
  font-size: var(--f7-navbar-large-title-font-size);
  font-weight: var(--f7-navbar-large-title-font-weight);
  line-height: var(--f7-navbar-large-title-line-height);
  padding-left: calc(var(--f7-navbar-large-title-padding-left) + var(--f7-safe-area-left));
  padding-right: calc(var(--f7-navbar-large-title-padding-right) + var(--f7-safe-area-right));
  padding-top: var(--f7-navbar-large-title-padding-vertical);
  padding-bottom: var(--f7-navbar-large-title-padding-vertical);
  box-sizing: border-box;
  position: relative;
  margin-top: 2em;
  margin-bottom: 0;
  .page-content > &:first-child {
    margin: 0;
    margin-top: calc(-1 * var(--f7-navbar-large-title-height));
  }
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  .router-transition & > span,
  .page-swipeback-active & > span,
  .page-transitioning & > span {
    opacity: 0;
    pointer-events: none;
  }
  .appstore-page-no-collapsed-navbar & {
    --f7-navbar-height: 0px;
  }
  &-heading {
    position: absolute;
    opacity: 0.55;
    font-weight: 600;
    font-size: 13px;
    bottom: 100%;
    text-transform: uppercase;
    letter-spacing: 0;
  }
}

</style>
<template>
    <f7-popup push swipe-to-close="to-bottom" class="account-popup">
      <f7-page class="account-page">
        <f7-navbar title="Account">
          <f7-link popup-close slot="right">Done</f7-link>
        </f7-navbar>
        <f7-list media-list>
          <f7-list-item
            class="account-user"
            title="Vladimir Kharlampidi"
            subtitle="username@website.com"
            chevronCenter
            link
          >
            <img slot="media" :src="avatarSrc" alt="Vladimir Kharlampidi" />
          </f7-list-item>
        </f7-list>
        <f7-list>
          <f7-list-item
            title="Purchased"
            link
          />
          <f7-list-item
            title="Subscriptions"
            link
          />
        </f7-list>
        <f7-list>
          <f7-list-button>Redeem Gift Card or Code</f7-list-button>
          <f7-list-button>Send Gift Card by Email</f7-list-button>
          <f7-list-button>Add Funds to Apple ID</f7-list-button>
        </f7-list>
        <f7-list>
          <f7-list-item
            title="Personalised Recommendations"
            link
          />
        </f7-list>
      </f7-page>
    </f7-popup>    
</template>

<script>
import avatarSrc from '../assets/avatar.jpeg';

export default {
    data(){
        return {
            avatarSrc
        }
    }
}
</script>

<style lang="less">
.account-popup {
  --f7-popup-tablet-border-radius: 15px;
}
.account-page {
  --f7-navbar-height: 56px;
  --f7-list-button-text-align: left;
  --f7-list-margin-vertical: 20px;
  .theme-dark & {
    --f7-navbar-bg-color: #2C2C2E;
    --f7-navbar-bg-color-rgb: 50, 50, 50;
    --f7-page-bg-color: #1C1C1E;
    --f7-list-bg-color: #2C2C2E;
    --f7-block-strong-bg-color: #2C2C2E;
  }
  .account-user {
    .item-inner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
    .item-title {
      font-weight: normal;
    }
    .item-subtitle {
      opacity: 0.55;
    }
    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }
  }
}

</style>
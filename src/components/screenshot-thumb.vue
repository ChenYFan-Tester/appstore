<template>
    <img
      :style="{
        opacity: loaded ? 1 : 0,
        transitionDuration: '600ms',
      }"
      @click="onClick"
      :src="src"
      :alt="alt"
      :onLoad="setLoaded(true)"
    />
</template>

<script>
export default {
    props: {
        src: String, 
        onClick: Function, 
        alt: String,
    },
    data() {
      const loaded = false;
      return {
        loaded
      }
    },
    methods: {
      setLoaded(value){
        this.loaded = value;
      }
    }
}
</script>
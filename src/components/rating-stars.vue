<template>
    <div class="rating-stars">
        <f7-icon v-for="n in [1, 2, 3, 4, 5]" :key="n" :f7="icon(n)" />
    </div>
</template>

<script>
export default {
    props: {
        rating: Number,
    },
    methods: {
        icon(n) {
            if (n <= Math.floor(this.rating)) return 'star_fill';
            if (n > Math.ceil(this.rating)) return 'star';
            return 'star_lefthalf_fill';
        }
    }
}
</script>
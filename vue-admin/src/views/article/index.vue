<template>

  <div>
    <page :size="size" type="article" @pageQueryFinish="handlePageQueryFinish" style="margin-top: 5vh"></page>
  </div>
</template>

<script>
import page from "@/components/page";

export default {
  name: "index",
  data() {
    return {
      size:5
    }
  },
  components:{
    page
  },
  methods: {
    handlePageQueryFinish() {

    }
  }
}
</script>

<style scoped>

</style>

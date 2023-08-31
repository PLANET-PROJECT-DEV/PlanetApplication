<template>
<div>
  <MessageList/>
</div>
</template>

<script>
import {defineComponent} from "vue";
import MessageTop from "@/components/MessageTop.vue";
import MessageList from "@/components/MessageList.vue";

export default defineComponent({
  components: {MessageList, MessageTop}
})
</script>

<style scoped>

</style>
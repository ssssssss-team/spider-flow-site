<template>
  <ParentLayout>
    <AdSense slot="sidebar-bottom"/>
    <div class="wwads-cn wwads-vertical" data-id="138" style="position: fixed;bottom: 0;right: 55px;font-weight: 350;max-width:200px;"></div>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import AdSense from '../components/AdSense.vue'
export default {
  components: {
    ParentLayout,
    AdSense
  }
}
</script>
<template>
  <div class="w-screen">
    <div :v-if="showItem"
      class="absolute top-0 left-0 bottom-0 w-50">
    </div>
    <div class="w-screen h-auto flex">
      <div class="w-10">1</div>
      <div class="flex-grow">
        <p>这里是样式不正常区域</p>
        <test />
        <p>这里是样式正常区域(请移除注释，会看到上下样式都正常了)</p>
        <!-- 
        <el-radio-group class="ml-4">
          <el-radio label="1" size="large">Option 1</el-radio>
          <el-radio label="2" size="large">Option 2</el-radio>
        </el-radio-group>
        -->
      </div>
      <div class="w-10">3</div>
    </div>
    <div :v-if="showItemConfig"
      class="absolute top-0 right-0 bottom-0 w-50">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Test from './views/editor/Test.vue'

interface Data {
  showItem: Boolean,
  showItemConfig: Boolean
}

export default defineComponent({
  components: { Test },
  data() {
    return {
      showItem: false,
      showItemConfig: false
    } as Data
  }
})
</script>


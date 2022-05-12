
<template>

</template>
<script lang="ts">
import { defineComponent,ref,reactive,toRefs,watch,computed,onMounted} from 'vue';


export default defineComponent({
  name: '',
  props: {},
  components: {},
  setup(props:any) {
    const {} = toRefs(props)
     //如果想监听多个值,在多写几个watch
    //  watch(()=> state.radioIndex,(newVal,oldVal)=>{
    //     console.log(newVal,oldVal,'测试')
    //  },,{immediate: true, deep: true})
    const nextAge = computed(() => {
      return  1
    })
    onMounted(()=>{
      
    })
    //返回一个对象
    return {
     nextAge
    }
  }
});
</script>

<style scoped>
</style>

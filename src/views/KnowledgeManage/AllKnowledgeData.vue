<template>
  <div class="AllKnowledgeData">
    AllKnowledgeData
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
      
  },
})


export default class AllKnowledgeData extends Vue {

  created(){
    this.getAllData();
  }
  //查询所有数据
  getAllData():void{
    (this as any).$http('/allKnowledgeData/getList','')
    .then((res:any) => {
      console.log(res);
    })
    .catch((err:any) => {
      console.log(err);
    })
  }
}
</script>

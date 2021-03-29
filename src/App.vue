<template>
    <div class="app">
        <router-view/>
    </div>
</template>

<script>
export default {
  name:"app",
  data(){
    return {

    }
  }
}
</script>

<style lang="scss">
html,body {
  width:100%;
  height:100%;
}
.app{
  width:100%;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<script>
export default{
    data(){
        return{

        }
    },
    methods: {
        click(){
            alert('111')
        }
    },
}
</script>

<template>
  <main>
    <van-button @click="click" type="primary">主要按钮</van-button>
  </main>
</template>

<script>
import m1 from '@/assets/happy-audio/1/01 Unit 1 - You And I - Lesson 1 - P. 1.mp3'

export default{
    data() {
        return {
            cd1:[
                {
                    'title':'01 Unit 1 - You And I - Lesson 1 - P. 1.mp3',
                    'src':m1
                },
            ],
            song: '',
            playing: false
        }
    },
    methods: {
        playClick(item){
            
            if (this.playing == true) {
                this.$refs.audio.pause()
                this.playing = false
            }else{
                let music1 = new Audio();
                music1 = item.src
                this.$refs.audio.src = music1;
                this.$refs.audio.play();
                this.playing = true
            }
        }
    },
}
</script>

<template>
  <main>
    <audio controls="controls" ref="audio">
        <source />
    </audio>
    <van-cell-group>
        <van-cell v-for="(item, index) in cd1" :key="index" :title="item.title" @click="playClick(item)" />
    </van-cell-group>
  </main>
</template>

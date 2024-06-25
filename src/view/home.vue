<template>
    <div> Home </div>
    <div>Active 前面</div>
    <div :class="{ active: isActive}">isActive</div>
    <div>isAcitve 后面</div>
    <!--<p class="boo">根组件样式</p>-->
    <p>根样式</p>
    <!--父组件传值给子组件-->
    <p>{{ props.message }}</p>
    <h3>使用emit实现子传父</h3>
    <button @click="ziChuanFu">点击我，子传父</button>
</template>
<script setup>
    import { defineProps, defineEmits } from 'vue';
    const emit = defineEmits(['child-click'])
    const ziChuanFu = () => {
        emit('child-click', 1)
    }
    const props = defineProps({
        message:String
    })
</script>
<script>
    import About from './about.vue'
export default {
        name: 'home',
        props: {
            message: String

        },
        data() {
            return {
                isActive: true,
                error: null,
                tName: this.booName
            }
        },
        computed: {
            classObjec(){
                
                return{
                active: isActive && !error
                }
                
            }
        }
}

</script>
<style>
    .active{
        color: powderblue
    }
    .boo{
        color: red
    }
</style>
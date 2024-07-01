<template>
    <div> About </div>
    <button @click="sendAbout">点击我传到notFound</button>
    <p>v-else-if 只能存在v-if 或者v-else-if之后</p>
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-if="type === 'C'">C</div>
    <div v-if="type === 'D'">DD</div>
    <Found v-if="ok"></Found>
    <p>列表渲染</p>
    <li v-for="(item,index) in items">{{ parentMessage }} - {{ index }}-{{ item.message }}</li>
    <li v-for="(value, key, index) in myObject">{{ value }} - {{ key }} - {{ index }}</li>
    <p>v-for里面使用范围值注意此处 n 的初值是从 1 开始而非 0。</p>
    <span v-for="n in 10"> {{ n }}</span>
    <span>添加Key</span>
    <div v-for="item in items" :key="item.id"> {{ item.id }}</div>
    <span>数组变更方法</span>
    <span>已排序的计算属性</span>
    <li v-for="item in evenNumbers"> {{ item }}</li>
    <span>多层嵌套</span>
    <ul v-for="item in sets">
        <li v-for="value in even(item)">
            {{ value }}
        </li>
    </ul>
</template>

<script setup>
    import mitt from 'mitt'
    import Found from './notFound.vue'
    const emitter = mitt()
    emitter.emit('sevAbout', '我是从about传过来的参数')
</script>
<script>export default {
        name: 'about',
        data() {
            return {
                type: 'A',
                ok: false,
                parentMessage: 'parentMessage',
                items: [{ message: 'foo',id: 1 }, { message: 'list',id: 2 }],
                myObject: {
                    title: 'How to do lists in Vue',
                    author: 'Jane Doe',
                    publishedAt: '2016-04-10'
                },
                numbers: [1, 2, 3, 4, 5, 6],
                sets: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]
            }
        },
        computed: {
            evenNumbers() {
                return this.numbers.filter(n => n%2 === 0)
            }
        },
        methods: {
            even(numbers) {
                return numbers.filter(number => number % 2 === 0)
            }
        }
}</script>
<template>
    <div>
        <n-menu v-model:value="activeKey" :options="menuOptions" mode="horizontal" responsive
            @update:value="handleUpdateValue" />
    </div>
</template>

<script lang="js">
import { ref, reactive, toRefs, onMounted, defineProps, defineComponent, } from 'vue'

export default defineComponent({
    props: {
        activeKey: {
            type: String,
        },
        menuOptions: {
            type: Array,
        }
    },
    setup(props) {

        return {
            ...props,
            handleUpdateValue(key, item) {
                console.log('key,item :>> ', key, item);
            }
        }
    },
    mounted() {
        // console.log('activeKey :>> ', activeKey);
    }
})

</script>
<style scoped lang="less"></style>
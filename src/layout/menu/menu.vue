<template>
    <div>
        <n-menu :default-value="activeKey" :options="menuOptions" mode="horizontal" responsive
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
            }
        }
    },
    mounted() {
        // console.log('activeKey :>> ', activeKey);
    }
})

</script>
<style scoped lang="less"></style>
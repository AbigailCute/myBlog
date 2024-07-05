import { createApp } from 'vue'
import {
    // create naive ui
    create,
    // component
    NButton,
    NSpace,
    NAvatar,
    NForm,
    NInput,
    NFormItem,
} from 'naive-ui'

const naive = create({
    components: [
        NButton,
        NSpace,
        NAvatar,
        NForm,
        NInput,
        NFormItem,
    ]
})

export default naive
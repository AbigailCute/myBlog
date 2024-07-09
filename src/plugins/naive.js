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
    NMenu,
    NIcon,
    NImage,
    NGradientText,
} from 'naive-ui'

const naive = create({
    components: [
        NButton,
        NSpace,
        NAvatar,
        NForm,
        NInput,
        NFormItem,
        NMenu,
        NIcon,
        NImage,
        NGradientText,
    ]
})

export default naive
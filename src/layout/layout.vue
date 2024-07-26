<template>
    <div class="main-menu">
        <!-- 图片 -->
        <n-image width="200" height="40" :src="qianJi" :preview-disabled="true" @click="imageClick" />
        <n-gradient-text gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)">
            <!-- 小天才 -->
            layout
        </n-gradient-text>
        <!-- 搜索框 -->
        <n-input size="large" round placeholder="" style="max-width: 20%">
            <template #suffix>
                <n-icon size="40">
                    <svg t="1720417388585" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="3238">
                        <path
                            d="M850.39104 818.11456l-145.67424-142.80704a308.71552 308.71552 0 0 0 87.42912-214.87616c-2.62144-174.53056-145.5104-314.32704-320.06144-313.15968-174.67392-1.31072-317.68576 138.50624-320.3072 313.18016 2.47808 174.75584 145.53088 314.75712 320.32768 313.42592a322.21184 322.21184 0 0 0 169.82016-48.2304l151.01952 147.84512 58.4704-54.19008c-0.36864-0.38912-0.63488-0.8192-1.024-1.18784z m-209.01888-192.08192c-94.33088 91.46368-244.26496 91.46368-338.59584 0a230.56384 230.56384 0 0 1 0-331.1616c94.33088-91.46368 244.26496-91.46368 338.59584 0a231.0144 231.0144 0 0 1 0 331.1616z"
                            fill="" p-id="3239"></path>
                    </svg>
                </n-icon>
            </template>
        </n-input>
        <!-- 顶部菜单 -->
        <Menu :activeKey="activeKey" :menuOptions="menuOptions"></Menu>
    </div>
    <div class="main-content">
        <router-view></router-view>
    </div>
</template>

<script lang="js">
import { ref, reactive, toRefs, onMounted, defineComponent, h } from 'vue'
import qianJi from '@/assets/images/千棘.png'
import Menu from '@/layout/menu/menu.vue'
import router from '@/router'
import { RouterLink } from 'vue-router'

export default defineComponent({
    components: { Menu },
    setup() {
        const activeKey = ref('0')
        const menuOptions = [
            {
                label: () => h(
                    RouterLink,
                    {
                        to: {
                            name: "index",
                        }
                    },
                    { default: () => "首页" }
                ),
                key: "0",
            },
            {
                label: () => h(
                    RouterLink,
                    {
                        to: {
                            name: "news",
                        }
                    },
                    { default: () => "新闻" }
                ),
                key: "1",
            },
            {
                label: () => h(
                    RouterLink,
                    {
                        to: {
                            name: "answer",
                        }
                    },
                    { default: () => "问答" }
                ),
                key: "2",
            },
            {
                label: "账户",
                key: "3",
                children: [
                    {
                        label: () => h(
                            RouterLink,
                            {
                                to: {
                                    name: "login",
                                }
                            },
                            { default: () => "登出" }
                        ),
                        key: "3-0",
                    }
                ]
            },
        ];
        const imageClick = () => {
        }
        return {
            activeKey,
            menuOptions,
            qianJi,
            imageClick,
        }
    },
    mounted() {
    }
})
</script>

<style scoped lang="less">
.main-menu {
    display: flex;
    justify-content: space-between;
    padding: 5px 50px;
}

.main-content {
    min-width: 40vw;
    height: calc(100% - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
    // padding: 40px 100px;
    margin: 2vh 10vw;
    background-color: grey;

}

.n-gradient-text {
    font-size: 3vh;
}
</style>
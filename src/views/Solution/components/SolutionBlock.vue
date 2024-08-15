<script setup>

import { useCategoryStore } from '@/stores/catagory'         // 使用pinia中产品导航列表

//使用pinia中的数据
const categoryStoreBlock = useCategoryStore()

</script>

<template>

<div class="Product-display-right">
    <div class="item">
        <div class="pic-item" v-for="item in categoryStoreBlock.SKUList" :key="item.id">
            <div class="pic-box">
                <RouterLink :to="`/product/${item.router}/detail/${item.id}`"><img :src="item.default_image" :alt="item.name"></RouterLink>
            </div>
            <RouterLink :to="`/product/${item.router}/detail/${item.id}`"><h4>{{ item.name }}</h4></RouterLink>
        </div>
    </div>
</div>

</template>

<style scoped lang='scss'>

/* 产品右侧列表 */
.Product-display-right {
    display: flex;
    flex: 1;

    .item {
        display: flex;
        flex:1;
        flex-wrap: wrap; 
        margin-bottom: 20px;
        .pic-item {
            padding: 0 10px 20px;
            flex: 0 0 32%;
            overflow: hidden;
            .pic-box {
                border: .5px solid #555;
                overflow: hidden;
                
                img {
                    width: 100%;
                    transition: all .3s;
                }
                &:hover {
                    img {
                        transform: scale(1.1);
                    }
                    
                }
            }
            h4 {
                padding: 0 15px;
                width: 100%;
                height: 30px;
                overflow: hidden;
                color: #fff;
                font-size: 13px;
                font-weight: 600;
                line-height: 30px;
                background-color: #003abd;
            }

        }
    }

}

@media (max-width: 1200px) {


}

@media (max-width: 960px) {
    .Product-panel {

        .Product-display {
            /* 产品左侧导航 */
            .Product-display-left {
                display: none;
            }
            /* 产品右侧列表 */
            .Product-display-right {

                .item {
                    margin-right: 20px;
                    .pic-item {
                        flex: 0 0 50%;

                    }
                }

            }
        }

    }

}

@media (max-width: 768px) {

}

</style>
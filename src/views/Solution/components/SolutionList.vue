<script setup>

import { useCategoryStore } from '@/stores/catagory'         // 使用pinia中产品导航列表

//使用pinia中的数据
const categoryStoreList = useCategoryStore()


</script>

<template>

    <div class="Product-display-right">
        <div class="item" v-for="item in categoryStoreList.ProductList" :key="item.id">
            <div class="pic">
                <div class="pic-box">
                    <RouterLink :to="`/product/list/${item.id}`"><img :src="item.image" :alt="item.name"></RouterLink>
                </div>
            </div>
            <div class="detail">
                <RouterLink :to="`/product/list/${item.id}`"><h4>{{ item.name }}</h4></RouterLink>
                <p>{{ item.content }}</p>
                <RouterLink :to="`/product/list/${item.id}`" class="btn-face">查看更多</RouterLink>
            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>

/* 产品右侧列表 */
.Product-display-right {
    display: flex;
    flex: 1;
    flex-direction: column;
    .item {
        display: flex;
        flex:1;
        justify-content: space-between;
        margin-bottom: 20px;
        max-height: 240px;
        overflow: hidden;
        .pic {
            width: 50%;
            max-width: 240px;
            
            .pic-box {
                width: 100%;
                height: 100%;
                overflow: hidden;
                
                img {
                    height: 100%;
                    transition: all .3s;
                }
            }
            &:hover {
                img {
                    transform: scale(1.1);
                }
                
            }
        }
        .detail {
            flex: 1;
            margin-left: 20px;
            padding: 30px;
            background-color: #fff;
            h4 {
                color: #003abd;
                font-size: 18px;
                font-weight: 600;
            }
            p {
                margin-top: 15px;
                font-size: 14px;
            }
            .btn-face {
                display: block;
                margin-top: 30px;
                width: 80px;
                height: 26px;
                border: 1px solid #003abd;
                border-radius: 5px;
                font-size: 12px;
                color: #003abd;
                text-align: center;
                line-height: 26px;
                &:hover {
                    background-color: #003abd;
                    color: #fff;
                }
            }
        }
    }

}

</style>
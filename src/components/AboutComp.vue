<script lang="ts" setup>
import { loc } from '~/composables/store'
import { BuildTime } from '~/build'
import { fromNow } from '~/utils/time'
</script>

<template>
  <div
    p="10 y-8"
  >
    <h1
      text="lg gray-900"
      font-light
      m="b4"
    >
      <LogoComp />
    </h1>
    <div class="text-sm text-gray-500 my-1 font-light">
      分享三好房车停车点
    </div>
    <div class="text-sm text-gray-500 my-1 font-light">
      数据来源
      <a
        class="text-gray-700 hover:text-gray-900"
        href="https://github.com/Lanseria/awesome-cn-data/tree/rc-parka"
        target="_blank"
        rel="noreferrer"
      >AwesomeCnData(Github)</a>
    </div>
    <div class="text-sm text-gray-500 my-1 font-light">
      最近更新 <span class="text-gray-700">{{ fromNow(BuildTime) }}</span>
    </div>
    <div class="text-sm text-gray-500 my-1 font-light">
      Made by
      <a
        class="text-gray-700 hover:text-gray-900"
        href="https://github.com/lanseria"
        target="_blank"
        rel="noreferrer"
      >@爱吃包子的超</a>
    </div>
    <div class="text-sm text-gray-500 my-1 font-light">
      Fork by
      <a
        class="text-gray-700 hover:text-gray-900"
        href="https://github.com/aufu"
        target="_blank"
        rel="noreferrer"
      >@aufu</a>
    </div>
    <div class="text-sm text-gray-500 my-1 font-light">
      源代码在
      <a
        class="text-gray-700 hover:text-gray-900"
        href="https://github.com/Lanseria/awesome-cn-rcpark-web"
        target="_blank"
        rel="noreferrer"
      >Github</a>
    </div>
    <div v-if="loc" class="text-sm text-gray-500 my-1 font-light">
      My Location
      <span class="text-gray-700 ml-1">
        {{ loc.map((i) => +i.toFixed(5)).join(", ") }}
      </span>
    </div>
  </div>
</template>

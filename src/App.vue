<script setup lang="ts">
import { Developers } from "./data/developers";

const developers = new Developers().getDevelopers();
</script>

<template>
  <div class="w-[100vw] h-[100vh] columns-2 gap-4 p-4">
    <div
      class="
        w-auto
        h-auto
        p-4
        border
        rounded-2
        hover:ring-2 hover:border-green hover:border-l-8
        transition-all
        duration-800
      "
      v-for="developer, index in developers"
      :key="index"
    >
      <div class="w-full flex items-center">
        <div class="rounded-50% w-9 h-9">
          <img
            src="https://app.vuejobs.com/storage/1667/388021b6-1488-4901-a52d-9123f4cdf84f.com"
          />
        </div>
        <div class="flex flex-col ml-4">
          <p class="text-3.5 font-600">{{ developer.fullname }}</p>
          <p class="-mt-1 text-sm text-gray-400">{{ developer.headline }}</p>
        </div>
      </div>
      <p class="mt-4 text-5 font-600">{{ developer.job_title }}</p>
      <p
        class="mt-4 text-4 font-400 h-12 text-elipsis leading-6 overflow-hidden"
      >
      {{ developer.description }}
      </p>
      <div class="mt-2">
        <span class="float-left text-gray-600 text-sm"
          >{{ developer.email }}</span
        >
        <span class="float-right text-gray-600 text-sm"
          >{{ developer.mobile }}</span
        >
      </div>
      <div class="mt-10">
        <button class="bg-gray-100 hover:bg-gray-200 text-4 font-700 py-2 px-4">resume!</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

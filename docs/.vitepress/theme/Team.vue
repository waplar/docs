<template>
  <VPTeamMembers :members="theme.team"/>
</template>

<script setup>
import {VPTeamMembers} from 'vitepress/theme'
import {useData} from 'vitepress'

const {theme} = useData()
</script>

<style scoped>

</style>
<!--
  PageSEO Component
  Manages dynamic SEO meta tags for individual pages
-->
<script setup>
import { useSEO } from '../composables/useSEO.js'
import { watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  keywords: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: '/src/assets/banner.jpg'
  },
  url: {
    type: String,
    default: ''
  },
  structuredData: {
    type: Object,
    default: null
  }
})

const { updateSEO, injectStructuredData } = useSEO()

// Update SEO when props change
watch(() => props, (newProps) => {
  updateSEO({
    title: newProps.title,
    description: newProps.description,
    keywords: newProps.keywords,
    image: newProps.image,
    url: newProps.url
  })
}, { immediate: true, deep: true })

// Inject structured data if provided
watch(() => props.structuredData, (newData) => {
  if (newData) {
    injectStructuredData(newData)
  }
}, { immediate: true })

onMounted(() => {
  // Initial SEO update
  updateSEO({
    title: props.title,
    description: props.description,
    keywords: props.keywords,
    image: props.image,
    url: props.url
  })

  // Inject structured data if provided
  if (props.structuredData) {
    injectStructuredData(props.structuredData)
  }
})
</script>

<template>
  <!-- This component doesn't render anything visible -->
</template>

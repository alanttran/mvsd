<!--
img 
 title 
 description 
 calendar 
 author
-->
<template>
<div class="card" id="prev-22">
    <div class="card-img card-1">
        <img :src="imgSrc" alt="Card Image" class="card-img">
    </div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <div class="hr-wrapper">
      <hr>
    </div>
    <div class="calendar">
      <i class="fa-solid fa-calendar-days fa-xl"></i>
      <p>{{ calendar }}</p>
    </div>
    <div class="author">
      <i class="fa-regular fa-user fa-xl"></i>
      <p>{{ author }}</p>
    </div>
</div>
</template>



<script>
export default {
  name: 'Card',
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    calendar: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
};
</script>
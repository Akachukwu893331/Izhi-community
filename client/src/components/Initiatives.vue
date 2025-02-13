<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import stemIcon from '../assets/education.png';
import outreachIcon from '../assets/community.png';
import skillIcon from '../assets/skill.png';

const initiatives = [
    {
        title: "STEM Education",
        description: "We offer scholarships, workshops, and mentorship to disadvantaged Izhi youth, empowering them with the skills to excel in STEM fields.",
        icon: stemIcon,
    },
    {
        title: "Community Outreach",
        description: "We engage local residents and stakeholders to create sustainable solutions, addressing needs, promoting inclusivity, and fostering positive change for a brighter future.",
        icon: outreachIcon,
    },
    {
        title: "Skill Development",
        description: "We provide Izhi youth with practical skills through vocational training and entrepreneurship support, boosting employment prospects and economic independence.",
        icon: skillIcon,
    }
];

const activeIndex = ref(0);

const setActiveSlide = (index) => {
    activeIndex.value = index;
};
</script>

<template>
    <section class="bg-gray-50 py-16 px-32 hidden sm:block">
        <div class="max-w-7xl mx-auto">
            <h2 class="text-4xl font-bold text-sky-500 mb-8 text-left">Our Initiatives</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="initiative in initiatives" :key="initiative.title" class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:rounded-lg sm:px-10">
                    <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                    <div class="relative z-10 mx-auto max-w-md">
                        <img :src="initiative.icon" alt="icon" class="h-16 w-16 ml-2 mt-2" />
                        <div class="space-y-3 pt-5 text-base leading-7 transition-all duration-300 group-hover:text-white/90">
                            <h2 class="text-sky-700 group-hover:text-white/90">{{ initiative.title }}</h2>
                            <p class="text-sm">{{ initiative.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Mobile Carousel Section -->
    <section class="bg-gray-50 py-16 px-8 sm:hidden">
        <h2 class="text-4xl font-bold text-sky-500 mb-8 text-center">Our Initiatives</h2>
        <swiper @slideChange="setActiveSlide($event.activeIndex)" class="w-full max-w-sm mx-auto mb-10">
            <swiper-slide v-for="(initiative, index) in initiatives" :key="initiative.title">
                <div class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 sm:rounded-lg sm:px-10">
                    <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                    <div class="relative z-10 mx-auto max-w-md">
                        <img :src="initiative.icon" alt="icon" class="h-20 w-20" />
                        <div class="space-y-3 pt-5 text-base leading-7 transition-all duration-300 group-hover:text-white/90">
                            <h2 class="text-sky-700 group-hover:text-white/90">{{ initiative.title }}</h2>
                            <p class="text-sm">{{ initiative.description }}</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <div class="flex justify-center mt-1 space-x-2">
            <span v-for="(initiative, index) in initiatives" :key="index" @click="setActiveSlide(index)" class="h-3 w-3 rounded-full cursor-pointer" :class="activeIndex === index ? 'bg-sky-500' : 'bg-gray-300'"></span>
        </div>
    </section>
</template>
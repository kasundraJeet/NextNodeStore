<script setup>
import { ScrollArea } from '@/components/ui/scroll-area'
import ModeToggle from '@/components/theme/ModeToggle.vue'
</script>

<template>
    <main class="w-full">
        <div class="opacity-0 hidden">
            <ModeToggle />
        </div>
        <ScrollArea class="w-full h-dvh">
            <slot></slot>
        </ScrollArea>
    </main>
</template>
<script setup>
import { Button } from '@/components/ui/button'
</script>

<template>
    <div class="flex items-center justify-between w-full">
        <p class="text-sm text-gray-400">
            0 of 5 row(s) selected.
        </p>
        <div class="space-x-2">
            <Button variant="outline">
                Previous
            </Button>
            <Button variant="outline">
                Next
            </Button>
        </div>
    </div>
</template>

<style scoped>
    button{
        @apply min-w-28 max-w-28
    }
</style>
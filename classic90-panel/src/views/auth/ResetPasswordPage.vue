<script setup>
import { ScrollArea } from '@/components/ui/scroll-area'
import { Logo } from '@/components/custom'
import AuthLayoutWrapper from '@/components/layout/AuthLayoutWrapper.vue';
import { Eye , Loader } from 'lucide-vue-next';
import { useForm } from 'vee-validate'
import { Button } from '@/components/ui/button'
import * as yup from 'yup';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ref } from 'vue'

const formSubmitted = ref(false)

const formSchema = yup.object({
    number: yup.string()
        .required('Phone number is required')
        .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format')
});

const form = useForm({
    validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
    console.log('Form submitted!', values)
})
</script>


<template>
    <AuthLayoutWrapper>
        <ScrollArea class="w-full h-auto">
            <div class="flex flex-col w-full h-dvh items-center justify-between gap-12 p-2">
                    <div class="p-2">
                        <Logo />
                    </div>
                    <div class="w-full max-w-md mx-auto space-y-8 border bg-gray-50 border-solid border-border rounded-lg px-5 py-6">
                        <div class="space-y-2">
                            <h1 class="font-medium text-2xl capitalize">Create a New Password</h1>
                            <p class="text-sm">Choose a strong password to keep your account secure.</p>
                        </div>
                        <form @submit="onSubmit" class="space-y-6">
                            <div class="w-full space-y-2.5">
                                <FormField v-slot="{ componentField }" name="password">
                                        <FormItem>
                                            <FormLabel>New Password</FormLabel>
                                            <FormControl>
                                                <div
                                                    class="flex items-stretch border bg-background border-border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-white">
                                                    <div class="w-full">
                                                        <Input type="password" placeholder="hexhew-tikmet-3fifQo"
                                                            v-bind="componentField"
                                                            class="!border-none !outline-none !ring-0 focus:!rounded-none" />
                                                    </div>
                                                    <Button variant="ghost"
                                                        class="flex items-center justify-center max-w-12 w-full">
                                                        <Eye size="28" />
                                                    </Button>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    </FormField>
                                    <FormField v-slot="{ componentField }" name="password">
                                        <FormItem>
                                            <FormLabel>Confirm Password</FormLabel>
                                            <FormControl>
                                                <div
                                                    class="flex items-stretch border bg-background border-border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-white">
                                                    <div class="w-full">
                                                        <Input type="password" placeholder="hexhew-tikmet-3fifQo"
                                                            v-bind="componentField"
                                                            class="!border-none !outline-none !ring-0 focus:!rounded-none" />
                                                    </div>
                                                    <Button variant="ghost"
                                                        class="flex items-center justify-center max-w-12 w-full">
                                                        <Eye size="28" />
                                                    </Button>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    </FormField>
                            </div>
                            <Button type="submit" class="w-full" :disabled="formSubmitted">
                                <Loader class="mr-2 animate-spin" size="20" v-if="formSubmitted" />
                                Save Password
                            </Button>
                        </form>
                    </div>
                    <div></div>
                </div>
        </ScrollArea>
    </AuthLayoutWrapper>
</template>
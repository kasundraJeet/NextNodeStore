<script setup>
import { ScrollArea } from '@/components/ui/scroll-area'
import { Logo } from '@/components/custom'
import AuthLayoutWrapper from '@/components/layout/AuthLayoutWrapper.vue';
import { Eye, Loader } from 'lucide-vue-next';
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
    email: yup.string().required().email('Invalid email address'),
    password: yup.string().required().min(6, 'Password must be at least 6 characters long'),
})

const form = useForm({
    validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
    console.log('Form submitted!', values)
})
</script>


<template>
    <AuthLayoutWrapper>
        <div class="grid grid-cols-2 w-full h-auto">
            <div class="w-full h-full bg-black">

            </div>
            <ScrollArea class="w-full h-dvh ">
                <div class="flex flex-col w-full h-dvh items-center justify-between gap-12 p-2">
                    <div class="p-2">
                        <Logo />
                    </div>
                    <div class="w-full max-w-md mx-auto space-y-8">
                        <div class="grid grid-cols-2 gap-4">
                            <Button variant="outline">
                                Google
                            </Button>
                            <Button variant="outline">
                                FaceBook
                            </Button>
                        </div>
                        <form @submit="onSubmit" class="space-y-8">
                            <div class="w-full space-y-4">
                                <FormField v-slot="{ componentField }" name="email">
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="ex@xyz.com" v-bind="componentField" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>
                                <div class="space-y-1.5">
                                    <FormField v-slot="{ componentField }" name="password">
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <div
                                                    class="flex items-stretch border border-border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-white">
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
                                    <div class="text-end w-full">
                                        <RouterLink to="/" class="text-sm underline block w-full">Forget password?</RouterLink>
                                    </div>
                                </div>
                            </div>
                            <Button type="submit" class="w-full" :disabled="formSubmitted">
                                <Loader class="mr-2 animate-spin" size="20" v-if="formSubmitted" />
                                Login
                            </Button>
                        </form>
                    </div>
                    <div class="p-2">
                        <p class="text-sm">Don't have an account? <RouterLink to="/" class="underline">Sign up here</RouterLink>.</p>
                    </div>
                </div>
            </ScrollArea>
        </div>
    </AuthLayoutWrapper>
</template>
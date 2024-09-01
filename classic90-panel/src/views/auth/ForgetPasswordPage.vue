<script setup>
import { ScrollArea } from '@/components/ui/scroll-area'
import { Logo } from '@/components/custom'
import AuthLayoutWrapper from '@/components/layout/AuthLayoutWrapper.vue';
import { Loader } from 'lucide-vue-next';
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
                    <div class="w-full max-w-md mx-auto space-y-8 border bg-gray-50 dark:bg-secondary border-solid border-border rounded-lg px-5 py-6">
                        <div class="space-y-2">
                            <h1 class="font-medium text-2xl capitalize">Reset Your Password</h1>
                            <p class="text-sm">Enter your phone number to receive a verification code.</p>
                        </div>
                        <form @submit="onSubmit" class="space-y-6">
                            <div class="w-full space-y-4">
                                <FormField v-slot="{ componentField }" name="number">
                                    <FormItem>
                                        <FormLabel>Phone No.</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="6351829893" v-bind="componentField" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>
                            </div>
                            <Button type="submit" class="w-full" :disabled="formSubmitted">
                                <Loader class="mr-2 animate-spin" size="20" v-if="formSubmitted" />
                                Send OTP
                            </Button>
                        </form>
                    </div>
                    <div></div>
                </div>
        </ScrollArea>
    </AuthLayoutWrapper>
</template>
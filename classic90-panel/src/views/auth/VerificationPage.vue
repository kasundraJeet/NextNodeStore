<script setup>
import { ScrollArea } from '@/components/ui/scroll-area'
import { Logo } from '@/components/custom'
import AuthLayoutWrapper from '@/components/layout/AuthLayoutWrapper.vue';
import { Loader } from 'lucide-vue-next';
import { useForm } from 'vee-validate'
import { Button } from '@/components/ui/button';
import {
    PinInput,
    PinInputGroup,
    PinInputInput,
    PinInputSeparator,
} from '@/components/ui/pin-input'
import * as yup from 'yup';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { ref } from 'vue'

const formSubmitted = ref(false)

const formSchema = yup.object({
    otp: yup.string().length(6, 'OTP must be 6 digits').required('OTP is required')
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
                <div
                    class="w-full max-w-md mx-auto space-y-8 border bg-gray-50 dark:bg-secondary border-solid border-border rounded-lg px-5 py-6">
                    <div class="space-y-2">
                        <h1 class="font-medium text-2xl capitalize">Verify Your Code</h1>
                        <p class="text-sm">Please enter the verification code sent to your email to proceed.</p>
                    </div>
                    <form @submit="onSubmit" class="space-y-6">
                        <div class="w-full space-y-4">
                            <FormField v-slot="{ componentField }" name="otp">
                                <FormItem>
                                    <FormLabel>OTP</FormLabel>
                                    <FormControl>
                                        <PinInput v-bind="componentField" :name="componentField.name"  id="pin-input" placeholder="○" @complete="handleComplete">
                                            <PinInputGroup class="gap-1">
                                                <template v-for="(id, index) in 6" :key="id">
                                                    <PinInputInput class="rounded-md border" :index="index" />
                                                    <template v-if="index !== 5">
                                                        <PinInputSeparator />
                                                    </template>
                                                </template>
                                            </PinInputGroup>
                                        </PinInput>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            </FormField>
                        </div>
                        <Button type="submit" class="w-full" :disabled="formSubmitted">
                            <Loader class="mr-2 animate-spin" size="20" v-if="formSubmitted" />
                            Verification Pin
                        </Button>
                    </form>
                </div>
                <div></div>
            </div>
        </ScrollArea>
    </AuthLayoutWrapper>
</template>
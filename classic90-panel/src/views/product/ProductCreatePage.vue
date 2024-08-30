<script setup>
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { Input } from '@/components/ui/input'
import LayoutWrapper from '@/components/layout/LayoutWrapper.vue'
import { Textarea } from '@/components/ui/textarea'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'

// Define the validation schema using yup
const formSchema = yup.object({
  productName: yup.string()
    .min(2, 'Product name is required')
    .max(100, 'Product name must be less than 100 characters')
    .required('Product name is required'),
  productDescription: yup.string()
    .min(10, 'Description must be at least 10 characters long')
    .max(500, 'Description must be less than 500 characters')
    .required('Description is required')
})

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})
</script>


<template>
  <LayoutWrapper>
    <form @submit="onSubmit" class="max-w-7xl mx-auto">
      <div class="w-full grid grid-cols-3 gap-4">
        <div class="col-span-2">
          <div class="bg-background border border-solid border-border p-4 rounded-lg space-y-5">
            <div class="space-y-0.5">
              <h4 class="text-base font-medium">Product Details</h4>
              <p class="text-sm opacity-80">Provide detailed information about the product</p>
            </div>
            <div class="space-y-3">
              <FormField v-slot="{ componentField }" name="productName">
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter product name" v-bind="componentField" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
              <FormField v-slot="{ componentField }" name="productDescription">
                <FormItem>
                  <FormLabel>Product Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter product description" v-bind="componentField" class="resize-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>
          </div>
        </div>
        <div class="w-full">
          
        </div>
      </div>
    </form>
  </LayoutWrapper>
</template>

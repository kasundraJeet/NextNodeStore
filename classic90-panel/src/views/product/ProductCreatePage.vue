<script setup>
import { useForm } from 'vee-validate'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DollarSign , Box  , Upload } from 'lucide-vue-next';
import * as yup from 'yup'
import { Input } from '@/components/ui/input'
import LayoutWrapper from '@/components/layout/LayoutWrapper.vue'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Textarea } from '@/components/ui/textarea'
import colorJson from '@/lib/colorJson'
import sizes from '@/lib/sizeJson'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'

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

function handleProductImage(e){
  console.log(e)
}

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})
</script>


<template>
  <LayoutWrapper>
    <form @submit="onSubmit" class="max-w-7xl mx-auto space-y-6">
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
        <div class="w-full h-full">
          <div class="bg-background h-full border border-solid border-border p-4 rounded-lg space-y-5">
            <div class="space-y-0.5">
              <h4 class="text-base font-medium">Product Details</h4>
              <p class="text-sm opacity-80">Provide detailed information about the product</p>
            </div>
            <ToggleGroup type="multiple" class="flex-wrap justify-start" variant="outline">
              <ToggleGroupItem :value="item.colorHexCode" aria-label="Toggle bold" v-for="(item, index) in colorJson"
                :key="index">
                <div class="min-w-4 min-h-4 max-w-4 max-h-4 mr-2.5 rounded-full"
                  :style="{ 'background-color': `${item.colorHexCode}` }"></div>
                <p class="text-sm capitalize">{{ item.color }}</p>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </div>
      <div>
        <Tabs default-value="account" class="w-full">
          <TabsList>
            <TabsTrigger value="account">
              Account
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div class="bg-background w-full h-full border border-solid border-border p-4 rounded-lg space-y-5">
              <div>
                    <ToggleGroup type="single" class="flex-wrap justify-start" variant="outline">
                      <ToggleGroupItem :value="item.sizeLabel" aria-label="Toggle bold" v-for="(item, index) in sizes"
                        :key="index">
                        <p class="text-sm capitalize">{{ item.description }} ({{ item.sizeLabel }})</p>
                      </ToggleGroupItem>
                    </ToggleGroup>
             </div>
              <div class="grid grid-cols-3 w-full gap-4">
                <div class="w-full">
                    <div class="w-full border border-dashed rounded-lg relative flex items-center justify-center min-h-52">
                        <div class=" space-y-1">
                          <Upload class="mx-auto w-6 h-6 text-secondary" />
                          <p class="text-secondary">Upload File</p>
                        </div>
                        <Input type="file"  @change="handleProductImage" class=" absolute inset-0 w-full h-full opacity-0" multiple />
                    </div>
                </div>
                <div class="col-span-2 space-y-4">
                  <div>
                    <div class="w-full grid grid-cols-2 gap-2.5">
                      <FormField v-slot="{ componentField }" name="productDescription">
                        <FormItem>
                          <FormLabel>
                            <p class="underline inline">S</p> Size Origin Price
                          </FormLabel>
                          <FormControl>
                            <div
                              class="border border-solid border-border w-full flex items-center rounded-lg focus-within:ring focus-within:ring-ring">
                              <div class="px-2">
                                <DollarSign size="18" />
                              </div>
                              <Input placeholder="Origin Price" v-bind="componentField" type="number"
                                class="border-0 outline-none pl-0 focus:!outline-none ring-0 focus:!ring-0  focus:!ring-offset-0" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </FormField>
                      <FormField v-slot="{ componentField }" name="productDescription">
                        <FormItem>
                          <FormLabel>
                            <p class="underline inline">S</p> Size Selling Price
                          </FormLabel>
                          <FormControl>
                            <div
                              class="border border-solid border-border w-full flex items-center rounded-lg focus-within:ring focus-within:ring-ring">
                              <div class="px-2">
                                <DollarSign size="18" />
                              </div>
                              <Input placeholder="Selling Price" v-bind="componentField" type="number"
                                class="border-0 outline-none pl-0 focus:!outline-none ring-0 focus:!ring-0  focus:!ring-offset-0" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </FormField>
                      <FormField v-slot="{ componentField }" name="productDescription">
                        <FormItem>
                          <FormLabel>
                            <p class="underline inline">S</p> Size Stock
                          </FormLabel>
                          <FormControl>
                            <div
                              class="border border-solid border-border w-full flex items-center rounded-lg focus-within:ring focus-within:ring-ring">
                              <div class="px-2">
                                <Box size="18" />
                              </div>
                              <Input placeholder="Stock" v-bind="componentField" type="number"
                                class="border-0 outline-none pl-0 focus:!outline-none ring-0 focus:!ring-0  focus:!ring-offset-0" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </FormField>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </form>
  </LayoutWrapper>
</template>

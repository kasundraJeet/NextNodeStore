<script setup>
import { ref } from 'vue'
import LayoutWrapper from '@/components/layout/LayoutWrapper.vue';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription
} from '@/components/ui/form'
import { Pagination } from '@/components/custom'
import { ChevronDown, EllipsisVertical, Plus , Info } from 'lucide-vue-next'
import sizes from '@/lib/sizeJson'
import * as yup from 'yup';
import { useForm } from 'vee-validate'
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'


const sizeModal = ref(true)

const formSchema = yup.object().shape({
  sizeLabel: yup.string().min(2, 'Label must be at least 2 characters').max(16, 'Label must be at most 16 characters').required('Label is required'),
  description: yup.string().required('Description is required'),
  measurements: yup.object().shape({
    bust: yup.string().required('Bust measurement is required'),
    waist: yup.string().required('Waist measurement is required'),
    hips: yup.string().required('Hips measurement is required'),
    inseam: yup.string().required('Inseam measurement is required'),
  })
});

const form = useForm({
    validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
    console.log('Form submitted!', values)
})
</script>

<template>
    <LayoutWrapper>
        <div class="list-container bg-background rounded-md">
            <div class="flex items-center justify-between w-full py-2.5 px-3 border-b border-solid border-border">
                <Input type="text" placeholder="Filter size..." class="max-w-sm" />
                <div class="flex items-center gap-2">
                    <Button variant="outline" @click="addNewColor">
                        <Plus size="16" class="mr-2" />
                        Add New Size
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger as-child>
                            <Button variant="outline" class="flex items-center gap-2">
                                Columns
                                <ChevronDown size="14" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent class="w-56" align="end">
                            <DropdownMenuLabel>Columns Settings</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuCheckboxItem v-model:checked="showStatusBar" disabled>
                                Colour Name
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem v-model:checked="showActivityBar">
                                Colour Popularity
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem v-model:checked="showPanel">
                                Colour Total Item
                            </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Label</TableHead>
                            <TableHead>Measurements</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead class="text-end">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow v-for="colour in sizes" :key="colour.id">
                            <TableCell class="flex items-center gap-2">
                                {{ colour.sizeLabel }}
                            </TableCell>
                            <TableCell>
                                <vue-json-pretty :data="colour.measurements" />
                            </TableCell>
                            <TableCell>{{ colour.description }}</TableCell>
                            <TableCell class="text-end">
                                <DropdownMenu>
                                    <DropdownMenuTrigger as-child>
                                        <Button variant="ghost" size="icon">
                                            <EllipsisVertical class="w-4 h-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent class="w-44" align="end">
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Edit</DropdownMenuItem>
                                        <DropdownMenuItem>Delete</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div class="py-2.5 px-3 border-t border-solid border-border">
                    <Pagination />
                </div>
            </div>
        </div>

        <Dialog v-model:open="sizeModal" @open-change="closeDialog">
            <DialogContent class="sm:max-w-lg">
                <form @submit="onSubmit" class="space-y-4">
                    <DialogHeader>
                        <DialogTitle>Add Size</DialogTitle>
                        <DialogDescription>
                            Make changes to your Size here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div class="w-full space-y-4">
                        <FormField v-slot="{ componentField }" name="sizeLabel">
                            <FormItem>
                                <FormLabel>Label</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="@ex.L" v-bind="componentField" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>
                        <FormField v-slot="{ componentField }" name="description">
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="@ex.Large" v-bind="componentField" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>
                        <FormField v-slot="{ componentField }" name="measurements.bust">
                            <FormItem>
                                <FormLabel>Bust</FormLabel>
                                <FormControl>
                                    <div class="flex items-stretch gap-3">
                                        <Input placeholder="@ex.Large" type="number" v-bind="componentField" />
                                        <Button variant="outline" size="icon" type="button" class="min-w-10 max-w-10">
                                            <Plus size="16"  />
                                        </Button>
                                    </div>
                                </FormControl>
                                <FormDescription><Info class="mr-1.5 w-4 h-4 inline" />In Inches</FormDescription>
                                <FormMessage />
                            </FormItem>
                        </FormField>
                    </div>
                    <DialogFooter>
                        <Button type="submit">
                            Save changes
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    </LayoutWrapper>
</template>


<style>
.vjs-tree-node .vjs-indent-unit.has-line {
    border-left: 0 !important;
}

.vjs-tree-node.is-highlight,
.vjs-tree-node:hover {
    background-color: transparent;
}
</style>
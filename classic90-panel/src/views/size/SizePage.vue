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
} from '@/components/ui/form'
import { Pagination } from '@/components/custom'
import { ChevronDown, EllipsisVertical, Plus, Minus } from 'lucide-vue-next'
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


const formSchema = yup.object().shape({
    sizeLabel: yup.string()
        .min(2, 'Label must be at least 2 characters')
        .max(16, 'Label must be at most 16 characters')
        .required('Label is required'),
    description: yup.string()
        .required('Description is required'),
    measurements: yup.object().shape({
        bust: yup.string()
            .matches(/^\d+(\.\d+)?(-\d+(\.\d+)?)?$/, 'Bust measurement must be a numeric value, decimal, or a range (e.g., 32, 32.5, 32-34, 32-34.5)')
            .required('Bust measurement is required'),
        waist: yup.string()
            .matches(/^\d+(\.\d+)?(-\d+(\.\d+)?)?$/, 'Waist measurement must be a numeric value, decimal, or a range (e.g., 24, 24.5, 24-26, 24-26.5)')
            .required('Waist measurement is required'),
        hips: yup.string()
            .matches(/^\d+(\.\d+)?(-\d+(\.\d+)?)?$/, 'Hips measurement must be a numeric value, decimal, or a range (e.g., 34, 34.5, 34-36, 34-36.5)')
            .required('Hips measurement is required'),
        inseam: yup.string()
            .matches(/^\d+(\.\d+)?(-\d+(\.\d+)?)?$/, 'Inseam measurement must be a numeric value, decimal, or a range (e.g., 30, 30.5, 30-32, 30-32.5)')
            .required('Inseam measurement is required'),
    })
});

const { handleSubmit, resetForm } = useForm({
    validationSchema: formSchema,
});

const onSubmit = handleSubmit((values) => {
    console.log('Form submitted!', values);
    resetForm();
});

const sizeModal = ref(false);
const closeDialog = () => {
    sizeModal.value = false;
};
const addNewSize = () => {
    sizeModal.value = true;
};
</script>

<template>
    <LayoutWrapper>
        <div class="list-container bg-background rounded-md">
            <div class="flex items-center justify-between w-full py-2.5 px-3 border-b border-solid border-border">
                <Input type="text" placeholder="Filter size..." class="max-w-sm" />
                <div class="flex items-center gap-2">
                    <Button variant="outline" @click="addNewSize">
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
                            <TableCell class="flex items-center gap-2">{{ colour.sizeLabel }}</TableCell>
                            <TableCell><vue-json-pretty :data="colour.measurements" /></TableCell>
                            <TableCell>{{ colour.description }}</TableCell>
                            <TableCell class="text-end">
                                <DropdownMenu>
                                    <DropdownMenuTrigger as-child>
                                        <Button variant="ghost" size="icon">
                                            <EllipsisVertical class="w-4 h-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent class="w-44" align="end">
                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
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
                        <FormField name="sizeLabel" v-slot="{ componentField }">
                            <FormItem>
                                <FormLabel>Label</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Size Label" v-bind="componentField" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>
                        <FormField name="description" v-slot="{ componentField }">
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Description" v-bind="componentField" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>
                        <div v-for="(measurementType, index) in ['bust', 'waist', 'hips', 'inseam']" :key="index">
                            <FormField v-slot="{ componentField }" :name="`measurements.${measurementType}`">
                                <FormItem>
                                    <FormLabel>{{ measurementType.charAt(0).toUpperCase() + measurementType.slice(1) }}
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Measurement" type="text" v-bind="componentField" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            </FormField>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
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
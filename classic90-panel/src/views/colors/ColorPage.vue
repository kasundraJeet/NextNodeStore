<script setup>
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import LayoutWrapper from '@/components/layout/LayoutWrapper.vue'
import { Input } from '@/components/ui/input'
import { ref } from 'vue'
import { Pagination } from '@/components/custom'
import { ChevronDown  , EllipsisVertical} from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const showStatusBar = ref(true)
const showActivityBar = ref(false)
const showPanel = ref(false)


const colorList = ref([
  {
    id: 1,
    coloursName: "black",
    colour: "#000",
    colour_popularity: "56%",
    colour_total_item: "12",
  },
  {
    id: 2,
    coloursName: "royal blue",
    colour: "#4169E1",
    colour_popularity: "78%",
    colour_total_item: "34",
  },
  {
    id: 3,
    coloursName: "emerald green",
    colour: "#50C878",
    colour_popularity: "62%",
    colour_total_item: "21",
  },
  {
    id: 4,
    coloursName: "crimson red",
    colour: "#DC143C",
    colour_popularity: "47%",
    colour_total_item: "15",
  },
  {
    id: 5,
    coloursName: "sunset orange",
    colour: "#FF4500",
    colour_popularity: "59%",
    colour_total_item: "29",
  },
  {
    id: 6,
    coloursName: "violet purple",
    colour: "#8A2BE2",
    colour_popularity: "66%",
    colour_total_item: "18",
  },
  {
    id: 7,
    coloursName: "deep pink",
    colour: "#FF1493",
    colour_popularity: "74%",
    colour_total_item: "27",
  },
  {
    id: 8,
    coloursName: "golden yellow",
    colour: "#FFD700",
    colour_popularity: "82%",
    colour_total_item: "40",
  },
  {
    id: 9,
    coloursName: "teal",
    colour: "#008080",
    colour_popularity: "53%",
    colour_total_item: "22",
  },
  {
    id: 10,
    coloursName: "charcoal grey",
    colour: "#36454F",
    colour_popularity: "61%",
    colour_total_item: "16",
  },
  {
    id: 11,
    coloursName: "magenta",
    colour: "#FF00FF",
    colour_popularity: "67%",
    colour_total_item: "30",
  },
  {
    id: 12,
    coloursName: "turquoise",
    colour: "#40E0D0",
    colour_popularity: "55%",
    colour_total_item: "25",
  },
  {
    id: 13,
    coloursName: "lavender",
    colour: "#E6E6FA",
    colour_popularity: "69%",
    colour_total_item: "20",
  },
  {
    id: 14,
    coloursName: "salmon pink",
    colour: "#FA8072",
    colour_popularity: "52%",
    colour_total_item: "17",
  },
  {
    id: 15,
    coloursName: "forest green",
    colour: "#228B22",
    colour_popularity: "64%",
    colour_total_item: "23",
  }
])
</script>

<template>
  <LayoutWrapper>
    <div class="list-container bg-background rounded-md">
      <div class="flex items-center justify-between w-full py-2.5 px-3 border-b border-solid border-border">
        <Input type="text" placeholder="Filter colours..." class="max-w-sm" />
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
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Colour</TableHead>
              <TableHead>Popularity</TableHead>
              <TableHead>Coonected Item</TableHead>
              <TableHead class="text-end">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="colour in colorList" :key="colour.id">
              <TableCell>
                {{ colour.coloursName }}
              </TableCell>
              <TableCell>{{ colour.colour_popularity }}</TableCell>
              <TableCell>{{ colour.colour_total_item }}</TableCell>
              <TableCell class="text-end">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
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
  </LayoutWrapper>
</template>
<template>
    <div class="container mx-auto p-6 bg-white shadow-lg rounded-lg m-5 w-[92%]">

        <div class=" mt-4 md:mt-0">
            <h1 class="font-bold text-2xl">INVOICE</h1>
            <div class="flex items-center">
                <label for="invoiceNumber" class="mr-2">#</label>
                <input id="invoiceNumber" type="text" class="border p-2 rounded" v-model="invoiceNumber" readonly>
            </div>
        </div>


        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3.5">
            <div>
                <label for="">From</label>
                <input type="text" class="border p-2 rounded w-full" placeholder="Who is this from?" v-model="fromName">

                <section class="grid grid-rows-1 md:grid-cols-2 mt-2.5 gap-4">
                    <div class="flex flex-col gap-2">
                        <label for="billTo">Bill to</label>
                        <input id="billTo" type="text" class="border p-2 rounded" v-model="billTo">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="shipTo">Ship to</label>
                        <input id="shipTo" type="text" class="border p-2 rounded" v-model="shipTo">
                    </div>
                </section>
            </div>

            <div class="flex flex-col gap-4 max-w-md mx-auto p-4">
                <div class="flex flex-col md:flex-row md:items-center md:justify-end md:gap-4 w-full">
                    <label class="mb-1 md:mb-0 md:w-24 text-left md:text-right" for="date">Date</label>
                    <input id="date" type="date" class="border rounded p-2 w-full md:flex-1" v-model="date" />
                </div>
                <div class="flex flex-col md:flex-row md:items-center md:justify-end md:gap-4 w-full">
                    <label class="mb-1 md:mb-0 md:w-24 text-left md:text-right" for="dueDate">Due Date</label>
                    <input id="dueDate" type="date" class="border rounded p-2 w-full md:flex-1" v-model="dueDate" />
                </div>
                <div class="flex flex-col md:flex-row md:items-center md:justify-end md:gap-4 w-full">
                    <label class="mb-1 md:mb-0 md:w-24 text-left md:text-right" for="gstNum">GST no.</label>
                    <input id="gstNum" type="text" class="border rounded p-2 w-full md:flex-1" v-model="gstNum" />
                </div>
            </div>
        </div>
        <FormMiddle />

        <div class="flex justify-end mt-6 space-x-4">
            <button @click="saveInvoice" class="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Save
                Invoice</button>
            <button class="border px-6 py-2 rounded hover:bg-gray-200">Cancel</button>
        </div>
    </div>
</template>

<script>
import FormMiddle from './FormMiddle.vue';

export default {
    name: 'InvoiceForm',
    data() {
        return {
            invoiceNumber: 1,
            fromName: '',
            date: '',
            dueDate: '',
            billTo: '',
            shipTo: '',
            gstNum: '',
        }
    },
    methods: {
        saveInvoice() {
            alert("Invoice Saved Successfully")
        }
    },
    components: {
        FormMiddle,
    }
}
</script>

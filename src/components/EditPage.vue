<template>
    <div class="container mx-auto p-6 bg-white shadow-lg rounded-lg m-5 max-w-4xl">
        <div class="mt-4 md:mt-0">
            <h1 class="font-bold text-2xl">Edit Invoice #{{ invoiceNumber }}</h1>
            <div class="flex items-center mt-2"> <label class="mr-2">Invoice Number:</label> <input type="text"
                    class="border p-2 rounded w-24" :value="invoiceNumber" readonly /> </div>
            <div class="flex items-center mt-2"> <label class="mr-2">Amount:</label> <input type="text"
                    class="border p-2 rounded w-40" :value="amount" readonly /> </div>
        </div>


        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
            <div>
                <label for="fromName">From</label>
                <input id="fromName" type="text" class="border p-2 rounded w-full" v-model="fromName"
                    placeholder="Who is this from?" />

                <section class="grid grid-rows-1 md:grid-cols-2 mt-2.5 gap-4">
                    <div class="flex flex-col gap-2">
                        <label for="billTo">Bill to</label>
                        <input id="billTo" type="text" class="border p-2 rounded" v-model="billTo" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="shipTo">Ship to</label>
                        <input id="shipTo" type="text" class="border p-2 rounded" v-model="shipTo" />
                    </div>
                </section>
            </div>

            <div class="flex flex-col gap-4 max-w-md mx-auto p-4">
                <div class="flex flex-col md:flex-row md:items-center md:justify-end md:gap-4">
                    <label class="mb-1 md:mb-0 md:w-24 text-left md:text-right" for="date">Date</label>
                    <input id="date" type="date" class="border rounded p-2 w-full md:flex-1" v-model="date" />
                </div>
                <div class="flex flex-col md:flex-row md:items-center md:gap-4">
                    <label class="mb-1 md:mb-0 md:w-24 text-left md:text-right" for="dueDate">Due Date</label>
                    <input id="dueDate" type="date" class="border rounded p-2 w-full md:flex-1" v-model="dueDate" />
                </div>
                <div class="flex flex-col md:flex-row md:items-center md:gap-4">
                    <label class="mb-1 md:mb-0 md:w-24 text-left md:text-right" for="gstNum">GST no.</label>
                    <input id="gstNum" type="text" class="border rounded p-2 w-full md:flex-1" v-model="gstNum" />
                </div>
            </div>
        </div>


        <div class="flex justify-end mt-6 space-x-4">
            <button @click="saveInvoice" class="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                Save Changes
            </button>
            <button @click="cancelEdit" class="border px-6 py-2 rounded hover:bg-gray-200">
                Cancel
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EditPage',
    data() {
        return {
            invoiceNumber: "",
            amount: "",
            fromName: "Acme Corp",
            billTo: "Beta LLC",
            shipTo: "Beta LLC Shipping",
            date: "2024-06-01",
            dueDate: "2024-06-15",
            gstNum: "GST123456"
        }
    },
    created() {
        this.invoiceNumber = this.$route.params.invoiceNumber || "NA";
        this.amount = this.$route.params.amount || "NA"
    },

    methods: {
        saveInvoice() {
            alert(`Invoice #${this.invoiceNumber} updated!`);
            this.$router.push("/history");
        },

        cancelEdit() {
            this.$router.push("/history");
        }
    }
}
</script>
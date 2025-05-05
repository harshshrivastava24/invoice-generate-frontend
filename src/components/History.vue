<template>
    <div class="container mx-auto p-6 bg-white shadow-lg rounded-lg m-5">
        <h1 class="font-bold text-2xl mb-6">Invoice History</h1>
        <div class="flex flex-wrap -mx-3">
            <div v-for="invoice in invoices" :key="invoice.invoiceNumber" class="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6">
                <div
                    class="border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg transition duration-300 cursor-pointer h-full flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-center mb-2">
                            <h2 class="font-semibold text-lg text-gray-900">Invoice #{{ invoice.invoiceNumber }}</h2>
                            <span class="text-sm font-medium px-2 py-1 rounded-full"
                                :class="invoice.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'">
                                {{ invoice.status }}
                            </span>
                        </div>
                        <p class="text-gray-600 mb-1"><strong>Date:</strong> {{ invoice.date }}</p>
                        <p class="text-gray-600 mb-1"><strong>Total:</strong> {{ invoice.currencySymbol }}{{
                            invoice.total.toFixed(2) }}</p>
                        <p class="text-gray-600 truncate"><strong>Bill To:</strong> {{ invoice.billTo }}</p>
                    </div>
                    <div class="mt-4">
                        <router-link
                            :to="{ name: 'EditPage', params: { invoiceNumber: invoice.invoiceNumber, amount: invoice.total } }"
                            class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Edit</router-link>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'History',
    data() {
        return {
            invoices: [
                { invoiceNumber: 101, date: '2024-04-10', total: 450.5, currencySymbol: '$', billTo: 'Acme Corp', status: 'Paid' },
                { invoiceNumber: 102, date: '2024-04-12', total: 1200, currencySymbol: '€', billTo: 'Beta LLC', status: 'Pending' },
                { invoiceNumber: 103, date: '2024-04-15', total: 789.99, currencySymbol: '£', billTo: 'Gamma Inc', status: 'Paid' },
                { invoiceNumber: 104, date: '2024-04-18', total: 350, currencySymbol: '₹', billTo: 'Delta Pvt Ltd', status: 'Pending' },
                { invoiceNumber: 105, date: '2024-04-20', total: 650, currencySymbol: '$', billTo: 'Omega LLC', status: 'Paid' },
                // More sample invoices
            ]
        };
    }
};
</script>